document.getElementById('empty-heart').addEventListener('click', function () {
    document.getElementById('empty-heart').style.display = 'none';
    document.getElementById('solid-heart').style.display = 'inline';
});

document.getElementById('solid-heart').addEventListener('click', function () {
    document.getElementById('solid-heart').style.display = 'none';
    document.getElementById('empty-heart').style.display = 'inline';
});