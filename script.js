// *******************************************************
//  TOGGLE HEADERS (розкривні секції)
// *******************************************************

document.querySelectorAll(".toggle-header").forEach((header) => {
  const content = header.nextElementSibling; // the element right after header

  header.addEventListener("click", () => {
    const isActive = header.classList.toggle("active");
    content.style.display = isActive ? "block" : "none"; // show/hide content
  });
});

// *******************************************************
//  TABS (вкладки)
// *******************************************************

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove "active" from all buttons and contents
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Activate the clicked button
    btn.classList.add("active");

    // Show the matching tab content
    const target = btn.dataset.tab;
    const targetContent = document.getElementById(`tab-${target}`);
    if (targetContent) targetContent.classList.add("active");
  });
});

// *******************************************************
//  PAGE FADE-IN EFFECT (плавне завантаження сторінки)
// *******************************************************

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded"); // triggers CSS fade-in
});

// *******************************************************
//  SECTION NAVIGATION (зміст розділу)
//  Автоматично створює навігацію до <h3 id="..."> всередині кожного <section>
// *******************************************************

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach((section) => {
    const content = section.querySelector(".content");
    if (!content) return;

    const headers = content.querySelectorAll("h3[id]");
    if (headers.length === 0) return;

    // Create navigation box
    const nav = document.createElement("nav");
    nav.className = "section-nav";

    const title = document.createElement("p");
    title.className = "nav-title";
    title.textContent = "Зміст цього розділу";
    nav.appendChild(title);

    const ul = document.createElement("ul");
    headers.forEach((h3) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = h3.textContent.trim();
      a.href = `#${h3.id}`;
      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    content.prepend(nav); // insert at the top of the section
  });
});

// *******************************************************
//  SCROLL-TO-TOP BUTTON (кнопка повернення нагору)
// *******************************************************

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (!scrollBtn) return;

  // Show/hide depending on scroll position
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  // Smooth scroll on click
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
