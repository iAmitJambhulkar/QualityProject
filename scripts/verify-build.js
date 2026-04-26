const fs = require('fs');
const path = require('path');

console.log('\n🔍 Verifying production build...\n');

const buildDir = path.join(__dirname, '../build');

if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory not found. Run "npm run build" first.');
  process.exit(1);
}

// Count files
const countFiles = (dir) => {
  let count = 0;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      count += countFiles(filePath);
    } else {
      count++;
    }
  });
  return count;
};

// Get file sizes
const getSize = (filePath) => {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
};

// Check for source maps
const hasSourceMaps = (dir) => {
  const files = fs.readdirSync(dir, { recursive: true });
  return files.some(file => file.endsWith('.map'));
};

const totalFiles = countFiles(buildDir);
const indexSize = getSize(path.join(buildDir, 'index.html'));
const hasMaps = hasSourceMaps(buildDir);

console.log('📊 Build Statistics:\n');
console.log(`   Total files: ${totalFiles}`);
console.log(`   Index.html size: ${indexSize} KB`);
console.log(`   Source maps: ${hasMaps ? '❌ Found (should be disabled)' : '✅ Disabled'}`);

// Check for gzip files
const staticDir = path.join(buildDir, 'static');
if (fs.existsSync(staticDir)) {
  const jsDir = path.join(staticDir, 'js');
  const cssDir = path.join(staticDir, 'css');
  
  if (fs.existsSync(jsDir)) {
    const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));
    const gzFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.gz'));
    console.log(`   JS files: ${jsFiles.length}`);
    console.log(`   Gzipped JS: ${gzFiles.length}`);
  }
  
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    console.log(`   CSS files: ${cssFiles.length}`);
  }
}

console.log('\n✅ Build verification complete!\n');
console.log('📝 Next steps:');
console.log('   1. Test locally: npx serve -s build');
console.log('   2. Open DevTools Network tab');
console.log('   3. Verify < 10 requests on initial load');
console.log('   4. Check transfer sizes\n');
