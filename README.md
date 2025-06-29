
# Visual Website Builder

A powerful, modern website builder with visual editing capabilities built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Visual Editing System
- **Live Visual Editor**: Click on any element to edit content and styles in real-time
- **Style Panel**: Comprehensive styling controls for colors, typography, layout, and spacing
- **Hover Effects**: Visual indicators when hovering over editable elements
- **Instant Preview**: See changes immediately as you make them

### Comprehensive Component Library
- **Hero Sections**: Multiple hero layouts with customizable content
- **About Sections**: Flexible about us components with cards and images
- **Service Sections**: Service showcase with pricing and descriptions
- **Project Portfolio**: Project galleries with images and links
- **Team Sections**: Team member profiles with social links
- **Testimonials**: Customer review and testimonial components
- **Contact Forms**: Contact information and form components
- **Navigation**: Responsive navbar components
- **Footer**: Multi-column footer with links and company info

### Advanced Styling Controls
- **Color Customization**: Background, text, and border color controls
- **Typography**: Font size, weight, alignment, and line height adjustments
- **Layout Controls**: Display, width, height, and positioning options
- **Spacing**: Margin, padding, and border radius controls
- **Real-time Preview**: All changes applied instantly

### Content Management
- **Inline Editing**: Click-to-edit text content
- **Image Management**: Easy image upload and replacement
- **Dynamic Content**: Add, edit, and remove content sections
- **Multi-page Support**: Manage multiple pages with different layouts

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd visual-website-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 How to Use Visual Editor

### Enabling Visual Edit Mode
1. Navigate to `/settings` in your application
2. Click the "VISUAL" tab in the top toolbar
3. Click the eye icon (👁️) to enable visual editing mode

### Editing Content
1. **Text Editing**: Click on any text element to edit inline
2. **Style Editing**: Select an element to open the style panel
3. **Image Editing**: Click on images to replace or add new ones

### Style Panel Controls

#### Colors Tab
- **Background Color**: Change element background
- **Text Color**: Modify text color
- **Border Color**: Adjust border colors
- **Color Picker**: Use custom colors with the color picker

#### Typography Tab
- **Font Size**: Adjust text size with slider (8px - 72px)
- **Font Weight**: Choose from Thin to Black (100-900)
- **Text Alignment**: Left, center, right, or justify
- **Line Height**: Control line spacing (1.0 - 3.0)

#### Layout Tab
- **Display**: Block, inline-block, flex, grid, or hidden
- **Width**: Set custom width (px, %, auto)
- **Height**: Set custom height (px, auto)

#### Spacing Tab
- **Margin**: Top, right, bottom, left spacing
- **Padding**: Internal spacing controls
- **Border Radius**: Rounded corners
- **Border Width**: Border thickness

## 🏗️ Project Structure

```
src/
├── components/
│   ├── VisualEdit/
│   │   ├── EditableElement.tsx      # Core editable wrapper
│   │   ├── StylePanel.tsx           # Style editing panel
│   │   └── VisualEditToolbar.tsx    # Visual edit controls
│   ├── hero/
│   │   ├── Hero.tsx                 # Standard hero component
│   │   └── VisualEditHero.tsx       # Visual edit version
│   ├── about/
│   ├── service/
│   ├── projects/
│   ├── teams/
│   ├── reviews/
│   ├── contact/
│   ├── navbar/
│   └── footer/
├── context/
│   ├── VisualEditContext.tsx        # Visual editing state
│   └── LayoutContext.tsx            # Layout management
├── pages/
│   └── settings/
│       ├── VisualEditSettings.tsx   # Visual editor page
│       └── SettingsLayout.tsx       # Settings wrapper
└── types/
    └── global.ts                    # TypeScript definitions
```

## 🔧 Customization

### Adding New Components
1. Create the standard component in its respective folder
2. Create a visual edit version prefixed with `VisualEdit`
3. Wrap editable elements with `EditableElement`
4. Add the component to `VisualEditSettings.tsx`

### Extending Style Controls
Edit `StylePanel.tsx` to add new style options:
- Add new tabs in the `tabs` array
- Implement the UI in the content area
- Use `handleStyleChange` to apply styles

### Custom Styling
The visual editor supports any CSS property. Add custom controls in the StylePanel for specific needs.

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Open an issue on GitHub
- Check the documentation
- Review the component examples

## 🔮 Roadmap

- [ ] Drag and drop component reordering
- [ ] Template library
- [ ] Export to HTML/CSS
- [ ] Advanced animation controls
- [ ] Component marketplace
- [ ] Multi-language support
- [ ] Database integration
- [ ] SEO optimization tools

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
