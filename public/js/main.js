let closeMsgButton = document.querySelector("#close_msg_button");
if (closeMsgButton) {
  closeMsgButton.addEventListener("click", () => {
    document.querySelector("#msg_div").style.display = "none";
  });
}

let status = document.querySelector("#msg_div");
setTimeout(() => {
  status.classList.add("hidden");
}, 4000);
