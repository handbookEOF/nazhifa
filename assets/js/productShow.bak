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
		showModal(links);
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
			attsrc.value = '/nazhifa' +  lnk[i].inventory[j].img;
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
			/* desc = document.createElement('p');
			descc = document.createTextNode(lnk[i].inventory[j].isbn);
			desc.appendChild(descc);
			cardc.appendChild(desc); */
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

function showModal(lks)
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
