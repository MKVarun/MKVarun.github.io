(function () {
  "use strict";

  /* BibTeX modal — open, close on button, close on backdrop, close on Escape. */
  var modals = document.querySelectorAll(".modal");
  if (!modals.length) return;

  function open(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close(el) {
    el.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-modal-open]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      open(btn.getAttribute("data-modal-open"));
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var el = btn.closest(".modal");
      if (el) close(el);
    });
  });

  modals.forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close(overlay);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modals.forEach(function (o) {
        if (o.classList.contains("is-open")) close(o);
      });
    }
  });
})();
