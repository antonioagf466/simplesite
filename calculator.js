//calculator

const displayit = document.getElementById("displayit");

function appendtodisplay(input){
    displayit.value += input;

}

function cleardisplayit(){
displayit.value = "";

}

function calculate(){
    try{
    displayit.value = eval(displayit.value);
    }
    catch(error){
        display.value = "Error"
    }
}
