import {sayHello} from "./greet";
import {numberOne} from "./other";

function showHello(divName: string, name: string){
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", numberOne());