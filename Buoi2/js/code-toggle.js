

(function () {
  const btnToggle   = document.getElementById("btn-toggle-code");
  const codeBlock   = document.getElementById("code-block");
  const hiddenNotice = document.getElementById("code-hidden-notice");

  let isVisible = true; 

  btnToggle.addEventListener("click", () => {
    if (isVisible) {
      codeBlock.classList.add("hidden");
      hiddenNotice.classList.remove("hidden");
      btnToggle.textContent = " Hiện mã nguồn";
      isVisible = false;
    } else {
      codeBlock.classList.remove("hidden");
      hiddenNotice.classList.add("hidden");
      btnToggle.textContent = " Ẩn mã nguồn";
      isVisible = true;
    }
  });
})();