# Cybersecurity Mentor Consultant - Portfolio Website

A modern, responsive portfolio website for Moataz Younes, a Cybersecurity Consultant & Mentor specializing in Cybercrime Investigations, OSINT & Legal-Tech Integration.

## 🚀 Live Demo

Visit the live website: [https://moataz-younes.github.io/Cybersecurity-Mentor-Consultant](https://moataz-younes.github.io/Cybersecurity-Mentor-Consultant)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Wouter (HashRouter for GitHub Pages compatibility)
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
project/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # React components
│       ├── lib/          # Utilities and configurations
│       └── main.tsx      # Application entry point
├── server/               # Backend server (for development)
├── shared/              # Shared schemas and types
└── dist/               # Build output (generated)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/moataz-younes/Cybersecurity-Mentor-Consultant.git
cd Cybersecurity-Mentor-Consultant
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5000`

## 🏗️ Building for Production

### Local Build Test

1. Build the application:
```bash
npm run build
```

2. Preview the build locally:
```bash
npm run preview
```

### GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment** (Recommended):
   ```bash
   npm run deploy
   ```
   This will:
   - Build the project
   - Deploy to the `gh-pages` branch
   - Make it available at `https://moataz-younes.github.io/Cybersecurity-Mentor-Consultant`

2. **Manual Deployment**:
   - Run `npm run build`
   - Push the `dist/public` folder to the `gh-pages` branch
   - Configure GitHub Pages in repository settings

## ⚙️ Configuration

### GitHub Pages Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Save the settings

### Environment Variables

The project uses the following environment variables:

- `DATABASE_URL`: PostgreSQL connection string (for backend features)
- `NODE_ENV`: Environment mode (development/production)

## 🎨 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Cyberpunk-inspired design with green/red theme
- **Smooth Animations**: Framer Motion animations
- **Contact Form**: Integrated email functionality
- **Portfolio Showcase**: Professional work examples
- **Services Overview**: Detailed service offerings
- **About Section**: Professional background and expertise

## 📱 Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Professional background and expertise
3. **Services**: Cybersecurity consulting services
4. **Portfolio**: Work examples and case studies
5. **Contact**: Contact form and information

## 🔧 Customization

### Colors
The theme uses a cyberpunk color palette:
- Primary: Green (#10b981)
- Secondary: Red (#ef4444)
- Background: Dark slate (#0f172a)

### Content
Update the content in the respective component files:
- `client/src/components/Hero.tsx`
- `client/src/components/About.tsx`
- `client/src/components/Services.tsx`
- `client/src/components/Portfolio.tsx`
- `client/src/components/Contact.tsx`

## 🚀 Deployment Checklist

- [x] HashRouter configured for GitHub Pages
- [x] Base path set in Vite config
- [x] Homepage URL configured in package.json
- [x] Build scripts optimized
- [x] Static assets properly placed
- [x] .nojekyll file added
- [x] Meta tags and SEO optimized

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Moataz Younes**
- Email: moataz.yones244@gmail.com
- Phone: +44 7366 187685
- Specialization: Cybersecurity Consultant & Mentor

---

Built with ❤️ using React, TypeScript, and Tailwind CSS 