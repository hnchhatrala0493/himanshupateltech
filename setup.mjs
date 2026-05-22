import fs from 'fs'
import path from 'path'

const srcDir = path.join(process.cwd(), 'src')
const componentsDir = path.join(srcDir, 'components')

// Create directories
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true })
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true })

// Move files
const moves = [
  ['src_App.tsx', 'src/App.tsx'],
  ['src_main.tsx', 'src/main.tsx'],
  ['src_index.css', 'src/index.css'],
  ['src_components_Navbar.tsx', 'src/components/Navbar.tsx'],
  ['src_components_Hero.tsx', 'src/components/Hero.tsx'],
  ['src_components_About.tsx', 'src/components/About.tsx'],
  ['src_components_Projects.tsx', 'src/components/Projects.tsx'],
  ['src_components_Footer.tsx', 'src/components/Footer.tsx'],
]

moves.forEach(([from, to]) => {
  try {
    if (fs.existsSync(from)) {
      fs.renameSync(from, to)
      console.log(`✓ Moved ${from} → ${to}`)
    }
  } catch (err) {
    console.error(`✗ Failed to move ${from}:`, err.message)
  }
})

console.log('\n✓ Project structure setup complete!')
