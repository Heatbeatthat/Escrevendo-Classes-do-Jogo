class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'Mago':
        ataque = 'Magia';
        break;
      case 'Guerreiro':
        ataque = 'Espada';
        break;
      case 'Monge':
        ataque = 'Artes Marciais';
        break;
      case 'Ninja':
        ataque = 'Shuriken';
        break;
    }
    console.log(`O ${this.nome} atacou usando ${ataque}`);
  }
}
batman = new Heroi("Batman", 35, "Ninja")
batman.atacar();