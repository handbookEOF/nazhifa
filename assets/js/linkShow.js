function loadJSON(callback, jsp) {   

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', jsp, true); // Replace 'appDataServices' with the path to your file
	/** 
	* JSON gak support comment. Di akhir array json jangan dikasih koma lagi, jadi error
	* dan path saat production mungkin beda dari yang disini
	*/
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
		// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
		callback(xobj.responseText);
		}
	};
	xobj.send(null);  
}
 
function init(jsonpath) {
	loadJSON(function(response) {
		// Parsing JSON string into object
		var links = JSON.parse(response);
		showTable(links);
	}, jsonpath);
}

function showTable(lnk){
	var body, h1, h1c, p, pc, resp, tab, tbody, thead, th, tnh, tr, td, tn, idt;
	for (i in lnk){  // 28-01-2018 19:02
		idt = lnk[i].id;
		body = document.getElementById(idt); 
		h1 = document.createElement('h1');
		h1c = document.createTextNode(lnk[i].header);
		h1.appendChild(h1c);
		body.appendChild(h1);
		p = document.createElement('p');
		pc = document.createTextNode(lnk[i].description);
		p.appendChild(pc);
		body.appendChild(p);
		resp = document.createElement('div');
		tab = document.createElement('table');
		thead = document.createElement('thead'); //** */
		tr = document.createElement('tr');
		th = document.createElement('th');
		tnh = document.createTextNode("Name");
		th.appendChild(tnh);
		tr.appendChild(th);
		th = document.createElement('th');
		tnh = document.createTextNode("Link");
		th.appendChild(tnh);
		tr.appendChild(th);
		th = document.createElement('th');
		tnh = document.createTextNode("Owner");
		th.appendChild(tnh);
		tr.appendChild(th);
		thead.appendChild(tr);//** */
		tab.appendChild(thead);
		tbody = document.createElement('tbody');
		for (j in lnk[i].sites){
			tr = document.createElement('tr');
			var att1 = document.createAttribute("data-toggle");
			att1.value = "tooltip";
			tr.setAttributeNode(att1);
			var att2 = document.createAttribute("title");
			att2.value = lnk[i].sites[j].siteDesc;
			tr.setAttributeNode(att2);
			td = document.createElement('td');
			tn = document.createTextNode(lnk[i].sites[j].siteName);
			td.appendChild(tn);
			tr.appendChild(td);
			td = document.createElement('td');
			tn = document.createTextNode(lnk[i].sites[j].siteLink);
			td.appendChild(tn);
			tr.appendChild(td);
			td = document.createElement('td');
			tn = document.createTextNode(lnk[i].sites[j].siteOwner);
			td.appendChild(tn);
			tr.appendChild(td);
			tbody.appendChild(tr);
		}
		tab.appendChild(tbody);
		resp.appendChild(tab); 
		body.appendChild(resp);
	}
}