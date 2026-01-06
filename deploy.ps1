# سكريبت رفع المشروع على GitHub Pages
# PowerShell Script for GitHub Pages Deployment

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  رفع المشروع على GitHub Pages" -ForegroundColor Cyan
Write-Host "  GitHub Pages Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# التحقق من وجود Git
Write-Host "[1/6] التحقق من Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✓ Git موجود: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git غير مثبت. يرجى تثبيت Git أولاً." -ForegroundColor Red
    exit 1
}

# التحقق من وجود Node.js
Write-Host "[2/6] التحقق من Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js موجود: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js غير مثبت. يرجى تثبيت Node.js أولاً." -ForegroundColor Red
    exit 1
}

# التحقق من تثبيت Dependencies
Write-Host "[3/6] التحقق من Dependencies..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "تثبيت Dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ فشل تثبيت Dependencies" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✓ Dependencies مثبتة" -ForegroundColor Green
}

# بناء المشروع
Write-Host "[4/6] بناء المشروع..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ فشل بناء المشروع" -ForegroundColor Red
    exit 1
}
Write-Host "✓ تم بناء المشروع بنجاح" -ForegroundColor Green

# التحقق من وجود remote repository
Write-Host "[5/6] التحقق من Git Remote..." -ForegroundColor Yellow
$remote = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠ Git Remote غير موجود" -ForegroundColor Yellow
    Write-Host "يرجى إضافة remote repository:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/YOUR_USERNAME/Cybersecurity-Mentor-Consultant.git" -ForegroundColor Cyan
    Write-Host ""
    $continue = Read-Host "هل تريد المتابعة بدون remote? (y/n)"
    if ($continue -ne "y") {
        exit 1
    }
} else {
    Write-Host "✓ Git Remote موجود: $remote" -ForegroundColor Green
}

# رفع المشروع على GitHub Pages
Write-Host "[6/6] رفع المشروع على GitHub Pages..." -ForegroundColor Yellow
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ فشل رفع المشروع" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✓ تم رفع المشروع بنجاح!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "الخطوات التالية:" -ForegroundColor Cyan
Write-Host "1. اذهب إلى repository على GitHub" -ForegroundColor White
Write-Host "2. Settings > Pages" -ForegroundColor White
Write-Host "3. اختر branch: gh-pages" -ForegroundColor White
Write-Host "4. اضغط Save" -ForegroundColor White
Write-Host ""
Write-Host "الموقع سيكون متاحاً على:" -ForegroundColor Cyan
Write-Host "https://YOUR_USERNAME.github.io/Cybersecurity-Mentor-Consultant/" -ForegroundColor Yellow
Write-Host ""

