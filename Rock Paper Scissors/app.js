let user_S = 0;  // ✅ Defined globally
let comp_S = 0;  // ✅ Defined globally

const m = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const user_score = document.querySelector("#user-choice");
const comp_score = document.querySelector("#comp-choice");

const compchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const random_index = Math.floor(Math.random() * 3);
    return option[random_index];
};

const showwinner = (userwin) => {
    if (userwin) {
        m.innerText = "You Win!";
        m.style.backgroundColor = "green";
        user_S++;  // ✅ Incrementing global user score
        user_score.innerText = user_S;  // ✅ Updating score display
    }
    else {
        m.innerText = "Comp Win!";
        m.style.backgroundColor = "red";
        comp_S++;  // ✅ Incrementing global computer score
        comp_score.innerText = comp_S;  
    }
};

const draw_game = () => {
    m.innerText = "Game Draw";
    m.style.backgroundColor = "black";
};

const playgame = (choiceID) => {
    let c_choice = compchoice(); 

    if (choiceID === c_choice) {
        draw_game();
    }
    else {
        let userwin = true;

        if (choiceID === "rock") {
            userwin = c_choice === "paper" ? false : true;
        }
        else if (choiceID === "paper") {
            userwin = c_choice === "scissors" ? false : true;
        }
        else {
            userwin = c_choice === "rock" ? false : true;
        }

        showwinner(userwin);  // ✅ Correctly determines and updates the score
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceID = choice.getAttribute("id");
        playgame(choiceID);
    });
});
