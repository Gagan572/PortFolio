# Premium Developer Portfolio Website

A modern, highly interactive, premium single-page developer portfolio website tailored for **Gangadhar Shivanand Sattigeri**. Features a state-of-the-art dark theme, responsive layouts, web accessibility (a11y) optimizations, light/dark mode switching, and a real-time interactive cybersecurity threat detection terminal simulation.

Optimized for **zero-configuration instant deployment to Vercel**.

## 🚀 Absolute Vercel Deployment Instructions

You can deploy this static project to Vercel in less than 2 minutes using either the **Vercel Git Integration** or the **Vercel CLI**.

---

### Option A: Vercel GitHub Integration (Recommended)
This approach sets up a **CI/CD pipeline**. Every time you push code to GitHub, Vercel will automatically deploy the changes.

1. **Initialize Git and commit your files**:
   Open a terminal in the project directory and run:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for premium developer portfolio"
   ```

2. **Publish the repository to GitHub**:
   - Go to [GitHub](https://github.com) and create a new repository (e.g., `portfolio`).
   - Link your local repository and push:
     ```bash
     git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy on Vercel Dashboard**:
   - Go to [Vercel](https://vercel.com) and log in.
   - Click the **Add New...** button and select **Project**.
   - Import your newly created repository.
   - **Do not configure any build steps or output directories** (Vercel will detect it as a static project and serve it out of the box).
   - Click **Deploy**. Done!

---

### Option B: Vercel CLI (Command Line Interface)
This approach allows you to deploy directly from your local terminal.

1. **Install Vercel CLI globally**:
   ```bash
   npm install -g vercel
   ```

2. **Log in to your Vercel account**:
   ```bash
   vercel login
   ```

3. **Trigger deployment**:
   Run the following command at the project root:
   ```bash
   vercel
   ```
   - *Link to existing project?* **No**
   - *What's your project's name?* Press `Enter` (or type your custom name, e.g., `gangadhar-portfolio`)
   - *In which directory is your code located?* Press `Enter` (for `./`)
   - *Want to modify settings?* **No** (Vercel will automatically use `vercel.json` configurations)

4. **Production Deployment**:
   To push to production and get your main URL, run:
   ```bash
   vercel --prod
   ```

---

## 📂 Project Structure

```text
├── index.html        # Main entry point (semantic HTML5, Tailwind, Lucide, Print View Layout)
├── vercel.json       # Route definitions & HTTP cache headers
├── README.md         # Deployment & documentation manual
└── assets/
    ├── css/
    │   └── style.css # Custom Google Fonts, dark mode themes, animations, & print rules
    └── js/
        └── main.js   # Dynamic interaction controller (observer, theme toggle, terminal engine)
```

## 💎 Features Built-in

- **Premium Dark Mode Default**: High-tech color palette utilizing Slate `#0B0F19` with Teal/Cyan accents. Toggles smoothly to a high-contrast Light mode.
- **Simulated Cybersecurity Terminal**: An interactive, real-time command log simulator on the **Scan Safe** project card.
- **Zero-Dependency PDF Resume Builder**: Clicking "View & Print Resume" opens an interactive modal. Clicking "Print / Save PDF" triggers `window.print()` using customized printable print stylesheet layouts, printing a clean standard one-page resume.
- **Web Accessibility (a11y)**: Adheres to semantic guidelines, keyboard navigability, and color contrast.
- **Performance Optimized**: Cache rules configured for all assets inside `/assets/`.
