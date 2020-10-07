//Dependencies
const robot = require('robotjs'); //Robot
var mouse = robot.getMousePos();

let COMMENTS = [
    "\"Eat babies, Run fast.\" ~Frazeul Poinsh, 1976.",
    "I've drunken some drunking water using my liver.",
    "I've got little chinese figurines that I keep on my bathroom shelf.",
    "Consumable Minecraft orange juice for sale at the market.",
    "I climb palm trees to pick off the frawns that grow on them.",
    "I make a small overview of a Vietnamese bath.",
    "Yesterday was leg day, today is satanic curse day",
    "Youngsters these days are too interested in homegrown carrots",
    "I get stronger every time you question me",
    "BOOPBIBO",

    "I am the owner of the Southern Peninsula.", "I am the owner of the Northern Peninsula.",
    "The entire Eastern hemisphere belongs to me.", "The entire Western hemisphere belongs to me.",

    "Je'mappele shiken nogget", "\"Do not think, do not do, only smell.\"",
];
// Average human: 190 - 200
// Me: 180 - 250
// This bot: 800 - 1000 (Damn.)
let CHARS_PER_MINUTE = 1000; //Default: 1000
let WAIT_BETWEEN_POSTS = [500, 800]; //Default: [4000, 5000]
let INITIAL_WAIT_TIME = 2000; //Default: 2000
let SHOULD_COMMENT = false;

// Coordinates
let NEXTPOST = [1450, 555]

// Screenshot variables
// #1095F6 POST active, #BBE1FD POST inactive
let SCHEIGHT = [680, 850]
let SCWIDTH = [1120, 1520]

function getComment() {
    return COMMENTS[Math.floor(Math.random() * COMMENTS.length)];
}
function findPostButton() {
    // seg fault 11
    var img = robot.screen.capture(SCWIDTH[0] - 10, SCHEIGHT[0] - 10, SCWIDTH[1] + 10, SCHEIGHT[1] + 10);
    let coords = []

    doublefor:
    for (var i = 0; i < (SCWIDTH[1] - SCWIDTH[0]); i++) {
        for (var j = 0; j < (SCHEIGHT[1] - SCHEIGHT[0]); j++) {
            var samplecolor = img.colorAt(i, j);
            if (samplecolor == "b3defb") {
                coords[0] = i + SCWIDTH[0];
                coords[1] = j + SCHEIGHT[0];
                break doublefor;
            }
        }
    }

    return coords;
}
function nextPost() {
    robot.moveMouseSmooth(NEXTPOST[0], NEXTPOST[1]);
    robot.mouseClick();

    setTimeout(function () {
        mainFunc()
    }, Math.floor(Math.random() * (WAIT_BETWEEN_POSTS[1] - WAIT_BETWEEN_POSTS[0] + 1) + WAIT_BETWEEN_POSTS[0]))
}

function mainFunc() {
    // Find post button
    let pbCoords = findPostButton();
    if(!pbCoords[0]) {
        nextPost();
        return;
    }

    // Like
    robot.moveMouseSmooth(pbCoords[0] - 274, pbCoords[1] - 105);
    robot.mouseClick();

    if (SHOULD_COMMENT) {
        // Comment bar
        robot.moveMouseSmooth(pbCoords[0] - 274, pbCoords[1]);
        robot.mouseClick();

        let commenttext = getComment();
        robot.typeStringDelayed(commenttext, CHARS_PER_MINUTE);

        // No need to use setTimeout! typeStringDelayed() is synchronous
        robot.moveMouseSmooth(pbCoords[0], pbCoords[1]);
        robot.mouseClick();
    }
    
    nextPost();
}

setTimeout(mainFunc, INITIAL_WAIT_TIME);
