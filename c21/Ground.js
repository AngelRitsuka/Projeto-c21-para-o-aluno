//avisar o pc que o arquivo é uma classe
class ground
{
    //começar a construir o protótipo e avisar o que será incutido nele
	constructor(x,y,w,h)
	{
        //características do objeto
		var options=
        {
		    isStatic:true			
        }
		

        //this é para avisar que o código pertence a classe
        //o que vamos ter neste objeto? X,y, largura e altura,
        //um corpo físico e o mesmo pertencer ao mundo que criamsmos
        this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}


    //mostrar o prótotipo na tela, o que irá aparecer? 
	display()
	{
			//para facilitar ao falar de posição foi criada esta VAR: groundPos
			var groundPos=this.body.position;		

            //abrir 'caixa organizadora' para não espalhar imagens, não deixar também aleatórias as posições
			push();
            //traduzir a posição para se colocar imagem, a mesma ficar dentro da forma geometrica que criamos.
			translate(groundPos.x, groundPos.y);
            //centralizar as rects que foram criadas
            rectMode(CENTER);
			//grossura da linha
            strokeWeight(4);
            //cor de dentro da rect
			fill(255,255,0);
            //criar a rect e suas propriedades
			rect(0,0,this.w, this.h);
            //fechando a caixinha com pop
			pop();
			
	}

}