
const express = require('express');

const app = express();
const port = process.env.PORT || 80;


app.get('/', (req,res) => {
    res.status(200).send("welcome to this page");
});
app.listen(port, () => {
    console.log(`The application is running on http://localhost:${port}`);
});

