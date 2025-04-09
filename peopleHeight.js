let people = [];

// Функция загрузки данных
function preload() {
  people = [
    { height: 170, weight: 70 },
    { height: 150, weight: 50 },
    { height: 180, weight: 85 },
    { height: 165, weight: 60 }
  ];
}

function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  background(220);
  

  for (let i = 0; i < people.length; i++) {
    drawPerson(i * 150 + 50, 300, people[i].height, people[i].weight);
  }
}

// Функция рисования одного человечка
function drawPerson(x, y, h, w) {

  let headSize = w / 3;    
  let bodyHeight = h / 2;  
  
  // Голова
  fill(255, 204, 153);  // Цвет кожи
  ellipse(x, y - bodyHeight - headSize/2, headSize, headSize);
  
  // Тело
  stroke(0);
  strokeWeight(2);
  line(x, y - bodyHeight, x, y - headSize);
  
  // Руки
  line(x - headSize/2, y - bodyHeight + 20, x + headSize/2, y - bodyHeight + 20);
  
  // Ноги
  line(x, y - headSize, x - headSize/2, y);
  line(x, y - headSize, x + headSize/2, y);
  
  noStroke();
}