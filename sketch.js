
27
​
28
function draw() {
29
  background(0);
30
  mostraBolinha(); // Chamando a função mostra bolinha
31
  movimentaBolinha();
32
  verificaColisaoBorda();
33
  mostraRaquete();
34
  movimentaRaquete();
35
  verificaColisaoRaquete();
36
  mostraRaqueteOponente();
37
  movimentaRaqueteOponente();
38
  verificaColisaoRaqueteOponente();
39
  incluirPlacar();
40
  marcaPontos();
41
  movimentaRaqueteOponenteCimaBaixo();
42
}
43
  
44
 //Cria a função mostraBolinha
45
function mostraBolinha(){
46
  circle(xBolinha, yBolinha, diametro);
47
}
48
​
49
function movimentaBolinha() {
50
  xBolinha += velocidadeXbolinha;
51
  yBolinha += velocidadeYbolinha;
52
}
53
​
54
function verificaColisaoBorda() {
55
  if (xBolinha > width || xBolinha < 0) {
56
    velocidadeXbolinha *= -1;
57
  }
58
  
59
if (yBolinha > height || yBolinha < 0) {
60
  velocidadeYbolinha *= -1;
61
}
62
}
63
​
64
function mostraRaquete() {
65
 rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
66
}
67
    
68
function movimentaRaquete() {
69
  if (keyIsDown(UP_ARROW)) {
70
    yRaquete -= 10;
71
  }
72
  if (keyIsDown(DOWN_ARROW)) {
73
    yRaquete += 10;
74
    }
75
}  
76
  
77
    function verificaColisaoRaquete() {
78
      if (
79
        xBolinha - raio < xRaquete + raqueteComprimento &&
80
        yBolinha - raio < yRaquete + raqueteAltura &&
81
        yBolinha + raio > yRaquete
82
      ) {
83
        velocidadeXbolinha *= -1;
