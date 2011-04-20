(function(){
  
  List = {
    dragDrop: function(){
      $$('.neuron').addEvent('mousedown', function(event){
         event.stop();
         
         // `this` refers to the element with the .item class
         var item = this;

         var clone = item.clone().setStyles(item.getCoordinates()).setStyles({
           opacity: 0.7,
           position: 'absolute'
         }).inject(document.body);

         var drag = new Drag.Move(clone, {

           droppables: $('hippocampus'),

           onDrop: function(dragging, hippocampus){

             dragging.destroy();

             if (hippocampus != null){
               item.clone().inject(hippocampus);
               hippocampus.highlight('#1ef80e', '#FFF');
             }
           },
           onEnter: function(dragging, hippocampus){
             hippocampus.tween('background-color', '#1ef80e');
           },
           onLeave: function(dragging, hippocampus){
             hippocampus.tween('background-color', '#FFF');
           },
           onCancel: function(dragging){
             dragging.destroy();
           }
         });
         drag.start(event);
       });
    }
  }
  
  List.dragDrop();
  
})();
