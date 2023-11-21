// Definindo a classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      // Exibindo a mensagem do ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe
  const meuHeroi = new Heroi('Herói1', 30, 'mago');
  meuHeroi.atacar();