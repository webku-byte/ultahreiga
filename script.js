// Show the pop-up on page load
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Handle the name input and update greeting
function submitName() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() !== '') {
        document.getElementById('greeting').textContent = `Halo, ${name}!`;
        document.getElementById('popup').style.display = 'none';
    } else {
        alert('Silakan masukkan nama Anda.');
    }
}
