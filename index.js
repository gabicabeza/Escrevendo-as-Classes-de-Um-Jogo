// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída
// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada
// ____________________________________________________________________________________________

// A palavra-chave class é usada para definir uma classe em JavaScript.
// O nome da classe é heroi.
// A classe tem um construtor que aceita três parâmetros: nome, idade e tipo.
// Dentro do construtor, esses parâmetros são atribuídos às propriedades correspondentes da instância da classe (ou seja, this.nome, this.idade e this.tipo).
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
// Método atacar():
// Este método é definido dentro da classe heroi.
// Ele não aceita nenhum parâmetro.
// O objetivo deste método é determinar o tipo de ataque com base no valor da propriedade tipo.
// Um bloco switch é usado para verificar o valor de this.tipo e atribuir o tipo de ataque a uma variável chamada ataque.
// Se o valor de this.tipo for 'mago', o ataque será 'magia'. Se for 'guerreiro', o ataque será 'espada', e assim por diante.
// Se o valor de this.tipo não corresponder a nenhum dos casos especificados, o ataque será definido como 'um ataque desconhecido'.
// Por fim, o método exibe uma mensagem no console com o tipo de herói e o tipo de ataque usado.
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

    // código utilizando if e else
    //  atacar() {
    //     let ataque;
    //     if (this.tipo === 'mago') {
    //         ataque = 'magia';
    //     } else if (this.tipo === 'guerreiro') {
    //         ataque = 'espada';
    //     } else if (this.tipo === 'monge') {
    //         ataque = 'artes marciais';
    //     } else if (this.tipo === 'ninja') {
    //         ataque = 'shuriken';
    //     } else {
    //         ataque = 'um ataque desconhecido';
    //     }

        // ${this.tipo} e ${ataque} são substituídos pelos valores das propriedades tipo e ataque da instância do herói.
        console.log(`O ${this.tipo} atacou usando ${ataque}`);

        // uma abordagem diferente, pode usar concatenação de strings em vez de template strings:
        // console.log('O ' + this.tipo + ' atacou usando ' + ataque);
    }
}
// Cria uma instância do herói com os dados inseridos
const meuHeroi = new heroi('João', 66, 'mago');
// O método atacar() é chamado na instância meuHeroi, que exibirá a mensagem no console.
meuHeroi.atacar();

