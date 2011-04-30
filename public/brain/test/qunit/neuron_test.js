module("Model: Brain.Models.Neuron")

test("findAll", function(){
	stop(2000);
	Brain.Models.Neuron.findAll({}, function(neurons){
		start()
		ok(neurons)
        ok(neurons.length)
        ok(neurons[0].name)
        ok(neurons[0].description)
	});
	
})

test("create", function(){
	stop(2000);
	new Brain.Models.Neuron({name: "dry cleaning", description: "take to street corner"}).save(function(neuron){
		start();
		ok(neuron);
        ok(neuron.id);
        equals(neuron.name,"dry cleaning")
        neuron.destroy()
	})
})
test("update" , function(){
	stop();
	new Brain.Models.Neuron({name: "cook dinner", description: "chicken"}).
            save(function(neuron){
            	equals(neuron.description,"chicken");
        		neuron.update({description: "steak"},function(neuron){
        			start()
        			equals(neuron.description,"steak");
        			neuron.destroy();
        		})
            })

});
test("destroy", function(){
	stop(2000);
	new Brain.Models.Neuron({name: "mow grass", description: "use riding mower"}).
            destroy(function(neuron){
            	start();
            	ok( true ,"Destroy called" )
            })
})