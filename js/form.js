$("#bestArea").submit(function(e) {
    e.preventDefault();
});

function validateForm() {
  fValid = validateFName();
  lValid = validateLName();
  if (fValid && lValid) {
    document.getElementById('bestForm').innerHTML = "<h2>Success</h2>";
  }
}

function validateFName() {
  var x = document.forms["bestArea"]["fname"].value;
    if (x == null || x == "") {
        document.getElementById('fnameLabel').innerHTML = "<div class=\"bad-input\">First Name:</div>";
        return false;
    }
    else {
      document.getElementById('fnameLabel').innerHTML = "First Name:";
      return true;
    }
}

function validateLName() {
  var x = document.forms["bestArea"]["lname"].value;
    if (x == null || x == "") {
        document.getElementById('lnameLabel').innerHTML = "<div class=\"bad-input\">Last Name:</div>";
        return false;
    }
    else {
      document.getElementById('lnameLabel').innerHTML = "Last Name:";
      return true;
    }
}
