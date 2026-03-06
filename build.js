import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const rootDir = process.cwd()
const distDir = path.join(rootDir, 'dist')
const publicDir = path.join(rootDir, 'public')

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function copyDir(src, dest) {
  ensureDir(dest)
  const entries = fs.readdirSync(src, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true })
  }
  ensureDir(dir)
}

function processHtml(content) {
  return content
    .replace(/href="\/([^"]+)"/g, 'href="./public/$1"')
    .replace(/src="\/([^"]+)"/g, 'src="./public/$1"')
}

console.log('Building...')

cleanDir(distDir)

console.log('Building CSS...')
execSync('npx tailwindcss -i ./css/styles.css -o ./dist/css/output.css --minify', { stdio: 'inherit' })

console.log('Building JS...')
execSync('npx esbuild js/app.js --bundle --minify --outfile=dist/js/bundle.js', { stdio: 'inherit' })

console.log('Copying HTML files...')
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8')

fs.writeFileSync(path.join(distDir, 'index.html'), processHtml(indexHtml))

console.log('Copying public directory...')
copyDir(publicDir, path.join(distDir, 'public'))

console.log('Build complete! Output in dist/')
