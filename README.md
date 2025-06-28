
# DevBuilder - Brutalist SaaS Website Builder

A cutting-edge, brutalist-inspired website builder that embodies digital rebellion and creative freedom. Built with React, TypeScript, and modern web technologies featuring a comprehensive authentication system and customizable theming.

## 🚀 Features

### **Digital Rebellion at Its Core**
- **Brutalist Design System** - Grid-heavy layouts with intentionally broken sections
- **Chaos-Driven UI** - Asymmetrical layouts, overlapping elements, and color clashing
- **Motion-First Interactions** - Framer Motion animations throughout
- **No-Code Freedom** - Build without boundaries using drag-and-drop tools

### **Authentication & Security**
- **Secure Auth System** - Comprehensive login/register flow with auth guards
- **Protected Routes** - Settings and admin areas protected by authentication
- **Local Storage Integration** - Persistent authentication state
- **Demo Credentials** - kasimkkn@gmail.com / Kasim@123

### **Modern SaaS Architecture**
- **Component-Based Builder** - Modular design system with reusable components
- **Real-Time Preview** - See your changes instantly
- **Export Capabilities** - Clean Reactjs/TailwindCss coden export functionality
- **Template Library** - Brutalist-inspired templates that break conventions

### **Customizable Theming System**
- **Dynamic Theme Engine** - Real-time theme switching with brutalist presets
- **Color Customization** - Full control over primary, accent, and secondary colors
- **Preset Themes** - Rebellion, Neon Chaos, and Digital Punk themes
- **Export-Ready Themes** - Theme data ready for backend integration

### **Developer Experience**
- **TypeScript** - Full type safety throughout the application
- **Modern React** - Hooks, Context API, and latest React patterns
- **Tailwind CSS** - Utility-first styling with custom brutalist extensions
- **Framer Motion** - Smooth animations and micro-interactions
- **Protected Routing** - Auth guards for secure areas

## 🎨 Design Philosophy

DevBuilder embraces a **brutalist web design** approach:

- **Grid-Heavy Foundation** with intentionally broken grid sections
- **High Contrast** color schemes with strategic color clashing
- **Asymmetrical Layouts** that defy conventional web design rules
- **Overlapping Layers** and complex compositions
- **Experimental Typography** mixing weights, sizes, and orientations
- **Chaotic but Purposeful** element placement

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Shadcn/ui
- **State Management**: React Context API
- **Icons**: Lucide React
- **Charts**: Recharts
- **Authentication**: Custom auth system with localStorage
- **Routing**: React Router DOM with protected routes
- **Theme System**: Dynamic theming with CSS custom properties

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or bun

### Installation

1. **Clone the repository**
```bash
git clone [repository-url]
cd devbuilder
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
bun install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
# or  
bun dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── brutalist/       # Brutalist-specific components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── auth/            # Authentication components
│   │   ├── AuthLayout.tsx     # Brutalist auth layout
│   │   ├── AuthGuard.tsx      # Route protection
│   │   └── BrutalistLoginForm.tsx # Styled login form
│   ├── hero/            # Hero section variants
│   ├── navbar/          # Navigation components
│   └── ThemeSelector.tsx # Theme customization
├── pages/               # Application pages
│   ├── Index.tsx        # Landing page
│   ├── Auth.tsx         # Authentication page
│   └── settings/        # Protected settings pages
├── context/             # React Context providers
│   ├── LayoutContext.tsx
│   └── changeTheme.tsx  # Theme management
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
└── styles/              # Global styles and configurations
```

## 🔐 Authentication System

### **Login System**
- Demo credentials: `kasimkkn@gmail.com` / `Kasim@123`
- Persistent authentication via localStorage
- Brutalist-styled auth forms with chaos-driven design

### **Protected Routes**
- `/settings` - Protected by AuthGuard
- Automatic redirect to `/auth` for unauthenticated users
- Seamless navigation after login

