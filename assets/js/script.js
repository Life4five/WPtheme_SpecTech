function PopUpShow() {
  $(".modal_call, .modal_call_window").css('display', 'flex');
}
function PopUpHide() {
  $(".modal_call, .modal_call_window").hide();
}
$('.modal_call').click(function () {
  $('.modal_call, .modal_call_window').hide();
});

function NavMenuShow() {
  $(".nav_blank, .nav_window").css('display', 'flex');
}
function NavMenuHide() {
  $(".nav_blank, .nav_window").hide();
}
$('.nav_blank').click(function () {
  $('.nav_blank, .nav_window').hide();
});

var sl1_sel = $('.regular');
var sl1_conf = {
  prevArrow:
    '<button class="slide-arrow prev-arrow"><svg width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3885 30.3752C13.0711 30.3763 12.7574 30.3062 12.4706 30.1702C12.1838 30.0341 11.9311 29.8355 11.731 29.589L1.4673 16.839C1.15475 16.4587 0.983887 15.9818 0.983887 15.4896C0.983887 14.9974 1.15475 14.5205 1.4673 14.1402L12.0923 1.39022C12.453 0.956259 12.9713 0.683357 13.5332 0.631551C14.0951 0.579744 14.6546 0.753275 15.0885 1.11397C15.5225 1.47466 15.7954 1.99298 15.8472 2.55488C15.899 3.11679 15.7255 3.67626 15.3648 4.11022L5.86605 15.5002L15.046 26.8902C15.3059 27.2021 15.471 27.582 15.5217 27.9848C15.5725 28.3875 15.5068 28.7964 15.3324 29.1631C15.158 29.5297 14.8823 29.8387 14.5378 30.0535C14.1933 30.2683 13.7945 30.38 13.3885 30.3752Z" fill="#77787E"/></svg></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><svg width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.61145 30.3752C2.92892 30.3763 3.24259 30.3062 3.52942 30.1702C3.81625 30.0341 4.06895 29.8355 4.26895 29.589L14.5327 16.839C14.8453 16.4587 15.0161 15.9818 15.0161 15.4896C15.0161 14.9974 14.8453 14.5205 14.5327 14.1402L3.9077 1.39022C3.54701 0.956259 3.0287 0.683357 2.46679 0.631551C1.90489 0.579744 1.34542 0.753275 0.911455 1.11397C0.477494 1.47466 0.204594 1.99298 0.152786 2.55488C0.10098 3.11679 0.27451 3.67626 0.635204 4.11022L10.134 15.5002L0.953956 26.8902C0.694104 27.2021 0.52904 27.582 0.478296 27.9848C0.427552 28.3875 0.493251 28.7964 0.66762 29.1631C0.841988 29.5297 1.11773 29.8387 1.46221 30.0535C1.8067 30.2683 2.20551 30.38 2.61145 30.3752Z" fill="#77787E"/></svg></button>',
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1921,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1701,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
};
setSlick(sl1_sel, sl1_conf);

var sl2_sel = $('.autoplay');
var sl2_conf = {
  dots: true,
  dotsClass: 'autoplay-dots',
  infinite: false,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
};
setSlick(sl2_sel, sl2_conf);


var sl3_sel = $('.center');
var sl3_conf = {
  prevArrow:
  '<button class="slide-arrow prev-arrow"><svg width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3885 30.3752C13.0711 30.3763 12.7574 30.3062 12.4706 30.1702C12.1838 30.0341 11.9311 29.8355 11.731 29.589L1.4673 16.839C1.15475 16.4587 0.983887 15.9818 0.983887 15.4896C0.983887 14.9974 1.15475 14.5205 1.4673 14.1402L12.0923 1.39022C12.453 0.956259 12.9713 0.683357 13.5332 0.631551C14.0951 0.579744 14.6546 0.753275 15.0885 1.11397C15.5225 1.47466 15.7954 1.99298 15.8472 2.55488C15.899 3.11679 15.7255 3.67626 15.3648 4.11022L5.86605 15.5002L15.046 26.8902C15.3059 27.2021 15.471 27.582 15.5217 27.9848C15.5725 28.3875 15.5068 28.7964 15.3324 29.1631C15.158 29.5297 14.8823 29.8387 14.5378 30.0535C14.1933 30.2683 13.7945 30.38 13.3885 30.3752Z" fill="#77787E"/></svg></button>',
  nextArrow:
  '<button class="slide-arrow next-arrow"><svg width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.61145 30.3752C2.92892 30.3763 3.24259 30.3062 3.52942 30.1702C3.81625 30.0341 4.06895 29.8355 4.26895 29.589L14.5327 16.839C14.8453 16.4587 15.0161 15.9818 15.0161 15.4896C15.0161 14.9974 14.8453 14.5205 14.5327 14.1402L3.9077 1.39022C3.54701 0.956259 3.0287 0.683357 2.46679 0.631551C1.90489 0.579744 1.34542 0.753275 0.911455 1.11397C0.477494 1.47466 0.204594 1.99298 0.152786 2.55488C0.10098 3.11679 0.27451 3.67626 0.635204 4.11022L10.134 15.5002L0.953956 26.8902C0.694104 27.2021 0.52904 27.582 0.478296 27.9848C0.427552 28.3875 0.493251 28.7964 0.66762 29.1631C0.841988 29.5297 1.11773 29.8387 1.46221 30.0535C1.8067 30.2683 2.20551 30.38 2.61145 30.3752Z" fill="#77787E"/></svg></button>',
  centerMode: true,
  // centerPadding: '40px',
  arrows: true,
  dots: true,
  dotsClass: 'center-dots',
  variableWidth: true,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
};
setSlick(sl3_sel, sl3_conf);


