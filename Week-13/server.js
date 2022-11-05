const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

// app.use('/', (req, res) => res.send("Hello world"));
app.use('/api', require('./routes/routes'));


app.listen(port, () => console.log('BackEnd Server Is On=', port));
