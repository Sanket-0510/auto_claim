const express = require('express')

const app = express();








const portNumber = process.env.PORT || 8000
app.listen(portNumber, (req,res)=>{
  console.log(`listening on port ${portNumber}`)
})

app.get('/', (req,res)=>{
    res.status(500).send("welcome to the app")
    
})