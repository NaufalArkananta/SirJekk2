import Express from "express";
import ShapeRoute from "./router/BangunDatarRoute";
import GeometryRoute from "./router/bangunRuangRoute"
import ComparationRoute from "./router/comparationRoute"
import ANBKRoute from "./router/anbkRoute"

const app = Express();
// define addres for route of bangunDatar
app.use(`/shape`,ShapeRoute)
//use diatas untuk menanbbahkan prefix pada url yang mengarah ke route bangun datar

//allow read data from body
app.use(Express.json())
app.use(`/geometry`, GeometryRoute )

app.use(`/comparation`, ComparationRoute)

app.use(`/anbk`, ANBKRoute)

//define RUNNING port
const PORT = 8000

// define START server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})