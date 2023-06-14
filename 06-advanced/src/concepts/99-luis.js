
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const demoPromise = (element) => {

    promise
        .then((message) => console.log(message))
        .catch((message) => console.log(message))

}

const promise = new Promise((resolve,reject) => {
    resolve('Bien')
    reject ('Error')
    
})