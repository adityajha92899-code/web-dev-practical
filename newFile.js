const { doHomework, eatDinner, play } = require("./script");

doHomework()
  .then(eatDinner)
  .then(play)
  .then(() => console.log("All tasks completed "));
