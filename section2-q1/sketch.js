// 小手調べ
function setup(){
  createCanvas(200, 200)
  for(let i = 0; i < 10; i++){
    noFill();
    if(i < 5){
    stroke(0, 0, 255);
  }
  else{
  stroke(255, 0, 0);
}
  ellipse(60, 60, 10 + 10 * i);

    // BLANK[1]
  }
}
