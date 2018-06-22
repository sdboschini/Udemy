console.log('Starting notes.');
// module.exports.age = 25;

module.exports.addNote = () => { //sostituisce function
    console.log('addNote');
    return 'New Note';
};
// EQUIVALE A...
// export function addNote() {
//     console.log('addNote');
//     return 'New Note';
// }

module.exports.add = (a, b) => {
    return a + b;
};