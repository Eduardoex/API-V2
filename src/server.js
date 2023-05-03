const express = require("express")

const {usersRoutes} = require("./routes/users.routes")

const app = express();
app.use(express.json())


const PORT =  3333;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

