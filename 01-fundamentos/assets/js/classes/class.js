

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
        console.log(`${this.frase}`)
    }
}



const spiderMan = new Persona('Peter', 'Spiderman', 'Jelou');
// const ironMan = new Persona('Tony', 'Ironman', 'Am Ironman');

console.log(spiderMan);
// console.log(ironMan);

spiderMan.quienSoy();
spiderMan.miFrase();

spiderMan.setComidaFavorita = 'El postre de lo que sea';
console.log(spiderMan);

console.log('Conteo Estatico: ',Persona._conteo);