const display = document.getElementById('display');
const button = document.querySelectorAll('button');



button.forEach((btn)=>{
      btn.addEventListener('click',(e)=>{
        e.preventDefault();
          let result ='';
          result = display.value;
           display.value += e.target.innerText;
        if(e.target.innerText == 'C'){
            display.value = '';
        }else if(e.target.innerText == '='){
            display.value = eval(result);
        }else if(e.target.innerHTML == '<i class="fa-solid fa-arrow-left-long"></i>'){
           display.value = result.substring(0,result.length-1);
        }else if(e.target.innerText =='sin'){
          display.value = (Math.sin(result)).toFixed(2);
        }else if(e.target.innerText =='cos'){
          display.value = (Math.cos(result)).toFixed(2);
        }else if(e.target.innerText =='tan'){
          display.value = (Math.tan(result)).toFixed(2);
        }else if(e.target.innerHTML ==`<i class="fa-solid fa-square-root-variable"></i>`){
          display.value = Math.sqrt(result);
        }

      })

})

