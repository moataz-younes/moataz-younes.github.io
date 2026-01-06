echo Updating package.json...

powershell -Command "(
  Get-Content package.json |
  ForEach-Object {
    if ($_ -match '^\s*\"scripts\"\s*:\s*{') {
      $_
      '    \"predeploy\": \"npm run build\",'
      '    \"deploy\": \"gh-pages -d dist/public\",'
    } elseif ($_ -match '^{') {
      $_
      '  \"homepage\": \"https://moataz-younes.github.io/Cybersecurity-Mentor-Consultant\",'
    } else {
      $_
    }
  }
) | Set-Content package.json"

echo Installing gh-pages...
npm install gh-pages --save-dev

echo Building the project...
npm run build

echo Deploying to GitHub Pages...
npm run deploy
