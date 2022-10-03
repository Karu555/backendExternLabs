const express = require('express')
const cors = require('cors')

const app=express();
app.use(cors())

app.get("/", (req, res)=> {
    res.download("./screen.png")
})

app.listen(5000)