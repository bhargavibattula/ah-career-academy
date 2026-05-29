# 🚀 Deployment Guide: AH Career Academy

This guide outlines the step-by-step instructions to deploy the **AH Career Academy** application using **Vercel** for the frontend, **Render** for the backend, and **MongoDB Atlas** for the database.

---

## 📋 Pre-Deployment Check
We have added `frontend/vercel.json` to handle client-side routing. This ensures that direct navigation to paths (e.g., `/about` or `/login`) does not return 404 errors on Vercel.

Before proceeding, run a Git commit and push the new configuration to your repository:
```bash
git add frontend/vercel.json
git commit -m "chore: add vercel.json for SPA routing redirects"
git push origin main
```

---

## 🗄️ Step 1: Database Setup (MongoDB Atlas)
If you haven't set up a MongoDB Atlas cluster yet:
1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new shared cluster (Free Tier).
3. **Network Access**: Go to **Network Access** > **Add IP Address** > Select **Allow Access from Anywhere** (`0.0.0.0/0`). 
   > [!IMPORTANT]
   > Render uses dynamic IP addresses that change frequently. You must allow access from anywhere, or configure a proxy/static IP service.
4. **Database Access**: Create a database user with read/write privileges. Keep the username and password handy.
5. **Connection String**: Click **Connect** > **Drivers** and copy your connection string. It will look like this:
   `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/ah-career?retryWrites=true&w=majority`

---

## 🖥️ Step 2: Backend Deployment (Render)
1. Log in to [Render](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository.
4. Configure the Web Service settings:
   - **Name**: `ah-career-backend` (or your preferred name)
   - **Environment**: `Node`
   - **Root Directory**: `backend` *(CRITICAL: Tell Render to run inside the backend folder)*
   - **Build Command**: `npm install`
   - **Start Command**: `npm start` (which executes `node server.js`)
5. Click **Advanced** to add **Environment Variables**:
   
   | Key | Value | Description |
   | :--- | :--- | :--- |
   | `NODE_ENV` | `production` | Enables production mode optimizations |
   | `MONGO_URI` | `your_mongodb_atlas_connection_string` | From Step 1 (replace user/password) |
   | `JWT_SECRET` | `a_long_random_secure_string_here` | Secret key for signing auth tokens |
   | `FRONTEND_URL` | `https://your-frontend-app.vercel.app` | The production URL of your Vercel app (you can update this after Step 3) |
   | `PORT` | `10000` | Port for the server (Render automatically sets this, but defining it is good practice) |

6. Click **Deploy Web Service**. Render will build and deploy the backend.
7. Once deployed, note down your backend URL (e.g., `https://ah-career-backend.onrender.com`). You can test it by visiting `https://ah-career-backend.onrender.com/api/health` in your browser.

---

## 🎨 Step 3: Frontend Deployment (Vercel)
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New** > **Project** and import your GitHub repository.
3. Configure the Project settings:
   - **Framework Preset**: `Vite` (automatically detected)
   - **Root Directory**: `frontend` *(CRITICAL: Tell Vercel to build starting from the frontend folder)*
4. Expand **Build and Development Settings** and ensure:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Expand **Environment Variables** and add the following variable:
   
   | Key | Value | Description |
   | :--- | :--- | :--- |
   | `VITE_API_URL` | `https://your-backend-app.onrender.com/api` | The URL of your backend on Render with `/api` appended |

6. Click **Deploy**. Vercel will build the frontend React application.
7. Once completed, Vercel will provide your frontend production domain (e.g., `https://ah-career-academy.vercel.app`).

---

## 🔄 Step 4: Align CORS Settings
Now that both apps are deployed:
1. Copy the Vercel production frontend URL (e.g., `https://ah-career-academy.vercel.app`).
2. Go to your **Render Web Service** dashboard for `ah-career-backend`.
3. Go to **Environment** and update the `FRONTEND_URL` environment variable value to match your actual Vercel URL.
4. Save the changes. Render will automatically trigger a re-deployment to apply the new environment variable.

---

## ✅ Deployment Verification
After deployment completes:
- Visit your Vercel URL (`https://your-frontend-app.vercel.app`).
- Check if pages like `/about`, `/contact`, `/careers` load and navigate correctly.
- Test login, registration, and forms. Because we use Bearer Tokens sent via the `Authorization` header, cross-origin authentication is fully supported.
