class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/Arcoiris.png");
    this.cannon_base = loadImage("assets/player.png");
  }
  

/*display(){
push();
translate(this.x, this.y);
rotate(this.angle);
ImageMode(CENTER);
image(this.cannon_image,0,0,this.width,this.height);
pop();
image(this.cannon_base,70,20,200,200);
}*/
display() { 
  push(); 
  translate(this.x, this.y); 
  //rotate(this.angle); 
  imageMode(CENTER); 
  image(this.cannon_image, 10, -60, this.width, this.height); 
  pop(); 
  image(this.cannon_base,100, 10, 80, 200); 
  noFill(); 
}
}