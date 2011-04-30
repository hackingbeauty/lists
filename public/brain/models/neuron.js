/**
 * @tag models, home
 * Wraps backend neuron services.  Enables 
 * [Brain.Models.Neuron.static.findAll retrieving],
 * [Brain.Models.Neuron.static.update updating],
 * [Brain.Models.Neuron.static.destroy destroying], and
 * [Brain.Models.Neuron.static.create creating] neurons.
 */
$.Model('Brain.Models.Neuron',
/* @Static */
{
	/**
 	 * Retrieves neurons data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped neuron objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	findAll: function( params, success, error ){
		$.ajax({
			url: '/neuron',
			type: 'get',
			dataType: 'json',
			data: params,
			success: this.callback(['wrapMany',success]),
			error: error,
			fixture: "//brain/fixtures/neurons.json.get" //calculates the fixture path from the url and type.
		});
	},
	/**
	 * Updates a neuron's data.
	 * @param {String} id A unique id representing your neuron.
	 * @param {Object} attrs Data to update your neuron with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/neurons/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/**
 	 * Destroys a neuron's data.
 	 * @param {String} id A unique id representing your neuron.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/neurons/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/**
	 * Creates a neuron.
	 * @param {Object} attrs A neuron's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/neurons',
			type: 'post',
			dataType: 'json',
			success: success,
			error: error,
			data: attrs,
			fixture: "-restCreate" //uses $.fixture.restCreate for response.
		});
	}
},
/* @Prototype */
{});