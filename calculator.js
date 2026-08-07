const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression = display.value.replace('%','/100');
        display.value = eval(expression);

    }

    catch{

        display.value = "Error";

        setTimeout(()=>{
            display.value="";
        },1000);

    }

}

// Keyboard Support

document.addEventListener("keydown",(e)=>{

const key=e.key;

if(
"0123456789+-*/.%".includes(key)
){

append(key);

}

else if(key==="Enter"){

e.preventDefault();
calculate();

}

else if(key==="Backspace"){

deleteLast();

}

else if(key==="Escape"){

clearDisplay();

}

});