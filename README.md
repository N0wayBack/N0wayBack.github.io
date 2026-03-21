<div align="center">
  <img src="./src/assets/logo.svg" alt="N0wayBack Logo" width="400" />
  
  # N0wayBack Team Website
  
  <p>A cyberpunk-themed terminal interface for the N0wayBack CTF team</p>
  
  <p>
    <a href="https://n0wayback.net">View Live Site</a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#project-structure">Project Structure</a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Astro-5.x-orange?style=flat-square&logo=astro" alt="Astro 5.x" />
    <img src="https://img.shields.io/badge/Tailwind-3.x-blue?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0-green?style=flat-square" alt="GPL-3.0 License" /></a>
    <img src="https://img.shields.io/github/actions/workflow/status/N0wayBack/N0wayBack.github.io/astro.yml?branch=main&style=flat-square&logo=github" alt="GitHub Workflow Status" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome" />
    <img src="https://img.shields.io/badge/cyberpunk-enabled-ff00ff?style=flat-square" alt="Cyberpunk Enabled" />
  </p>
</div>

<details>
<summary>Table of Contents</summary>

- [About](#about)
- [Live Website](#live-website)
- [Design Features](#design-features)
- [Credits](#credits)
- [Project Structure](#project-structure)
- [Features](#features)
- [Commands](#commands)
- [Tech Stack](#tech-stack)
- [Responsive Design & Layout](#responsive-design--layout)
- [Loading Animation](#loading-animation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

</details>

## About

This is the official website for the N0wayBack team, built with Astro framework, showcasing team introduction, member information, and a hall of fame. The website features a cyberpunk terminal-style design with interactive elements and responsive layouts.

## Live Website

Visit our website at [https://n0wayback.net](https://n0wayback.net)

## Design Features

- **Terminal-Style Interface**: The entire website is designed to mimic a terminal/command-line interface
- **Cyberpunk Aesthetic**: Features neon colors, grid backgrounds, and glitch effects
- **Dual-Color ASCII Art**: Custom ASCII art with cyan and red color scheme for brand identity
- **Dark Mode Support**: Optimized for both light and dark themes
- **Fully Responsive**: Carefully designed for both desktop and mobile devices
- **Optimized Layout**: Flex-based layout system ensures proper content distribution and footer positioning
- **Dynamic Loading Animation**: Custom loading screen with progress bar enhances user experience

## Credits

Designed and developed by [shenghuo2](https://github.com/shenghuo2)

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── members/  # Team member avatars
├── src/
│   ├── assets/       # Website resources
│   │   ├── logo.svg
│   │   ├── logo-origin.webp
│   │   └── background.svg
│   ├── components/   # Reusable components
│   │   ├── Footer.astro
│   │   ├── MemberCard.astro
│   │   └── Navbar.astro
│   ├── data/         # Data files
│   │   ├── honors.ts  # Honors and achievements data
│   │   └── members.ts # Team members data
│   ├── layouts/      # Page layouts
│   │   └── MainLayout.astro
│   └── pages/        # Pages
│       ├── honors.astro
│       ├── index.astro
│       └── members.astro
├── .github/
│   └── workflows/
│       └── astro.yml  # GitHub Pages automated deployment
├── CNAME             # Custom domain configuration
├── astro.config.mjs  # Astro configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── package.json
```

## Features

- **Home Page**: Team introduction with terminal-style ASCII art and manifesto
- **Members Page**: Displays team leaders, active members, and pioneers with their skills and contributions
- **Honors Timeline**: Chronological display of team achievements and milestones in CTF competitions
- **Responsive Design**: Adapts to various device screen sizes with optimized layouts for mobile
- **Optimized Loading Experience**: Progressive loading animations with customized messages for different page types
- **Full-Screen Terminal**: Vertically expanded terminal interface that fills the entire viewport for immersive experience

## Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds production site to `./dist/` directory    |
| `npm run preview`         | Previews build locally before deployment         |

## Tech Stack

- [Astro](https://astro.build) - Fast, modern static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for better code quality

## Responsive Design & Layout

The website uses a flex-based layout system to ensure proper content distribution across different screen sizes:

- **Flexible Container Layout**: Using flex-grow and flex-direction to optimize space usage
- **Sticky Footer**: Footer is properly positioned at the bottom of the page using mt-auto
- **Full-height Terminal**: Terminal container expands to fill available viewport space
- **Responsive Typography**: Font sizes adjust based on screen width
- **Mobile-Optimized Navigation**: Simplified navigation for smaller screens

## Loading Animation

The website features a sophisticated loading animation system:

- **Progress Bar**: Visual indication of page loading progress
- **Custom Loading Messages**: Different messages based on page type (index, members, honors)
- **Smooth Transitions**: Fade-in effects for content after loading completes
- **Terminal Boot Effect**: Simulates a terminal boot sequence for an authentic cyberpunk experience
- **Optimized Performance**: Loading animations are designed to be lightweight and non-blocking

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is defined in `.github/workflows/astro.yml`. When changes are pushed to the main branch, the site is automatically built and deployed.

## Contributing

If you want to contribute to the N0wayBack team website, feel free to submit a Pull Request or contact our team members.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.
