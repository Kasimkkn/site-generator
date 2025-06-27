import fs from "fs";
import path from "path";

export const setupTailwindCSS = async (projectPath, styles) => {
  const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "${styles.primary}",
        background: "${styles.background}",
        text: "${styles.text}",
      },
    },
  },
  plugins: [],
}`;

  fs.writeFileSync(path.join(projectPath, "tailwind.config.js"), tailwindConfig.trim());

  const indexCSS = `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: ${styles.primary};
  --color-background: ${styles.background};
  --color-text: ${styles.text};
}`;

  fs.writeFileSync(path.join(projectPath, "src/index.css"), indexCSS.trim());
};

export const copyComponents = async (projectPath, componentsList) => {
  console.log("\n🎨 Copying components...");

  const componentsDir = path.join(projectPath, "src/components");

  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  for (const component of componentsList) {
    try {
      const sourcePath = component.path;
      const componentName = component.name;

      console.log("\n📦 Copying component:", componentName)
      console.log("Source path:", sourcePath);
      const destinationFile = path.join(componentsDir, `${componentName}.jsx`);
      fs.copyFileSync(sourcePath, destinationFile);

      console.log(`✅ ${componentName} component copied!`);
    } catch (error) {
      console.error(`Error copying component ${component.name}:`, error.message);
      throw error;
    }
  }
};

export const setupPages = async (projectPath, pagesData) => {
  console.log("\n📄 Setting up pages...");

  const pagesDir = path.join(projectPath, "src/pages");

  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  pagesData.forEach(page => {
    const pageContent = JSON.parse(page.content);
    const layoutData = JSON.parse(page.layout);

    const pageComponents = Object.keys(layoutData).map(key => ({
      name: layoutData[key],
      dataKey: key
    }));

    const pageCode = `
import React from 'react';
${pageComponents.map(comp => `import ${comp.name} from '../components/${comp.name}';`).join('\n')}

const pageContent = ${JSON.stringify(pageContent, null, 2)};

const ${page.page}Page = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      ${pageComponents.map(comp => `<${comp.name} data={pageContent.${comp.dataKey}} />`).join('\n      ')}
    </div>
  );
};

export default ${page.page}Page;`;

    fs.writeFileSync(path.join(pagesDir, `${page.page}Page.jsx`), pageCode.trim());
    console.log(`✅ ${page.page} page created!`);
  });
};

export const updateAppFile = async (projectPath, pagesData) => {
  console.log('\n📦 Updating App.jsx...');
  const appCode = `
import React from 'react';
import { Routes, Route } from 'react-router-dom';
${pagesData.map(page => `import ${page.page}Page from './pages/${page.page}Page';`).join('\n')}

function App() {
  return (
    <Routes>
      ${pagesData.map(page => {
    const path = page.page.toLowerCase() === 'home' ? '/' : `/${page.page.toLowerCase()}`;
    return `<Route path="${path}" element={<${page.page}Page />} />`;
  }).join('\n      ')}
    </Routes>
  );
}

export default App;`;

  fs.writeFileSync(path.join(projectPath, "src/App.jsx"), appCode.trim());
};

export const updateMainFile = async (projectPath) => {
  console.log('\n📦 Updating main.jsx...');
  const mainCode = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)`;

  fs.writeFileSync(path.join(projectPath, "src/main.jsx"), mainCode.trim());
};

export const setupProjectStructure = async (projectPath) => {
  const directories = [
    'src/components',
    'src/pages',
  ];

  directories.forEach(dir => {
    const fullPath = path.join(projectPath, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
};

export const validateInputs = (projectName, projectPath, componentsList, styles, content) => {
  const errors = [];

  if (!projectName) errors.push("Project name is required");
  if (!projectPath) errors.push("Project path is required");
  if (!componentsList) errors.push("Components list is required");
  if (!content) errors.push("Content is required");

  if (Array.isArray(componentsList)) {
    const invalidComponents = componentsList.filter(comp => !comp.name || !comp.path);
    if (invalidComponents.length > 0) {
      errors.push(`Invalid component entries found: ${invalidComponents.map(c => c.name || 'unnamed').join(', ')}`);
    }
  } else {
    errors.push("Components list must be an array");
  }

  if (styles) {
    const requiredStyles = ['primary', 'background', 'text'];
    const missingStyles = requiredStyles.filter(style => !styles[style]);
    if (missingStyles.length > 0) {
      errors.push(`Missing required styles: ${missingStyles.join(', ')}`);
    }
  }

  return errors;
};