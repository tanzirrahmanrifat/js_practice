// jquery ui 

// draggable 
$(function(){
  $("#draggable").draggable();
});


// droppable 
$(function(){
  $("#draggable1").draggable();
  $("#droppable").droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
});


// sortable 
$(function(){
  $("#sortable").sortable();
});


// selectable 
$(function(){
  $("#selectable").selectable();
});

// datepicker 
$(function(){
  $("#datepic").datepicker();
});

// accordian 
$(function(){
  $("#accordion").accordion();
});

// auto complete 
$(function(){
  let variablestore = [
    "Rafiq",
    "karim",
    "abul",
    "zabbar",
    "A alim",
    "manik",
    "jaker",
    "harun",
    "gibon",
    "moron",

  ];
  $("#auto").autocomplete({
    source: variablestore
  });
});

// menu 
$(function(){
  $("#menu").menu();
});

// progressbar 
$( function() {
  var progressbar = $( "#progressbar" ),
    progressLabel = $( ".progress-label" );

  progressbar.progressbar({
    value: false,
    change: function() {
      progressLabel.text( progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
      progressLabel.text( "Complete!" );
    }
  });

  function progress() {
    var val = progressbar.progressbar( "value" ) || 0;

    progressbar.progressbar( "value", val + 2 );

    if ( val < 99 ) {
      setTimeout( progress, 80 );
    }
  }

  setTimeout( progress, 2000 );
} );


// tabs 
$(function(){
  $("#tabs").tabs();
});

// tooltips 
$(function(){
  $(document).tooltip();
});


// counter-up 
$(function(){
  $(".counter").counterUp({
    delay: 10,
    time: 10000
  });
});


// aos 
    AOS.init();

    // wow js 
    new WOW().init();

// load more 
$('.some-list').simpleLoadMore({
  item:'div',
  easing:'fade',
  count: 10,
  easingDuration: 400,
  itemsToLoad: 2,
  showCounter:true,
  counterText:'Showing {showing} out of {total}'

});


// add class 
$(function(){
  $("#addbtn").on("click",function(){
    $(".addclass").addClass("newClass", 1000,callBack);
  });


function callBack(){
  setTimeout(function(){
    $(".addclass").removeClass("newClass");
  },1500);
}
})