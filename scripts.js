

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


  $("i").mouseover(function(){
    $( ".fa" ).not(this).each(function() {
      $(this).animate({"opacity": "0.6"}, 600);
    });
  }).mouseout(function() {
    $( ".fa" ).not(this).each(function() {
      $(this).animate({"opacity": "1"}, 600);
    });
  });


    // $(window).scroll(function() {
    //  if($(window).scrollTop() + $(window).height() > $(document).height()-100) {
    //          $('#menu').animate({'backgroundColor': 'black'}, 1000);
    //    }
    // });

});
