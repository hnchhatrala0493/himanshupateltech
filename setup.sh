#!/bin/bash

# Portfolio React - Complete Setup Script
# Run this in Git Bash, WSL, or any bash environment

cd "$(dirname "$0")"

echo "🚀 Setting up Portfolio React..."

# Create directories
mkdir -p src/components

# Move files to correct locations
mv src_App.tsx src/App.tsx 2>/dev/null || true
mv src_main.tsx src/main.tsx 2>/dev/null || true
mv src_index.css src/index.css 2>/dev/null || true
mv src_components_Navbar.tsx src/components/Navbar.tsx 2>/dev/null || true
mv src_components_Hero.tsx src/components/Hero.tsx 2>/dev/null || true
mv src_components_About.tsx src/components/About.tsx 2>/dev/null || true
mv src_components_Projects.tsx src/components/Projects.tsx 2>/dev/null || true
mv src_components_Footer.tsx src/components/Footer.tsx 2>/dev/null || true

echo "✓ Project structure organized"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "  npm run dev      - Start development server (http://localhost:5173)"
echo "  npm run build    - Build for production"
echo "  npm run lint     - Run ESLint"
echo ""
echo "Happy coding! 🎉"
