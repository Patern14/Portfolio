console.log("JS connected");

// ===============================================================
//  Screen 1 - Welcome - glitch effect
// ===============================================================
let bg = document.getElementById('boxes'); 

let count = 25;
for (let i = 0; i < count; i++) {
    let glitchBox = document.createElement('div')
        glitchBox.className = 'box';
        bg.appendChild(glitchBox);
}
setInterval(function() {
    let glitch = document.getElementsByClassName('box');
    
    for (let i = 0; i < glitch.length; i++) {
        /* bg.style.backgroundColor = "red";
        console.log(bg.style.backgroundColor); */
        glitch[i].style.left = Math.floor(Math.random()*100) + 'vw';
        glitch[i].style.top = Math.floor(Math.random()*100) + 'vh';
        glitch[i].style.width = Math.floor(Math.random()*400) + 'px';
        glitch[i].style.height = Math.floor(Math.random()*100) + 'px';
        glitch[i].style.backgroundPosition = Math.floor(Math.random()*50) + 'px';
    }
}, 50)


// ===============================================================
//  Screen 2 - Too much - scintillate effect
// ===============================================================
let effect = document.getElementById("effect");

function toggle() {
    effect.className === "off" ? 
        effect.className = "on" : 
        effect.className = "off";
    console.log(effect.classList);
    console.log("Class: " + effect.className);
}


// ===============================================================
//  Screen 3 - Dispensable animations - moving stuff by adding class "clicked"
// ===============================================================
function playAnimation() {
    console.log("Button play clicked")
    
    let titleContainer = document.getElementsByClassName("titleContainer");
    let text3 = document.getElementsByClassName("text3");
    let swipe3 = document.getElementsByClassName("swipe3");

    for(let i = 0; i < text3.length; i += 1) {
        text3.item(i).classList.toggle("clicked");
    }
    for(let i = 0; i < swipe3.length; i += 1) {
        swipe3.item(i).classList.toggle("clicked");
    }
    for(let i = 0; i < titleContainer.length; i += 1) {
        titleContainer.item(i).classList.toggle("clicked");
    }
}





