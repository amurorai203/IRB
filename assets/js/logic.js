// Heart button function

jQuery(function($) {
    $('#swapHeart').on('click', function() {
      var $el = $(this),
        textNode = this.lastChild;
      $el.find('span').toggleClass('glyphicon-heart glyphicon-heart-empty');
      $el.toggleClass('swap');
    });
  });

