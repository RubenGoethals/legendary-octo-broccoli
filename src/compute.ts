import { Game } from "./types";

export function compute(game: Game): number {
  var gameScores = Array(10).fill(0);
  var countStrike = 0;

  for (var i = 0; i < 10; i++) {
    if (strikeBoolean(i)) {
      countStrike++;

      if (i == 9){
        gameScores[i] = game[i][0] + game[i][1] + game[i][2]
      }
      else {
      switch (countStrike){
        case 1:
          strike(i);
          break;
        default:
          double(i);
          break;
        }
      } 
    }
    else if (spareBoolean(i)) {
      if (i == 9){
        gameScores[i] = game[i][0] + game[i][1] + game[i][2];
      }
      else {
      spare(i);
      countStrike = 0;
      }
    } 
    else {
      normalScore(i);
      countStrike = 0;
    }
  }

  //console.log(gameScores)
  return gameScores.reduce((a, b) => a + b, 0);

  function strikeBoolean(i: number) {
    return game[i][0] === 10;
  }

  function spareBoolean(i: number) {
    return (game[i][0] + game[i][1]) === 10;
  }

  function strike(i: number) {
    gameScores[i] += game[i][0] + game[i+1][0] + game[i+1][1];
  }

  function double(i : number) {
    gameScores[i-1] += game[i+1][0];
    strike(i);
  }

  function spare(i: number) {
    gameScores[i] += game[i][0] + game[i][1] + game[i+1][0]; 
  }

  function normalScore(i: number) {
    gameScores[i] += game[i][0] + game[i][1];
  }

}
