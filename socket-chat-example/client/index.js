const socket = io();

const form = document.getElementsByTagName("form")?.[0];
const input = document.getElementsByTagName("input")?.[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});
