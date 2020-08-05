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

});