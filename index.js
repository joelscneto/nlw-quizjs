const perguntas = [
    {
      pergunta: "Qual é o resultado da expressão 5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Error"
      ],
      correta: 1
    },
    {
      pergunta: "Qual dessas opções é uma forma válida de se comentar uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "' Comentário",
        "* Comentário"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do método que é usado para imprimir uma mensagem no console?",
      respostas: [
        "print()",
        "log()",
        "console()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":="
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama o processo de combinar dois ou mais strings em JavaScript?",
      respostas: [
        "Concatenação",
        "Atribuição",
        "Adição"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "vare x = 5;",
        "variable x = 5;",
        "var x = 5;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o tipo de dados que é utilizado para representar valores verdadeiro/falso em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Number"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas: [
        "22",
        "4",
        "TypeError"
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama a estrutura de controle que permite a execução repetida de um bloco de código enquanto uma condição específica for verdadeira?",
      respostas: [
        "for loop",
        "while loop",
        "if statement"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador usado para comparar se dois valores são iguais em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição 
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
       corretas.add(item) 
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }