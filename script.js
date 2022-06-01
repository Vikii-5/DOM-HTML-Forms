// Creating a container for the HTML Page dynamically
let containerFluid = document.createElement("div");
containerFluid.className = "container-fluid d-flex";
document.body.appendChild(containerFluid);

let bgImage = document.createElement("div");
bgImage.className = "col-md-3 bg-image";
containerFluid.appendChild(bgImage);

let container = document.createElement("div");
container.className = "col-md-9 container";
containerFluid.appendChild(container);

// Form elements
let form = document.createElement("form");
form.setAttribute("id", "form");
form.className = "needs-validation";
form.setAttribute("method", "POST");
form.noValidate = true;
container.appendChild(form);

// Name input fields
let nameRow = document.createElement("div");
nameRow.className = "row";
form.appendChild(nameRow);

let col1 = document.createElement("div");
col1.className = "form-group col-md-6";
nameRow.appendChild(col1);

let firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("for", "first-name");
firstNameLabel.innerHTML = "First Name*";
col1.appendChild(firstNameLabel);

let firstName = document.createElement("input");
firstName.setAttribute("id", "first-name");
firstName.type = "text";
firstName.className = "form-control";
firstName.name = "firstName";
firstName.placeholder = "Enter your first name";
firstName.required = "true";
col1.appendChild(firstName);

let firstnameFeedback = document.createElement("div");
firstnameFeedback.className = "invalid-feedback";
firstnameFeedback.innerHTML = "Please enter your firstname";
col1.appendChild(firstnameFeedback);

let col2 = document.createElement("div");
col2.className = "form-group col-md-6";
nameRow.appendChild(col2);

let lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "last-name");
lastNameLabel.innerHTML = "Last Name*";
col2.appendChild(lastNameLabel);

let lastName = document.createElement("input");
lastName.setAttribute("id", "last-name");
lastName.type = "text";
lastName.className = "form-control";
lastName.name = "lastName";
lastName.placeholder = "Enter your last name";
lastName.required = "true";
col2.appendChild(lastName);

let lastnameFeedback = document.createElement("div");
lastnameFeedback.className = "invalid-feedback";
lastnameFeedback.innerHTML = "Please enter your lastname";
col2.appendChild(lastnameFeedback);

// Address input field
let addressRow = document.createElement("div");
addressRow.className = "form-group";
form.appendChild(addressRow);

let addressLabel = document.createElement("label");
addressLabel.setAttribute("for", "address");
addressLabel.innerHTML = "Address*";
addressRow.appendChild(addressLabel);

let address = document.createElement("textarea");
address.setAttribute("id", "address");
address.rows = "2";
address.className = "form-control";
address.required = "true";
address.name = "address";
address.placeholder = "Please enter your address";
addressRow.appendChild(address);

let addressFeedback = document.createElement("div");
addressFeedback.className = "invalid-feedback";
addressFeedback.innerHTML = "Please enter your address";
addressRow.appendChild(addressFeedback);

// Food and Gender Container
let fgContainer = document.createElement("div");
fgContainer.className = "d-flex fg-container row mb-1";
form.appendChild(fgContainer);

// Food Preferences
let foodGroupContainer = document.createElement("div");
foodGroupContainer.className = "food-group col-md-8";
fgContainer.appendChild(foodGroupContainer);

let foodGroup = document.createElement("div");
foodGroup.className = "form-check form-check-inline";
foodGroupContainer.appendChild(foodGroup);

let foodChoice = document.createElement("div");
foodChoice.className = "food-choice";
foodGroup.appendChild(foodChoice);

let foodLabel = document.createElement("label");
foodLabel.setAttribute("for", "food");
foodLabel.innerHTML = "Choice of Food*";
foodChoice.appendChild(foodLabel);

// Creating food options checkbox elements using for loop
let choiceOfFoods = ["Biryani", "Pizza", "Sushi", "Tacos", "Bread"];

for (let i = 0; i < choiceOfFoods.length; i++) {
  let foodRow = document.createElement("div");
  foodRow.className = "form-check form-check-inline";
  foodGroup.appendChild(foodRow);

  let food = document.createElement("input");
  food.setAttribute("id", `food${choiceOfFoods[i]}`);
  food.type = "checkbox";
  food.className = "checkbox";
  food.value = choiceOfFoods[i];
  food.name = "foodOptions";
  // food.required = "true";
  foodRow.appendChild(food);

  let foodLabels = document.createElement("label");
  foodLabels.setAttribute("for", `food${choiceOfFoods[i]}`);
  foodLabels.className = "check-label";
  foodLabels.innerHTML = choiceOfFoods[i];
  foodRow.appendChild(foodLabels);
}

