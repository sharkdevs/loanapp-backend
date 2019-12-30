import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import router from './router/apiRouter.js';

const app = new express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://127.0.0.1:${port}`);
});
