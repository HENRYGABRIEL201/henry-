let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 12) {
    if (idade >= 18) {
      return "jogos mortais";
    } else {
      if (idade >= 16) {
        if(gostaDeFantasia) 
          return "sob a água do sena ";     
        if(gostaDeAventura) {
          return "dead pool"; 
        } else{
         return "o grito ";
        }
      } else {
        if (gostaDeFantasia) {
          return "o menino que descubriu o vento ";
        } else {
          return "guardioẽs da galaxia ";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "veronica";
    } else {
      return "era do gelo ";
    }
  }
}
