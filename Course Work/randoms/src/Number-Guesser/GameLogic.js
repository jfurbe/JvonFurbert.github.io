
export function getWinner(userGuess) {
    let target= getTarget();
    let computerGuess = getTarget();
    let winner = Math.abs(target-computerGuess) >= Math.abs(target-userGuess) ? "user" : "computer"
    return ([winner, target, computerGuess])
}

export function getTarget() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}