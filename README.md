
# DevBuilder - Brutalist SaaS Website Builder

A cutting-edge, brutalist-inspired website builder that embodies digital rebellion and creative freedom. Built with React, TypeScript, and modern web technologies.

## 🚀 Features

### **Digital Rebellion at Its Core**
- **Brutalist Design System** - Grid-heavy layouts with intentionally broken sections
- **Chaos-Driven UI** - Asymmetrical layouts, overlapping elements, and color clashing
- **Motion-First Interactions** - Framer Motion animations throughout
- **No-Code Freedom** - Build without boundaries using drag-and-drop tools

### **Modern SaaS Architecture**
- **Component-Based Builder** - Modular design system with reusable components
- **Real-Time Preview** - See your changes instantly
- **Export Capabilities** - Clean HTML/CSS/JS export functionality
- **Template Library** - Brutalist-inspired templates that break conventions

### **Developer Experience**
- **TypeScript** - Full type safety throughout the application
- **Modern React** - Hooks, Context API, and latest React patterns
- **Tailwind CSS** - Utility-first styling with custom brutalist extensions
- **Framer Motion** - Smooth animations and micro-interactions

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
- **Authentication**: Custom auth components
- **Routing**: React Router DOM

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or bun

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
│   ├── hero/            # Hero section variants
│   ├── navbar/          # Navigation components
│   └── ...              # Other component categories
├── pages/               # Application pages
├── context/             # React Context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
└── styles/              # Global styles and configurations
```

## 🎯 Key Components

### **Brutalist Landing Page**
- `BrutalistHero` - Chaotic hero section with overlapping typography
- `BrutalistFeatures` - Grid-destroying feature showcase
- `BrutalistTestimonials` - Overlapping testimonial cards
- `BrutalistPricing` - Avant-garde pricing tables
- `BrutalistFooter` - Industrial footer design

### **Website Builder**
- Component library with multiple variants (Hero, Navbar, Footer, etc.)
- Real-time preview system
- Content management with form builders
- Settings panel for component customization

### **Authentication System**
- Modern login/register forms
- Password reset functionality
- Social login integration
- Responsive auth layouts

## 🎨 Styling Approach

### **Tailwind Configuration**
Custom brutalist extensions including:
- High contrast color palette
- Custom animation keyframes
- Experimental spacing scales
- Typography utilities for raw, industrial fonts

### **Color System**
- **Primary**: Electric lime (#00FF41) and deep black (#000000)
- **Secondary**: Neon pink (#FF006E) and industrial gray (#1A1A1A)  
- **Accent**: Warning orange (#FF8500) and pure white (#FFFFFF)

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

### **Adding New Components**
1. Create component in appropriate category folder
2. Add to component index file
3. Update TypeScript types if needed
4. Add to settings panel if configurable

### **Extending the Builder**
1. Define component data types in `src/types/global.ts`
2. Create component variants in respective folders
3. Add to component map in `src/components/index.tsx`
4. Create settings panel configuration

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

🚀 **DevBuilder** - Where chaos meets creativity.
