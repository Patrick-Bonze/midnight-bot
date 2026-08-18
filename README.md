# Midnight-BOT – Discord Ranking Bot

Midnight-BOT is a Discord bot developed with **JavaScript**, **Node.js**, **Discord.js**, and **MongoDB**. The project was created as a practical application of backend development concepts, database management, asynchronous programming, and API integration.

The bot features a reputation-based ranking system, seasonal competitions, interactive duels, user management, and automated ranking updates.

## 💡 Project Overview

The main goal of this project was to practice backend development by building a functional Discord bot capable of managing users, storing data in a database, and providing interactive features through Discord commands.

The project also helped strengthen my understanding of:

- Backend application development
- Database integration and data persistence
- REST/API concepts and external service integration
- Asynchronous programming with JavaScript
- Modular code organization
- Environment variables and application configuration

## ⚙️ Features

- ⭐ **Reputation System** – Users can earn reputation points through activity.
- 🏆 **Top 10 Ranking** – Displays the users with the highest reputation.
- 📅 **Season System** – Reputation seasons with automatic resets.
- 👑 **Hall of Fame** – Records the top 3 users at the end of each season.
- ⚔️ **Duel System** – Users can challenge each other and bet reputation points.
- 👤 **User Management** – Stores and manages user data using MongoDB.
- 🛠️ **Administrative Commands** – Commands for managing rankings, seasons, and the Hall of Fame.
- 💬 **Message Validation** – Prevents spam and invalid messages from generating reputation points.

## 🛠️ Technologies Used

### Backend
- JavaScript
- Node.js
- Discord.js

### Database
- MongoDB
- Mongoose

### Tools
- Git
- GitHub
- Visual Studio Code
- dotenv

## 📚 What I Learned

During the development of this project, I practiced:

- Building applications with Node.js
- Working with the Discord API through Discord.js
- Creating and handling Discord events and commands
- Connecting a Node.js application to MongoDB
- Creating database models with Mongoose
- Performing CRUD operations
- Managing asynchronous operations with `async/await`
- Working with environment variables
- Structuring a project into multiple modules
- Using Git and GitHub for version control

## 📁 Project Structure

```text
midnight-bot/
├── models/
│   ├── dor.js
│   ├── guild.js
│   ├── history.js
│   ├── season.js
│   └── user.js
├── .gitignore
├── index.js
├── package.json
└── package-lock.json

🚀 How to Run
1. Clone the repository: git clone https://github.com/Patrick-Bonze/midnight-bot.git

2. Install dependencies: npm install

3. Configure environment variables(Create a .env file in the project root:); TOKEN=your_discord_bot_token
MONGO_URI=your_mongodb_connection_string

4. Start the bot: node index.js

Note: A Discord Bot application and a MongoDB database are required to run the project.

🔐 Security

Sensitive credentials such as the Discord bot token and MongoDB connection string are stored in environment variables and are not included in the repository.

The .env file is excluded through .gitignore.

📌 Status

This project was developed as a personal learning project and is currently used as a practical demonstration of my backend development skills with JavaScript and Node.js.
