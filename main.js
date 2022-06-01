let guessCounter = 2
let guess = prompt('pick a number between 1 and 100')
function hiLo (guessCounter, guess){
    let randomNumb = Math.floor(Math.random() * 100 + 1)
    console.log(randomNumb)
    while (guessCounter != 0){
        if (guess == randomNumb){
        alert("congratulations, you win!")
        return
        }
        else {
            alert(`you have ${guessCounter} guesses left`)
            if (guess > randomNumb){
                alert("Lower!")
            }
            if (guess < randomNumb){
                    alert("Higher!")
            }
            guessCounter --;
            guess = prompt('Try again.')
            if (guessCounter == 0){
                alert('better luck next time!')
            }
        }
    }
}
hiLo(guessCounter, guess)