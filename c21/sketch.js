const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//crie as var da bola, chao, aste_da_esquerda e da aste_da_direita;


var world;
//para a bola :)
var radius = 40;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crie as propriedades da bola


	//crie a bola e adicione ela no mundo


	//crie o chão apartir da classe ground
	//(vou demonstrar como tu pode fazer isso, 
	//você vai fazer a mesma coisa para criar 
	//as astes do lixo)
	groundChao = new ground(width/2,670,width,20);
	//quando tu criar a classe tu ja coloca ela no 
	//mundo por lá, por isso não precisa adicionar aqui


	//crie o aste_da_esquerda apartir da classe



	//crie o aste_da_direita apartir da classe



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 //use a função ellipse para mostrar a bola

 //use a função display para mostrar cada objeto criado apartir da classe

 
}

//crie a função keyPressed aqui em baixo


