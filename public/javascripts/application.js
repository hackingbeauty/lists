(function(){
  
  BrainList = {
    source:"",
    target:"",
    init:function(){
      if (Modernizr.draganddrop) {
        var list = $('#url-list');
        var dragOverArea = $('#hippocampus');
        $(list).delegate('a', 'dragstart',  function(){ BrainList.handleDragStart(event,this) });
        $(dragOverArea).bind('dragover',  function(){ BrainList.handleDragOver(event,this) });
        $(dragOverArea).bind('drop',  function(){ BrainList.handleDrop(event,this) });
        $(dragOverArea).bind('dragleave',  function(){ BrainList.handleDragLeave(this) });    
      } else {
        alert("You're not using an HTML5 compatible browswer.")// Fallback to a library solution.
      }
    },
    handleDragStart:function(event,elem){
      BrainList.source = elem;
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', $.trim(elem.innerHTML));
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
      var data = event.dataTransfer.getData('text/plain');
      $('#hippocampus-list').append('<li>' + data + '</li>');
      $(elem).removeClass('over');
      $(BrainList.source).remove();
      BrainList.sendDataToBrain(data);
    },
    sendDataToBrain:function(data){
      json = {
        "data":data
      };
      console.log('data is ' + data);
      $.ajax({
        type: 'post',
        url: '/neurons',
        data: json,
        dataType: 'text',
        error: function(res) { 
          console.log('error')
          console.log(res.responseText)
        },
        success: function(res){
          console.log('success')
          console.log(res);
        }
      });
    }
  }
      
  BrainList.init();
  
})();
