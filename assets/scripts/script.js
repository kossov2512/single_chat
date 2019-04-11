$(document).ready(function() {
	const input = $('.js-input'),
		overlay = $('.overlay'),
		chatList = $('.js-msgList');

	let stickerPack = [
		{
			name: 'boss',
			url: './assets/img/stickers/sticker_boss.png'

		},
				{
			name: 'crab',
			url: './assets/img/stickers/sticker_crab.png'

		},
				{
			name: 'hi',
			url: './assets/img/stickers/sticker_hi.png'

		},
				{
			name: 'rainbow',
			url: './assets/img/stickers/sticker_rainbow.png'

		},
				{
			name: 'wtf',
			url: './assets/img/stickers/sticker_wtf.png'

		},
				{
			name: 'tears',
			url: './assets/img/stickers/sticker_tears.png'

		},
	];

	let msgNumber = 1;
	moment.locale('ru'); 
	input.focus();

 
	$('.js-send').click(function() {
		onMessageSend();
	});

   	$(document).on('keydown', function(e) {
   		console.log(e);
   		if(e.which === 13) {
   			onMessageSend();
   		} else if (e.which === 27) {
   			if (overlay.hasClass('-active'));
   			$('.sticker-modal').removeClass('-active');
			overlay.removeClass('-active');
   		}
   	})

	chatList.on('click','.chat__delete', function(){
		$(this).parent().parent().remove();
	})

   	function onMessageSend() {
   		const newMessage = input.val();
		if (!newMessage.match("^\\s*$")) {
			addMessageTochat(newMessage);
			

		}
		input.val('');
		input.focus();
	}

	function addMessageTochat(message) {
		chatList.append(
		'<li class=" ' + preparePositionClass() + '">' +
		  '<div class="chat__msg">' + 
		  message + ' ' +
		  '<div class="chat__delete">' + 
		  '</div>' +
		  '</div>' + 
		  '<div class="chat__time">' + moment().format('LT') + '</div>' +
		'</li>'
		);
		onAfterMessageSent()
	}
	function addStickerToChat(imageUrl) {

		chatList.append(
		'<li class="' + preparePositionClass() + '">' +
		  '<div class="chat__sticker">' + 
		  '<img src = "'+ imageUrl + '">' +
		  '</div>' + 
		  '<div class="chat__time">' + moment().format('LT') + '</div>' +
		'</li>'
		);
		onAfterMessageSent()
	}
	
	function addImageToChat(imageUrl) {
		chatList.append(
		'<li class="' + preparePositionClass() + '">' +
		  '<div class="chat__image">' + 
		  '<img src = "'+ imageUrl + '">' +
		  '</div>' + 
		  '<div class="chat__time">' + moment().format('LT') + '</div>' +
		'</li>'
		);
		
		onAfterMessageSent()
	}

	chatList.on('click', '.chat__image', function(event){
		overlay.addClass('-active');
		$(".image-viewer").removeClass("hidden");
		$("#image-view-container").attr(
			'src',
			$(event.target).attr('src')
		);
	});

	stickerPack.forEach(function(sticker) {
		$('.sticker-modal__list').append(
			'<li>' +
			`<img src="${sticker.url}" alt="">` +
			'</li>');
	});

	$('.sticker-modal__list li img').click(function (event) {
		addStickerToChat($(event.target).attr("src"));
			$('.sticker-modal').removeClass('-active');
			overlay.removeClass('-active');
	});

	
	$('.jsAddSticker').click(function () {
		$('.sticker-modal').addClass('-active');
		overlay.addClass('-active');
	});

	overlay.click(function () {
		$('.sticker-modal').removeClass('-active');
		overlay.removeClass('-active');
	});	

	function preparePositionClass() {
		let msgPositionClass = '';

		if (msgNumber % 2 == 0) {
			msgPositionClass = '-to-right';
		} else {
			msgPositionClass = '-to-left';
		}

		return msgPositionClass;
	}

function onAfterMessageSent() {
	chatList.animate({ scrollTop: chatList.prop("scrollHeight")},300)
	msgNumber++;
	input.focus();

} 
$("#file-input").change(function(){
	if(this.files && this.files[0]){ //Если выбран файл //
		let reader = new FileReader(); // Создаётся файл //

		reader.onload = function(e){
			addImageToChat(e.target.result);
		};

		reader.readAsDataURL(this.files[0]);
	}
});









































	// let human = {
	// 	name: 'Александр',
	// 	age: '16',
	// 	physical: {
	// 		height: 184,
	// 		weight: 69,
	// 		eyeColor: 'darkGreen'
	// 	},
	// 	movies: [
	// 	'Dark Knight',
	// 	'Maniac series',
	// 	'The bad, the good, and the ugly'
	// 	]
	// };

	// console.log(human.name);
	// console.log('Привет ' + human.name + ', сегодня тебе '+ human.age + ' лет');
	// console.log('Рост - ' + human.physical.height);
	// console.log('Вес - ' + human.physical.weight);
	// console.log('Цвет глаз - ' + human.physical.eyeColor);
	// console.table(human.movies);
	// console.log('Один из любимых фильмов - ' + human.movies[1]);

	//  let isBirthday = true;

	//  if (isBirthday) {
	//  	human.age++;
	//  	alert('С днем рождения! тебе уже: ' + human.age);
	//  }
























	
	// const fruits = ['Яблоко','Апельсин','Мандарин','Банан','Персик','Дынька','Арбуз','Виноград']
	// 	for ( let i = 0; i < fruits.length; i++ ) {
	// 		console.log('Мой любимый фрукт '+ fruits[i]);

	// 	}

	// 	for (let i = fruits.length -1; i > -1; i--)
	// 	{
	// 		console.log('Мои фрукты ' + fruits[i]);
	// 	}




	// 	for ( let i = 0; i < fruits.length; i++ ) {
	// 		if (i % 2 == 0)
	// 		console.log('Мой любимый фрукт '+ fruits[i]);
	// 	else {
	// 		console.log('Мой нелюбимый фрукт '+ fruits[i]);
	// 	}

	// 	}
	// 	for ( let i = 0; i < fruits.length; i++ ) {
	// 		if (fruits[i][0] == "А") {
	// 			console.log('фрукты на А '+ fruits[i]);
	// 		}
	// 	}




});