function setSlick(sl_sel, sl_conf) {
  if (sl_sel.length) {
    if (sl_sel.hasClass('slick-initialized')) {
      sl_sel.slick('refresh');
    } else {
      sl_sel.slick(sl_conf);
    }
  }
}

// $(document).on('ready', function () {
//   $('.center').slick({
//     prevArrow:
//     '<button class="slide-arrow prev-arrow"><svg width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3885 30.3752C13.0711 30.3763 12.7574 30.3062 12.4706 30.1702C12.1838 30.0341 11.9311 29.8355 11.731 29.589L1.4673 16.839C1.15475 16.4587 0.983887 15.9818 0.983887 15.4896C0.983887 14.9974 1.15475 14.5205 1.4673 14.1402L12.0923 1.39022C12.453 0.956259 12.9713 0.683357 13.5332 0.631551C14.0951 0.579744 14.6546 0.753275 15.0885 1.11397C15.5225 1.47466 15.7954 1.99298 15.8472 2.55488C15.899 3.11679 15.7255 3.67626 15.3648 4.11022L5.86605 15.5002L15.046 26.8902C15.3059 27.2021 15.471 27.582 15.5217 27.9848C15.5725 28.3875 15.5068 28.7964 15.3324 29.1631C15.158 29.5297 14.8823 29.8387 14.5378 30.0535C14.1933 30.2683 13.7945 30.38 13.3885 30.3752Z" fill="#77787E"/></svg></button>',
//     nextArrow:
//     '<button class="slide-arrow next-arrow"><svg width="16" height="31" viewBox="0 0 16 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.61145 30.3752C2.92892 30.3763 3.24259 30.3062 3.52942 30.1702C3.81625 30.0341 4.06895 29.8355 4.26895 29.589L14.5327 16.839C14.8453 16.4587 15.0161 15.9818 15.0161 15.4896C15.0161 14.9974 14.8453 14.5205 14.5327 14.1402L3.9077 1.39022C3.54701 0.956259 3.0287 0.683357 2.46679 0.631551C1.90489 0.579744 1.34542 0.753275 0.911455 1.11397C0.477494 1.47466 0.204594 1.99298 0.152786 2.55488C0.10098 3.11679 0.27451 3.67626 0.635204 4.11022L10.134 15.5002L0.953956 26.8902C0.694104 27.2021 0.52904 27.582 0.478296 27.9848C0.427552 28.3875 0.493251 28.7964 0.66762 29.1631C0.841988 29.5297 1.11773 29.8387 1.46221 30.0535C1.8067 30.2683 2.20551 30.38 2.61145 30.3752Z" fill="#77787E"/></svg></button>',
//     centerMode: true,
//     // centerPadding: '40px',
//     arrows: true,
//     dots: true,
//     dotsClass: 'center-dots',
//     variableWidth: true,
//     slidesToShow: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           centerPadding: '0px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });


// При ресайзе

// Брейкпоинты размеров экрана
var WIDTH_TABL = 1000;
var WIDTH_MOB = 768;
var WIDTH_MOB = 560;

var sl_flag1 = 0;

$(window).on("orientationchange load resize", function () {
  var sl_flag2 = 0;
  if (window.innerWidth <= WIDTH_TABL) {
    sl_flag2 = WIDTH_TABL;
    if (window.innerWidth <= WIDTH_MOB) {
      sl_flag2 = WIDTH_MOB;
    }
  }
  if (sl_flag1 != sl_flag2) {
    setSlick(sl1_sel, sl1_conf);
    sl_flag1 = sl_flag2;
  }
});

$('#first-tabs-nav li, #second-tabs-nav li').click(function () {
  setSlick(sl1_sel, sl1_conf);
});
$('.single-item').slick();