const questions = [
    "1- Qual problema que você está resolvendo?",
    "2- Esse código é legível para desenvolvedores com qualquer nível de experiência? (Sim/Não)",
    "3- Vou lembrar como isso funciona daqui 6 meses? (Sim/Não)",
    "4- Eu realmente entendo como esse código funciona? (Sim/Não)",
    "5- Esse código faz sentido? (Sim/Não)",
    "6- Essa é a melhor maneira de fazer isso? (Sim/Não)",
    "7- Esse nome representa o que essa função/classe/variável realmente faz? (Sim/Não)",
];

const ask =(index =0) =>{
    process.stdin.write("\n"+ questions[index] + " > ")
}
ask()

const answers =[]

process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if( answers.length <questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
   console.log(`
    
   Vamos ver se entendi suas respostas.

   - Pelo que entendi essse é o problema em que você está resolvendo :
   ${answers[0]}

   - Os desenvolvedores de outros nívels... ${answers[1]}  entenderá o seu código

   - Você disse que ${answers[2]} lembrará do seu código daqui a 6 meses

   - Você respondeu que ${answers[3]} , entende sobre o funcionamento do código

   - Então seu código ${answers[4]} faz sentido! De acordo com a sua resposta

   - Sua resposta se essa é a maneira certa de fazer, é: ${answers[5]} 
    
   - O nome que você deu para a função/classe/varíavel ${answers[6]} representa elas

    Obrigada pelas suas respostas! Reflexões ajudam a nossa produtividade :)
   `)
})