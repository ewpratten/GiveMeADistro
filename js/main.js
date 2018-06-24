function WriteData(name, link, desc){
	document.getElementById("a1").href = link;
	document.getElementById("a1").innerHTML = name;
	document.getElementById("info").innerHTML = desc;
}

$.ajax({
	url: 'data/distrolist.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data) {
			var distros = data.distros
			var distro = distros[Math.floor(Math.random()*distros.length)]

			// Writes to the HTML
			WriteData(distro.name, distro.link, distro.desc);
		}
})
