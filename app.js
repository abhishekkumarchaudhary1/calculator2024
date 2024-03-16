const input = document.querySelector('#myInput');

const allBtnArray = Array.from(document.querySelectorAll('.calBtn'));
const numBtnArray = allBtnArray.filter(btn=>!isNaN(btn.innerHTML)&&btn.innerHTML!='');
const operatorBtnArray = allBtnArray.filter(btn=>isNaN(btn.innerHTML)&&btn.innerHTML!=''&&btn.innerHTML!=='=');

const equalsBtn = document.getElementById('equalsBtn');
let evalStr = '';

numBtnArray.map((btn)=>{
        
    btn.addEventListener('click',(e)=>{

        result.innerHTML = '';
        input.value+=(btn.innerHTML);
    })
    
});

operatorBtnArray.map((btn)=>{
    btn.addEventListener('click',()=>{

        result.innerHTML = '';
        evalStr+=input.value;
        evalStr+=btn.innerHTML;
        input.value = '';
    })
})

equalsBtn.addEventListener('click',()=>{
    evalStr+=input.value;
    input.value = '';
    result.innerHTML = eval(evalStr);
    evalStr = '';
})
