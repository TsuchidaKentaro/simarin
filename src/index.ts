import express, { Request, Response } from 'express';


const app = express();
const port = 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('バックエンドでExpress.jsを実行出来る');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
