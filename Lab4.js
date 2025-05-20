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

  // Localstorage-dən doldurmaq funksiyası
  window.onload = () => {
    if(localStorage.getItem('cvData')){
      const data = JSON.parse(localStorage.getItem('cvData'));
      nameInput.value = data.name || '';
      emailInput.value = data.email || '';
      dateInput.value = data.date || '';
      descInput.value = data.description || '';
    }
  };

  // Validation funksiyası
  function validateInput() {
    let valid = true;

    // Ad
    if(nameInput.value.trim().length < 3) {
      nameError.textContent = "Ad ən az 3 simvol olmalıdır";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emailInput.value.trim())){
      emailError.textContent = "Düzgün e-poçt daxil edin";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Tarix
    if(!dateInput.value) {
      dateError.textContent = "Tarix daxil edilməlidir";
      valid = false;
    } else {
      dateError.textContent = "";
    }

    // Təsvir
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

    if(validateInput()){
      const cvData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        date: dateInput.value,
        description: descInput.value.trim()
      };

      localStorage.setItem('cvData', JSON.stringify(cvData));
      alert("Məlumatlar yadda saxlanıldı!");
    }
  });
</script>
