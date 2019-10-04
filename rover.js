// Rover Object Goes Here
let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
  };
 //-----------------------
  
  let grid = [
    [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, {x: 8, y: 1}, {x: 9, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 5, y: 2}, {x: 6, y: 2}, {x: 7, y: 2}, {x: 8, y: 2}, {x: 9, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3}, {x: 7, y: 3}, {x: 8, y: 3}, {x: 9, y: 3}],
    [{x: 0, y: 4}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4}, {x: 8, y: 4}, {x: 9, y: 4}],
    [{x: 0, y: 5}, {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}, {x: 8, y: 5}, {x: 9, y: 5}],
    [{x: 0, y: 6}, {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6}, {x: 7, y: 6}, {x: 8, y: 6}, {x: 9, y: 6}],
    [{x: 0, y: 7}, {x: 1, y: 7}, {x: 2, y: 7}, {x: 3, y: 7}, {x: 4, y: 7}, {x: 5, y: 7}, {x: 6, y: 7}, {x: 7, y: 7}, {x: 8, y: 7}, {x: 9, y: 7}],
    [{x: 0, y: 8}, {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8}, {x: 6, y: 8}, {x: 7, y: 8}, {x: 8, y: 8}, {x: 9, y: 8}],
    [{x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9}],
  ];
  
  function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch(rover.direction) {
      case "N":
        return rover.direction = "W";
      case "W":
        return rover.direction = "S";
      case "S":
        return rover.direction = "E";
      case "E":
        return rover.direction = "N";
     }
  };
  
  function turnRight(rover) {
    console.log("turnRight was called!");
    switch(rover.direction) {
      case "N":
        return rover.direction = "E";
      case "E":
        return rover.direction = "S";
      case "S":
        return rover.direction = "W";
      case "W":
        return rover.direction = "N";
     }
  };
  
  function moveForward(rover) {
    console.log("moveForward was called")
    switch(rover.direction) {
      case "N":
        return rover.y--;
      case "E":
        return rover.x++;
      case "S":
        return rover.y++;
      case "W":
        return rover.x--;
     }
  };
  
  function roverCommands(string) {
    for (i = 0; i < string.length; i++) {
      switch(string[i]) {
        case "l":
          turnLeft(rover);
          rover.travelLog.push("turnLeft was called!");
          break;
        case "r":
          turnRight(rover);
          rover.travelLog.push("turnRight was called!");
          break;
        case "f":
          moveForward(rover);
          rover.travelLog.push("moveForward was called");
          break;
      }
    }
  };
  
  roverCommands("rffrfflfrff");
  console.log(rover);
  