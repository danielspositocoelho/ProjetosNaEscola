/*o efeito matrix é feito com colunas de caracteres que caem de cima para baixo, com fade-out nas extremidades, iniciando de ponto aleatórios da coluna e com somente algumas colunas aleatorias aparecendo por vez*/


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
    //pintando fundo de preto com opacidade, para valorizar o fade-out
    background.fillStyle = 'rgba(0,0,0,0.05)';
    background.fillRect(0,0,canvas.width,canvas.height);

    //definiindo cor e estilo da fonte
    background.fillStyle = '#0F0';
    background.font = `${fontSize}px Arial`;

    for (let i = 0; i < drops.length; i++)
    {
        //pegando char random
        const char = matrixChars[Math.floor(Math.random()*matrixChars.length)]

        //escrevendo na tela
        background.fillText(char,i*fontSize, drops[i]*fontSize);
    }
}

draw();