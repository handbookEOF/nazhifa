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
		/* IMPLEMENTASI */
		dropDown(links); 
	}, jsonpath);
}


var dropDownClickHandler = function(arg) { // dibuat karena onclick tidak bisa block scope. harus return value atau function
  return function() { dropShow(arg); };
}


function dropDown(lnk)
  {
  		body = document.getElementById("tableDrop");
  		var dbtn = document.createElement('button');
  		var batt1 = document.createAttribute("type");
		batt1.value = "button";
		dbtn.setAttributeNode(batt1);
		var batt2 = document.createAttribute("data-toggle");
		batt2.value = "dropdown";
		dbtn.setAttributeNode(batt2);
  		var dbtns = "btn btn-light dropdown-toggle";
  		var dbtnr = dbtn.className.split(" ");
  		if ( dbtnr.indexOf(dbtns) == -1 ){
  			dbtn.className += " " + dbtns;
  		}
  		var dbtnn = document.createTextNode('Select Category');
  		dbtn.appendChild(dbtnn);
  		body.appendChild(dbtn);
  		var menu = document.createElement('div');
		var menus = "dropdown-menu";
		var menur = menu.className.split(" ");
		if ( menur.indexOf(menus) == -1 ){
			menu.className += " " + menus;
		}
		var adall = document.createElement('a');
		var adallh = document.createAttribute('href');
		adallh.value = '#';
		adall.setAttributeNode(adallh);
		var adalls = "dropdown-item";
		var adallr = adall.className.split(" ");
		if ( adallr.indexOf(adalls) == -1 )
		{
			adall.className += " " + adalls;
		}
		adall.onclick = dropDownClickHandler("All");
		var adalln = document.createTextNode("All");
		adall.appendChild(adalln);
		menu.appendChild(adall);
  		for (i in lnk)
  		{
  			var idd = lnk[i].header;
  			var ad = document.createElement('a');
  			var adh = document.createAttribute('href');
			adh.value = '#';
			ad.setAttributeNode(adh);
  			var ads = "dropdown-item";
  			var adr = ad.className.split(" ");
  			if ( adr.indexOf(ads) == -1 ){
  				ad.className += " " + ads;
  			}
  			ad.onclick = dropDownClickHandler(lnk[i].id);
  			var adn = document.createTextNode(idd);
  			ad.appendChild(adn);
  			menu.appendChild(ad);
  		}
  		body.appendChild(menu);
 }
 
 /*
  * FIGURE OUT CARA REMOVE CLASS DAN ADD CLASS
  * 
  * 
  */ 
 
 

/*
function dropShow(s)
{
	var show = document.getElementById(s);
 	show.className = show.className.replace("invisible", "visible");
}
*/

/* MAJOR UPGRADE MONDAY 08:00 30-04-2019 
 * 
 * function dropDown(lnk)
 * {
 * 		body = document.getElementById("tableDrop");
 * 		var dbtn = document.createElement('button');
 * 		var dbtns = "btn btn-primary dropdown-toggle";
 * 		var dbtnr = dbtn.className.split(" ");
 * 		if ( dbtnr.indexOf(dbtns) == -1 ){
 * 			dbtn.className += " " + dbtns;
 * 		}
 * 		var dbtnn = document.createElement('Select Category');
 * 		dbtn.appendChild(dbtnn);
 * 		body.appendChild(dbtn);
 * 		for (i in lnk){
 * 			var menu = document.createElement('div');
 * 			var menus = "dropdown-menu";
 * 			var menur = menu.className.split(" ");
 * 			if ( menur.indexOf(menus) == -1 ){
 * 				menu.className += " " + menus;
 * 			}
 * 			var idd = lnk[i].id;
 * 			var ad = document.createElement('a');
 * 			var adds = "dropdown-item";
 * 			var addr = add.className.split(" ");
 * 			if ( addr.indexOf(adds) == -1 ){
 * 				add.className += " " + adds;
 * 			}
 * 			ad.onclick = function(){ dropShow(idd); };
 * 			var adn = document.createTextNode(idd);
 * 			ad.appendChild(adn);
 * 			.appendChild(ad);
 * 		}
 * 		body.appendChild(menu);
 * }
 * 
 * function dropShow(s)
 * {
 * 		var show = document.getElementById(s);
 * 		show.classList.add("visible"); OR show.style.display = "visible";
 * }
**/

function showTable(lnk){
	var body, h1, h1c, p, pc, resp, tab, tbody, thead, th, tnh, tr, td, tn, idt;
	for (i in lnk){  // 28-01-2018 19:02
		idt = lnk[i].id
		// MAJOR UPGRADE 19:54 03-05-2019 (1)
		body = document.getElementById("TableSource");
		// w-100
		whd = document.createElement('div');
		whds = "w-100";
		whdr = whd.className.split(" ");
		if (whdr.indexOf(whds) == -1) {
			whd.className += " " + whds;
		}
		body.appendChild(whd);
		// end w-100
		// JSON records by ID
		var idtb = document.createElement('div');
		idtb.id = idt;
		idts = "nazhifa-table d-block";
		idtr = idtb.className.split(" ");
		if (idtr.indexOf(idts) == -1) {
			idtb.className += " " + idts;
		}
		// JSON records by ID
		// THIS END (1)
		/* IMPLEMENTASI
		var bodys = "invisible";
		var bodyr = body.className.split(" ");
		if ( bodyr.indexOf(bodys) == -1 ){
			body.className += " " + bodys;
		}
		*/ 
		/* MAJOR UPGRADE MONDAY 08:00 30-04-2019 
		 * 
		 * TINGGAL DI KASIH CLASS UNTUK UNDISPLAY TABLE
		 * var bodys = "d-none d-xs-none d-sm-none d-md-none d-xl-none";
		 * var bodyr = body.className.split(" ");
		 * if ( bodyr.indexOf(bodys) == -1 ){
		 * 		body.className += " " + bodys;
		 * }
		 * 
		 * 
		**/
		h1 = document.createElement('h1');
		h1c = document.createTextNode(lnk[i].header);
		h1.appendChild(h1c);
		idtb.appendChild(h1);
		p = document.createElement('p');
		pc = document.createTextNode(lnk[i].description);
		p.appendChild(pc);
		idtb.appendChild(p);
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
		idtb.appendChild(resp);
		var br = document.createElement('br');
		idtb.appendChild(br);
		var br = document.createElement('br');
		idtb.appendChild(br);
		body.appendChild(idtb);
	}
}

function dropShow(s)
{
	var tables = document.getElementsByClassName("nazhifa-table");
	for (i = 0; i < tables.length; i++) {
		if ( tables[i].classList.contains('d-block') ){
			tables[i].className = tables[i].className.replace("d-block", "d-none");
		}
	}
	if ( s == "all" || s == "All" )
	{
		dropShowAll();
	}
	else
	{
		var x = document.getElementById(s);
		var xs = "d-block";
		var xr = x.className.split(" ");
		if (xr.indexOf(xs) == -1) 
		{
			x.className += " " + xs;
		}
	}
}

function dropShowAll()
{
	var tables = document.getElementsByClassName("nazhifa-table");
	for (i = 0; i < tables.length; i++) {
		if ( tables[i].classList.contains('d-none') ){
			tables[i].className = tables[i].className.replace("d-none", "d-block");
		} 
	}
}
