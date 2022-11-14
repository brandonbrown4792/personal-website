window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  var form = document.querySelector('.contact-form');
  var button = document.querySelector('#contact-form-button');

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    const status = document.querySelector('#status') || document.createElement('p');
    status.id = 'status';
    status.innerHTML = "Your contact request was submitted. Thanks!";
    status.classList = 'submit-success';
    form.append(status);
  }

  function error() {
    const status = document.querySelector('#status') || document.createElement('p');
    status.id = 'status';
    status.innerHTML = "There was a problem submitting your information.";
    status.classList = 'submit-failure';
    form.append(status);
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}