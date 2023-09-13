const screen = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');

let var1 = '0';
let var2;
let res;

btn.forEach(boton => {
    
    boton.addEventListener('click', () => {
      //  debugger;
    const btnpress = boton.textContent;
    
    
    if (screen.textContent === "0" && var1 == '0'){
        screen.textContent = btnpress;
        
    } else if (btnpress === '+') {
        var1 = screen.textContent;
        screen.textContent = '';
        res = btnpress;
    } else if (btnpress === '-') {
        var1 = screen.textContent;
        screen.textContent = '';
        res = btnpress;
    }else if (btnpress === 'x') {
        var1 = screen.textContent;
        screen.textContent = '';
        res = btnpress;
    }else if (btnpress === '/') {
        var1 = screen.textContent;
        screen.textContent = '';
        res = btnpress;
    }else if (btnpress === '='){
        var2 = screen.textContent;
        screen.textContent = result();
    }else if (btnpress === 'CLEAR'){
        var1 = '0';
        var2 = '0';
        screen.textContent = '0';
    }

     else {
        screen.textContent += btnpress;
    }

    
     function result(){
        let total;
        switch(true) {
            case res === '+':
                return Number(var1) + Number(var2);
            break;
            case res === '-':
                return Number(var1) - Number(var2);
            break;
            case res === 'x':
                return Number(var1) * Number(var2);
            break;
            case res === '/':
                if ((Number(var1) / Number(var2)) == 'Infinity'){
                    return '0'
                } else {
                    return Number(var1) / Number(var2);
                }
                
            break;
            default:
                return 'error'
                break;
        }
     }
   
    })
})