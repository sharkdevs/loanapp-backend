import express from 'express';
import router from './router/apiRouter.js';

const app = new express();

app.use(router);
app.listen(3000, () => {
  console.log(`Server started on http://127.0.0.1:3000`);
});
