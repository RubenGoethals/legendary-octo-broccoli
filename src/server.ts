import http from "http";
import express from "express";
import { compute } from "./compute";

export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const game = request.body.game;
  if (!request.is('application/json')) {
    // Send error here
    response.send(400);
  } 
  //console.log(game);
  const score = compute(game);

  return response.send({ score});
});
