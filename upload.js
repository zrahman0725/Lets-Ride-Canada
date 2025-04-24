document.addEventListener("DOMContentLoaded", function () {
    const licenseInput = document.getElementById("license-upload");
    const paystubInput = document.getElementById("paystub-upload");
    const uploadBtn = document.getElementById("upload-btn");
    const statusDiv = document.getElementById("upload-status");

    const licensePreview = document.getElementById("license-preview");
    const paystubPreview = document.getElementById("paystub-preview");

    function showPreview(input, previewElement) {
        const file = input.files[0];
        if (!file) {
            previewElement.textContent = "No file selected.";
            return;
        }

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewElement.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 150px; border: 1px solid #ccc; padding: 4px; border-radius: 8px;" />`;
            };
            reader.readAsDataURL(file);
        } else if (file.type === "application/pdf") {
            previewElement.innerHTML = `<p>📄 ${file.name}</p>`;
        } else {
            previewElement.innerHTML = `<p>Unsupported file type.</p>`;
        }
    }

    licenseInput.addEventListener("change", () => showPreview(licenseInput, licensePreview));
    paystubInput.addEventListener("change", () => showPreview(paystubInput, paystubPreview));

    uploadBtn.addEventListener("click", async () => {
        statusDiv.textContent = "Uploading...";

        const uploads = [];

        const timestamp = Date.now();

        if (licenseInput.files.length > 0) {
            const file = licenseInput.files[0];
            const licenseRef = firebase.storage().ref(`documents/license_${timestamp}.${file.name.split('.').pop()}`);
            uploads.push(
                licenseRef.put(file).then(() => "Driver's license uploaded.")
            );
        }

        if (paystubInput.files.length > 0) {
            const file = paystubInput.files[0];
            const paystubRef = firebase.storage().ref(`documents/paystub_${timestamp}.${file.name.split('.').pop()}`);
            uploads.push(
                paystubRef.put(file).then(() => "Pay stub uploaded.")
            );
        }

        try {
            const results = await Promise.all(uploads);
            statusDiv.innerHTML = results.length
                ? results.map(msg => `<p>${msg}</p>`).join("")
                : "<p>No documents uploaded, but you're all set!</p>";

            uploadBtn.disabled = true;
            uploadBtn.textContent = "Done ✅";
        } catch (error) {
            console.error("Upload failed:", error);
            statusDiv.textContent = "❌ Upload failed. Please try again.";
        }
    });
});
