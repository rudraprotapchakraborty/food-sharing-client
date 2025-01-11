# Community Food Sharing and Surplus Reduction Platform

## Purpose:
The Community Food Sharing and Surplus Reduction Platform aims to connect individuals and organizations to share surplus food, reduce food waste, and help those in need. This platform allows users to contribute, request, and manage food, promoting sustainable living and community support.

## Live URL:
- https://food-sharing-c62f5.web.app/

## Key Features:
- **User Authentication**: Secure user login and registration using Firebase Authentication.
- **Food CRUD Operations**:
  - **Create**: Add food items available for sharing, including details like food type, quantity, and expiration date.
  - **Read**: View available food items and filter by type, quantity, or location.
  - **Update**: Modify food details (e.g., change quantity or update food status).
  - **Delete**: Remove food listings when no longer available or after they are shared.
- **Food Requests**: Users can request food from available listings and manage their requests.
- **Dynamic User Interface**: Built with React to create a responsive and interactive UI.
- **Database Management**: MongoDB stores user and food data; Firebase is used for authentication and managing real-time data.

## npm Packages Used:
- **React**: For building the front-end UI.
- **React Router**: For navigation between pages.
- **Firebase**: For user authentication and real-time database.
- **Node.js**: For the back-end API to handle food data and requests.
- **MongoDB**: For storing food data, user information, and requests.
- **Express**: For building the back-end server and handling routes.
- **Cors**: To handle Cross-Origin Resource Sharing in API calls.
- **dotenv**: For managing environment variables securely.