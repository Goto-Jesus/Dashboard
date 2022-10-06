const fs = require('fs');// file system

//PUG

const pug = require('pug');
let html = pug.renderFile("src/layout/customers.pug",{ basedir:'src/includes'});
fs.writeFileSync("out/index.html",html);

// SASS
/*
const sass= require('sass');
let cssObj = sass.renderSync({
    file: 'src/style/_style.scss',
    outputStyle:"compressed",
    sourceMap:true, 
    outFile:'out/style.css'
});
fs.writeFileSync('out/style.css.map',cssObj.map);
fs.writeFileSync('out/style.css',cssObj.css);
*/

//pug convert
    //node build
//sass convert
    //npm run watch