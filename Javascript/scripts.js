const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Certeza!",
  "Não tenho tanta certeza",
  "É decididamente assim",
  "Não conte com isso",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde",
  "Sim, definitivamente!",
  "Minha resposta é não",
  "Você pode contar com isso",
  "Melhor não te dizer agora",
  "A meu ver, sim",
  "Minhas fontes dizem não",
  "Provavelmente",
  "Não é possível prever agora",
  "Perspectiva boa",
  "As perspectivas não são tão boas",
  "Sim",
  "Concentre-se e pergunte novamente",
  "Sinais apontam que sim"
]


// click no botão fazer pergunta
function fazerPergunta(){

    if (inputPergunta.value == ""){
        alert("Por favor, faça uma pergunta.")
        return 
    }

    // desabilitar o botão
    buttonPerguntar.setAttribute("disabled", true)
    
    const pergunta = "<div>" + inputPergunta.value + "</div>"
    
    // gerar número aleatório
    const totalRespostas = respostas.length
    const numberAleatory = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = respostas[numberAleatory]
    inputPergunta.innerHTML = respostas[numberAleatory]

    elementoResposta.style.opacity = 1;


    // sumir resposta depois de 3 segundos

    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}

