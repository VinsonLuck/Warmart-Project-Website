function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var date = new Date(birthday.value)
    var domisili = document.getElementById("domisili").value;
    var phone = document.getElementById("phone").value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (username == "" || username.length < 3) {
      alert("Nama lengkap harus diisi!");
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert("Format alamat email tidak valid!");
      return false;
    }

    if (!birthday.value) {
      alert("Tanggal lahir harus diisi!");
      return false;
    }

    if (domisili == "") {
      alert("Domisili harus diisi!");
      return false;
    }

    var phoneRegex = /^[0-9]{12}$/;
    if (!phone.match(phoneRegex)) {
      alert("Format nomor telepon tidak valid! Harus terdiri dari 12 angka.");
      return false;
    }

    if (!gender) {
      alert("Jenis kelamin harus dipilih!");
      return false;
    }

    alert("Member akan dikirim melalui E-mail!");
    return true;
  }