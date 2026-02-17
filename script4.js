const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
const gameOverText = document.getElementById("gameOver");

let score = 0;
let isGameOver = false;

/* Jump */
document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !player.classList.contains("jump")) {
        player.classList.add("jump");
        setTimeout(() => {
            player.classList.remove("jump");
        }, 500);
    }

    if (event.code === "KeyR") {
        restartGame();
    }
});

/* Move obstacle */
function moveObstacle() {
    let obstaclePosition = 600;

    const obstacleInterval = setInterval(() => {
        if (isGameOver) {
            clearInterval(obstacleInterval);
            return;
        }

        obstaclePosition -= 5;
        obstacle.style.left = obstaclePosition + "px";

        const playerBottom = parseInt(
            window.getComputedStyle(player).getPropertyValue("bottom")
        );

        if (obstaclePosition < 90 && obstaclePosition > 40 && playerBottom < 40) {
            gameOver();
        }

        if (obstaclePosition < 0) {
            obstaclePosition = 600;
            score++;
            scoreDisplay.textContent = score;
        }
    }, 20);
}

/* Game Over */
function gameOver() {
    isGameOver = true;
    gameOverText.style.display = "block";
}

/* Restart */
function restartGame() {
    score = 0;
    isGameOver = false;
    scoreDisplay.textContent = score;
    gameOverText.style.display = "none";
    moveObstacle();
}

moveObstacle();
