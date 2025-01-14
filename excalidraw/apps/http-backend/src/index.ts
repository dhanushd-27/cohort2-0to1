import express, { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from '@repo/backend_common/config';

const app = express();
// add it to env or config file

app.post('/signup', (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  // create user
  // zod validation
})

app.post('/signin', (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  const userId = 1;

  const token = jwt.sign({
    username,
    userId
  }, JWT_SECRET)

  res.json({
    token: token
  })
})

app.post('/create-token', (req: Request, res: Response) => {

})

app.listen(3000, () => {
  console.log("Done")
})
