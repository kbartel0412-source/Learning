const badge = document.getElementById("status-badge");

const states = ["draft", "sent", "paid"];
let current = 0;

badge.addEventListener("click", function() {
  current = (current + 1) % states.length;
  
  badge.className = "button " + states[current];
  badge.textContent = states[current];
});