$('#successModal').on('show.bs.modal', function (e) {
    setTimeout(function () {
        $('#successModal').modal('hide');
    }, 10000);
});
document.querySelector('#yesRadio').addEventListener('change', function () {
    if (this.checked) {
        alert("PLEASE DO NOT APPLY MORE THAN ONCE PER SEASON");
    }
});
const agreeCheckbox = document.getElementById("agreeCheckbox");
const submitButton = document.getElementById("submitButton");

submitButton.disabled = true;
agreeCheckbox.addEventListener("change", function () {
    if (agreeCheckbox.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});



