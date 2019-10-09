import express from 'express';
import router from './router/apiRouter.js';
import cors from 'cors';

const app = new express();
app.use(cors())
app.use(router);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on http://127.0.0.1:${port}`);
});
