document.getElementById('navbar').addEventListener('click', function () {
    var navBar = document.getElementById('nav-bar');
    var everything = document.getElementsByTagName('body'); // Prendi il primo elemento di 'body'

    // Toggle tra l'aggiunta e la rimozione delle classi 'visible' e 'hidden' per mostrare o nascondere il pannello laterale e l'overlay
    if (navBar.classList.contains('hidden')) {
        navBar.classList.remove('hidden');
        navBar.classList.add('visible');
        everything.classList.add('body-dark-overlay'); // Aggiungi la classe per scurire il 'body'
        navBar.classList.remove('body-dark-overlay'); // Aggiungi la classe per scurire il 'body'

        console.log(everything);
    } else {
        navBar.classList.remove('visible');
        navBar.classList.add('hidden');
        everything.classList.remove('body-dark-overlay'); // Rimuovi la classe per scurire il 'body'
    }
});
