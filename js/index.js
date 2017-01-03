var options = {
  prices: [
    {
      name: 'tecno'
    },
    {
      name: 'Pherb'
    },
    {
      name: 'Perry'
    },
    {
      name: 'Isabella'
    },
    {
      name: 'Tree'
    },
    {
      name: 'Mom'
    },
    {
      name: 'Dad'
    },
    {
      name: 'Friends'
    }
  ],
  duration: 99999999
};
var $r = $('.roulette').fortune(12);

var clickHandler = function() {
  $('.spinner').off('click');
  $('.spinner span').hide();
  $r.spin().done(function(price) {
    $('.result').html(price);
    $('.spinner').on('click', clickHandler);
    $('.spinner span').show();
  });
};

$('.spinner').on('click', clickHandler);