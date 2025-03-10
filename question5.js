const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Set up the Express app
const app = express();
const port = 3000;

// Set up Sequelize to connect to the MySQL database
const sequelize = new Sequelize('mydatabase', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define the User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
});

// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome to the User API. Use /users to get the list of users.');
});

// Define the /users route
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: error.message });
    }
});

// Start the server and listen on port 3000
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Server is running on http://localhost:${port}`);
});