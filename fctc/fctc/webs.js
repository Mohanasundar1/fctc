document.getElementById('copy-address').addEventListener('click', function() {
    const walletAddress = document.getElementById('wallet-address').textContent;
    navigator.clipboard.writeText(walletAddress).then(function() {
        alert('Wallet address copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});

document.getElementById('transaction-screenshot').addEventListener('change', function() {
    const preview = document.getElementById('preview');
    const file = this.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
});
