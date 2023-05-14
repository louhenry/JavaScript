

/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Arreglo de String, deck Actual
 * @returns {string} Una carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
