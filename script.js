let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
	searchForm.classList.toggle('active');
}

window.onscroll=()=>{
	searchForm.classList.remove('active');

	if(window.screenY>80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
	}
}
window.onload=()=>{
	if(window.screenY>80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
	}
}

var swiper = new Swiper(".books-slider", {
	loop:true,
	centeredSlides:true,
	autoplay:{
		delay:9500,
		disableOnInteraction:false,
	},
	// pagination: {
	//   el: ".swiper-pagination",
	//   clickable: true,
	// },
	breakpoints: {
	 0: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 2,
	  },
	  1024: {
		slidesPerView: 3,
	  },
	},
  });
var swiper = new Swiper(".featured-slider", {
	loop:true,
	spaceBetween:10,
	centeredSlides:true,
	autoplay:{
		delay:9500,
		disableOnInteraction:false,
	},
	navigation:{
		nextEl:".swiper-button-next",
		prevEl:".swiper-button-prev",
	},
	breakpoints: {
	 0: {
		slidesPerView: 1,
	  },
	  450: {
		slidesPerView: 2,
	  },
	  768: {
		slidesPerView: 3,
	  },
	  1024: {
		slidesPerView: 4,
	  },
	},
  });
var swiper = new Swiper(".arrivals-slider", {
	loop:true,
	spaceBetween:10,
	centeredSlides:true,
	autoplay:{
		delay:9500,
		disableOnInteraction:false,
	},
	breakpoints: {
	 0: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 2,
	  },
	  1024: {
		slidesPerView: 3,
	  },
	},
  });
var swiper = new Swiper(".reviews-slider", {
	loop:true,
	spaceBetween:10,
	centeredSlides:true,
	autoplay:{
		delay:9500,
		disableOnInteraction:false,
	},
	breakpoints: {
	 0: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 2,
	  },
	  1024: {
		slidesPerView: 3,
	  },
	},
  });
var swiper = new Swiper(".blogs-slider", {
	loop:true,
	spaceBetween:10,
	centeredSlides:true,
	autoplay:{
		delay:9500,
		disableOnInteraction:false,
	},
	breakpoints: {
	 0: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 2,
	  },
	  1024: {
		slidesPerView: 3,
	  },
	},
  });