import express from 'express';
import sequelize from './database';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, LTI ATS Backend!');
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server is running at http://localhost:${port}`);
});