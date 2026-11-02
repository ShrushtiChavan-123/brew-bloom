// ===== 1. MOBILE NAVIGATION =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after a link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== 2. MENU CATEGORY FILTER =====
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Highlight the clicked button
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    // Show only items matching the chosen category
    const filter = button.dataset.filter;
    menuItems.forEach(function (item) {
      if (filter === "all" || item.dataset.category === filter) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

// ===== 3. CONTACT FORM VALIDATION (demo only, nothing is sent) =====
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const success = document.getElementById("formSuccess");
  let valid = true;

  // Clear old messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  success.textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    valid = false;
  }

  // Simple email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Please enter your email.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Please write a message.";
    valid = false;
  }

  if (valid) {
    success.textContent = "Thank you, " + name + "! This is a demo form, so your message was not actually sent.";
    form.reset();
  }
});

// ===== 4. IMAGE FALLBACK =====
// If an image fails to load, hide it so the colored background shows instead
document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("error", function () {
    img.classList.add("img-failed");
  });
});

// ===== 5. CURRENT YEAR IN FOOTER =====
document.getElementById("year").textContent = new Date().getFullYear();
