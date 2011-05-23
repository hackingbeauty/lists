(function(){
  
  BrainList = {
    dragOverDiv: $('#hippocampus'),
    init:function(){
      BrainList.dragDrop();
    },
    dragDrop: function(){
      if (Modernizr.draganddrop) {
        $('#list').delegate('a', 'dragstart',  function(){ $(this).toggleClass('opaque')   });
        $('#list').delegate('a', 'dragenter',  function(event){ BrainList.dragEnter(event) });
        $('#hippocampus').bind('dragover', function(eventObj){ BrainList.dragOver(event)  });
        $('#list').delegate('a', 'dragleave',  function(event){ BrainList.dragOver(event)  });
      } else {
        // Fallback to a library solution.
      }
    },
    dragEnter: function(event){
      $(BrainList.dragOverDiv).toggleClass('opaque');
    },
    dragOver: function(eventObj){

    },
    dragLeave: function(event){
      $(BrainList.dragOverDiv).toggleClass('opaque');
      console.log("dragLeave is " + event);
    }
  }
    
  BrainList.init();
  
})();
