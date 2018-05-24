$(document).ready(function(){
	
	function anchor_slides(){
		 var href_page = $(location).attr("href");
		   var reg1=/#blitz/i ;
		   var reg2=/#sib/i ;
		   var reg3=/#delight/i ;
		   var reg4=/#brillant/i ;
		   var reg5=/#intelio/i ;
		   var reg6=/#geneo/i ;

		  if(reg1.test(href_page)) {
		  	get_started('#blitz')
		  } else if(reg2.test(href_page)) {
			get_started('#sib')
		  } else if(reg3.test(href_page)) {
		   	get_started('#delight')
		  } else if(reg4.test(href_page)) {
		   get_started('#brillant')
		  } else if(reg5.test(href_page)) {
		   	get_started('#intelio')
		  } else if(reg6.test(href_page)) {
		   	get_started('#geneo')
		  }
	 }
	 
	 function get_started(this_elem) {
		var data_el = $(this_elem).attr("data-item");
		$(".big_img_bl .item").removeClass("active");
		$(".big_img_bl .item[data-item="+data_el+"]").addClass("active");
		$(".anim_it").stop().removeClass("active");
		$(".anim_it").find(".anim_img img").removeClass("active");
		$(".anim_it").find(".anim_img img:eq(0)").addClass("active");
		$(".anim_it[data-item="+data_el+"]").find(".anim_img img:eq(2)").addClass("active");
		$(".anim_it[data-item="+data_el+"]").addClass("active");
	}
	 
	 anchor_slides();

	$(".video_link").click(function(){
		$(".video_popup").find("iframe").attr("src", 'https://www.youtube.com/embed/WSZrvubEFGc');
		$(".pop_form_bg").fadeIn(400);
		$(".video_popup").fadeIn(400);
		e.preventDefault();
	});

	$("form .u_phone").blur(function() {
	  	if($(this).val().length == 0) {
	    	$(this).closest(".line_wrap").addClass('error')
	  	} 
	});
	$("form .u_phone").focus(function() {
	  	$(this).closest(".line_wrap").removeClass('error')
	});


	$("#feedback_form, #feedback_form_map ").submit(function(e){
		e.preventDefault();
		var postData = $(this).serializeArray(),
		 	formURL = $(this).attr("action"),
		 	error = 0,
			form = $(this),
			phone = form.find("input[name='u_phone']");

		if ((phone.val() == '') || (phone.val() == phone.attr("data-ph"))){
			phone.closest(".line_wrap").addClass("error");
			error = 1;
		}

		if (error == 0) {
			$.ajax({
				url : formURL,
				type: "POST",
				data : postData,
			});
			$(this).closest(".popup_form").fadeOut(800);
			$(this).closest(".popup_form.thank_you").fadeIn(800);
		}

	});


	$(function() {

		 $('input[type=text]').focus(function(){
			var txt = $(this).val();
			var ph = $(this).attr('data-ph');
			
			if (typeof ph !== typeof undefined && ph !== false) {
				if(txt == ph) {
					$(this).val('');
				}
			}
		 });
		 
		 $('input[type=text]').blur(function(){
			var txt = $(this).val();
			var ph = $(this).attr('data-ph');
			if (typeof ph !== typeof undefined && ph !== false) {
				if(txt == '') {
					$(this).val(ph);
				}
			}
		 });
		 
		 $('input[type=text]').each(function(){
			 var ph = $(this).attr('placeholder');
			 
			 if (typeof ph !== typeof undefined && ph !== false) {
				 if(ph.length > 0) {
					 $(this).attr({'data-ph': ph, 'placeholder':''});
					 $(this).val(ph);
				 }
			 }
		 })
     });
	function pop_position(){
		var screen_top  = $(window).scrollTop(),
			screen_h = $(window).outerHeight(),
			pop_h = $(".pop_form_wrap").outerHeight();
		if ((pop_h + 200) < screen_h) {
			$(".pop_form_wrap").css("top", "50%").removeClass("mob");
		} else {
			$(".pop_form_wrap").css("top", screen_top + 180).addClass("mob");
		}
	}


	if ($("select").length > 0 ){
		$('select').selectbox();	
	}


	$(".scroll_bot").click(function(e){
		$(".pop_form_bg").fadeIn(400);
		$(".pop_form_wrap").fadeIn(400);
		$(".popup_form").fadeIn(400);
		pop_position();
		e.preventDefault();
	});

	$(".video_popup .close").click(function(){
		$(this).closest(".video_popup").find("iframe").attr("src", '');
		$(".pop_form_bg").fadeOut(400);
		$(".video_popup").fadeOut(400);
	});

	$(".popup_form .close").click(function(){
		$(".pop_form_bg").fadeOut(400);
		$(".pop_form_wrap").fadeOut(400);
	});
	
	$('.amin_form .close').click(function(){
		$(this).closest('.amin_form').css('right', '-100%');
	});


	time = 0;

	$(".anim_it").click(function(){
		var data_el = $(this).attr("data-item");
		$(".big_img_bl .item").removeClass("active");
		$(".big_img_bl .item[data-item="+data_el+"]").addClass("active");
		$(".anim_it").stop().removeClass("active");
		$(".anim_it").find(".anim_img img").removeClass("active");
		$(".anim_it").find(".anim_img img:eq(0)").addClass("active");
		$(this).find(".anim_img img:eq(2)").addClass("active");
		$(this).addClass("active");
	});

	$(".toggle_btn_bl .anim_it").hover(function(){
		if (!$(this).hasClass("active")){
			time = 0;
			$(this).find(".anim_img img").each(function(){
				var el = $(this);	
				timerId = setTimeout(function() {
					el.parent().find("img").removeClass("active");
					el.addClass("active");
				}, time)
				time = time + 200;		
			});	
		}
			
	},function(){
		if (!$(this).hasClass("active")){
			setTimeout(function() {
				$(".toggle_btn_bl .anim_it").each(function(){
					if(!$(this).is(':hover')) {
						$(this).find(".anim_img img").removeClass("active");
						$(this).find(".anim_img img:eq(0)").addClass("active");
					}
				});
			},800);
		}	
	});


	/*function percent_anim() {
		//блок работа построена на простых принципах
		//цифры после (l ,t,o) амплитуда появления элементов 
		$('.percent_anim .icon').css('position','relative').each(function() {
			//controller.addTween('#showcase .units', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
			var l = Math.random()*400-100,
				t = Math.random()*400-100,
				o = Math.random()*15-30,
			$(this).css({'left': l, 'top': t, 'font-size': o});
		});
	}
	percent_anim();*/


	function percent_anim(){
		if (!$(".percent_anim").hasClass("finish")){
			var of_top = $("#selection_bl").offset().top /3,
			wp = 1000;
			if (wp  > of_top ) {
				setTimeout(function() {
					$(".percent_anim").removeClass("dont_anim");
					setTimeout(function() {
						$(".percent_anim").addClass("finish");
						$(".percent_anim").removeClass("anim");
					},2000);		
				},1000);	
			}
			
		}
	}

	percent_anim();


	$(window).resize(function(){
		pop_position();
	});
	$(window).scroll(function(){
		percent_anim();
	});


  /*function addHandler(object, event, handler) {
	    if (object.addEventListener) {
	      object.addEventListener(event, handler, false);
	    }
	    else if (object.attachEvent) {
	      object.attachEvent('on' + event, handler);
	    }
	    else alert("Обработчик не поддерживается");
	  }
	  // Добавляем обработчики для разных браузеров
	  addHandler(window, 'DOMMouseScroll', wheel);
	  addHandler(window, 'mousewheel', wheel);
	  addHandler(document, 'mousewheel', wheel);
	  // Функция, обрабатывающая событие
	  function wheel(event) {
	    var delta; // Направление колёсика мыши
	    event = event || window.event;
	    // Opera и IE работают со свойством wheelDelta
	    if (event.wheelDelta) { // В Opera и IE
	      delta = event.wheelDelta / 120;
	      // В Опере значение wheelDelta такое же, но с противоположным знаком
	      if (window.opera) delta = -delta; // Дополнительно для Opera
	    }
	    else if (event.detail) { // Для Gecko
	      delta = -event.detail / 3;
	    }
	    // Запрещаем обработку события браузером по умолчанию
	    if (event.preventDefault) event.preventDefault();
	    event.returnValue = false;
	    if (delta > 0 && $("body").hasClass("anim_ready")){
	    	$("body").removeClass("anim_ready");
	    	if ($("#selection_bl").hasClass('visible_screen')) {
	    		$("#advantages").removeClass("hidden_top").addClass("visible_screen");
	    		setTimeout(function(){		
	    			$("#selection_bl").removeClass("visible_screen").addClass("hidden_bot");	
	    		},2000);
	    	} else if ($("#why_rehau").hasClass('visible_screen')) {
	    		$("#why_rehau").removeClass("hidden_top").removeClass("visible_screen");
	    		$("#selection_bl").addClass("visible_screen").removeClass("hidden_top");
	    	} else if ($("#map_block").hasClass('visible_screen')) {
	    		$("#map_block").removeClass("visible_screen").addClass("hidden_bot");
	    		$("#why_rehau").addClass("visible_screen").removeClass("fix_pos");
	    	}
	    	setTimeout(function(){		
	    		$("body").addClass("anim_ready");
	    	},3000);
	    
	    } else if (delta < 0 && $("body").hasClass("anim_ready")){
	    	$("body").removeClass("anim_ready");
	    	if ($("#advantages").hasClass('visible_screen')){
	    		$("#selection_bl").addClass("visible_screen").removeClass("hidden_bot");
	    		setTimeout(function(){		
	    			$("#advantages").addClass("hidden_top").removeClass("visible_screen");
	    		},2000);
	    		$("#advantages").removeClass("del_2s");
	    	} else if ($("#selection_bl").hasClass('visible_screen')) {
	    		$("#selection_bl").addClass("hidden_top").removeClass("visible_screen");
	    		$("#why_rehau").addClass("visible_screen").removeClass("hidden_bot");
	    	}else if ($("#why_rehau").hasClass('visible_screen')) {
	    		$("#map_block").addClass("visible_screen").removeClass("hidden_bot");
	    		$("#why_rehau").addClass("fix_pos").removeClass("visible_screen");
	    	}

	    	setTimeout(function(){		
	    		$("body").addClass("anim_ready");
	    	},3000);
	    }
	  }
	  */

});



/*function initialize() {
			    var myLatlng = new google.maps.LatLng(55.678060, 37.512684);
			    var mapOptions = {
			     zoom: 16,
			     center: myLatlng,
			     styles:
			      [
			       {
			        stylers:
			         [
			          { hue: "#b4b4b4" },
			          { saturation: -95 }
			         ]
			       }
			      ]
			    }
			    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

			    var marker = new google.maps.Marker({
			     position: myLatlng,
			     map: map,
			     icon: 'images/marker.png',
			     title: 'My Map'
			    });
			   }*/

