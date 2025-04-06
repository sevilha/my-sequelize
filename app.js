require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./config/database');
const userRoutes = require('./routes/users');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API está funcionando! Use /users');
});

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database connected & tables synced');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
