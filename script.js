function esconderFormulario() {
  const form = document.getElementById('formulario');
  form.style.display = 'none';
  for (let i = 1; i <=5; i++) {
    document.getElementById(`valor${i}`).value = '';
  }
}

function validarNumero(valor) {
  return /^-?\d+(\.\d+)?$/.test(valor.trim());
}


function exemplo1() {
  esconderFormulario();
  document.getElementById('formulario').style.display = 'block';
}

function mostrarResultado() {
  const valores = [];
  for(let i = 1; i <= 5; i++) {
    const val = document.getElementById(`valor${i}`).value.trim();
    if (!validarNumero(val)) {
      alert(`Por favor, digite um número válido no campo Valor ${i}.`);
      return;
    }
    valores.push(parseFloat(val));
  }
  const soma = valores.reduce((a,b) => a + b, 0);
  alert(`A soma dos valores é: ${soma.toFixed(2)}`);
}


function salvarTXT() {
  const valores = [];
  for(let i = 1; i <= 5; i++) {
    const val = document.getElementById(`valor${i}`).value.trim();
    if (!validarNumero(val)) {
      alert(`Por favor, digite um número válido no campo Valor ${i}.`);
      return;
    }
    valores.push(val);
  }
  const conteudo = valores.map((v,i) => `Valor ${i+1}: ${v}`).join('\n');
  const blob = new Blob([conteudo], {type: 'text/plain;charset=utf-8'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'valores.txt';
  link.click();
}


function exemplo2() {
  document.getElementById('formulario').style.display = 'none';
  let qtd = prompt("Quantos números?");
  if (!qtd || isNaN(qtd) || qtd <= 0) {
    alert("Número inválido");
    return;
  }

  let soma = 0;
  for (let i = 1; i <= qtd; i++) {
    let num = prompt(`Digite o ${i}º número:`);
    while (!num || isNaN(num)) {
      num = prompt(`Número inválido. Digite o ${i}º número novamente:`);
    }
    soma += parseFloat(num);
  }

  let media = soma / qtd;
  alert("Média: " + media.toFixed(2));
}

function exemplo3() {
  document.getElementById('formulario').style.display = 'none';
  let n1 = prompt("Número 1:");
  let n2 = prompt("Número 2:");
  if (!n1 || !n2 || isNaN(n1) || isNaN(n2)) {
    alert("Número inválido!");
    return;
  }
  alert("Soma: " + (parseFloat(n1) + parseFloat(n2)));
}


