/** 
Kalo ada waktu senggang coba nanti adain objek baru. 
Jadi nanti objek objek db tinggal ngirim array yang isinya variabel-variablenya, dan cuma ngirim satu variabel array.
Terus nanti hdr di tiadain. Tinggal ganti sama idtab cuma di caps di first letter.

Note 08/01/2019: Kalo mau begitu harus pake JSON.
*/

/**
 * BIKIN PERUBAHANNYA DI SALINANNYA AJA. JANGAN LANGSUNG DI PROJECT UTAMA
 */

var na = "N/A";
var un = "Unknown";
var og = "On Going"
var dbt = "Nazhifa's Beloved Team";
var itil = "It is local!";


function islamDB(){
	/**
	 * perlu tambah anggota array buat deskripsi tooltip
	 */
	idtab = "islam";
    hdr = "Islam";
    para = "Memahami pengetahuan Islam adalah kewajiban setiap muslim. Tak hanya Al-Quran dan Hadits, berbagai ilmu terkait fiqih dan syariah sehari-hari pun patut digali lebih lanjut. Memanfaatkan teknologi yang ada, kami telah menghimpun berbagai tautan yang bisa kamu akses untuk memperkaya pengetahuan dan keimananmu.";
	arrDB = [
		['IslamHouse', 'https://islamhouse.com/', 'Islam House', na],
		['SunnahOnline', 'http://sunnahonline.com', 'Sunnah Online', na],
		['ClearQuran', 'https://www.clearquran.com/', 'Talal Itani', na],
		['The Islamic Bulletin', 'http://www.islamicbulletin.org', un, na],
		['Abdurrahman', 'https://abdurrahman.org/', un, na	],
		['Islamic Scholar Imran Nazar Hosein', 'http://www.imranhosein.org/', 'Shaykh Imran Nazar Hosein', na],
	];
	
	showTable(arrDB, idtab, para, hdr);
}

function dwnDB(){
	/**
	 * perlu tambah anggota array buat deskripsi tooltip
	 * KALO MAU PAKE JSON, BIARIN MASUK KE VARIABEL arrDB DI TIAP METHOD DULU
	 * BARU NANTI UBAH LAGI TAHAP SELANJUTNYA SESUAI DENGAN STRUKTUR
	 * PEMROGRAMAN YANG LEBIH LOOSE COUPLING
	 */
	idtab = "downloadable";
    hdr = "Downloadable";
    para = "Bagi kamu yang ingin menambah pengetahuan dan resource terkait teknologi atau disiplin ilmu lainnya, silahkan akses tautan-tautan dibawah ini. Tautan yang kami himpun berikut menyediakan resource berbasis open source yang mana dapat kamu unduh secara gratis.";
	arrDB = [
		['Linux Training', 'http://www.linux-training.be/', 'Paul Cobbaut', na],
		['Bookfi', 'http://en.bookfi.net', 'Unknown', na],
		['Goal Kicker', 'https://goalkicker.com', 'Stackoverflow', na],
		['Internet Archive', 'https://archive.org/', 'The Internet Archive', na],
		['Paul\'s Online Notes', 'http://tutorial.math.lamar.edu', 'Paul Dawkins', na],
		['MIT OpenCourseWare', 'https://ocw.mit.edu/courses/', 'Massachusetts Instituge of Technology', na],
	];
	
	showTable(arrDB, idtab, para, hdr);
}

function redDB(){
	/**
	 * perlu tambah anggota array buat deskripsi tooltip
	 */
	idtab = "read";
    hdr = "Online-Only";
    para = "Kumpulan tautan berikut ini diperuntukkan bagi kamu yang mencari tautan yang menyediakan referensi dan resource terkait dunia teknologi informatika mulai dari bahasa pemrograman, desain dan lainnya. Patut diingat bahwa tautan-tautan dibawah ini hanya meneyediakan referensi secara daring tanpa bisa diunduh.";
	arrDB = [
		['W3Schools', 'https://w3schools.com', 'Refsnes Data', na],
		['TutorialsPoint', 'https://www.tutorialspoint.com/', 'Tutorials Point', na],
		['Codecademy', 'https://codecademy.com', 'Ryzac Inc.', na],
		['Tavmjong', 'https://tavmjong.free.fr', 'Tavmjong Bah', na],
		['The News Manual',	'https://www.thenewsmanual.net/', un, na],
		['Geoff Lawrence', 'https://geofflawrence.com', 'Geoff Lawrence', na],
		['Project Euler', 'https://projecteuler.net', un , na],
		['Sekolah Koding', 'https://sekolahkoding.com', 'Sekolah Koding', itil],
		['HackDesign', 'https://hackdesign.org/', un, na],
		['Feynman Lectures', 'https://www.feynmanlectures.caltech.edu', 'California Institute of Technology', na],
		['Wolfram MathWorld', 'http://mathworld.wolfram.com/', 'Eric Weisstein', na],
	];
	
	showTable(arrDB, idtab, para, hdr);
}

