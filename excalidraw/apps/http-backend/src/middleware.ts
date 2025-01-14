import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

const JWT_KEY = "hello" // change this to dotenv
export const middleware = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  const success = jwt.verify(token, JWT_KEY);

  if(success){
    // req.userId = success.userId
    
    next();
    return;
  } else{
    res.json({
      message: "Invalid username or password"
    })
    return;
  }
}