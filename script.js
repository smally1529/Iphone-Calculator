let btn_collection = document.getElementsByClassName("btn");
let screen = document.getElementById("screen");

let btn_arr = Array.from(btn_collection);

let str;

let btn_del = document.getElementById("btn_del");

for (let i = 0; i < btn_arr.length; i++) {
    btn_arr[i].addEventListener("click", () => {

        if (btn_arr[i].innerText == "=") {
            screen.innerText = eval(str);
        }
        else if(btn_arr[i].innerText == "AC") {
            screen.innerText = "";
            str = "";
        }
        else if(btn_arr[i].innerText == "del") {
            str = str.slice(0,-1);
            screen.innerText = str;
        }
        else {
            screen.innerText = screen.innerText + btn_arr[i].innerText;
            str = screen.innerText;
        }
    })
}

document.addEventListener('keydown',(event) => {
    if(event.key === "Backspace"){
        str = str.slice(0, -1); // Remove the last character
        screen.innerText = str;
    }
});
