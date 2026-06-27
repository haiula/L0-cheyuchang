// =============================================
//  L0 — 我的第一個 Creative Coding 作品 🎨
//
//  歡迎！這是你寫的第一支程式。
//  你不用看懂每一行 —— 只要找到有 ✏️ 的地方，
//  改改數字和文字，存檔，看畫面怎麼變就好。
//
//  大膽亂改！改壞了按 Ctrl/Cmd + Z 復原，不會弄壞電腦 😎
//  （滑鼠在畫面上移動看看，會有驚喜～）
// =============================================

// ✏️ 1. 把名字換成你的（也可以放 emoji，例如 "阿明 🐳"）
let myName = "haiphane 👾";

// ✏️ 2. 想要幾顆星星繞圈圈？試試 3、30、200…
let starCount = 1;

// ✏️ 3. 轉多快？0.005 很慢、0.05 很快、負數會倒著轉
let speed = -400000;

// ✏️ 4. 背景色（R, G, B：紅、綠、藍，每個都是 0 – 255）
let bgColor = [215, 100, 0];

// ✏️ 5. 你的調色盤！星星會從這裡隨機挑顏色，想加幾個都行
let palette = ["#d32304", "#ff8349", "#ffb23f"];

// ↓↓↓ 下面這些 L1–L2 會慢慢學到，現在先享受「改了就會變」的感覺 ↓↓↓

let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER); // 讓方塊以 (x, y) 為「中心」對齊，不然會往右下角偏掉
  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  // 生出一群星星，每顆都有自己隨機的角度、距離、大小和顏色
  for (let i = 0; i < starCount; i++) {
    stars.push({
      angle: random(TWO_PI),
      radius: random(50, min(width, height) * 0.1),
      size: random(6, 22),
      color: random(palette),
    });
  }
}

function draw() {
  // 用半透明背景蓋上去 → 星星就會拖著漂亮的尾巴
  background(bgColor[0], bgColor[1], bgColor[2], 80);

  // 滑鼠在哪，整群星星就繞著哪裡轉（還沒動滑鼠時先繞畫面中央）
  let cx = mouseX || width / 2;
  let cy = mouseY || height / 2;

  for (let s of stars) {
    s.angle += speed;
    let x = cx + cos(s.angle) * s.radius;
    let y = cy + sin(s.angle) * s.radius;
    fill(s.color);
    // rect(x, y, s.size);
    circle(x, y, s.size);
  }

  // 把你的名字放在正中間
  fill(255);
  textSize(min(width, height) * 0.025);
  text(myName, cx, cy);
}

// 視窗大小改變時，畫布跟著調整
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
