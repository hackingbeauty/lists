(function(){
  
  BrainList = {
    init:function(){
      if (Modernizr.draganddrop) {
        var list = $('#url-list');
        var dragOverArea = $('#hippocampus');
        $(list).delegate('a', 'dragstart',  function(){ BrainList.handleDragStart(event,this) });
        $(dragOverArea).bind('dragover',  function(){ BrainList.handleDragOver(event,this) });
        $(dragOverArea).bind('drop',  function(){ BrainList.handleDrop(event,this) });
        $(dragOverArea).bind('dragleave',  function(){ BrainList.handleDragLeave(this) });    
      } else {
        // Fallback to a library solution.
      }
    },
    handleDragStart:function(event,elem){
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', elem.innerHTML);
      $(elem).addClass('opaque');
    },
    handleDragOver:function(event,elem){
      if (event.preventDefault) {
           event.preventDefault(); // Necessary. Allows us to drop.
       }
      $(elem).addClass('over');
      return false;      
    },
    handleDragLeave:function(elem){
      $(elem).removeClass('over');
    },
    handleDrop:function(event,elem){
      event.dataTransfer.dropEffect = 'move';
      var data = event.dataTransfer.getData('text/html');
      $('#hippocampus-list').append('<li>' + data + '</li>');
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
