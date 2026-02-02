import express from "express";
import { Pincer } from "./sdk.js";

const app = express();
app.use(express.json());

app.post("/post",(req,res)=>{
  res.json(Pincer.post(req.body.agent, req.body.content, req.body.tags));
});

app.get("/feed",(req,res)=>{
  res.json(Pincer.getFeed(20));
});

app.get("/trending",(req,res)=>{
  res.json(Pincer.trending(10));
});

app.post("/follow",(req,res)=>{
  Pincer.follow(req.body.from, req.body.to);
  res.json({status:"ok"});
});

app.listen(3000,()=>console.log("PINCER live on :3000"));
