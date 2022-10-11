const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;

//importing Routers
const ListingsRouter = require("./routers/listingRouter");
const UsersRouter = require("./routers/userRouter");

//importing controllers
const ListingsController = require("./controllers/listingController");
const UserController = require("./controllers/userController");

//importing DB
const db = require("./db/models/index");
const { listing, user } = db;

//initializing controlers
const listingsController = new ListingsController(listing);
const usersController = new UserController(user);

//initializing controllers
const listingsRouter = new ListingsRouter(listingsController).routes();
const usersRouter = new UsersRouter(usersController).routes();

const app = express();
app.use(cors());

//enable reading JSON request bodies
app.use(express.json());

//enable and use router
app.use("/home", listingsRouter);
app.use("/user", usersRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
