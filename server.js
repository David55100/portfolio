const express = require('express');
const path = require('path');
const port = process.env.PORT || 3002;

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.listen(port, function(){
    console.log("This is running on port " + port)
})

