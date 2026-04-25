import fs from 'fs';
import path from 'path';

function walkDir(dir: string, callback: (path: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      if (f.endsWith('.tsx')) {
        callback(dirPath);
      }
    }
  });
}

walkDir('./src/pages', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content.replace(/text-\[rgb\(220 203 164 \/ 0\.8\)\]/g, 'text-text-muted');
  
  // also fix some stragglers like inline styles that might be an issue.
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated rgb in ${filePath}`);
  }
});
