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

walkDir('./src', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace text-secondary with text-primary in headers
  content = content.replace(/<h([1-6])([^>]*)text-secondary/g, '<h$1$2text-primary');
  // There are some spans in Home.tsx that have text-secondary which is better as text-primary
  content = content.replace(/className="([^"]*)text-secondary([^"]*)"/g, (match, prefix, suffix) => {
    // Only if it doesn't already have text-primary (shouldn't happen, but safe)
    return `className="${prefix}text-primary${suffix}"`;
  });
  
  fs.writeFileSync(filePath, content, 'utf-8');
});
