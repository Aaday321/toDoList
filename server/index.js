import express from "express"
import mongoose from "mongoose"
import bodyparser from "body-parser"
import cors from "cors"

import routes from "./routes/toDoRoutes"



const app = new express()
const PORT = 4010
const ATLAL_URL = `mongodb+srv://Ade-user-2:admin123@cluster0.oe5ybr1.mongodb.net/test`

const COMPAS_URL = `mongodb://127.0.0.1/ToDoApp`

//mongo connection
mongoose.Promise = global.Promise
mongoose.connect(COMPAS_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

//bodyparser setup
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

//CORS setup
app.use(cors())






routes(app)


app.get('/', (req, res) =>{
    res.send('BACKEND RUNNING')
})

app.listen(PORT, () =>
    {console.log(`The TO DO APP server is running on port: ${PORT}`)
    
    console.log("SERVER IS RUNNING - SUCCESS");}
)
