const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const randomColor = ['red', 'yellow', 'brown', 'green', 'black', 'pink', 'blue']


const cWidth = canvas.clientWidth;
const cHeight = canvas.clientHeight;


const cubSize = 50;

ctx.strokeStyle = "#fff";
ctx.beginPath();
function drawSet() {
    //vertical line
    for (let i = 0; i < cWidth; i += cubSize) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, cHeight);
        ctx.stroke();
    }
    //horizontal line
    for (let i = 0; i < cHeight; i += cubSize) {
        ctx.moveTo(0, i)
        ctx.lineTo(cWidth, i)
        ctx.stroke()
    }
}

let counterX = 11;
let counterY = 11;

let velosityX = 3
let velosityY = 2 * cHeight / cWidth

function someAnimation() {
    ctx.clearRect(0, 0, cWidth, cHeight)
    // drawSet()
    counterX += velosityX;
    counterY += velosityY

    ctx.beginPath();
    ctx.arc(cWidth - counterX, cHeight - counterY, 10, 0, Math.PI * 2);
    ctx.fill();

    if (cWidth - counterX - 10 <= 0 || cWidth + 10 - counterX >= cWidth) {
        velosityX = -velosityX
        ctx.fillStyle = getRandomColor()
    } if (
        cHeight - 10 - counterY <= 0 || cHeight + 10 - counterY >= cHeight
    ) {
        velosityY = -velosityY
        ctx.fillStyle = getRandomColor()
    }

    requestAnimationFrame(someAnimation);
}

function getRandomColor() {
    return randomColor[Math.floor(Math.random() * randomColor.length)]
}


someAnimation()

drawSet();
