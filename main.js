//document.querySelector('.valid').style.display = 'none';
//document.querySelector('.invalid').style.display = 'none';
displayNone()

document.querySelector('#check').addEventListener('click', function () {
    var input = parseInt(document.querySelector('#in-num').value);
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))?[\-\s]?(\d{3})[\-\s]?(\d{4})$/;

    var result = regex.test(input);
    if (result) {
        document.querySelector('.valid').style.display = 'block';
    } else { document.querySelector('.invalid').style.display = 'block'; }

    document.querySelector('#in-num').addEventListener('keyup', displayNone);
})

function displayNone() {
    document.querySelector('.valid').style.display = 'none';
    document.querySelector('.invalid').style.display = 'none';
}