let boxes = document.querySelectorAll(".box");
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

function shownum() {
    // Shuffle numbers
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    
    // Assign shuffled numbers to boxes
    boxes.forEach((box, index) => {
        box.innerHTML = numbers[index];
        box.dataset.number = numbers[index]; // Store number as data attribute
    });
}

shownum();

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    boxes.forEach(box => box.innerHTML = "");
});

let firstflip = 0;
let secondflip = 0;
let lockboard = false;
let score = 0;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        // Only process click if box is empty and board isn't locked
        if (box.innerHTML === "" && !lockboard) {
            // Show the number stored in the data attribute
            box.innerHTML = box.dataset.number;
            
            // Check if this is first or second flip
            if (firstflip === 0) {
                firstflip = box;
            } else if (secondflip === 0 && box !== firstflip) {
                secondflip = box;
                
                // Lock the board while checking
                lockboard = true;
                
                // Check if cards match
                if (firstflip.dataset.number === secondflip.dataset.number) {
                    // Cards match!
                    score++;
                    
                    // Reset flips
                    firstflip = 0;
                    secondflip = 0;
                    lockboard = false;
                    
                    // Check if game is complete (6 matches = 12 cards)
                    if (score === 6) {
                        setTimeout(() => {
                            alert("Congratulations! You've found all matches!");
                        }, 500);
                    }
                } else {
                    // Cards don't match - hide them after a delay
                    setTimeout(() => {
                        firstflip.innerHTML = "";
                        secondflip.innerHTML = "";
                        
                        // Reset flips
                        firstflip = 0;
                        secondflip = 0;
                        lockboard = false;
                    }, 1000); // 1 second delay
                }
            }
        }
    });
});