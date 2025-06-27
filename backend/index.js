import { execSync } from "child_process";
import cors from "cors";
import express from "express";
import fs from "fs";
import path from "path";
import { copyComponents, setupPages, setupProjectStructure, setupTailwindCSS, updateAppFile, updateMainFile, validateInputs } from "./utils.js";

const app = express();
app.use(cors());
app.use(express.json());


const sendUpdate = (status, message) => {
  console.log(`[${status.toUpperCase()}] ${message}`);
};

const executeCommand = (command, options = {}) => {
  try {
    execSync(command, { ...options, stdio: "pipe" });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      command
    };
  }
};


const initializeProject = async ({ projectName, projectPath, componentsList, styles, content }) => {
  sendUpdate("validation", "Validating inputs...");
  const validationErrors = validateInputs(projectName, projectPath, componentsList, styles, content);
  if (validationErrors.length > 0) {
    sendUpdate("error", `Validation failed: ${validationErrors.join("; ")}`);
    throw new Error(validationErrors.join("; "));
  }
  sendUpdate("validation", "Validation successful!");

  sendUpdate("projectCreation", "Creating project...");
  const newProjectPath = path.join(projectPath, projectName);
  if (fs.existsSync(newProjectPath)) {
    sendUpdate("error", "Project directory already exists!");
    throw new Error("Directory already exists. Choose another name.");
  }

  const relativeProjectName = path.relative(process.cwd(), newProjectPath);
  const createProject = executeCommand(`npm create vite@latest ${relativeProjectName} -- --template react`);
  if (!createProject.success) {
    sendUpdate("error", `Failed to create project: ${createProject.error}`);
    throw new Error(createProject.error);
  }
  sendUpdate("projectCreation", "Project created successfully!");

  sendUpdate("dependencyInstallation", "Installing dependencies...");
  process.chdir(newProjectPath);

  const dependencies = [
    { command: "npm install react-icons", name: "react-icons" },
    { command: "npm install -D tailwindcss@3.4.17 postcss autoprefixer  framer-motion  prop-types", name: "tailwind and related" },
    { command: "npx tailwindcss init -p", name: "tailwind initialization" },
    { command: "npm install react-router-dom", name: "react-router" }
  ];

  for (const dep of dependencies) {
    sendUpdate("dependencyInstallation", `Installing ${dep.name}...`);
    const result = executeCommand(dep.command);
    if (!result.success) {
      sendUpdate("error", `Failed to install ${dep.name}: ${result.error}`);
      throw new Error(result.error);
    }
  }
  sendUpdate("dependencyInstallation", "Dependencies installed!");

  sendUpdate("projectStructure", "Setting up project structure...");
  await setupProjectStructure(newProjectPath);
  sendUpdate("projectStructure", "Project structure setup completed!");

  sendUpdate("tailwindSetup", "Configuring Tailwind CSS...");
  await setupTailwindCSS(newProjectPath, styles);
  sendUpdate("tailwindSetup", "Tailwind CSS setup completed!");

  sendUpdate("componentsSetup", "Copying components...");
  await copyComponents(newProjectPath, componentsList);
  sendUpdate("componentsSetup", "Components setup completed!");

  sendUpdate("pagesSetup", "Setting up pages...");
  await setupPages(newProjectPath, content);
  sendUpdate("pagesSetup", "Pages setup completed!");

  sendUpdate("routingSetup", "Setting up routing...");
  await updateAppFile(newProjectPath, content);
  await updateMainFile(newProjectPath);
  sendUpdate("routingSetup", "Routing setup completed!");

  sendUpdate("done", "Project setup completed successfully!");
  return { success: true, newProjectPath };
};

app.post("/generate-project", async (req, res) => {
  try {
    const { projectName, projectPath, componentsList, styles, content } = req.body;
    await initializeProject({ projectName, projectPath, componentsList, styles, content });
    res.json({ success: true, message: "Project setup completed successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});