
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

async function exemplo2() {
  esconderFormulario();
  await delay(10); // pausa 10 ms para navegador atualizar

  let quantidade = prompt("Quantos números você quer digitar?");
  if (!validarNumero(quantidade) || parseInt(quantidade) <= 0) {
    alert("Quantidade inválida. Digite um número inteiro positivo.");
    return;
  }
  quantidade = parseInt(quantidade);

  let soma = 0;
  for(let i = 1; i <= quantidade; i++) {
    let numero = prompt(`Digite o ${i}º número:`);
    while(!validarNumero(numero)) {
      numero = prompt(`Valor inválido. Digite o ${i}º número novamente:`);
    }
    soma += parseFloat(numero);
  }
  let media = soma / quantidade;
  alert(`A média é: ${media.toFixed(2)}`);
}

async function exemplo3() {
  esconderFormulario();
  await delay(10);

  let n1 = prompt("Digite o primeiro número:");
  while(!validarNumero(n1)) {
    n1 = prompt("Entrada inválida. Digite o primeiro número novamente:");
  }
  let n2 = prompt("Digite o segundo número:");
  while(!validarNumero(n2)) {
    n2 = prompt("Entrada inválida. Digite o segundo número novamente:");
  }
  alert(`A soma é: ${(parseFloat(n1) + parseFloat(n2)).toFixed(2)}`);
}

// Função delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
