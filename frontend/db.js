// db.js
const sql = require('mssql');

const config = {
  user: 'your-username',
  password: 'your-password',
  server: 'your-server.database.windows.net',
  database: 'your-database',
  options: {
    encrypt: true, // For security reasons, set to true for Azure
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to Azure SQL Database');
  } catch (error) {
    console.error('Error connecting to Azure SQL Database:', error);
    process.exit(1); // Exit the application if unable to connect
  }
};

module.exports = connectDB;