### **Auth Components**
- `AuthLayout` - Brutalist authentication layout
- `AuthGuard` - Route protection component
- `BrutalistLoginForm` - Styled login form
- Integration with existing RegisterForm, ForgotPasswordForm

## 🎯 Key Components

### **Brutalist Landing Page**
- `BrutalistHero` - Chaotic hero section with overlapping typography
- `BrutalistFeatures` - Grid-destroying feature showcase
- `BrutalistTestimonials` - Overlapping testimonial cards
- `BrutalistPricing` - Avant-garde pricing tables
- `BrutalistFooter` - Industrial footer design

### **Authentication System**
- `AuthLayout` - Brutalist auth page layout
- `BrutalistLoginForm` - Chaos-driven login form
- `AuthGuard` - Route protection with automatic redirects

### **Website Builder**
- Component library with multiple variants (Hero, Navbar, Footer, etc.)
- Real-time preview system
- Content management with form builders
- Settings panel for component customization

### **Theme System**
- `ThemeSelector` - Visual theme customization interface
- Dynamic CSS custom properties
- Preset brutalist themes
- Real-time theme application

## 🎨 Styling & Theming

### **Theme System**
- **Dynamic Themes** - Switch between Rebellion, Neon Chaos, Digital Punk
- **Custom Colors** - Full control over primary, accent, secondary colors
- **CSS Custom Properties** - Seamless theme integration
- **Export Ready** - Theme data prepared for backend integration

### **Brutalist Color Palettes**
- **Rebellion**: Electric lime (#00FF41), Neon pink (#FF006E), Warning orange (#FF8500)
- **Neon Chaos**: Pink primary, Lime text, Orange accents
- **Digital Punk**: Orange primary, Lime accents, Pink secondary

### **Animation Library**
- Accordion animations for expandable content
- Fade animations for smooth transitions
- Scale animations for emphasis
- Slide animations for sidebars/drawers
- Combined animations for complex transitions

## 🔧 Development

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### **Authentication Flow**
1. User visits protected route (`/settings`)
2. AuthGuard checks localStorage for `isAuthenticated`
3. Redirects to `/auth` if not authenticated
4. Login form validates credentials
5. Sets authentication state in localStorage
6. Redirects to intended route

### **Adding New Components**
1. Create component in appropriate category folder
2. Add to component index file
3. Update TypeScript types if needed
4. Add to settings panel if configurable
5. Apply brutalist theming using theme context

### **Extending the Builder**
1. Define component data types in `src/types/global.ts`
2. Create component variants in respective folders
3. Add to component map in `src/components/index.tsx`
4. Create settings panel configuration
5. Integrate with theme system

## 🌐 Deployment

The application can be deployed to any static hosting service:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### **Build for Production**
```bash
npm run build
```

The built files will be in the `dist` directory.

### **Environment Setup**
No environment variables required for basic functionality. Authentication currently uses demo credentials stored in component logic.

## 🔐 Security Notes

- Current authentication is demo-only with hardcoded credentials
- localStorage used for authentication state (suitable for demo/development)
- Protected routes implemented with client-side guards
- For production: integrate with proper backend authentication system

## 🎉 Theme Export Integration

The theme system is designed for easy backend integration:

```javascript
// Theme data structure for export
const themeData = {
  primary: "#00FF41",
  background: "#000000", 
  text: "#ffffff",
  accent: "#FF006E",
  secondary: "#FF8500"
};

// Ready for API integration
localStorage.getItem("devbuilder-theme");
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 Acknowledgments

- **Brutalist Web Design** movement for inspiration
- **React Community** for amazing tools and libraries
- **Tailwind CSS** for utility-first styling approach
- **Framer Motion** for smooth animation capabilities

---

**Built with digital rebellion in mind. Break the rules. Build the future.**

🚀 **DevBuilder** - Where chaos meets creativity, now with secure authentication and infinite customization.

**Demo Access**: kasimkkn@gmail.com / Kasim@123