let foodFeedback = document.createElement("div");
foodFeedback.className = "custom-feedback";
form.appendChild(foodFeedback);

let foodError = document.createElement("span");
foodError.className = "error-text";
foodError.innerHTML = "Please select minimum two foods";
foodFeedback.appendChild(foodError);

// Gender Selection
let genderGroupContainer = document.createElement("div");
genderGroupContainer.className = "gender-group col-md-4";
fgContainer.appendChild(genderGroupContainer);

let genderGroup = document.createElement("div");
genderGroup.className = "form-check form-check-inline";
genderGroupContainer.appendChild(genderGroup);

let genderChoice = document.createElement("div");
genderChoice.className = "gender-choice";
genderGroup.appendChild(genderChoice);

let genderLabel = document.createElement("label");
genderLabel.setAttribute("for", "gender");
genderLabel.innerHTML = "Gender*";
genderChoice.appendChild(genderLabel);

// Creating gender options radio elements using for loop
let genderOptions = ["Male", "Female"];

for (let i = 0; i < genderOptions.length; i++) {
  let genderRow = document.createElement("div");
  genderRow.className = "form-check form-check-inline";
  genderGroup.appendChild(genderRow);

  let gender = document.createElement("input");
  gender.setAttribute("id", `gender${genderOptions[i]}`);
  gender.type = "radio";
  gender.className = "form-check-input";
  gender.name = "genderOptions";
  gender.value = genderOptions[i];
  gender.required = true;
  genderRow.appendChild(gender);

  let genderLabel = document.createElement("label");
  genderLabel.setAttribute("for", `gender${genderOptions[i]}`);
  genderLabel.className = "form-check-label";
  genderLabel.innerHTML = genderOptions[i];
  genderRow.appendChild(genderLabel);
}

// let genderFeedback = document.createElement('div');
// genderFeedback.className = 'invalid-feedback';
// genderFeedback.innerHTML = 'Please select your gender';
// genderGroup.appendChild(genderFeedback);

// State, Country and Pincode input fields
let placeRow = document.createElement("div");
placeRow.className = "row";
form.appendChild(placeRow);

// State input field
let col3 = document.createElement("div");
col3.className = "form-group col-md-5";
placeRow.appendChild(col3);

let stateLabel = document.createElement("label");
stateLabel.setAttribute("for", "state");
stateLabel.innerHTML = "State*";
col3.appendChild(stateLabel);

let state = document.createElement("input");
state.setAttribute("id", "state");
state.type = "text";
state.className = "form-control";
state.name = "state";
state.placeholder = "Enter your state";
state.required = "true";
col3.appendChild(state);

let stateFeedback = document.createElement("div");
stateFeedback.className = "invalid-feedback";
stateFeedback.innerHTML = "Please enter your state";
col3.appendChild(stateFeedback);

// Country input field
let col4 = document.createElement("div");
col4.className = "form-group col-md-5";
placeRow.appendChild(col4);

let countryLabel = document.createElement("label");
countryLabel.setAttribute("for", "country");
countryLabel.innerHTML = "Country*";
col4.appendChild(countryLabel);

let country = document.createElement("input");
country.setAttribute("id", "country");
country.type = "text";
country.className = "form-control";
country.name = "country";
country.placeholder = "Enter your country";
country.required = "true";
col4.appendChild(country);

let countryFeedback = document.createElement("div");
countryFeedback.className = "invalid-feedback";
countryFeedback.innerHTML = "Please enter your country";
col4.appendChild(countryFeedback);

// Pincode input field
let col5 = document.createElement("div");
col5.className = "form-group col-md-2";
placeRow.appendChild(col5);

let pincodeLabel = document.createElement("label");
pincodeLabel.setAttribute("for", "pincode");
pincodeLabel.innerHTML = "Pin Code*";
col5.appendChild(pincodeLabel);

let pincode = document.createElement("input");
pincode.setAttribute("id", "pincode");
pincode.type = "text";
pincode.pattern = "[0-9]{6}";
pincode.maxLength = "6";
pincode.className = "form-control";
pincode.name = "pincode";
pincode.placeholder = "Enter a pin code";
pincode.required = "true";
col5.appendChild(pincode);

