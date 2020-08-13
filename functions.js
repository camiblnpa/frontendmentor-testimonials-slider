let active = true;

let button = document.getElementById('arrows');
button.addEventListener('click', changeView);

function changeView() {
    let visibility = document.getElementById('tanya');
    let hidden = document.getElementById('john');
    if (active == true) {
        visibility.style.display = 'none';
        hidden.style.display = 'block';
        active = false;
    } else if (active == false) {
        visibility.style.display = 'block';
        hidden.style.display = 'none';
        active = true;
    }
}