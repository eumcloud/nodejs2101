var buf = Buffer.from('abcd');

for(x of buf.entries()){
    console.log(x);
} //ASCII table에서 10진수로 찍힘.



console.log("==========================");
for(x of buf.keys()){
    console.log(x);
}
console.log("==========================");
for(x of buf.values()){
    console.log(x);
}