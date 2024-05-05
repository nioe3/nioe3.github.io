function toggleNavMenu() {
    const menuSelect = document.getElementById('nav-menu-select');
    const menu = document.getElementById('nav-menu');

    console.log(menu.style.transform)
    if (menu.style.transform === 'translateY(-100%)'){
        menu.style.transform = 'translateY(0)';
        menuSelect.classList.remove('menu-select');
        menuSelect.classList.add('menu-close');
    } else {
        menu.style.transform = 'translateY(-100%)';
        menuSelect.classList.remove('menu-close');
        menuSelect.classList.add('menu-select');
    }
}

let audio = new Audio('pronounce.wav');

function pronounce() {
    audio.play().then(r => console.log("played")).catch(e => alert("Error playing audio"));
}