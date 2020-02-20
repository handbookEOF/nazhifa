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
		showProduct(links);
		//showModal(links);
	}, jsonpath);
}

var productClickHandler = function(arg) { // dibuat karena onclick tidak bisa block scope. harus return value atau function
  return function() { 
	  openModal();
	  currentSlide(arg); 
	};
  //return function() { alert(arg); };
}


function showProduct(lnk){
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

	var idp, idh, body, crdd, crddclass, crddarr, card, cardclass, cardarr,
		img, imgclass, imgarr, attsrc, crdb, crdbclass, crdbarr, title, titleclass,
		titlearr, titlecnt, stitle, stitleclass, stitlearr, stitlecnt,
		crdf, crdfclass, crdfarr, awt, awtclass, awtarr, awtcnt, awtformat,
		price, priceclass, pricearr, pricecnt, priceformat;

	for (i in lnk) {

		idp = lnk[i].id;
		idh = idp.charAt(0).toUpperCase() + idp.slice(1);
		body = document.getElementById(idp);

		ctgyHeader = document.createElement('h2');
		ctgyclass = "no-headbutt";
		ctgyarr = ctgyHeader.className.split(" ");
		if (ctgyarr.indexOf(ctgyclass) == -1) {
			ctgyHeader.className += " " + ctgyclass;
		}
		ctgyHeaderTxt = document.createTextNode(idh);
		ctgyHeader.appendChild(ctgyHeaderTxt);
		body.appendChild(ctgyHeader);

		for (j in lnk[i].inventory){

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
			cardclass = "card col-4 col-sm-4 shadow";
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
			attsrc.value = '/nazhifa' +  lnk[i].inventory[j].img;
			// attsrc.value = lnk[i].inventory[j].img;
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
			priceclass = "btn btn-primary btn-price rounded-pill ml-3 font-weight-bold";
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

			// appending
			crdd.appendChild(card);
			body.appendChild(crdd);
		}

		
		
	}
}


/*
function showProduct(lnk){
    *
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
    *
	var idp, body, prow, prowclass, prowarr, col, colclass, colarr, 
		card, cardclass, cardarr, img, cardc, cardcclass, cardcarr, 
		title, titleclass, titlearr, titlec, price, priceclass, 
		pricearr, pricec, desc, descc, descs, descr, add, addc;
	for (i in lnk) {
		idp = lnk[i].id;
		body = document.getElementById(idp);
		prow = document.createElement('div');
		prowclass = "row";
		prowarr = prow.className.split(" ");
		if (prowarr.indexOf(prowclass) == -1) {
			prow.className += " " + prowclass;
		}
		for (j in lnk[i].inventory){
			// buat div class column
			col = document.createElement('div');
			colclass = "col-4 col-sm-4";
			colarr = col.className.split(" ");
			if (colarr.indexOf(colclass) == -1) {
				col.className += " " + colclass;
			}
			// buat div class card
			card = document.createElement('div');
			cardclass = "card hover-shadow";
			cardarr = card.className.split(" ");
			if (cardarr.indexOf(cardclass) == -1) {
				card.className += " " + cardclass;
			}
			// buat img untuk thumbnail
			img = document.createElement('img');
			img.style.width = '100%';
			var attsrc = document.createAttribute('src');
			// attsrc.value = '/nazhifa' +  lnk[i].inventory[j].img;
			attsrc.value = lnk[i].inventory[j].img;
			img.setAttributeNode(attsrc);
			card.appendChild(img);
			// buat div class card container
			cardc = document.createElement('div');
			cardcclass = "card-container";
			cardcarr = cardc.className.split(" ");
			if (cardcarr.indexOf(cardcclass) == -1) {
				cardc.className += " " + cardcclass;
			}
			// buat h2 onclick openmodal slide class cursor
			title = document.createElement('h2');
			titleclass = "cursor";
			titlearr = title.className.split(" ");
			if (titlearr.indexOf(titleclass) == -1) {
				title.className += " " + titleclass;
			}
			title.onclick = productClickHandler(parseInt(j));
			//var titleclick = document.createAttribute('onclick');
			//titleclick.value = 'openModal();currentSlide(1)';
			//title.appendChild(titleclick);
			titlec = document.createTextNode(lnk[i].inventory[j].title);
			title.appendChild(titlec);
			cardc.appendChild(title);
			// buat paragraf price
			price = document.createElement('p');
			priceclass = "price";
			pricearr = price.className.split(" ");
			if (pricearr.indexOf(priceclass) == -1) {
				price.className += " " + priceclass;
			}
			var priceformat = "Rp." + lnk[i].inventory[j].price;
			pricec = document.createTextNode(priceformat);
			price.appendChild(pricec);
			cardc.appendChild(price);
			// buat paragraf deskripsi
			* desc = document.createElement('p');
			descc = document.createTextNode(lnk[i].inventory[j].isbn);
			desc.appendChild(descc);
			cardc.appendChild(desc); *
			// buat paragraf lainnya
			// buat paragraf add cart button
			desc = document.createElement('p');
			descs = "text-justify";
			descr = desc.className.split(" ");
			if (descr.indexOf(descs) == -1) {
				desc.className += " " + descs;
			}
			var descn = lnk[i].inventory[j].desc;
			if ( descn.length > 100 ){
				var descn = descn.substr(0, 97) + "...";
			}
			descc = document.createTextNode(descn);
			desc.appendChild(descc);
			cardc.appendChild(desc);
			card.appendChild(cardc);
			col.appendChild(card);
			prow.appendChild(col);
		}
		body.appendChild(prow);
	}
}
*/


