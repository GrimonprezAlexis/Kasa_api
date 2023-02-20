const express = require('express');
const app = express();

const router = express.Router(); // Invoke the Express Router
const apiRouter = require('./router')(router); // Import the application end points/API
app.use('/api', apiRouter); // Assign name to end points

// if not in production use the port 5000
const PORT = 5000;
console.log('server started on port:',PORT);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));