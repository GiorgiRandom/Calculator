let maindiv=document.createElement('div')
maindiv.setAttribute('id','maindiv')
document.body.append(maindiv)
let some=document.getElementById('inpute')
maindiv.appendChild(some)
let newdiv=document.createElement("div")
newdiv.setAttribute('id','newdiv')
maindiv.appendChild(newdiv)
let new1;
for(let i =0;i<10;i++){
    let calculatorkeys=document.createElement('button')
    calculatorkeys.setAttribute('class','calculatorkeys')
    calculatorkeys.textContent=i
    calculatorkeys.onclick=function(){
         updateDisplay(i)
    }
    newdiv.appendChild(calculatorkeys)
}
let op=['+','-','=','/','C','*']
let specialoperator=document.createElement('button')
specialoperator.textContent='del'
specialoperator.setAttribute('id','del')
newdiv.appendChild(specialoperator)
specialoperator.addEventListener('click',()=>some.value=some.value.slice(0,-1))
for(let j=0;j<op.length;j++){
    let calculatoroperators=document.createElement('button')
    calculatoroperators.setAttribute('class','calculatoroperators')
    calculatoroperators.textContent=op[j]
    calculatoroperators.onclick=function (){
        return handleoperator(op[j])
    }
    newdiv.appendChild(calculatoroperators)
}
function handleoperator(element){
    
    if (element==='C'){
        some.value=''
    }
    else if (element === '=') {
        evaluateExpression();
    } else {
        some.value += element;
    }
   
   
   
    
}
function updateDisplay(element) {
    some.value += element;
    console.log(element)
}
function evaluateExpression() {
    const expression = some.value;
    const operators = expression.match(/[+\-*/]/g);
    const operands = expression.split(/[+\-*/]/).map(Number);

    if (operators && operands.length > 1) {
        let result = operands[0];

        for (let i = 0; i < operators.length; i++) {
            const operator = operators[i];
            const operand = operands[i + 1];

            result = operate(operator, result, operand);
        }

        some.value = result;
    }
}

function operate(operator,a,b){
    if(operator==='+'){
    return add(a,b)
}
if(operator==='-'){
    return subtract(a,b)
}
if(operator==='*'){
    return multiply(a,b)
}
if(operator==='/'){
    return divide(a,b)
}}
function add(...x){
    return x.reduce(sum)
    function sum(pre,next){
        return pre+next

    }
}
function subtract(...x){
    return x.reduce(sub)
    function sub(pre,next){
        return pre-next

    }
    
}
function multiply(...x){
    return x.reduce(multi)
    function multi(pre,next){
        return pre*next

    }}
function divide(...x){
    return x.reduce(divid)
    function divid(pre,next){
        return pre/next

    }
}