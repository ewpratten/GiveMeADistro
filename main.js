var distro = distros[Math.floor(Math.random()*distros.length)];

console.log(distro)
function WriteData(name, link, desc){
	document.getElementById("a1").href = link;
	document.getElementById("a1").innerHTML = name;
	document.getElementById("info").innerHTML = desc;
}

WriteData(distro[0], distro[1], distro[2]);