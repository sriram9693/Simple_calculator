function myfunction(){
    let num1 = document.getElementById('num1').value;
    let num2 =document.getElementById('num2').value;
    let calculate = document.getElementById('calculate').value;
    
    if(calculate==='+'){
        let num1 = parseFloat( document.getElementById('num1').value);
        let num2 = parseFloat( document.getElementById('num2').value);
        document.getElementById('result').value=num1+num2;



    }

    if(calculate==='-'){
        let num1 = parseFloat( document.getElementById('num1').value);
        let num2 = parseFloat( document.getElementById('num2').value);
        document.getElementById('result').value=num1-num2;

    }

    if(calculate==='*'){
        let num1 = parseFloat( document.getElementById('num1').value);
        let num2 = parseFloat( document.getElementById('num2').value);
        document.getElementById('result').value=num1*num2;
    }

    if(calculate==='/'){
        let num1 = parseFloat( document.getElementById('num1').value);
        let num2 = parseFloat( document.getElementById('num2').value);
        document.getElementById('result').value=num1/num2;



    }
}
