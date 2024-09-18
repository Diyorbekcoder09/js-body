const btn = document.querySelector(".kun");

btn.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "white"
    }
    else {
        document.body.style.backgroundColor = " white";
    }

})

const btn1 = document.querySelector(".tun");

btn1.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "black"
    }
    else {
        document.body.style.backgroundColor = " black";
    }

})