const decreaseBTN = document.getElementById(`decrease-btn`);
const increaseBTN = document.getElementById(`increase-btn`);
const reset = document.getElementById(`reset-btn`);
const label = document.getElementById(`count`);
let count = 0;     

increaseBTN.onclick = function(){
    count++;
    label.textContent = count;
}

decreaseBTN.onclick = function(){
    count--;
    label.textContent = count;
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}

