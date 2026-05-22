@echo off
REM Create src directory structure
mkdir src\components 2>nul

REM Move files to proper locations
move src_App.tsx src\App.tsx >nul 2>&1
move src_main.tsx src\main.tsx >nul 2>&1
move src_index.css src\index.css >nul 2>&1
move src_components_Navbar.tsx src\components\Navbar.tsx >nul 2>&1
move src_components_Hero.tsx src\components\Hero.tsx >nul 2>&1
move src_components_About.tsx src\components\About.tsx >nul 2>&1
move src_components_Projects.tsx src\components\Projects.tsx >nul 2>&1
move src_components_Footer.tsx src\components\Footer.tsx >nul 2>&1

echo Project structure setup complete!
