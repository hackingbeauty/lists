/**
 * @tag controllers, home
 * Displays a table of neurons.	 Lets the user 
 * ["Brain.Controllers.Neuron.prototype.form submit" create], 
 * ["Brain.Controllers.Neuron.prototype.&#46;edit click" edit],
 * or ["Brain.Controllers.Neuron.prototype.&#46;destroy click" destroy] neurons.
 */
$.Controller.extend('Brain.Controllers.Neuron',
/* @Static */
{
	onDocument: true
},
/* @Prototype */
{
 /**
 * When the page loads, gets all neurons to be displayed.
 */
 load: function(){
	if(!$("#neuron").length){
	 $(document.body).append($('<div/>').attr('id','neuron'));
		 Brain.Models.Neuron.findAll({}, this.callback('list'));
 	}
 },
 /**
 * Displays a list of neurons and the submit form.
 * @param {Array} neurons An array of Brain.Models.Neuron objects.
 */
 list: function( neurons ){
	$('#neuron').html(this.view('init', {neurons:neurons} ));
 },
 /**
 * Responds to the create form being submitted by creating a new Brain.Models.Neuron.
 * @param {jQuery} el A jQuery wrapped element.
 * @param {Event} ev A jQuery event whose default action is prevented.
 */
'form submit': function( el, ev ){
	ev.preventDefault();
	new Brain.Models.Neuron(el.formParams()).save();
},
/**
 * Listens for neurons being created.	 When a neuron is created, displays the new neuron.
 * @param {String} called The open ajax event that was called.
 * @param {Event} neuron The new neuron.
 */
'neuron.created subscribe': function( called, neuron ){
	$("#neuron tbody").append( this.view("list", {neurons:[neuron]}) );
	$("#neuron form input[type!=submit]").val(""); //clear old vals
},
 /**
 * Creates and places the edit interface.
 * @param {jQuery} el The neuron's edit link element.
 */
'.edit click': function( el ){
	var neuron = el.closest('.neuron').model();
	neuron.elements().html(this.view('edit', neuron));
},
 /**
 * Removes the edit interface.
 * @param {jQuery} el The neuron's cancel link element.
 */
'.cancel click': function( el ){
	this.show(el.closest('.neuron').model());
},
 /**
 * Updates the neuron from the edit values.
 */
'.update click': function( el ){
	var $neuron = el.closest('.neuron'); 
	$neuron.model().update($neuron.formParams());
},
 /**
 * Listens for updated neurons.	 When a neuron is updated, 
 * update's its display.
 */
'neuron.updated subscribe': function( called, neuron ){
	this.show(neuron);
},
 /**
 * Shows a neuron's information.
 */
show: function( neuron ){
	neuron.elements().html(this.view('show',neuron));
},
 /**
 *	 Handle's clicking on a neuron's destroy link.
 */
'.destroy click': function( el ){
  var id = el.closest('.neuron').model().url.id;
  console.log(el.closest('.neuron').model().url.id);
	if(confirm("Are you sure you want to destroy?")){
		el.closest('.neuron').model().destroy();
	}
 },
 /**
 *	 Listens for neurons being destroyed and removes them from being displayed.
 */
"neuron.destroyed subscribe": function(called, neuron){
	neuron.elements().remove();	 //removes ALL elements
 }
});