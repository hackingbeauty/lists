(function(){
  
  BrainList = {
    init:function(){
      if (Modernizr.draganddrop) {
        $('#list').delegate('a', 'dragstart',  function(){ BrainList.handleDragStart(this) });
        var dragOverArea = $('#hippocampus');
        $(dragOverArea).bind('dragover',  function(){ BrainList.handleDragOver(this) });
        $(dragOverArea).bind('dragleave',  function(){ BrainList.handleDragLeave(this) });    
      } else {
        // Fallback to a library solution.
      }
    },
    handleDragStart:function(elem){
      $(elem).addClass('opaque');
    },
    handleDragOver:function(elem){
      $(elem).addClass('over');
    },
    handleDragLeave:function(elem){
      $(elem).removeClass('over');
    }
  }
  

  
  // BrainList = {
  //   dragOverDiv: $('#hippocampus'),
  //   init:function(){
  //     BrainList.dragDrop();
  //   },
  //   dragDrop: function(){
  //     if (Modernizr.draganddrop) {
  //       $('#list').delegate('a', 'dragstart',  function(){ $(this).toggleClass('opaque')   });
  //       $('#list').delegate('a', 'dragenter',  function(event){ BrainList.dragEnter(event) });
  //       $('#hippocampus').bind('dragover', function(eventObj){ BrainList.dragOver(event)  });
  //       $('#list').delegate('a', 'dragleave',  function(event){ BrainList.dragOver(event)  });
  //     } else {
  //       // Fallback to a library solution.
  //     }
  //   },
  //   dragEnter: function(event){
  //     $(BrainList.dragOverDiv).toggleClass('opaque');
  //   },
  //   dragOver: function(eventObj){
  //     console.log("dragover");
  //   },
  //   dragLeave: function(event){
  //     $(BrainList.dragOverDiv).removeClass('opaque');
  //     console.log("dragLeave is " + event);
  //   }
  // }
    
  BrainList.init();
  
})();
