const verbs = require('./units/noteVerbs');
const yargs = require('yargs');
const fs = require('fs');
const verb = yargs.argv._[0];
const title = yargs.argv.to || yargs.argv.from || yargs.argv.note;
const body = yargs.argv.text || yargs.argv['with'];
const database = 'noteData.json';
let parsed;
fs.readFile(database, (err, data)=>{
parsed = JSON.parse(data);
const action = verbs[verb](parsed.notes, 'body');
parsed.notes = action({title}, body);
const indexOfNote = parsed.notes.findIndex(ele => ele.title == title);
if(verb != 'remove'){
console.log(`Title : ${parsed.notes[indexOfNote].title}. \n Body : ${parsed.notes[indexOfNote].body}`);
}
fs.writeFile(database, JSON.stringify(parsed), (err)=>{
if(!err){
console.log('Database was successfully updated');
}
})
});