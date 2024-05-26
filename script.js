document.getElementById('navbar').addEventListener('click', function () {
    var navBar = document.getElementById('nav-bar');
    var overlay = document.querySelector('.body-dark-overlay');

    // Se l'overlay non esiste, crealo e aggiungilo al body
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'body-dark-overlay';
        document.body.appendChild(overlay);
    }

    // Funzione per toggle delle classi
    function toggleClass(element, class1, class2) {
        if (element.classList.contains(class1)) {
            element.classList.remove(class1);
            element.classList.add(class2);
        } else {
            element.classList.remove(class2);
            element.classList.add(class1);
        }
    }

    // Toggle delle classi per navBar e overlay
    toggleClass(navBar, 'hidden', 'visible');
    toggleClass(overlay, 'visible', 'hidden');
});


document.addEventListener('click', function (event) {
    var overlay = document.querySelector('.body-dark-overlay');
    var navBar = document.getElementById('nav-bar');

    if (overlay && event.target === overlay) {
        navBar.classList.remove('visible');
        navBar.classList.add('hidden');
        overlay.classList.remove('visible');
        overlay.classList.add('hidden');
    }
});


document.getElementById('close-navbar').addEventListener('click', function () {
    var navBar = document.getElementById('nav-bar');
    var overlay = document.querySelector('.body-dark-overlay');
    var closeMenuIcon = document.getElementById('close-menu-icon');
    var openMenuIcon = document.getElementById('open-menu-icon');

    navBar.classList.remove('visible');
    navBar.classList.add('hidden');
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');
    closeMenuIcon.classList.remove('visible');
    closeMenuIcon.classList.add('hidden');
    openMenuIcon.classList.remove('hidden');
    openMenuIcon.classList.add('visible');
});


var wave1 = $('#feel-the-wave').wavify({
    height: 50,
    bones: 4,
    amplitude: 60,
    color: '#FF84A8',
    speed: .15
});


// Funzione per impostare il tema in base allo stato memorizzato
function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeStyle = document.getElementById('theme-style');
    if (savedTheme === 'dark') {
        themeStyle.setAttribute('href', 'style-darkmode.css');
        document.body.classList.add('dark-theme');
    } else {
        themeStyle.setAttribute('href', 'style.css');
        document.body.classList.remove('dark-theme');
    }
}

// Funzione per salvare lo stato del tema quando viene cambiato
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

// Funzione per attivare/disattivare il tema
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'style.css') {
        themeStyle.setAttribute('href', 'style-darkmode.css');
        document.body.classList.add('dark-theme');
        saveTheme('dark');
    } else {
        themeStyle.setAttribute('href', 'style.css');
        document.body.classList.remove('dark-theme');
        saveTheme('light');
    }
}

// Imposta il tema al caricamento della pagina
setTheme();



  
