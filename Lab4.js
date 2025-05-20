<form id="cvForm">
  <label for="name">Ad:</label>
  <input type="text" id="name" name="name" />
  <div id="nameError" class="error"></div>

  <label for="email">E-poçt:</label>
  <input type="email" id="email" name="email" />
  <div id="emailError" class="error"></div>

  <label for="date">Tarix:</label>
  <input type="date" id="date" name="date" />
  <div id="dateError" class="error"></div>

  <label for="description">Təsvir:</label>
  <textarea id="description" name="description"></textarea>
  <div id="descriptionError" class="error"></div>

  <button type="submit">Yadda saxla</button>
  <div id="successMessage" class="success"></div>
</form>

<style>
  .error {
    color: red;
    font-size: 0.9em;
    margin-top: 4px;
    margin-bottom: 10px;
  }
  .success {
    color: green;
    margin-top: 10px;
    font-weight: bold;
  }
</style>

<script>
  const form = document.getElementById('cvForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const dateInput = document.getElementById('date');
  const descInput = document.getElementById('description');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const dateError = document.getElementById('dateError');
  const descError = document.getElementById('descriptionError');
  const successMessage = document.getElementById('successMessage');

  window.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem('cvData') || '{}');
    if(data){
      nameInput.value = data.name || '';
      emailInput.value = data.email || '';
      dateInput.value = data.date || '';
      descInput.value = data.description || '';
    }
  });

  function validateInput() {
    let valid = true;

    if(nameInput.value.trim().length < 3) {
      nameError.textContent = "Ad ən az 3 simvol olmalıdır";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    ı
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emailInput.value.trim())){
      emailError.textContent = "Düzgün e-poçt daxil edin";
      valid = false;
    } else {
      emailError.textContent = "";
    }


    if(!dateInput.value) {
      dateError.textContent = "Tarix daxil edilməlidir";
      valid = false;
    } else {
      dateError.textContent = "";
    }

    if(descInput.value.trim().length < 10){
      descError.textContent = "Təsvir ən az 10 simvol olmalıdır";
      valid = false;
    } else {
      descError.textContent = "";
    }

    return valid;
  }


  form.addEventListener('submit', (e) => {
    e.preventDefault();

   
    successMessage.textContent = "";

    if(validateInput()){
      const cvData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        date: dateInput.value,
        description: descInput.value.trim()
      };

      localStorage.setItem('cvData', JSON.stringify(cvData));
      
     
      successMessage.textContent = "Məlumatlar uğurla yadda saxlanıldı!";
      
      
    }
  });
</script>