/* function showModal(lks)
{
	var idm, mbody, mcontent, mclass, marr, mslides, mslidesc, mslidesr,
		ntext, ntclass, ntarr, ntextfomat, ntextc, mimg, mimgc, mimgr,
		mcapc, mcaps, mcapr;
	for (i in lks) 
	{
		idm = lks[i].id + 'Modal';
		mbody = document.getElementById(idm);
		// buat div parent
		mcontent = document.createElement('div');
		mclass = "modal-content";
		marr = mcontent.className.split(" ");
		if (marr.indexOf(mclass) == -1) 
		{
			mcontent.className += " " + mclass;
		}
		for (j in lks[i].inventory)
		{
			// buat div class mySlides
			mslides = document.createElement('div');
			mslidesc = "mySlides";
			mslidesr = mslides.className.split(" ");
			if (mslidesr.indexOf(mslidesc) == -1) {
				mslides.className += " " + mslidesc;
			}
			// buat div class numbertext dengan textnode didalamnya (opsional, but make it dynamic) <div class="numbertext">1 / 4</div>
			ntext = document.createElement('div');
			ntclass = "numbertext";
			ntarr = ntext.className.split(" ");
			if (ntarr.indexOf(ntclass) == -1) {
				ntext.className += " " + ntclass;
			}
			var l = parseInt(j);
			ntextformat = l + 1 + '/' + lks[i].inventory.length;
			ntextc = document.createTextNode(ntextformat);
			ntext.appendChild(ntextc);
			mslides.appendChild(ntext);
			// buat img class w3-lightbox-img src style=width:100% alt text
			mimg = document.createElement('img');
			mimg.alt = lks[i].inventory[j].desc;
			mimgc = "w3-lightbox-img";
			mimgr = mimg.className.split(" ");
			if (mimgr.indexOf(mimgc) == -1) {
				mimg.className += " " + mimgc;
			}
			mimg.style.width = '100%';
			var mattsrc = document.createAttribute('src');
			mattsrc.value = '/nazhifa' +  lks[i].inventory[j].img;
			mimg.setAttributeNode(mattsrc);
			mslides.appendChild(mimg);
			mcontent.appendChild(mslides);
		}
		// mbody.appendChild(mcontent);
		mprev = document.createElement('a');
		mprev.onclick = function() { plusSlides(-1); };
		mprevc = "prev";
		mprevr = mprev.className.split(" ");
		if (mprevr.indexOf(mprevc) == -1) {
			mprev.className += " " + mprevc;
		}
		mprevn = document.createTextNode("\u276E");
		mprev.appendChild(mprevn);
		mcontent.appendChild(mprev);
    // buat anchor class next onclick=plusSlides(1) textnode &#10095
		mnext = document.createElement('a');
		mnext.onclick = function() { plusSlides(1); };
		mnextc = "next";
		mnextr = mnext.className.split(" ");
		if (mnextr.indexOf(mnextc) == -1) {
			mnext.className += " " + mnextc;
		}
		mnextn = document.createTextNode("\u276F");
		mnext.appendChild(mnextn);
		mcontent.appendChild(mnext);
    // buat div class caption-container
		mcapc = document.createElement('div');
		mcaps = "caption-container text-justify";
		mcapr = mcapc.className.split(" ");
		if (mcapr.indexOf(mcaps) == -1) {
			mcapc.className += " " + mcaps;
		}
		// buat paragraph id caption
		mcap = document.createElement('p');
		mcap.id = 'caption';
		mcapc.appendChild(mcap);
		mcontent.appendChild(mcapc);
		mbody.appendChild(mcontent);
	}
}
*/