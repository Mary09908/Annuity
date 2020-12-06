$(function () {
   $(".header__link").click(function () {
      // remove classes from all
      $(".header__link").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
      // stop the page from jumping to the top
      return false;
   });
   $(".mobile__link").click(function () {
      // remove classes from all
      $(".mobile__link").removeClass("active-mobile");
      // add class to the one we clicked
      $(this).addClass("active-mobile");
      // stop the page from jumping to the top
      return false;
   });

   $('.header__slider-inner').slick({
      infinite: true,
      fade: true,
      arrows: true,
      adaptiveHeight: true,
      variableWidth: true,
      responsive: [
         {
            breakpoint: 1431,
            settings: {
               arrows: false
            }
         }
      ]
   });

   $('.logo__slider-inner').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 3
   });

   $(".fancybox").fancybox();
   //! закрыть окно после открытия нового
   $('[data-fancybox]').fancybox({
      closeExisting: true,
      loop: true
   });

   //! возраст инпут
   for (let year = 1920; year <= 2020; year++) {
      let options = document.createElement("OPTION");
      document.getElementById("year").appendChild(options).innerHTML = year;
   }

   for (let year = 1920; year <= 2020; year++) {
      let options = document.createElement("OPTION");
      document.getElementById("year-form").appendChild(options).innerHTML = year;
   }
   //! открыть попап при выходе
   // $(document).mouseleave(function (e) {
   //    if (e.clientY < 10) {
   //       $("#exitblock").fadeIn("fast");
   //    }
   // });

   //! закрыть попап по крестику
   $(".close").click(function (e) {
      if (($("#exitblock, #exitblock2").is(':visible')) && (!$(e.target).closest(".exitblock, exitblock2").length)) {
         $("#exitblock, #exitblock2").remove();
      }
   });

  
   // $('#burger__button').on('click', function () {
   //    $('#phone__menu').slideToggle();
   // });

   // $('.burger__button-close').on('click', function () {
   //    $('.header__mobile-menu').slideToggle();
   // });

});


//! попап с загрузкой
var button = document.getElementById('button'),
   exitblock = document.getElementById('exitblock'),
   exitblock2 = document.getElementById('exitblock2');

// Отслеживаем клик
button.addEventListener('click', function () {

   // Закрываем первый поапа
   exitblock.classList.remove('opened');

   // Открываем второй
   exitblock2.classList.add('opened');
});

//! Аккардеон
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("open");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
      } else {
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}



