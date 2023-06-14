
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    //console.log('generatorFunctionsComponent');
    
    const genId = idGenerator();
    
    const button  = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', event => renderButton())
}


function* idGenerator(){
    let currentId = 0;

    while(true){
        yield ++currentId;
    }
}

function* myFirstGenFunction(){
    yield 'Primer Valor';
    yield 'Segundo Valor';
    yield 'Tercer Valor';
    yield 'Cuarto Valor';
    
    return 'Ya no hay valores';
    yield 'Quinto Valor';
}