let c;
let circs=[];
let n=10;
let points=[];
let j;
let pointsxy=[];

function setup(){

  createCanvas(800,800);
  c=new first(200,200,1);
  circs[0]=c;
  for(let i=1;i<n;i++){
    circs[i]=new circ(circs[i-1],circs[i-1].n+2);
  }

}



function draw(){

  background(0);
  circs[0].show();
  circs[0].update();
  for(j=1;j<n;j++){
    circs[j].show();
    circs[j].update(circs[j-1]);
  }
  points.unshift(circs[n-1].py+circs[n-1].y);
  pointsxy.unshift([circs[n-1].px+circs[n-1].x,circs[n-1].py+circs[n-1].y]);
  if(points.length>200){
    points.pop();
  }
  //c.points();
  if(pointsxy.length>150){
    pointsxy.pop();
  }
  push();
  beginShape()
  noFill();
  stroke(255);
  for(let m=0;m<pointsxy.length;m+=1){
      vertex(pointsxy[m][0],pointsxy[m][1])
  }
  endShape();
  pop();

  push();
  beginShape();
  stroke(255);
  noFill();
  for(let k=0;k<points.length;k+=1){
    vertex(500+k,points[k]);
  }
  endShape();
  pop();
}

class first{

  constructor(x,y,n){
    this.x=x;
    this.y=y;
    this.n=n;
    this.dia=200;
    this.rad=(this.dia/2)*(4/(this.n*PI));
    this.time=0;
    this.px=this.rad*cos(this.n*this.time);
    this.py=this.rad*sin(this.n*this.time);
  }
  update(){
    this.time-=0.05;
    this.px=this.rad*cos(this.n*this.time);
    this.py=this.rad*sin(this.n*this.time);
  }

  show(){
    push();
    translate(this.x,this.y);
    stroke(255);
    noFill();
    ellipse(0,0,this.rad*2);
    pop();
  }

  points(){
    push();
    stroke(255);
    strokeWeight(10)
    point(this.x+this.px,this.y+this.py);
    pop();
  }

}


class circ{

  constructor(parent,n){
    this.x=parent.x+parent.px;
    this.y=parent.y+parent.py;
    this.n=n;
    this.dia=200;
    this.rad=(this.dia/2)*(4/(this.n*PI));
    this.time=0;
    this.px=this.rad*cos(this.n*this.time);
    this.py=this.rad*sin(this.n*this.time);
  }

  update(parent){
    this.time-=0.05;
    this.x=parent.x+parent.px;
    this.y=parent.y+parent.py;
    this.px=this.rad*cos(this.n*this.time);
    this.py=this.rad*sin(this.n*this.time);
  }

  show(){
    push();
    stroke(255);
    noFill();
    ellipse(this.x,this.y,this.rad*2);
    pop();
  }

}
