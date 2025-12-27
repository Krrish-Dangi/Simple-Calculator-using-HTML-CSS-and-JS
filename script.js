const screen = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let text = button.innerText;

        if (text === "CE") {
            screen.value = screen.value.slice(0 , screen.value.length-1);
        } else if (text === "=") {
            if (screen.value === "") return;

            let expression = screen.value;

            // convert symbols to JS operators
            expression = expression
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/−/g, "-");

            try {
                screen.value = eval(expression);
            } catch {
                screen.value = "Error";
            }
        } else {
            screen.value += text;
        }
    });
});
