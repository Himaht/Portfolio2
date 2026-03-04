// Optional: highlight active nav link
(function () {
    const links = document.querySelectorAll(".nav-links a");
    const path = location.pathname.split("/").pop() || "index.html";
    links.forEach(a => {
      const href = a.getAttribute("href");
      if (href === path) a.style.color = "var(--text)";
    });
  })();