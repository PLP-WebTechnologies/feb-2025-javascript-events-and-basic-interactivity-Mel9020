// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Thanks for clicking!");
});

document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

const secretBox = document.getElementById("secretBox");
let holdTimer;
secretBox.addEventListener("dblclick", () => {
  alert("🌟 You discovered a secret!");
});
secretBox.addEventListener("mousedown", () => {
  holdTimer = setTimeout(() => alert(" Long press activated!"), 1000);
});
secretBox.addEventListener("mouseup", () => clearTimeout(holdTimer));

// 2. Interactive Elements
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  changeBtn.textContent = "Color Changed!";
  changeBtn.style.backgroundColor = "#66bb6a";
});

const images = [
  "https://via.placeholder.com/300x200?text=Organic+1",
  "https://via.placeholder.com/300x200?text=Organic+2",
  "https://via.placeholder.com/300x200?text=Organic+3"
];
let i = 0;
setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slider").src = images[i];
}, 3000);

function showTab(id) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// 3. Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    e.preventDefault();
    alert("Password must be at least 8 characters long.");
  }
});

document.getElementById("password").addEventListener("input", (e) => {
  const msg = document.getElementById("feedback");
  if (e.target.value.length < 8) {
    msg.textContent = "Password too short!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Strong password!";
    msg.style.color = "green";
  }
});
