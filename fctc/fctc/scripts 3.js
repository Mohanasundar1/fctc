document.addEventListener('DOMContentLoaded', function() {
    const copyAddressButton = document.getElementById('copy-address');
    const walletAddress = document.getElementById('wallet-address').textContent;

    copyAddressButton.addEventListener('click', function() {
        navigator.clipboard.writeText(walletAddress).then(function() {
            alert('Address copied to clipboard!');
        }, function() {
            alert('Failed to copy address.');
        });
    });

    // Handle file input and preview
    const fileInput = document.getElementById('transaction-screenshot');
    const previewContainer = document.getElementById('preview-container');
    const preview = document.getElementById('preview');

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
                previewContainer.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});