function acdDB(){
	/**
	 * perlu tambah anggota array buat deskripsi tooltip
	 */
	idtab = "academic";
    hdr = "Academic";
    para = "Terkhusus kamu yang membutuhkan atau mencari tautan alamat situs yang menyediakan berbagai referensi akademik seperti jurnal ilmiah dan penelitian, kamu bisa mengakses beberapa tautan lokal yang telah kami himpun dibawah ini.";
	arrDB = [
		['Garba Rujukan Digital', 'http://garuda.ristekdikti.go.id/', 'KEMENRISTEK DIKTI', itil],
		['Neliti', 'https://www.neliti.com/id/', 'Neliti Pty Ltd.', itil],
		['Jurnal Online LIPI', 'http://www.jurnal.lipi.go.id/', 'LIPI', itil],
	];
	
	showTable(arrDB, idtab, para, hdr);
}

function annDB(){
	idtab = "annual";
    hdr = "Annual Free Local Course/Training/Certification";
    para = "";
	arrDB = [
		['Garba Rujukan Digital', 'http://garuda.ristekdikti.go.id/', 'KEMENRISTEK DIKTI', itil],
		['Neliti', 'https://www.neliti.com/id/', 'Neliti Pty Ltd.', itil],
		['Jurnal Online LIPI', 'http://www.jurnal.lipi.go.id/', 'LIPI', itil],
	];
	
	showTable(arrDB, idtab, para, hdr);
}

function toolDB(){
	idtab = "tools";
    hdr = "Free Tools";
    para = "";
	arrDB = [
		['Image Map', 'https://www.image-map.net/', un, na],
	];
	
	showTable(arrDB, idtab, para, hdr);
}

function deadDB(){
	idtab = "deadlink";
    hdr = "Dead Link";
    para = "";
	arrDB = [
		['Alhamdulillah', 'Saat ini belum ada tautan yang mati.', na, na],
	];
	
	showTable(arrDB, idtab, para, hdr);
}

function showTable(arr, idt, pr, hdr){
	var arr, body, h1, hdr, tab, thead, tbody, tr, td, tn, row, col, idt;
	body = document.getElementById(idt); //tambahin parameter buat ganti index kelas jadi nama id
	h1 = document.createElement('h1');
	h1c = document.createTextNode(hdr);
    h1.appendChild(h1c);
    body.appendChild(h1);
    p = document.createElement('p');
    pc = document.createTextNode(pr);
    p.appendChild(pc);
	body.appendChild(p);
	resp = document.createElement('div'); // fix responsive table
	tab = document.createElement('table'); //sebelm table buat div dulu untuk masukin class table-responsive karena paragrafnya ikut ke overflow
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
	th = document.createElement('th');
	tnh = document.createTextNode("Localization");
	th.appendChild(tnh);
	tr.appendChild(th);
	thead.appendChild(tr);//** */
	tab.appendChild(thead);
	tbody = document.createElement('tbody'); //** */
	for (row = 0; row < arr.length; row++){
		tr = document.createElement('tr');
		for (col = 0; col < arr[row].length; col++){
			/**
			 * if array column tooltip {
			 * 		att = createAttribute("title");
			 * 		att.value = "Deskripsi";
			 * } else { sisanya
			 */
			td = document.createElement('td');
			tn = document.createTextNode(arr[row][col]);
			td.appendChild(tn);
			/**
			 * } tutup else disini
			 */
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	tab.appendChild(tbody);
	resp.appendChild(tab); // fix responsive table
	//body.appendChild(tab);
	body.appendChild(resp); // fix responsive table
}
