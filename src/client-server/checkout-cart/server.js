const express = require('express');
const app = express();

app.use(express.static(__dirname));

//add your endpoints here

app.listen(3000, () => console.log('Example app listening on port 3000!'));