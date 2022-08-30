//importing the dependencies
import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import movieRoutes from './routes/movies.js'
import listRoutes from './routes/lists.js'

import {} from "dotenv/config";
//creating app routes
const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/movie', movieRoutes)
app.use('/api/list', listRoutes)

app.use((error, req, res, next) => {
  console.log(error)
})
const port = process.env.PORT || 8080;
//mongoose database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`DB connection Successfull!`);
      console.log(`Backend is running on port - ${port}!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
