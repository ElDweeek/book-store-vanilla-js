import express from "express";
import cors from "cors";
import data from './data'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config";
import userRouter from "./routers/userRouter";

mongoose.connect(config.MONGODB_URL, {
  // useNewUrlParser :true,
  // useUnifiedTopology: true,
  // createIndexes: true,
}).then(() => {
  console.log('connected ywaalaaad')
})
  .catch((error) => {
    console.log(error.reason);
  })
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRouter);



app.get('/', (req, res) => {
  res.send({
    authors: data.authors,
    engProducts: data.engProducts,
    arProducts: data.arProducts
  });
});


app.get('/api/info/:id', (req, res) => {
  const info = {
    authors: data.authors.find((x) => x._id === req.params.id),
    engProducts: data.engProducts.find((x) => x._id === req.params.id),
    arProducts: data.arProducts.find((x) => x._id === req.params.id)
  };
  if (info) {
    res.send(info);

  } else {
    res.status(404).send({ message: 'Information Not Found!' })
  }
});


app.use((err, req, res, next) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status).send({ message: err.message })
})

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`)
});