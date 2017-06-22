$(function(){
  $('.social-toggle').click(function(e){
    e.preventDefault();
    $('body').addClass('social-active')
  })
  $('.close').click(function(e){
    e.preventDefault();
    $('body').removeClass('social-active')
  })

  var coCreating = new Waypoint.Inview({
    context: $('.scroller')[0],
    element: $('#co-creating')[0],
    enter: function(direction) {
      $('.title.co-creating').addClass('active')
    },
    exited: function(direction) {
      $('.title.co-creating').removeClass('active')
    }
  })

  var mindful = new Waypoint.Inview({
    context: $('.scroller')[0],
    element: $('#mindful')[0],
    enter: function(direction) {
      $('.title.mindful').addClass('active')
    },
    exited: function(direction) {
      $('.title.mindful').removeClass('active')
    }
  })

  var experiences = new Waypoint.Inview({
    context: $('.scroller')[0],
    element: $('#experiences')[0],
    enter: function(direction) {
      $('.title.experiences').addClass('active')
    },
    exited: function(direction) {
      if (direction == 'up') {
        $('.title.experiences').removeClass('active')
      }
    }
  })
})
