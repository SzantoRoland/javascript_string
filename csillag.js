let text = "*";
for(let i=1;i<6;i++){
    console.log(text.repeat(i));
};

for(let i=6;i>1;i--){
    console.log(text.padStart(i, " ")+text.repeat(6-i));
};

for(let i=1;i<6;i++){
    console.log(" ".repeat(5-i)+(text+" ").repeat(i));
};

for(let i=5;i>0;i--){
    console.log(text.repeat(i));
};
for(let i=5;i>0;i--){
    console.log(text.repeat(i).padStart(5, " "));
};

