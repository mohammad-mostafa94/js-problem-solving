let text = "hello";
let empty = '';
for (const text1 of text) {
    console.log(text1);
    empty = text1 + empty;
    
}
console.log("empty=",empty)