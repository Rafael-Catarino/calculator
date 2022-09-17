// escrevendo de um modo diferente a mesma função.
/* function insert() {
  const button = document.querySelectorAll('.button');
  for(let i = 0; i < button.length; i += 1){
    button[i].addEventListener('click', () => {
      if (button[i].innerHTML === 'AC') {
        clear();
      } else if (button[i].innerHTML === 'C') {
        back();
      } else if (button[i].innerHTML === '=') {
        result();
      } else {
        let p = document.querySelector('p').innerHTML;
        document.querySelector('p').innerHTML = p + button[i].innerHTML;
      }
    });
  }
} */

let p = '';

function insert() {
  const button = document.querySelectorAll('.button');
  for (let i = 0; i < button.length; i += 1) {
    button[i].addEventListener('click', () => {
      switch (button[i].innerHTML) {
        case 'AC':
          clear();
          break;
        case 'C':
          back();
          break;
        case '=':
          result();
          break;
        default:
          p = document.querySelector('p').innerHTML;
          document.querySelector('p').innerHTML = p + button[i].innerHTML;
      }
    });
  }
}

insert();

function back() {
  p = document.querySelector('p').innerHTML;
  //A função substring vai extrair só oq eu quero da variavel p,e vai colocar oq foi extraido na tag p,para ser visualizado pelo usuário. 
  document.querySelector('p').innerHTML = p.substring(0, p.length - 1);
}

function clear() {
  p = document.querySelector('p');
  p.innerHTML = '';
}

function result() {
  p = document.querySelector('p').innerHTML;
  if (p) {
    if(p.includes(',')) {
      p = p.replace(/,/g, '.');
    }
    if(p.includes('x')) {
      p = p.replace(/x/g, '*');
    }
    // função eval() computa um código JavaScript representado como uma string.
    p = eval(p).toString();
    document.querySelector('p').innerHTML = p.replace(/,/g, '.');
  }
}