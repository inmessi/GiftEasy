
const express = require('express');

const app = express();
const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`The application is running on http://localhost:${port}`);
});

