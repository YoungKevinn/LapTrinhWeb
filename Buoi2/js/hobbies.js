

(function () {
  const input    = document.getElementById("input-hobby");
  const btnAdd   = document.getElementById("btn-add-hobby");
  const list     = document.getElementById("hobby-list");
  const errorMsg = document.getElementById("hobby-error");

  function addHobby() {
    const value = input.value.trim();

    if (!value) {
      errorMsg.classList.remove("hidden");
      input.focus();
      input.style.borderColor = "var(--accent)";

      setTimeout(() => errorMsg.classList.add("hidden"), 2500);
      return;
    }

    errorMsg.classList.add("hidden");
    input.style.borderColor = "";

    const li = document.createElement("li");
    li.className = "hobby-item";
    li.innerHTML = `<span class="bullet">▸</span> ${escapeHtml(value)}`;

    list.appendChild(li);

    input.value = "";
    input.focus();
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  btnAdd.addEventListener("click", addHobby);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addHobby();
    if (input.value) {
      input.style.borderColor = "";
      errorMsg.classList.add("hidden");
    }
  });
})();