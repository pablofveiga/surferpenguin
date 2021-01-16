function navigation() {
	let triggers = $(".spHeader__nav__item");
	triggers.click(function(event) {


	    var _id = $(this).attr("href");
	    var target = $(_id);

		    if (target.length) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: (target.offset().top)
		        }, 1000, function() {
		            var $target = $(target);
		            $target.focus();
		            if ($target.is(":focus")) {
		                return false;
		            } else {
		                $target.attr('tabindex', '-1');
		                $target.focus();
		            };
		        });
		    }
		    document.querySelector(".menuTrigger").classList.remove("cross");
	   
	    document.body.classList.remove("blocked");
	    document.querySelector(".spHeader__nav").classList.remove("opened");
	});	
}




// $(".spHeader__nav__item").click(function(e){
// 	e.preventDefault();

//     var _id = $(this).attr("href");
//     var target = $(_id);
//     console.log(target);

// })












	let menusContainer = document.querySelector(".spHeader__nav");
	let navMenu = document.querySelector(".spHeader__nav");
	// let frontMenu = document.querySelector(".mainHeader__menu--front");
	let mobileTriggerBtn = document.querySelector(".menuTrigger");

	// LOCK/UNLOCK BODY (1,0)
	function blockBody(state) {
	    if (state == 1) {
	        document.querySelector("body").classList.add("blocked");
	    } 
	    else if (state == 0) {
	        document.querySelector("body").classList.remove("blocked");
	    }
	}
	// SHOW/HIDE MOBILE TRIGGER (1,0)
	function showTrigger(status){
	    if (status == 1) {
	        document.querySelector(".menuTrigger").classList.add("visible");
	        mobileTriggerBtn.classList.remove("clicked");
	    } else if (status == 0) {
	        document.querySelector(".menuTrigger").classList.remove("visible");
	    }
	}
	// TRIGGER BEHAVIOUR
	function mobileTrigger() {
	    let mobileBreakpoint = 991;
	    let trigger = document.getElementById("menuTrigger");

	    trigger.addEventListener("click",function(){
	        if (window.outerWidth < 991) {
	            menusContainer.classList.toggle("opened");
	            trigger.classList.toggle("cross");

	            if (menusContainer.classList.contains("opened")) {
	            	console.log("estado 1"); // abriendo
	            	document.body.classList.add("blocked");

	            } else {
	            	console.log("estado 2"); // cerrando
	            	menusContainer.classList.remove("opened");
	            	document.body.classList.remove("blocked");
	            }


	        } else {
	            if (!(menusContainer.classList.contains("rotated"))) {
	                switchMenus();
	            } else {
	                showNavMenu();
	            }
	        }
	    });
	    trigger.addEventListener("dblclick",function(){
	        scrollToTop(500);
	    });
	}
	// DATA-SCROLL FUNCTION
	var scrollStop = function (callback) {
	    if (!callback || typeof callback !== 'function') return;
	    var isScrolling;
	    window.addEventListener('scroll', function (event) {
	        window.clearTimeout(isScrolling);
	        isScrolling = setTimeout(function() {
	            callback();
	        }, 800);
	    }, false);
	};
	function scrollDetection() {
	    let scrollPosition = 0;
	    window.addEventListener('scroll', function(){
	        if ((document.body.getBoundingClientRect()).top > scrollPosition) {
	            menusContainer.setAttribute("data-scroll","up");
	            showTrigger(1);
	            menusContainer.classList.remove("rotated");
	        } else {
	            menusContainer.setAttribute("data-scroll","down");
	            showTrigger(0);
	            menusContainer.classList.add("rotated");
	        }
	        scrollPosition = (document.body.getBoundingClientRect()).top;
	    });

	    scrollStop(function(){
	        menusContainer.setAttribute("data-scroll","stopped");
	    })
	}
	// $(".frontMenu__circle").click(function(){
	//     switchMenus();
	// })

	// LAUNCHER
	scrollDetection();
	mobileTrigger();



// // ## MOBILE ONLY FUNCTIONS - LAUNCHER
// $(document).ready(function() {
// });


	if ( $(window).width() < 991 ) {
		navigation();

	}