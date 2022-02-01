/**
 * 
 * @param {number} min included
 * @param {number} max not included
 * @returns {number} random number
 */
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min ;
}

export default getRandom;