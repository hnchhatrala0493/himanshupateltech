# Portfolio React - Windows Setup Complete ✅

Your portfolio React app is ready! Here's everything you need to know:

## 📋 Current Status

All source files have been created in the project root with prefixed names:
- `src_App.tsx` → needs to move to `src/App.tsx`
- `src_main.tsx` → needs to move to `src/main.tsx`
- `src_index.css` → needs to move to `src/index.css`
- `src_components_*.tsx` → need to move to `src/components/*.tsx`

## 🚀 STEP-BY-STEP SETUP (Windows)

Open **Command Prompt** (Win+R, type `cmd`, press Enter) and run:

```
cd /d d:\personal\portfolio-react
```

### 1️⃣ Create directories
```
mkdir src
mkdir src\components
```

### 2️⃣ Move files to correct locations
```
move src_App.tsx src\App.tsx
move src_main.tsx src\main.tsx
move src_index.css src\index.css
move src_components_Navbar.tsx src\components\Navbar.tsx
move src_components_Hero.tsx src\components\Hero.tsx
move src_components_About.tsx src\components\About.tsx
move src_components_Projects.tsx src\components\Projects.tsx
move src_components_Footer.tsx src\components\Footer.tsx
```

### 3️⃣ Install dependencies
```
npm install
```
(This takes 2-3 minutes)

### 4️⃣ Start development server
```
npm run dev
```

You'll see:
```
Local:   http://localhost:5173
```

Open this URL in your browser! 🎉

---

## 📁 Final Project Structure

After organizing files, you should have:

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── (other config files)
```

---

## 🎨 Next: Customize Your Portfolio

### Edit your Hero section
File: `src/components/Hero.tsx`
- Replace `[Your Name]` with your actual name
- Update tagline from "Full Stack Developer | ..."

### Add your projects
File: `src/components/Projects.tsx`
- Update project titles, descriptions, and tags
- Add your GitHub and live demo links

### Update social links
File: `src/components/Footer.tsx`
- Add your GitHub profile URL
- Add your LinkedIn profile URL
- Add your email address

### Change colors (optional)
File: `tailwind.config.js`
- Customize the Tailwind theme colors

---

## 📦 Available Commands

```bash
npm run dev      # Start dev server (hot reload)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

---

## 🌐 Deploy Options

Once happy with your portfolio:

### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option B: Netlify
- Drag & drop the `dist/` folder to Netlify

### Option C: GitHub Pages
- Build: `npm run build`
- Push to GitHub
- Enable GitHub Pages in repo settings

---

## ❓ Troubleshooting

**Issue: Command not found**
- Make sure you're in the correct directory: `cd d:\personal\portfolio-react`

**Issue: Port 5173 already in use**
```bash
npm run dev -- --port 3000
```

**Issue: npm install fails**
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

---

## ✨ You're All Set!

Follow the 4 steps above and your portfolio will be live at `http://localhost:5173` 🚀

Happy coding! If you run into issues, copy the command output and we can troubleshoot together.
