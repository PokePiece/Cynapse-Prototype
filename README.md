# Cynasius

The **Cynasius** is a secure, dynamic platform for a powerful autonomous supercomputer developed by Dillon Carey. It connects to the Void powered by Together AI (LLaMA 3 70B), allowing for natural language interactions, live routing, and future integration of AI suites and real-time rendering systems.

Hosted on **Vercel**, the frontend is protected behind an authentication gate and supports modular extension for advanced functionality.

---

## ⚙️ Tech Stack

- ⚛️ **React + Vite** frontend
- 🧱 **Tailwind CSS** for styling
- 🔐 **Custom AuthGate** with credential hashing and login wall
- 🌐 Live backend integration via **Together AI**
- 🧠 Modular panels for AI suites, Viewport, routing core, and chatbot
- 🧪 Token and usage stats tracking with UI updates

---

## 📁 Project Structure

src/
├── components/
│ ├── AuthGate.tsx # Login layer for secure access
│ ├── ChatPanel.tsx # Renders chat history
│ ├── LeftPanel.tsx # Left-side navigation/AI suite panel
│ ├── RightPanel.tsx # Token usage and stats panel
│ └── Viewport.tsx # Reserved for 3D or OS visual output
├── sections/
│ ├── Header.tsx
│ └── Footer.tsx
├── App.tsx # Main application logic
└── main.tsx # Entry point with Auth wrapper

yaml
Copy
Edit

---

## 🔐 Authentication

Access to the main application is gated using a hashed credentials check through `AuthGate.tsx`. All frontend content is restricted unless the user passes this authentication layer. Only the authorized developer (Director) can access the dashboard.

---

## 💬 Features

- 📡 **Live Chat** with OS AI via Together AI backend
- 💡 **Conversation Memory** with visible user/AI history
- 🎯 **Modular Architecture** for routing, suites, and 3D interfaces
- 📊 **Token Tracking** with usage visualization per session
- 🔁 **Dynamic UI Updates** after each interaction
- ⚡ Secure, performant deployment via **Vercel**

---

## 🛠️ Usage

### 1. Install Dependencies

```bash
npm install
2. Run Locally
bash
Copy
Edit
npm run dev
Make sure the backend (scomaton-backend) is running locally or properly deployed.

3. Production Build
bash
Copy
Edit
npm run build
npm run preview
4. Environment
If environment separation is needed, replace backend API URLs between:

http://localhost:8000 (dev)

https://scomaton-backend.onrender.com (prod)

You can toggle these in App.tsx.

🧠 Core Logic Overview
App.tsx: Central logic hub—controls chat state, handles backend communication, and updates token UI.

AuthGate.tsx: Secures frontend behind a login form.

ChatPanel.tsx: Shows user-AI interaction stream.

RightPanel.tsx: Renders token stats fetched from backend.

Viewport.tsx: Placeholder for future real-time rendering or AI suite feedback.

Footer.tsx: Sends user messages and toggles chat display.

🚀 Deployment
Hosted on Vercel with CI/CD from GitHub. Authentication is enforced client-side, and API keys remain securely on the backend.

🔒 Security Notes
All backend communication is done over HTTPS.

User credentials are hashed and not stored client-side.

Future versions will integrate:

JWT-based login

Session locking

Encrypted token sync across OS AI components

✍️ Author
Developed by Dillon Carey
Director of Personal AI Systems
https://dilloncarey.com
