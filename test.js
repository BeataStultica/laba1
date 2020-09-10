// 1. Функція яка повертає масив з числами від 0 до n-1
function arr(n){
    var a = Array.from({length:n},(v,i)=>i);
    console.log(a);
    return(a);
}
arr(10);

//2. Функція що приймає 3 числа і перевіряє чи ділиться націло 1 число на друге і третє

function div(a,b,c){
    var ab = a%b;
    var ac = a%c;
    if ((ab == 0) && (ac == 0)){
        console.log("True");
        }
        else{
            console.log("False")
    }
    
}
div(6,3,2);
div(9,3,2);

//3. Функція капіталізації першої літери рядка

function cap(str){
    var s = str[0].toUpperCase() + str.slice(1);
    console.log(s)
    return(s)
}
cap('abcde')