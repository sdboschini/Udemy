console.log('Starting app.');

// const os = require('os');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command.toLowerCase() === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command.toLowerCase() === 'list') {
    console.log('Listing all notes');
} else if (command.toLowerCase() === 'read') {
    console.log('Reading note');
} else if (command.toLowerCase() === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}



// ****************************************************************************

// console.log(_.isString(true));
// console.log(_.isString('Simona'));

// var filteredArray = _.uniq(['Pippo', 1, 'Simona', 1, 2, 3, 4]);
// console.log(filteredArray);

// console.log('Result:', notes.add(2, -5));

// var res = notes.addNote();
// console.log(res);


// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);


// Option one
// fs.appendFile('greetings.txt', 'Hello Simona!', function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

// Option two
// fs.appendFileSync('greetings.txt', 'Hello Simona!');