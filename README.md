
# Modern SaaS Web Builder

A sophisticated, modern web builder application with code generation and export capabilities. Build beautiful websites with drag-and-drop components, customize content, and export production-ready code.

## 🚀 Features

### Core Features
- **Visual Website Builder**: Drag-and-drop interface for building websites
- **Multiple Component Variations**: Choose from different designs for each section
- **Real-time Preview**: See changes instantly as you build
- **Content Management**: Easy-to-use forms for editing all content
- **Theme Customization**: Custom color schemes and styling options
- **Code Export**: Generate and export production-ready React code

### Component Library
- **Navigation**: Multiple navbar designs with responsive behavior
- **Hero Sections**: Eye-catching hero components with animations
- **About Us**: Various layouts for company information
- **Services**: Service showcase with modern card designs  
- **Projects/Portfolio**: Project galleries and showcases
- **Team**: Team member profiles and bios
- **Reviews/Testimonials**: Customer feedback displays
- **Contact**: Contact forms and information sections
- **Footer**: Comprehensive footer designs

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern Animations**: Smooth transitions using Framer Motion
- **Component Variations**: Multiple design options for each section
- **Export Functionality**: Generate complete React applications
- **Theme System**: Customizable color schemes and styling

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/modern-saas-web-builder.git
   cd modern-saas-web-builder
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

## 🎯 Usage

### Building a Website

1. **Access the Builder**: Navigate to `/settings` to access the visual builder
2. **Choose Components**: Select from various component designs for each section
3. **Customize Content**: Edit text, images, and other content using the built-in forms
4. **Preview Changes**: See your changes in real-time in the preview panel
5. **Customize Theme**: Adjust colors and styling to match your brand
6. **Export Code**: Generate and download your complete website code

### Component Structure

```
src/components/
├── navbar/          # Navigation components
├── hero/            # Hero section variants
├── about/           # About us sections
├── service/         # Service showcases
├── projects/        # Project galleries
├── teams/           # Team member displays
├── reviews/         # Testimonial sections
├── contact/         # Contact forms
└── footer/          # Footer designs
```

### Content Management

- All content is managed through TypeScript interfaces
- Real-time content editing with form validation
- Image upload and management
- Dynamic array content (team members, services, etc.)

## 🎨 Customization

### Adding New Components

1. Create your component in the appropriate folder
2. Add proper TypeScript interfaces
3. Register the component in `src/components/index.tsx`
4. Add it to the component map for the builder

### Theme Customization

- Modify `tailwind.config.ts` for global styles
- Use the built-in theme system for color customization
- CSS custom properties for dynamic theming

### Content Structure

All content follows typed interfaces defined in `src/types/global.ts`:

```typescript
interface HeroData {
  heroTitle?: string;
  heroDescription?: string;
  image?: string;
  ctaButton?: {
    text: string;
    url: string;
  };
}
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
# or
bun run build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
bun run preview
```

### Deploy to Popular Platforms

- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Shadcn/UI components
│   ├── ContentEditor/  # Content management forms
│   └── settingsPanelComponents/ # Builder interface
├── context/            # React Context providers
├── data/              # Initial data and configurations
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check our [Wiki](https://github.com/your-username/modern-saas-web-builder/wiki)
- **Issues**: Report bugs via [GitHub Issues](https://github.com/your-username/modern-saas-web-builder/issues)
- **Discussions**: Join our [GitHub Discussions](https://github.com/your-username/modern-saas-web-builder/discussions)

## 🔗 Links

- [Live Demo](https://your-demo-url.com)
- [Documentation](https://your-docs-url.com)
- [Component Library](https://your-storybook-url.com)

---

Built with ❤️ using React, TypeScript, and modern web technologies.
