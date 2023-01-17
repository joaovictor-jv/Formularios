const body = document.getElementById('corpo');
const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        body.classList.add('dark');

        return;
    }

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    body.classList.remove('dark');

});