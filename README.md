# Password Manager

A secure and interactive password manager built using React for the frontend, Express.js for the backend, and MongoDB for data storage. This application allows users to store site names, usernames, and passwords securely.

## Features

- **User-friendly UI** – Interactive and easy-to-use interface.
- **Secure Storage** – Stores site names, usernames, and passwords in MongoDB.
- **Encryption** – Ensures password security (if implemented).
- **CRUD Operations** – Add, view, update, and delete saved credentials.
- **Responsive Design** – Works across different devices.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**:  Not now

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB

### Steps to Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Raju-kushwaha1230/Password-Manager-with-MongoDb
   cd Password-Manager-with-MongoDb
   ```

2. **Install dependencies:**
   ```sh
   # Install backend dependencies
   cd backend
   npm install //install express also 

   # Install frontend dependencies
   cd // u need to stay in root directory 
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file in the server directory and add the required variables, e.g.,
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the backend server:**
   ```sh
   cd backend
   node server.js
   ```

5. **Run the frontend app:**
   ```sh
    //stay root directory
   npm run dev
   ```

6. **Access the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser for backend
   Open [http://localhost:5173/](http://localhost:5173/) in your browser for client

## Future Enhancements

- Implement password encryption using bcrypt or AES.
- Add authentication (JWT or OAuth).
- Include a password generator.
- Implement Two-Factor Authentication (2FA).
- Deploy the application on a cloud platform.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## Contact

For any queries, reach out at [mightyrajukushwaha@gmail.com](mailto:your-email@example.com).

