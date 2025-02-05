# Food Sharing Website - Client Side

## Overview
The website is designed to connect individuals and organizations to share surplus food, reduce food waste, and help those in need. This platform enables users to contribute, request, and manage food resources, fostering sustainable living and community support.

## Screenshot
![Screenshot](/src/assets/screenshot.png)

## Technologies Used
- **Frontend:** React, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication & Real-Time Data:** Firebase
- **Other Dependencies:** Cors, Dotenv

## Core Features
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Food CRUD Operations**:
  - **Create**: Users can add food items with details like type, quantity, and expiration date.
  - **Read**: Browse available food items and filter them by type, quantity, or location.
  - **Update**: Modify food details such as quantity or availability status.
  - **Delete**: Remove food listings when no longer available.
- **Food Requests**: Users can request food from available listings and manage their requests.
- **Dynamic UI**: Built with React to ensure a responsive and interactive experience.
- **Database Management**: MongoDB stores user and food data, while Firebase handles authentication and real-time updates.

## Dependencies
The following npm packages are used:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "firebase": "^9.0.0",
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "nodemon": "^2.0.22"
  }
}
```

## How to Run the Project Locally
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **MongoDB** (set up locally or use a cloud instance like MongoDB Atlas)
- **Firebase Project** (for authentication)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/rudraprotapchakraborty/food-sharing-client.git
   cd food-sharing-client
   ```

2. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Backend Server**
   ```bash
   npm start
   ```

5. **Run the Frontend**
   ```bash
   cd client
   npm start
   ```

6. **Access the Application**
   Open `http://localhost:3000` in your browser.

## Live Project & Resources
- **Live Project**: [https://food-sharing-5c75a.web.app/](https://food-sharing-5c75a.web.app/)
- **Backend Repository**: [https://github.com/rudraprotapchakraborty/food-sharing-server](https://github.com/rudraprotapchakraborty/food-sharing-server)
---