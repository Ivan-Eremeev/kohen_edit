$(document).ready(function () {

	function slider(slider) {
	  slider.slick({
	    slidesToShow: 3, // Сколько слайдов показывать на экране
	    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
	    dots: false, // Пагинация
	    arrows: false, // Стрелки
	    speed: 700, // Скорость перехода слайдов
	    // autoplay: false, // Автопрокрутка
	    // autoplaySpeed: 2000, // Скорость автопрокрутки
	    // centerMode: false, // Задает класс .slick-center слайду в центре
	    // focusOnSelect: true, // Выбрать слайд кликом
	    infinite: true, // Зацикленное пролистывание
	    // vertical: false, // Вертикальный слайдер
	    // rtl: false, // Слайды листаются справа налево
	    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
	    // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
	    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
	    swipe: true, // Перелистывание пальцем
	    draggable: true, // Перелистывание мышью
	    responsive: [ // Адаптация
	    	{
	      breakpoint: 1200,
	        settings: {
	    			dots: true, // Пагинация
	        }
	      },
	      {
	      breakpoint: 769,
	        settings: {
	    			slidesToShow: 2, // Сколько слайдов показывать на экране
	    			dots: true, // Пагинация
	        }
	      },
	      {
	      breakpoint: 479,
	        settings: {
	          slidesToShow: 1, // Сколько слайдов показывать на экране
	          dots: true, // Пагинация
	        }
	      }
	    ]
	    // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
	  });

	  // Кастомные кнопки "вперед" "назад"
	  $('.fresh__arrow--prev').click(function() {
	    slider.slick('slickPrev');
	  });
	  $('.fresh__arrow--next').click(function() {
	    slider.slick('slickNext');
	  });
	};

	slider($('.freshSlider'));

  $('.newsBanner__slider').slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: true, // Пагинация
    arrows: false, // Стрелки
	  speed: 1500, // Скорость перехода слайдов
	  fade: true,
	  autoplay: true, // Автопрокрутка
  });

	// Модальное окно
	function modal(modal) {
		$('.modal-trigger').on('click', function() {
			var $this = $(this),
					data = $this.data('modal'),
					thisModal = $(data);
			modalShow(thisModal);
		});
	};
	// Открытие модального окна
	function modalShow(thisModal) {
		var html = $('html'),
				modalClose = thisModal.find($('.modal_close')),
				documentWidth = parseInt(document.documentElement.clientWidth),
				windowsWidth = parseInt(window.innerWidth),
				scrollbarWidth = windowsWidth - documentWidth;
		thisModal.show(0, function() {
			setTimeout(thisModal.addClass('open'),500);
		});
		html.addClass('lock').css('padding-right',scrollbarWidth);
		modalClose.on('click', function() {
			modalHide(thisModal);
		});
		thisModal.on('click', function(e) {
			if (thisModal.has(e.target).length === 0) {
				modalHide(thisModal);
			}
		});
	};
	// Закрытие модального окна
	function modalHide(thisModal) {
		var html = $('html');
		thisModal.removeClass('open');
		thisModal.hide();
		html.removeClass('lock').css('padding-right',0);
	};

	// Модальное окно
	// Задать кнопке, по которой открывается окно класс ".modal-trigger" и атрибут "data-modal", с id окна.
	// Пример <button>(class="modal-trigger" data-modal="#modal-1")</button>
	modal();

	// Открыть модальное окно
	// modalShow($('#modal-1'));

	// Закрыть модальное окно
	// modalHide($('#modal-1'));

});