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

function dim() {
	let m1 = Number(document.querySelector('#m1').value)
	let dd2 = Number(document.querySelector('#m2').value)

	document.querySelector('#mul-resultado').innerHTML = m1 * m2
	return true
}
document.querySelector('#mul').addEventListener('click', dim)


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

