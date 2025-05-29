document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah reload default

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Debugging
  console.log("Username:", username);
  console.log("Password:", password);

  if (username === "admin" && password === "1234") {
    window.location.href = "portofolio.html"; // Arahkan ke halaman dashboard
  } else {
    alert("Username atau password salah!");
  }
});