document.querySelectorAll('.btn-open').forEach(element => {
    element.addEventListener('click', function () {
        document.getElementById(this.dataset.href).classList.remove('d-none');
    });
});

document.querySelectorAll('.popup-wrapper').forEach(element => {
    element.addEventListener('click', function () {
        this.classList.add('d-none');
    })
});

document.querySelectorAll('.btn-cancel').forEach(element => {
    element.addEventListener('click', function () {
        this.parentElement.parentElement.classList.add('d-none');
    })
});

document.querySelectorAll('.popup-window').forEach(element => {
    element.addEventListener('click', function (event) {
        event.stopPropagation()
    })
});