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
	<div class="col-12 mb-3"> -- udah ada di catalogue.html
		-- 	json akan membaca id yag ada di dalam sini di catalogue.html
			dan menjadikan tag tersebut sebagai body
		<h2 class="no-headbutt">Buku</h2> --	tag pertama yang dibuat di script ini adalah header
		<div class="card-deck"> --	untuk setiap tiga tag card akan berada didalam satu tag card-deck
			<div class="row">! --	setiap card-deck memiliki row untuk menampung column
				<div class="col-12 col-sm-3 col-md-3"> !
					<div class="card shadow">
						<img class="card-img-top" src=""/>
						<div class="card-body">
							<h5 class="card-title"></h5>
							<h6 class="card-subtitle mb-2 text-muted"></h6>
						</div>
						<div class="card-footer">
							<a class="btn btn-tertiary rounded-pill font-weight-bold">weight</a>
							<a class="btn btn-primary btn-price rounded-pill ml-3 font-weight-bold">price</a>
						</div>
					</div>
				</div> !
			</div> !
		</div>
	</div>
	*/

	var idp, idh, idbody,
		hdrId, hdrIdClass, hdrIdArr, hdrIdTxt,
		cardDeck, cardDeckClass, cardDeckArr,
		rowDeck, rowDeckClass, rowDeckArr,
		colCard, colCardClass, colCardArr,
		card, cardClass, cardArr,
		cardImg, cardImgClass, cardImgArr, cardImgSrc,
		cardBody, cardBodyClass, cardBodyArr,
		cardTitle, cardTitleClass, cardTitleArr, cardTitleTxt,
		cardSubt, cardSubtClass, cardSubtArr, cardSubtTxt,
		cardFoot, cardFootClass, cardFootArr,
		aWeight, aWeightClass, aWeightArr, aWeightFormat, aWeightTxt,
		aPrice, aPriceClass, aPriceArr, aPriceFormat, aPriceTxt;


	for (i in lnk) {

		idp = lnk[i].id;
		idh = idp.charAt(0).toUpperCase() + idp.slice(1);
		idbody = document.getElementById(idp);

		hdrId = document.createElement("h2");
		hdrIdClass = "no-headbutt font-weight-bold";
		hdrIdArr = hdrId.className.split(" ");
		if (hdrIdArr.indexOf(hdrIdClass) == -1) {
			hdrId.className += " " + hdrIdClass;
		}
		hdrIdTxt = document.createTextNode(idh);
		hdrId.appendChild(hdrIdTxt);
		idbody.appendChild(hdrId);
		
		cardDeck = document.createElement('div');
		cardDeckClass = "card-deck";
		cardDeckArr = cardDeck.className.split(" ");
		if (cardDeckArr.indexOf(cardDeckClass) == -1) {
			cardDeck.className += " " + cardDeckClass;
		}

		rowDeck = document.createElement('div');
		rowDeckClass = "row";
		rowDeckArr = rowDeck.className.split(" ");
		if (rowDeckArr.indexOf(rowDeckClass) == -1) {
			rowDeck.className += " " + rowDeckClass;
		}

		for (j in lnk[i].inventory){
			
			/*var k = j % 3;
			if (k == 0){
				// <div class="card-deck">
				cardDeck = document.createElement('div');
				cardDeckClass = "card-deck";
				cardDeckArr = cardDeck.className.split(" ");
				if (cardDeckArr.indexOf(cardDeckClass) == -1) {
					cardDeck.className += " " + cardDeckClass;
				}

				rowDeck = document.createElement('div');
				rowDeckClass = "row";
				rowDeckArr = rowDeck.className.split(" ");
				if (rowDeckArr.indexOf(rowDeckClass) == -1) {
					rowDeck.className += " " + rowDeckClass;
				}
			}*/

			colCard = document.createElement('div');
			colCardClass = "col-12 col-sm-6 col-md-4";
			colCardArr = colCard.className.split(" ");
			if (colCardArr.indexOf(colCardClass) == -1) {
				colCard.className += " " + colCardClass;
			}

			card = document.createElement('div');
			cardClass = "card shadow";
			cardArr = card.className.split(" ");
			if (cardArr.indexOf(cardClass) == -1) {
				card.className += " " + cardClass;
			}

			cardImg = document.createElement('img');
			// img.style.width = '100%';
			cardImgClass = "card-img-top";
			cardImgArr = cardImg.className.split(" ");
			if (cardImgArr.indexOf(cardImgClass) == -1) {
				cardImg.className += " " + cardImgClass;
			}
			var cardImgSrc = document.createAttribute('src');
			cardImgSrc.value = '/nazhifa' +  lnk[i].inventory[j].img;
			// cardImgSrc.value = lnk[i].inventory[j].img;
			cardImg.setAttributeNode(cardImgSrc);
			card.appendChild(cardImg);

			cardBody = document.createElement('div');
			cardBodyClass = "card-body";
			cardBodyArr = cardBody.className.split(" ");
			if (cardBodyArr.indexOf(cardBodyClass) == -1) {
				cardBody.className += " " + cardBodyClass;
			}

			/* cardTitlebox = document.createElement('div');
			cardTitleboxClass = "card-title-box";
			cardTitleboxArr = cardTitlebox.className.split(" ");
			if (cardTitleboxArr.indexOf(cardTitleboxClass) == -1) {
				cardTitlebox.className += " " + cardTitleboxClass;
			}
			
			cardTitle = document.createElement('h5');
			cardTitleClass = "card-title";
			cardTitleArr = cardTitle.className.split(" ");
			if (cardTitleArr.indexOf(cardTitleClass) == -1) {
				cardTitle.className += " " + cardTitleClass;
			}
			// cardTitle.onclick = productClickHandler(parseInt(j));
			cardTitleTxt = document.createTextNode(lnk[i].inventory[j].title);
			cardTitle.appendChild(cardTitleTxt);
			cardTitlebox.appendChild(cardTitle);

			cardBody.appendChild(cardTitlebox);

			cardSubtbox = document.createElement('div');
			cardSubtboxClass = "card-subtitle-box";
			cardSubtboxArr = cardSubtbox.className.split(" ");
			if (cardSubtboxArr.indexOf(cardSubtboxClass) == -1) {
				cardSubtbox.className += " " + cardSubtboxClass;
			}

			cardSubt = document.createElement('h6');
			cardSubtClass = "card-subtitle text-muted";
			cardSubtArr = cardSubt.className.split(" ");
			if (cardSubtArr.indexOf(cardSubtClass) == -1) {
				cardSubt.className += " " + cardSubtClass;
			}
			// cardSubt.onclick = productClickHandler(parseInt(j));
			cardSubtTxt = document.createTextNode(lnk[i].inventory[j].title);
			cardSubt.appendChild(cardSubtTxt);
			cardSubtbox.appendChild(cardSubt);

			cardBody.appendChild(cardSubtbox); */

			cardTitle = document.createElement('h5');
			cardTitleClass = "card-title";
			cardTitleArr = cardTitle.className.split(" ");
			if (cardTitleArr.indexOf(cardTitleClass) == -1) {
				cardTitle.className += " " + cardTitleClass;
			}
			// cardTitle.onclick = productClickHandler(parseInt(j));
			cardTitleTxt = document.createTextNode(lnk[i].inventory[j].title);
			cardTitle.appendChild(cardTitleTxt);
			cardBody.appendChild(cardTitle);

			cardSubt = document.createElement('h6');
			cardSubtClass = "card-subtitle mb-2 text-muted";
			cardSubtArr = cardSubt.className.split(" ");
			if (cardSubtArr.indexOf(cardSubtClass) == -1) {
				cardSubt.className += " " + cardSubtClass;
			}
			// cardSubt.onclick = productClickHandler(parseInt(j));
			cardSubtTxt = document.createTextNode(lnk[i].inventory[j].title);
			cardSubt.appendChild(cardSubtTxt);
			cardBody.appendChild(cardSubt); 

			card.appendChild(cardBody);

			cardFoot = document.createElement('div');
			cardFootClass = "card-footer";
			cardFootArr = cardFoot.className.split(" ");
			if (cardFootArr.indexOf(cardFootClass) == -1) {
				cardFoot.className += " " + cardFootClass;
			}

			aWeight = document.createElement('a');
			aWeightClass = "btn btn-tertiary rounded-pill font-weight-bold";
			aWeightArr = aWeight.className.split(" ");
			if (aWeightArr.indexOf(aWeightClass) == -1) {
				aWeight.className += " " + aWeightClass;
			}
			aWeightFormat = lnk[i].inventory[j].weight + "gr";
			aWeightTxt = document.createTextNode(aWeightFormat);
			aWeight.appendChild(aWeightTxt);
			cardFoot.appendChild(aWeight);

			aPrice = document.createElement('a');
			aPriceClass = "btn btn-price rounded-pill ml-3 font-weight-bold";
			aPriceArr = aPrice.className.split(" ");
			if (aPriceArr.indexOf(aPriceClass) == -1) {
				aPrice.className += " " + aPriceClass;
			}
			aPriceFormat = "Rp." + lnk[i].inventory[j].price;
			aPriceTxt = document.createTextNode(aPriceFormat);
			aPrice.appendChild(aPriceTxt);
			cardFoot.appendChild(aPrice);

			card.appendChild(cardFoot);

			colCard.appendChild(card);
			rowDeck.appendChild(colCard);
			cardDeck.appendChild(rowDeck);
			idbody.appendChild(cardDeck);
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