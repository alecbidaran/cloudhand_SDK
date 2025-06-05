apt-get update && \
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
apt-get install -y nodejs && \
apt-get clean && rm -rf /var/lib/apt/lists/*

npm install -g http-server
cd frontend
npm install
npm run build
cp dist/bundle.js ../static/
cd .. 
cd static
npx http-server .
