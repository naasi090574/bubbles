const stage = document.getElementById("stage");
const popAudio = document.getElementById("popAudio");

const bubbleImages = [
  "https://img.genially.com/66f849d0f7b39c0016fdd814/5a52dd93-36cb-4984-a197-372f64361f68.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/94ed123a-0e99-4ae2-9766-2f920dbfc90d.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/e099511d-a0a3-4870-a729-b1992602dc63.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/784696f1-03a1-4740-a871-43bce7971353.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/68293df0-a151-4b36-a5e3-911a520d1083.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/4edc177c-cff4-427e-931a-b1637f266a38.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/bbff9ce3-b8a3-4493-bb75-fcb43538cf23.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/ce2505a1-ed03-4815-aa39-a3d33cb41d06.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/0e9cc7c7-92b6-4cd7-9e45-4c2d1cbb99db.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/d4eac430-2d6e-4582-87d6-9f2da390a898.png",
  "https://img.genially.com/66f849d0f7b39c0016fdd814/68ffe64b-b974-4a05-883d-b235a9178424.png"
];

const bubbles = [];
const size = 140;

function createBubble(src) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const img = document.createElement("img");
  img.src = src;

  bubble.appendChild(img);
  stage.appendChild(bubble);

  let x = Math.random() * (window.innerWidth - size);
  let y = Math.random() * (window.innerHeight - size);

  let vx = (Math.random() * 1.2 + 0.3) * (Math.random() < 0.5 ? -1 : 1);
  let vy = (Math.random() * 1.2 + 0.3) * (Math.random() < 0.5 ? -1 : 1);

  bubble.style.left = x + "px";
  bubble.style.top = y + "px";

  bubble.addEventListener("click", () => {
    popAudio.currentTime = 0;
    popAudio.play();
    bubble.classList.add("burst");
    setTimeout(() => bubble.remove(), 250);
  });

  function move() {
    x += vx;
    y += vy;

    if (x <= 0 || x >= window.innerWidth - size) vx *= -1;
    if (y <= 0 || y >= window.innerHeight - size) vy *= -1;

    bubble.style.left = x + "px";
    bubble.style.top = y + "px";

    requestAnimationFrame(move);
  }

  move();
}

bubbleImages.forEach(src => createBubble(src));
