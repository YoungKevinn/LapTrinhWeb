

(function () {
  const btnEdit    = document.getElementById("btn-edit");
  const overlay    = document.getElementById("modal-overlay");
  const btnClose   = document.getElementById("modal-close");
  const btnCancel  = document.getElementById("btn-cancel");
  const btnSave    = document.getElementById("btn-save");

  const inputName  = document.getElementById("input-name");
  const inputMssv  = document.getElementById("input-mssv");
  const inputClass = document.getElementById("input-class");

  const displayName  = document.getElementById("display-name");
  const displayMssv  = document.getElementById("display-mssv");
  const displayClass = document.getElementById("display-class");

  function openModal() {
    inputName.value  = displayName.textContent;
    inputMssv.value  = displayMssv.textContent;
    inputClass.value = displayClass.textContent;
    overlay.classList.remove("hidden");
    inputName.focus();
  }

  function closeModal() {
    overlay.classList.add("hidden");
  }

  function saveChanges() {
    const newName  = inputName.value.trim();
    const newMssv  = inputMssv.value.trim();
    const newClass = inputClass.value.trim();

    if (!newName && !newMssv && !newClass) {
      inputName.focus();
      inputName.style.borderColor = "var(--accent)";
      return;
    }

    if (newName)  displayName.textContent  = newName;
    if (newMssv)  displayMssv.textContent  = newMssv;
    if (newClass) displayClass.textContent = newClass;

    closeModal();

    // Animation flash trên card vừa cập nhật
    [displayName, displayMssv, displayClass].forEach(el => {
      el.style.transition = "color 0s";
      el.style.color = "var(--accent)";
      setTimeout(() => {
        el.style.transition = "color 0.6s ease";
        el.style.color = "";
      }, 50);
    });
  }

  // Event 
  btnEdit.addEventListener("click", openModal);
  btnClose.addEventListener("click", closeModal);
  btnCancel.addEventListener("click", closeModal);
  btnSave.addEventListener("click", saveChanges);

  [inputName, inputMssv, inputClass].forEach(inp => {
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") saveChanges();
      if (e.key === "Escape") closeModal();
      inp.style.borderColor = ""; // reset màu lỗi khi gõ lại
    });
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
})();