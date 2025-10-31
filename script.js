function validateForm() {
  // Get form values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check empty fields
  if (!username || !email || !phone || !password || !confirmPassword) {
    alert("All fields are required.");
    return false;
  }

  // Phone number validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number must be 10 digits and numeric only.");
    return false;
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 7 characters long and contain at least one uppercase letter, one digit, and one special character (&,$,#,@)."
    );
    return false;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(email)) {
    alert("Enter a valid email address.");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
