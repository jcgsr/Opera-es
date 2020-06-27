function somar() {
	let s1 = Number(document.querySelector('#s1').value)
	let s2 = Number(document.querySelector('#s2').value)

	document.querySelector('#soma-resultado').innerHTML = s1 + s2
	return true
}
document.querySelector('#soma').addEventListener('click', somar)

function dim() {
	let d1 = Number(document.querySelector('#d1').value)
	let d2 = Number(document.querySelector('#d2').value)

	document.querySelector('#dim-resultado').innerHTML = d1 - d2
	return true
}
document.querySelector('#dim').addEventListener('click', dim)

function mult() {
	let m1 = Number(document.querySelector('#m1').value)
	let m2 = Number(document.querySelector('#m2').value)

	document.querySelector('#mul-resultado').innerHTML = m1 * m2
	return true
}
document.querySelector('#mul').addEventListener('click', mult)


function div() {
	let dd1 = Number(document.querySelector('#dd1').value)
	let dd2 = Number(document.querySelector('#dd2').value)

	document.querySelector('#div-resultado').innerHTML = dd1 / dd2
	return true
}
document.querySelector('#div').addEventListener('click', div)

function quad() {
	let q1 = Number(document.querySelector('#q1').value)	

	document.querySelector('#qua-resultado').innerHTML = Math.pow(q1, 2)
	return true
}
document.querySelector('#qua').addEventListener('click', quad)

function cubo() {
	let c1 = Number(document.querySelector('#c1').value)	

	document.querySelector('#cub-resultado').innerHTML = Math.pow(c1, 3)
	return true
}
document.querySelector('#cub').addEventListener('click', cubo)

function pot(){
	let p1 = Number(document.querySelector("#p1").value)
	let p2 = Number(document.querySelector("#p2").value)

	document.querySelector('#pot-resultado').innerHTML = Math.pow(p1, p2)
}
document.querySelector('#pot').addEventListener('click', pot)

function primo(){
  let numero = parseInt(document.getElementById('pr1').value);
  let resposta = document.getElementById('primo-resultado');
  let divisores=0;

  for(let count=1 ; count<=numero ; count++)
   if(numero % count == 0)
   	divisores++;
  
  if(divisores==2)
  	resposta.innerHTML='É PRIMO!';
  else
  	resposta.innerHTML='NÃO É PRIMO!';
}
document.getElementById('pri').addEventListener('click', primo)

function porcento(){
	let num = Number(document.querySelector('#per').value)
	let val = Number(document.querySelector('#val').value)

	document.querySelector('#porcen-resultado').innerHTML = (num * val) / 100
	return true
}
document.querySelector('#porcen').addEventListener('click', porcento)

function raiz() {
	let r1 = Number(document.querySelector('#r1').value)	

	document.querySelector('#raiz-resultado').innerHTML = Math.sqrt(r1)
	return true
}
document.querySelector('#raiz').addEventListener('click', raiz)