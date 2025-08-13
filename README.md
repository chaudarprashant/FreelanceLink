
# 💼 FreelanceConnect

**FreelanceConnect** is a MERN stack-based micro freelancing marketplace designed for students and service providers.  
It enables users to post, browse, and accept freelance work requests, and includes real-time chat, payment tracking, and project management features.

---

## 📌 Features
- **🔐 Authentication** – Secure signup/login using JWT
- **📝 Post Work Requests** – Users can create detailed job posts with file attachments
- **🔍 Browse Jobs** – Search and filter by category, budget, and deadlines
- **💬 Real-Time Chat** – Service providers and users can chat via Firebase integration
- **💳 Payment Tracking** – Manual UPI transfer support and payment history
- **📂 File Attachments** – Upload and view project-related files
- **📱 Responsive Design** – Mobile-friendly UI with Tailwind CSS

---

## 🛠️ Tech Stack
**Frontend**  
- React.js  
- Tailwind CSS  
- Firebase (Authentication & Firestore)  

**Backend**  
- Node.js  
- Express.js  
- MongoDB  

**Other Integrations**  
- Razorpay (optional payments)  
- CometChat (alternative chat integration)  

---

## 📂 Project Structure
```

freelanceconnect/
├── backend/           # Express + MongoDB API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/          # React + Tailwind UI
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md

````

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/freelanceconnect.git
cd freelanceconnect
````

### 2️⃣ Install dependencies

**Backend**

```bash
cd backend
npm install
```

**Frontend**

```bash
cd ../frontend
npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file in `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

### 4️⃣ Run the project

**Backend**

```bash
npm start
```

**Frontend**

```bash
npm run dev
```

---

## 📸 Screenshots

| Home Page                     | Chat Interface                | Post Job                         |
| ----------------------------- | ----------------------------- | -------------------------------- |
| ![Home](screenshots/home.png) | ![Chat](screenshots/chat.png) | ![Post](screenshots/postjob.png) |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

**Prashant Chaudhar**
📩 Email: [prashantchaudar666@gmail.com](mailto:prashantchaudar666@gmail.com)
🌐 Portfolio: *\[https://portfolio-vn3f.onrender.com]*

```

---

If you want, I can **add GitHub profile badges, workflow status icons, and visual tech stack logos** so your README looks *premium* like top open-source projects.  
Do you want me to make that version next?
```
