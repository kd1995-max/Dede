function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    var data = {
        name: name,
        email: email,
        password: password,
        gender: gender
    };

    saveDataToLocal(data);
    displayDataInTable(data);
}

function saveDataToLocal(data) {
    var registrations = localStorage.getItem('registrations');
    var registrationArray = registrations ? JSON.parse(registrations) : [];

    registrationArray.push(data);

    localStorage.setItem('registrations', JSON.stringify(registrationArray));
}

function displayDataInTable(data) {
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();

    var nameCell = newRow.insertCell();
    nameCell.appendChild(document.createTextNode(data.name));

    var emailCell = newRow.insertCell();
    emailCell.appendChild(document.createTextNode(data.email));

    var passwordCell = newRow.insertCell();
    passwordCell.appendChild(document.createTextNode(data.password));

    var genderCell = newRow.insertCell();
    genderCell.appendChild(document.createTextNode(data.gender));

    document.getElementById('dataTable').style.display = 'table';
}
