


class Persona {
    
    static _conteo = 0;
    nombre = '';
    codigo = '';
    frase = '';
    comida = ''

    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, y mi identidad es: ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.frase}`)
    }
}



class Heroe extends Persona {
    clan = 'Sin Clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderMan = new Heroe('Peter', 'Spiderman', 'Jelou');

console.log(spiderMan);
spiderMan.quienSoy();