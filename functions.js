function setWidthSize(ws) {
    document.getElementsByTagName("img")[0].style.width = ws + "%";
}

function setBorderRadius(br) {
    document.getElementsByTagName("img")[0].style.borderRadius = br + "%";
}

for (let i = 10; i < 50; i++) {
    window.setTimeout(setWidthSize, i * 100, i);
    window.setTimeout(setBorderRadius, i * 25, i);
}
let k = 0;
function changeImage() {
    let img = document.getElementById("image");
    if (k % 2 === 0) {
        img.src = "images/tiger.jpg";
    } else {
        img.src = "images/kaja.jpg";
    }
    return k++;

}

function showPassword() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
