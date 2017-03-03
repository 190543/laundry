  // Function for changing the navbar to transparent on scroll.
  function navBarBgChange() {
      var scroll_start = 0;
      var startchange = $('#startchange');
      var offset = startchange.offset();

        if (startchange.length) {
        $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
            $(".navbar").removeClass("transparent-navbar");
          } else {
            $('.navbar').addClass("transparent-navbar");
          }
        });
        }
    }


  // Check how big the window is, preventing the transparency behaviour on mobile.
  // if($(window).width()>570){
  //     navBarBgChange();
  //   };

$(window).on('load', function() {
  if (document.body.scrollTop != 0) {
      $(".navbar").removeClass("transparent-navbar");
  }
  });

  // Just in case the user resizes the window.
  // $(window).on("resize",function(){
  //     if(!$(window).scrollTop()) { //abuse 0 == false :)
  //       alert("You are at the top of this window");
  //     }
  // });

    $('a[href^="#"]').click(function () {
            var the_id = $(this).attr("href");
            $('html, body').animate({
                scrollTop: $(the_id).offset().top-100
            }, 'slow');
            return false;
        });





$("#cleaning_menu2").click(function () {
    $("#cleaning_one").hide();
    $("#cleaning_two").show();
    $("#cleaning_three").hide();
    $("#cleaning_menu2 img").attr('src', './image/Laundry_active.png');
    $("#cleaning_menu3 img").attr('src', './image/wadhfoldplan_nor.png');
    $("#cleaning_menu1 img").attr('src', './image/dryclean_nor.png');
});

$("#cleaning_menu1").click(function () {
    $("#cleaning_one").show();
    $("#cleaning_two").hide();
    $("#cleaning_three").hide();
    $("#cleaning_menu1 img").attr('src', './image/dryclean_active.png');
    $("#cleaning_menu2 img").attr('src', './image/Laundry_nor.png');
    $("#cleaning_menu3 img").attr('src', './image/wadhfoldplan_nor.png');
});

$("#cleaning_menu3").click(function () {
    $("#cleaning_one").hide();
    $("#cleaning_two").hide();
    $("#cleaning_three").show();
    $("#cleaning_menu3 img").attr('src', './image/wadhfoldplan_active.png');
    $("#cleaning_menu2 img").attr('src', './image/Laundry_nor.png');
    $("#cleaning_menu1 img").attr('src', './image/dryclean_nor.png');
});



  