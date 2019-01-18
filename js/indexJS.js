// function btnClick(button){
// 	// button.style.background = "red";

// }


// function btnClick(button){
// 	// button.setAttribute("style", "background:red");
// 	button.style.background = "red";
// }

	//$(".btnContacts").hide();

// $('.col-sm-4').fadeOut(0).fadeIn(1000);


function fadeElements(){
	for(var i = 0; i < $('.btn').length + 1; i++){
		 $(".ray" + i).hide();
		 $('.ray' + i).fadeIn(i*500);



		 $('.btn' + i).hide();
		 $('.btn' + i).fadeIn(i*1200);
	}

}

fadeElements();

$('.btn1').click(function(){
	window.location = "content.html";
});

$('.btn2').click(function(){
	window.location = "production.html";
});

$('.btn3').click(function(){
	window.location = "ourTeam.html";
});

$('.btn4').click(function(){
	window.location = "contacts.html";
});


// var buttons = new Array();
// buttons = document.getElementsByClassName('btn');
// for (var i = 0; i < buttons.length; i++) {

		// if(buttons[i].textContent == "Content"){
				// buttons[i].addEventListener('click', function(){
			// document.location.href = "D:/Диплом/content.html";
			// document.location.href = "D:/Диплом/content.html";
		// });
	// }
			// if(buttons[i].textContent == "Contacts"){
					// buttons[i].addEventListener('click', function(){
				// document.location.href = "D:/Диплом/contacts.html";
					// document.location.href = "D:/Диплом/content.html";
			// });
		// }

				// if(buttons[i].textContent == "Production"){
						// buttons[i].addEventListener('click', function(){
					// document.location.href = "D:/Диплом/production.html";
					// document.location.href = "D:/Диплом/content.html";
				// });
			// }

				 // if(buttons[i].textContent == "Our Team"){
				 // buttons[i].addEventListener('click', function(){
				 	// document.location.href = "D:/Диплом/ourTeam.html";
				 	// document.location.href = "D:/Диплом/content.html";
				 // });
			// }

		// if(buttons[i].textContent = "Production"){
		// 	document.location.href = "D:/Диплом/production.html";
		// }
		// if(buttons[i].textContent = "Сontacts"){
		// 	document.location.href = "D:/Диплом/contacts.html";
		// }
		// if(buttons[i].textContent = "Our Team"){
		// 	document.location.href = "D:/Диплом/ourTeam.html";
		// }

		//document.location.href = "D:/Диплом/contacts.html";//"D:/Диплом/contacts/contacts.html";

	// }
	// $('.btn').hide();
	// $('.btn').fadeIn(15000);


	// $(".luch1").hide();
	// $('.luch1').fadeIn(1000);


	// $(".luch2").hide();
	// $('.luch2').fadeIn(2000);


	// $(".luch3").hide();
	// $('.luch3').fadeIn(3000);


	// $(".luch4").hide();
	// $('.luch4').fadeIn(4000);





// $(function fadeButtons() {
// 	$('.btnContacts').hide();
// 	 $('.btnContacts').fadeIn(1000);
// });
