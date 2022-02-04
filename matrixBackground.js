/*o efeito matrix é feito com colunas de caracteres que caem de cima para baixo, com fade-out ao longo da queda, com somente algumas colunas aleatorias aparecendo por vez*/


//pegando canvas do html
var canvas = document.getElementById('matrix');
//definindo contexto 2d
var background = canvas.getContext('2d');

//definindo tamanho máximo para canvas usando o DOM window 
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//estabelecendo array com os chars do efeito
const matrixChars = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
const fontSize = 18;

//dividindo canvas por colunas : tamanho da fonte / tamanho do canvas
const columns = canvas.width/fontSize;


//cada coluna será uma array nova que conterá os chars e iniciara do y=1
const drops = new Array(Math.floor(columns)).fill(1); // o valor é iniciado como 1 para todos os elementos



function draw()
{
    //pintando fundo de preto com opacidade a cada repetição, para que as letras sumam aos poucos no contraste com o fundo transparente, mas que será predominantemente preto, pois pintaremos recursivamente o preto transparente, antes mesmo da página refazer os gráficos, usando requestAnimationFrame
    background.fillStyle = 'rgba(0,0,0,0.08)';
    background.fillRect(0,0,canvas.width,canvas.height);

    //definiindo cor e estilo da fonte
    background.fillStyle = '#0F0';
    background.font = `${fontSize}px Arial`;

    for (let i = 0; i < drops.length; i++)
    {
        //pegando char random
        const char = matrixChars[Math.floor(Math.random()*matrixChars.length)]

        //escrevendo na tela
        background.fillText(char,i*fontSize, drops[i]*fontSize); //x = iteração*tamanho da letra, assim a cada i a letra nova aparece ao lado da outra, com uma letra de espaço. 
        drops[i]++ //movendo as colunas no eixo y, incrementando a partir de 1
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.95){ // para as gotas voltarem só em algums momentos ramdomicos, adicionamos uma condição de que o código dentro do if só acontece quando um numero gerado randomicamente é igual a um numero fixo qualquer determinado por nós
            drops[i] = 0;   // se as letras atingirem o final da tela, elas devem voltar ao y=0
        }
    }
    //chamada recursiva para animar quadro a quadro, redesenhando a cadeia de chars
    window.requestAnimationFrame(draw);
}

draw();