let pincodeFeedback = document.createElement("div");
pincodeFeedback.className = "invalid-feedback";
pincodeFeedback.innerHTML = "Please enter your pincode";
col5.appendChild(pincodeFeedback);

// Creating a button to submit the form
let submitButton = document.createElement("button");
submitButton.setAttribute("id", "submit");
submitButton.className = "btn btn-primary";
submitButton.type = "submit";
submitButton.innerHTML = "Submit";
form.appendChild(submitButton);

// Creating a button to reset the form
let resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-button");
resetButton.className = "btn btn-dark";
resetButton.type = "reset";
resetButton.innerHTML = "Reset";
form.appendChild(resetButton);

// Creating table to display the user input data`
let tableContainer = document.createElement("div");
tableContainer.className = "table-responsive";
container.appendChild(tableContainer);

let table = document.createElement("table");
table.setAttribute("id", "userTable");
table.className = "table table-striped table-bordered table-hover";
tableContainer.appendChild(table);

let tableHead = document.createElement("thead");
tableHead.className = "thead-dark";
table.appendChild(tableHead);

let tableRow = document.createElement("tr");
tableHead.appendChild(tableRow);

// Creating table header elements using for loop
let tableTopics = [
  "First Name",
  "Last Name",
  "Address",
  "Choice of Food",
  "Gender",
  "State",
  "Country",
  "Pincode",
];

for (let i = 0; i < tableTopics.length; i++) {
  let tableHeading = document.createElement("th");
  tableHeading.scope = "col";
  tableHeading.innerHTML = tableTopics[i];
  tableRow.appendChild(tableHeading);
}

let tableBody = document.createElement("tbody");
tableBody.setAttribute("id", "userTableBody");
table.appendChild(tableBody);

let tableRow1 = document.createElement("tr");
tableBody.appendChild(tableRow1);

// Adding sample user data to the table
let data = [
  "Vignesh",
  "S",
  "Tirupathur",
  "Biryani",
  "Male",
  "Tamilnadu",
  "India",
  "635601",
];

for (let i = 0; i < data.length; i++) {
  let tableData = document.createElement("td");
  tableData.innerHTML = data[i];
  tableRow1.appendChild(tableData);
}

// Bootstrap validation
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        }
      },
      false
    );
  });
})();

// Checkbox validation (must select 2 options)
let checkForm = document.getElementById("form");

checkForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let checkboxes = document.querySelectorAll(".checkbox");
  let checked = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function () {
      if (checkboxes[i].checked) {
        checked++;
      } else {
        checked--;
      }
      if (checked >= 2) {
        return fetchData();
      } else{
        let customFeedback = document.querySelector(".custom-feedback");
        customFeedback.style.display = "none";
      }
    });
  }
});

// // Checkbox value logic
// let foodArray = [];
// let checkboxes = document.querySelectorAll(".checkbox");
//     for  (let i = 0; i < checkboxes.length; i++){
//       if(checkboxes[i].checked){
//         foodArray.push(checkboxes[i].value);
//       }
//     }
//     console.log(foodArray);

function fetchData() {
  let fname = document.getElementById("first-name").value;
  let lname = document.getElementById("last-name").value;
  let address = document.getElementById("address").value;
  let selectedFood = document.querySelector(
    'input[name="foodOptions"]:checked'
  ).value;
  let selectedGender = document.querySelector(
    'input[name="genderOptions"]:checked'
  ).value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let pincode = document.getElementById("pincode").value;

  let userTableBody = document.getElementById("userTableBody");
  let tr1 = userTableBody.insertRow();
  let td1 = tr1.insertCell();
  td1.innerHTML = fname;

  let td2 = tr1.insertCell(1);
  td2.innerHTML = lname;

  let td3 = tr1.insertCell(2);
  td3.innerHTML = address;

  let td4 = tr1.insertCell(3);
  td4.innerHTML = selectedFood;

  let td5 = tr1.insertCell(4);
  td5.innerHTML = selectedGender;

  let td6 = tr1.insertCell(5);
  td6.innerHTML = state;

  let td7 = tr1.insertCell(6);
  td7.innerHTML = country;

  let td8 = tr1.insertCell(7);
  td8.innerHTML = pincode;
}

resetButton.addEventListener("click", function () {
  form.classList.remove("was-validated");
  let customFeedback = document.querySelector(".custom-feedback");
  customFeedback.style.display = "none";
});
