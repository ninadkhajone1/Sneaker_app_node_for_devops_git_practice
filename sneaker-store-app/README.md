# Stride sneaker store (practice project)

## Run locally
    npm install
    npm start
Open http://localhost:3000

## Endpoints
- /               -> store frontend
- /api/products   -> JSON list of shoes
- /health         -> health check

## Deploy on EC2 + Nginx
Same steps as the RC cars app. Nginx location block:

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
    }

Run with: pm2 start server.js --name sneaker-store
