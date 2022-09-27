import express from "express"
import mongoose from "mongoose"
import bodyparser from "body-parser"
import cors from "cors"
import routes from "./routes/basketballRoutes"

const app = express()
const PORT = 4001

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://127.0.0.1/basketballDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

//CORS setup
app.use(cors())

routes(app)

app.get('/', (req, res) => {
    res.send(`The basketball application is running on port ${PORT}`)
})




app.listen(PORT, () =>
    {console.log(`The basketball server is running on port: ${PORT}`)
    console.log("SERVER IS RUNNING - SUCCESS");}
)