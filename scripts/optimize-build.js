const fs = require('fs');
const path = require('path');

console.log('🚀 Running pre-build optimizations...\n');

// Remove test dependencies from production build
const packagePath = path.join(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Check for unused dependencies
const unusedDeps = [
  '@testing-library/jest-dom',
  '@testing-library/react', 
  '@testing-library/user-event',
  'web-vitals'
];

let removed = 0;
unusedDeps.forEach(dep => {
  if (pkg.dependencies && pkg.dependencies[dep]) {
    delete pkg.dependencies[dep];
    removed++;
    console.log(`✓ Removed unused dependency: ${dep}`);
  }
});

if (removed > 0) {
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
  console.log(`\n✅ Removed ${removed} unused dependencies`);
} else {
  console.log('✓ No unused dependencies found');
}

console.log('\n📦 Optimization complete!\n');
