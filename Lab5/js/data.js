document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let form = e.target;
  let valid = true;

  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.querySelectorAll("input,textarea").forEach(el => el.classList.remove("invalid"));

  let formElement = /^[А-ЩЬЮЯҐІЇЄ][а-щьюяґіїє]+ [А-ЩЬЮЯҐІЇЄ]\. [А-ЩЬЮЯҐІЇЄ]\.$/u;

  if (!formElement.test(form.fnm.value.trim())) {
    document.getElementById("err-fnm").textContent = 'ПІБ у форматі "Прізвище І.О."';
    form.fnm.classList.add("invalid");
    valid = false;
  }

  formElement = /^[А-Яа-яЇїІіЄє\s]{2,}$/;
  if (!formElement.test(form.faculty.value.trim())) {
    document.getElementById("err-faculty").textContent = "Факультет мінімум 2 літери";
    form.faculty.classList.add("invalid");
    valid = false;
  }

  formElement = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!formElement.test(form.birthdate.value.trim())) {
    document.getElementById("err-birthdate").textContent = "Формат дати: чч.чч.чччч";
    form.birthdate.classList.add("invalid");
    valid = false;
  }

  formElement = /^м\.\s[А-Яа-яЇїІіЄє\s]+$/;
  if (!formElement.test(form.address.value.trim())) {
    document.getElementById("err-address").textContent = "Адреса у форматі: м. Назва Міста";
    form.address.classList.add("invalid");
    valid = false;
  }

  formElement = /^[\w.-]+@[\w.-]+\.[a-z]{2,4}$/i;
  if (!formElement.test(form.email.value.trim())) {
    document.getElementById("err-email").textContent = "Невірний Email";
    form.email.classList.add("invalid");
    valid = false;
  }

  if (valid) {
    document.getElementById("output").innerHTML = `
      <p><b>ПІБ:</b> ${form.fnm.value}</p>
      <p><b>Факультет:</b> ${form.faculty.value}</p>
      <p><b>Адреса:</b> ${form.address.value}</p>
      <p><b>Дата народження:</b> ${form.birthdate.value}</p>
      <p><b>Email:</b> ${form.email.value}</p>
    `;
  }
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("myForm").reset();
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.querySelectorAll("input,textarea").forEach(el => el.classList.remove("invalid"));
  // document.getElementById("output").textContent = "Поки що нічого не заповнено";
});
