
#!/bin/bash

# Build the project
npm run build

# Create a temporary directory for gh-pages
rm -rf gh-pages-temp
mkdir gh-pages-temp

# Copy dist contents to temp directory
cp -r dist/* gh-pages-temp/

echo "Build completed! The 'gh-pages-temp' directory contains your built site."
echo "To deploy manually:"
echo "1. Push your code to GitHub"
echo "2. Go to Settings > Pages in your GitHub repository"
echo "3. Select 'Deploy from a branch' and choose 'gh-pages'"
echo "4. Your site will be available at: https://yourusername.github.io/your-repo-name/"
