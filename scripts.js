

$(document).ready(function() {


  var clickState = 0;
  var cssForState = [{
          'margin-left': '-310px'
      },{
          'margin-left': '0px'
      }];

  var advanceToNextClickState = function() {
      clickState++;
      if (clickState >= cssForState.length)
          clickState = 0;
  };

  $('.toggleMenu, .overlay, .fa, .navLinkMobile').click(function (e) {
      console.log("Received click while clickState = " + clickState);
      advanceToNextClickState();
      $('#slideMenu').animate(cssForState[clickState]);
      $('#hamburger').toggleClass('toggleAnimation normal');
      $('#h-mid').fadeToggle('100');
      $('.overlay').fadeToggle('100', function() {
      });
  });

  // $('.overlay').click(function(event) {
  //     console.log("overlay clicked while click state equals " + clickState);
  //     advanceToNextClickState();
  //     $('#slideMenu').animate(cssForState[clickState]);
  //     $('#hamburger').toggleClass('toggleAnimation normal');
  //     $('#h-mid').fadeToggle('100');
  //     $('.overlay').fadeToggle('100', function() {
  //     });
  // });


  $("i").mouseover(function(){
    $( ".fa" ).not(this).each(function() {
      $(this).animate({"opacity": "0.6"}, 600);
    });
  }).mouseout(function() {
    $( ".fa" ).not(this).each(function() {
      $(this).animate({"opacity": "1"}, 600);
    });
  });

//   $('.fa').hover(function(){
//      $(this).removeClass('fade').siblings().addClass('fade');
// },function(){
//      $(this).siblings().andSelf().removeClass('fade');
// });

    var canSee = true;

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100 && canSee) {
        $("#menu").animate({'background-color':"rgba(0, 0, 0, 0.85)"});
        canSee = false;
      } else if ($(this).scrollTop() <= 100 && !canSee) {
        $("#menu").animate({'background-color':"rgba(0, 0, 0, 0)"});
        canSee = true;
      }
    });

});
