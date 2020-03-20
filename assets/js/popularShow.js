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
		showPopular(links);
	}, jsonpath);
}

function showPopular(lnk){
    /*
    <div class="card-deck">
								
        <div class="card shadow-sm">
            <img src="c2 amalan penghapus dosa.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Amalan Penghapus Dosa</h5>
                <h6 class="card-subtitle mb-2 text-muted">Aqwam</h6>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-tertiary rounded-pill font-weight-bold">100kg</a>
                <a href="#" class="btn btn-success btn-price rounded-pill ml-3 font-weight-bold">Rp. 1.400.000</a>
            </div>
        </div>

    </div>
    */

	var idRaw, idPop, bodyPop, cPop, cPopclass, cPoparr, 
		ctlPop, ctlPopclass, ctlPoparr, ctlconPop,
		cstlPop, cstlPopclass, cstlPoparr, cstlconPop,
		cbdPop, cbdPopclass, cbdPoparr, cBq, cBqclass, cBqarr,
		cBqP, cBqconP, cBqFoot, cBqFootclass, cBqFootarr,
		cBqS, cBqconS,
		imgPop, imgPopclass, imgPoparr, imgPopsrc;


	for (i in lnk) {

		idRaw = lnk[i].id;
		idPop = idRaw.charAt(0).toUpperCase() + idRaw.slice(1);
		// di uppercase supaya sync dengan _data
		bodyPop = document.getElementById(idPop);

		popHeader = document.createElement('h2');
		popclass = "no-headbutt font-weight-bold";
		poparr = popHeader.className.split(" ");
		if (poparr.indexOf(popclass) == -1) {
			popHeader.className += " " + popclass;
		}
		popHeaderTxt = document.createTextNode(idPop);
		popHeader.appendChild(popHeaderTxt);
		bodyPop.appendChild(popHeader);
		
		var popColm = document.createElement('div');
		var popColmclass = "card-columns";
		var popColmarr = popColm.className.split(" ");
		if (popColmarr.indexOf(popColmclass) == -1) {
			popColm.className += " " + popColmclass;
		}

        for (j in lnk[i].inventory){


			if ( j == 4 ){
				cPop = document.createElement('div');
				cPopclass = "card bg-transparent text-center p-3";
				cPop.id = "cardMainQuote";
				cPoparr = cPop.className.split(" ");
				if (cPoparr.indexOf(cPopclass) == -1) {
					cPop.className += " " + cPopclass;
				}

				cBq = document.createElement('blockquote');
				// img.style.width = '100%';
				cBqclass = "blockquote mb-0";
				cBqarr = cBq.className.split(" ");
				if (cBqarr.indexOf(cBqclass) == -1) {
					cBq.className += " " + cBqclass;
				}
				
				cBqP = document.createElement('p');
				cBqconP = document.createTextNode("Yuk lengkapi koleksi buku dan produk herbalmu dengan beberapa produk favorit pilihan pelanggan kami. Lihat katalognya, miliki ilmunya, sebarkan manfaatnya.");
				cBqP.appendChild(cBqconP);
				cBq.appendChild(cBqP);

				cBqFoot = document.createElement('footer');
				cBqFootclass = "blockquote-footer text-muted";
				cBqFootarr = cBqFoot.className.split(" ");
				if (cBqFootarr.indexOf(cBqFootclass) == -1) {
					cBqFoot.className += " " + cBqFootclass;
				}

				cBqS = document.createElement('p');
				cBqS.id = "popularSubQuote";
				//cBqconS = document.createTextNode("Someone famous in \u003ccite title='Source Title'\u003eSource Title\u003c/cite\u003e");
				//cBqS.appendChild(cBqconS);
				cBqFoot.appendChild(cBqS);
				//document.getElementById("popularSubQuote").innerHTML = "Someone famous in <cite title='Source Title'>Source Title</cite>";
				cBq.appendChild(cBqFoot);

				cPop.appendChild(cBq);

				popColm.appendChild(cPop);
				bodyPop.appendChild(popColm);


			} // else {
				
			cPop = document.createElement('div');
			cPopclass = "card shadow";
			cPoparr = cPop.className.split(" ");
			if (cPoparr.indexOf(cPopclass) == -1) {
				cPop.className += " " + cPopclass;
			}

			imgPop = document.createElement('img');
			// img.style.width = '100%';
			imgPopclass = "card-img-top";
			imgPoparr = imgPop.className.split(" ");
			if (imgPoparr.indexOf(imgPopclass) == -1) {
				imgPop.className += " " + imgPopclass;
			}
			var imgPopsrc = document.createAttribute('src');
			imgPopsrc.value = '/nazhifa' +  lnk[i].inventory[j].img;
			//imgPopsrc.value = lnk[i].inventory[j].img;
			imgPop.setAttributeNode(imgPopsrc);
			cPop.appendChild(imgPop);
			
			cbdPop = document.createElement('div');
			cbdPopclass = "card-body";
			cbdPoparr = cbdPop.className.split(" ");
			if (cbdPoparr.indexOf(cbdPopclass) == -1) {
				cbdPop.className += " " + cbdPopclass;
			}

			ctlPop = document.createElement('h5');
			ctlPopclass = "card-title";
			ctlPoparr = ctlPop.className.split(" ");
			if (ctlPoparr.indexOf(ctlPopclass) == -1) {
				ctlPop.className += " " + ctlPopclass;
			}
			ctlconPop = document.createTextNode(lnk[i].inventory[j].title);
			ctlPop.appendChild(ctlconPop);
			cbdPop.appendChild(ctlPop);



			cstlPop = document.createElement('h6');
			cstlPopclass = "card-subtitle mb-2 text-muted";
			cstlPoparr = cstlPop.className.split(" ");
			if (cstlPoparr.indexOf(cstlPopclass) == -1) {
				cstlPop.className += " " + cstlPopclass;
			}
			//cstlconPop = document.createTextNode(lnk[i].inventory[j].company);
			cstlconPop = document.createTextNode("penerbit");
			cstlPop.appendChild(cstlconPop);
			cbdPop.appendChild(cstlPop);

			cPop.appendChild(cbdPop);

				/*

				var k = j % 3;
				if (k == 0){
					// <div class="card-deck">
					crdd = document.createElement('div');
					crddclass = "card-deck";
					crddarr = crdd.className.split(" ");
					if (crddarr.indexOf(crddclass) == -1) {
						crdd.className += " " + crddclass;
					}
				}
				

				// <div class="card shadow-sm">
				card = document.createElement('div');
				cardclass = "card shadow-sm hover-shadow";
				cardarr = card.className.split(" ");
				if (cardarr.indexOf(cardclass) == -1) {
					card.className += " " + cardclass;
				}

				// <img src="c2 amalan penghapus dosa.jpg" class="card-img-top" alt="...">
				img = document.createElement('img');
				// img.style.width = '100%';
				imgclass = "card-img-top";
				imgarr = img.className.split(" ");
				if (imgarr.indexOf(imgclass) == -1) {
					img.className += " " + imgclass;
				}
				var attsrc = document.createAttribute('src');
				// attsrc.value = '/nazhifa' +  lnk[i].inventory[j].img;
				attsrc.value = lnk[i].inventory[j].img;
				img.setAttributeNode(attsrc);
				card.appendChild(img);

				// <div class="card-body">
				crdb = document.createElement('div');
				crdbclass = "card-body";
				crdbarr = crdb.className.split(" ");
				if (crdbarr.indexOf(crdbclass) == -1) {
					crdb.className += " " + crdbclass;
				}

				// <h5 class="card-title">Amalan Penghapus Dosa</h5>
				title = document.createElement('h5');
				titleclass = "card-title";
				titlearr = title.className.split(" ");
				if (titlearr.indexOf(titleclass) == -1) {
					title.className += " " + titleclass;
				}
				// title.onclick = productClickHandler(parseInt(j));
				titlecnt = document.createTextNode(lnk[i].inventory[j].title);
				title.appendChild(titlecnt);
				// append title to card-body
				crdb.appendChild(title);

				// <h6 class="card-subtitle mb-2 text-muted">Aqwam</h6>
				stitle = document.createElement('h6');
				stitleclass = "card-subtitle mb-2 text-muted";
				stitlearr = stitle.className.split(" ");
				if (stitlearr.indexOf(stitleclass) == -1) {
					stitle.className += " " + stitleclass;
				}
				// stitle.onclick = productClickHandler(parseInt(j));
				stitlecnt = document.createTextNode(lnk[i].inventory[j].company);
				stitle.appendChild(stitlecnt);
				// append stitle to card-body
				crdb.appendChild(stitle);

				// append card-body to card
				card.appendChild(crdb);

				// <div class="card-footer">
				crdf = document.createElement('div');
				crdfclass = "card-footer";
				crdfarr = crdf.className.split(" ");
				if (crdfarr.indexOf(crdfclass) == -1) {
					crdf.className += " " + crdfclass;
				}

				// <a href="#" class="btn btn-tertiary rounded-pill font-weight-bold">100kg</a>
				awt = document.createElement('a');
				awtclass = "btn btn-tertiary rounded-pill font-weight-bold";
				awtarr = awt.className.split(" ");
				if (awtarr.indexOf(awtclass) == -1) {
					awt.className += " " + awtclass;
				}
				var awtformat = lnk[i].inventory[j].weight + "gr";
				awtcnt = document.createTextNode(awtformat);
				awt.appendChild(awtcnt);
				// append awt to card-footer
				crdf.appendChild(awt);

				// <a href="#" class="btn btn-success btn-price rounded-pill ml-3 font-weight-bold">Rp. 1.400.000</a>
				price = document.createElement('a');
				priceclass = "btn btn-success btn-price rounded-pill ml-3 font-weight-bold";
				pricearr = price.className.split(" ");
				if (pricearr.indexOf(priceclass) == -1) {
					price.className += " " + priceclass;
				}
				var priceformat = "Rp." + lnk[i].inventory[j].price;
				pricecnt = document.createTextNode(priceformat);
				price.appendChild(pricecnt);
				// append price to card-footer
				crdf.appendChild(price);

				// append card-footer to card
				card.appendChild(crdf);
				
				*/

				// appending
				// crdd.appendChild(card);

			// }
			
        
            popColm.appendChild(cPop);
			bodyPop.appendChild(popColm);
			
			
		}

		document.getElementById("popularSubQuote").innerHTML = "Popular Products <cite title='Source Title'>2019</cite>";

	}

}