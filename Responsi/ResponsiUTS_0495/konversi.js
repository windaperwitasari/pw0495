function konversiKurs() {
	// body...
	var c, f,hasil,pil;
	x=document.kurs.nilai.value;
	Number(x);
	for(var i=0;i<document.kurs.pilihan.length;i++){
		if(document.kurs.pilihan[i].checked==true){
			kursType=document.kurs.pilihan[i].value;
			break;
		}
	}
	if(kursType=='idr'){
		hasil=13500*x;
	}
	else{
		hasil=x/13500;
	}
	document.kurs.ressultfield.value='Hasil konversi mata uang'+ x +'adalah' + hasil;
}