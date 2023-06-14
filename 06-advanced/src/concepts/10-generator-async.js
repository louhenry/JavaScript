import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {

    // console.log('generatorAsyncComponent');
    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do{
        const {value, done} = await heroGenerator.next();
        isFinished = done;
        if( isFinished) break;
        
        element.innerHTML = value;

        console.log(value, done)
    } while( !isFinished)
    

}


async function* getHeroGenerator(){
    for (const hero of heroes ){
        await sleep();
        yield hero.name;    }
    return 'No mas';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 600);
    })
}