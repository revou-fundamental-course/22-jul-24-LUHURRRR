document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('travel-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const destination = document.getElementById('destination').value;
        const payment = document.getElementById('payment').value;
        
        if (name && age && destination && payment) {
            alert(`Terima kasih ${name}, Anda akan pergi ke ${destination}. Pembayaran melalui ${payment}.`);
        } else {
            alert('Mohon lengkapi semua bidang.');
        }
    });

    const packageItems = document.querySelectorAll('.package-item');
    packageItems.forEach(item => {
        item.addEventListener('click', function() {
            alert(`Anda memilih paket: ${item.querySelector('h3').innerText}`);
        });
    });
});