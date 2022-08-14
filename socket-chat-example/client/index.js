const socket = io();

const messages = document.getElementsByTagName("ul")?.[0];
const form = document.getElementsByTagName("form")?.[0];
const input = document.getElementsByTagName("input")?.[0];

// send message to socket server
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

// receive message from socket server
socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  messages.scrollTo(0, messages.scrollHeight);
});
