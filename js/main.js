// Search field 
$(".search-icon").on("click", function () {
  $("#search-form").toggleClass("show");
});

// Aside Show/Hide
$(".toggle-aside").on("click", function () {
  $("aside").toggleClass("hide");
  $("#main").toggleClass("full-content");
  $("#footer").toggleClass("full-content");
});

$(window).on("load resize", function () {
  if (window.innerWidth <= 1200) {
    $("aside").addClass("hide");
    $("#main").addClass("full-content");
    $("#footer").addClass("full-content");
  } else {
    $("aside").removeClass("hide");
    $("#main").removeClass("full-content");
    $("#footer").removeClass("full-content");
  }
});


// Scroll On top Button
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 120) {
    $(".back-to-top").show();
  } else {
    $(".back-to-top").hide();
  }
});
$(".back-to-top").on("click", function () {
  $("html, bodyz").animate({
    scrollTop: 0
  }, "300");
});


//  Autoresize echart charts
const mainContainer = document.querySelector('#main');
if (mainContainer) {
  setTimeout(() => {
    new ResizeObserver(function () {
      document.querySelectorAll('.echart', true).forEach(getEchart => {
        echarts.getInstanceByDom(getEchart).resize();
      });
    }).observe(mainContainer);
  }, 200);
}














(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();