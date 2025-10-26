const express = require("express")
const routes = require("./routes/routing")

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000

app.use('/', routes)

app.listen(PORT, ()=>{
    console.log(`Listening to the port${PORT}`)
})

