const express = require('express');
const app = express();

//Load routes
const userRoutes = require('./routes/user');
const ideaRoutes = require('./routes/ideas');

//routes
app.use('/user', userRoutes);
app.use('/ideas', ideaRoutes );

app.get('/',  (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () =>{
  console.log(`Server jalan boss....`);
});
