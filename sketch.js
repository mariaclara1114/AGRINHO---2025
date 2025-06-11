let cenarioAtual = 0;
let textos = [
  "🌱 Bem-vindo! Vamos celebrar a conexão entre o campo e a cidade.",
  "🚜 No campo, a produção de alimentos acontece com dedicação.",
  "🏙️ A cidade consome e valoriza o trabalho do campo.",
  "📡 Tecnologia urbana ajuda no desenvolvimento rural.",
  "🤝 Juntos, campo e cidade crescem mais fortes."
];

let vermelho = { x: 100, y: 400, tam: 50 };
let azul = { x: 600, y: 400, tam: 50 };

let telaInicio = true;
let tempoInicio;

function setup() {
  createCanvas(800, 600);
  textSize(20);
  textAlign(CENTER, CENTER);
  tempoInicio = millis(); // Marca o tempo inicial
}

function draw() {
  if (telaInicio) {
    mostrarTelaInicio();
    if (millis() - tempoInicio > 5000) {
      telaInicio = false; // Passa para o jogo após 5 segundos
    }
    return;
  }

  backgroundCenario();

  // Texto inferior
  fill(0, 150);
  rect(0, 500, width, 100);
  fill(255);
  text(textos[cenarioAtual], width / 2, 550);

  // Personagens
  fill(255, 0, 0);
  rect(vermelho.x, vermelho.y, vermelho.tam, vermelho.tam);

  fill(0, 0, 255);
  rect(azul.x, azul.y, azul.tam, azul.tam);

  moverPersonagens();
}

function mostrarTelaInicio() {
  background(20, 100, 50);
  fill(255);
  textSize(40);
  text("Agrinho 2025", width / 2, height / 2);
  textSize(20);
  text("Conectando Campo e Cidade", width / 2, height / 2 + 50);
}

function backgroundCenario() {
  let cores = [
    [130, 200, 100],  // Verde campo
    [180, 230, 120],  // Pasto claro
    [200, 200, 220],  // Cidade
    [100, 180, 255],  // Céu
    [255, 220, 120]   // Sol
  ];
  background(...cores[cenarioAtual]);
}

function moverPersonagens() {
  // 🔴 Vermelho - WASD
  if (keyIsDown(87)) vermelho.y -= 3; // W
  if (keyIsDown(83)) vermelho.y += 3; // S
  if (keyIsDown(65)) vermelho.x -= 3; // A
  if (keyIsDown(68)) vermelho.x += 3; // D

  // 🔵 Azul - Setas
  if (keyIsDown(UP_ARROW)) azul.y -= 3;
  if (keyIsDown(DOWN_ARROW)) azul.y += 3;
  if (keyIsDown(LEFT_ARROW)) azul.x -= 3;
  if (keyIsDown(RIGHT_ARROW)) azul.x += 3;
}

function keyPressed() {
  // Troca de cenário com ← →
  if (!telaInicio) {
    if (keyCode === RIGHT_ARROW && cenarioAtual < 4) {
      cenarioAtual++;
    } else if (keyCode === LEFT_ARROW && cenarioAtual > 0) {
      cenarioAtual--;
    }
  }
}