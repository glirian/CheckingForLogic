let  message=prompt("Enter the text")
console.log(message)
const result=message.split(",");
console.log(result)
const text=[];
const numb=[];
for(let i=0;i<result.length; i++){
const iNumb=result[i];
const num = Number(iNumb)
if(isNaN(num)){
    numb.push(iNumb)
}else{
    text.push(result[i])
}

}

console.log(text);
console.log(numb)
