# 🚀 Deployment Guide: AH Career Academy (Vercel Multi-Services)

This guide outlines the step-by-step instructions to deploy the entire **AH Career Academy** application (both Frontend and Backend) using **Vercel Multi-Services** (Beta) with **MongoDB Atlas**.

---

## 📋 Pre-Deployment Check
We have set up the project for Vercel Multi-Services with the following configurations:
1. **Root `vercel.json`**: Configures Vercel to treat the repository as a monorepo containing:
   - `frontend` (Vite, mounted at `/`)
   - `backend` (Express Node.js, mounted at `/_/backend`)
2. **Frontend `frontend/vercel.json`**: Handles client-side routing rewrites for the SPA.

Commit and push these files to your repository:
```bash
git add vercel.json frontend/vercel.json DEPLOYMENT.md
git commit -m "chore: add vercel multi-service and routing configuration"
git push origin main
```

---

## 🗄️ Step 1: Database Setup (MongoDB Atlas)
1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new shared cluster (Free Tier).
3. **Network Access**: Go to **Network Access** > **Add IP Address** > Select **Allow Access from Anywhere** (`0.0.0.0/0`).
   > [!IMPORTANT]
   > Vercel's services run on dynamic cloud IPs. You must allow access from anywhere (`0.0.0.0/0`).
4. **Database Access**: Create a database user with read/write privileges.
5. **Connection String**: Click **Connect** > **Drivers** and copy your connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/ah-career?retryWrites=true&w=majority`).

---

## 🎨 Step 2: Deploying to Vercel (Multi-Service Project)
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New** > **Project** and import your GitHub repository.
3. Vercel will automatically read the root `vercel.json` and detect the **Services** project framework.
4. Add the following **Environment Variables** in the Vercel Project Settings:

   | Key | Value | Service Target / Description |
   | :--- | :--- | :--- |
   | `MONGO_URI` | `your_mongodb_atlas_connection_string` | Used by **backend** (Step 1 string) |
   | `JWT_SECRET` | `a_long_random_secure_string` | Used by **backend** for signing user auth tokens |
   | `NODE_ENV` | `production` | Used by **backend** to optimize performance |
   | `VITE_API_URL` | `/_/backend/api` | Used by **frontend** *(CRITICAL: This relative path points directly to your Vercel backend route)* |
   | `FRONTEND_URL` | `https://your-vercel-domain.vercel.app` | Used by **backend** CORS settings (change to your actual Vercel domain name once deployed) |

5. Click **Deploy**. Vercel will build and start both the Vite frontend and Node backend.

---

## 🔒 Cookie & Auth Behavior (Same-Origin Advantage)
Because both services are hosted under the same Vercel domain (`your-project.vercel.app`):
- Frontend queries `/_/backend/api/...` which Vercel forwards to the backend (stripping the `/_/backend` prefix).
- Since it is same-origin, secure HTTP-only cookies (e.g., `token`) are automatically passed by the browser to the backend without CORS or cross-origin restrictions.
- In addition, the frontend code falls back to `Authorization: Bearer <token>` header auth for dev environments, guaranteeing login status across all settings.

---

## ✅ Deployment Verification
After deployment finishes:
1. Open your Vercel project deployment URL.
2. Verify all React router pages (e.g. `/about`, `/contact`, `/careers`) reload without 404 errors.
3. Register or sign in to confirm connectivity with the database and authentication service.
