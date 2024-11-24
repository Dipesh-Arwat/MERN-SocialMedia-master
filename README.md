## MERN Social Media Application

A full-stack social media application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application provides users with the ability to register, log in, create posts, and connect with other users.  

### **Live Demo**
[Access the live application here](https://mern-socialmedia-master.onrender.com)

---

### **Features**
- **User Authentication**: Secure sign-up and login functionality.
- **Profile Management**: Update profile details such as name, profile picture, and bio.
- **Post Creation**: Users can create, edit, and delete posts.
- **Follow System**: Follow and unfollow other users.
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.

---

### **Technologies Used**
- **Frontend**: React.js, Redux, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT) and bcrypt.js for password hashing
- **Styling**: CSS

---

### **Project Setup**

#### Prerequisites:
- **Node.js** installed on your system
- **MongoDB** instance (local or cloud-based like MongoDB Atlas)

#### 1. Clone the Repository:
```bash
git clone https://github.com/your-username/mern-socialmedia.git
cd mern-socialmedia
```

#### 2. Install Dependencies:
For the backend:
```bash
cd backend
npm install
```

For the frontend:
```bash
cd frontend
npm install
```

#### 3. Configure Environment Variables:
Create a `.env` file in the `backend` directory with the following:
```env
PORT=5000
MONGODB_CONNECTION=your-mongodb-connection-string
JWTKEY=your-secret-key
```

#### 4. Start the Application:
Start the backend:
```bash
cd backend
npm start
```

Start the frontend:
```bash
cd frontend
npm start
```

The application should now be running at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

---

### **How to Use**
1. Register or log in using your credentials.
2. Create, edit, or delete posts from your profile.
3. Search for other users and follow them to view their posts.
4. Update your profile to personalize your experience.

---

### **Future Enhancements**
- Add real-time chat functionality using WebSockets.
- Implement notifications for likes, comments, and follows.
- Enhance the explore page with trending posts and user suggestions.

---

### **Contributing**
Contributions are welcome! If you’d like to make any improvements:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Added feature-name"`.
4. Push the changes: `git push origin feature-name`.
5. Submit a pull request.
