let text ="Timothy nem tud Pokemon showdown-nal jatszani csak egy op attackot spammel az oreg ami ellen egy countert se kaptam. gatya jatek."
console.log(text.slice(0,5))

console.log(text.slice(4,9))

console.log(text.slice(4))

console.log(text.substring(4,10))

console.log(text.toUpperCase())

for(var i=0; i<text.length;i++){
    if(i%2==0){
        console.log(text[i].toUpperCase());
    }
    else console.log(text[i]);
}

console.log(text.replace("e","E"));

console.log(text.split('e'));

