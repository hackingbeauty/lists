/*global module: true, ok: true, equals: true, S: true, test: true */
module("neuron", {
	setup: function () {
		// open the page
		S.open("//brain/brain.html");

		//make sure there's at least one neuron on the page before running a test
		S('.neuron').exists();
	},
	//a helper function that creates a neuron
	create: function () {
		S("[name=name]").type("Ice");
		S("[name=description]").type("Cold Water");
		S("[type=submit]").click();
		S('.neuron:nth-child(2)').exists();
	}
});

test("neurons present", function () {
	ok(S('.neuron').size() >= 1, "There is at least one neuron");
});

test("create neurons", function () {

	this.create();

	S(function () {
		ok(S('.neuron:nth-child(2) td:first').text().match(/Ice/), "Typed Ice");
	});
});

test("edit neurons", function () {

	this.create();

	S('.neuron:nth-child(2) a.edit').click();
	S(".neuron input[name=name]").type(" Water");
	S(".neuron input[name=description]").type("\b\b\b\b\bTap Water");
	S(".update").click();
	S('.neuron:nth-child(2) .edit').exists(function () {

		ok(S('.neuron:nth-child(2) td:first').text().match(/Ice Water/), "Typed Ice Water");

		ok(S('.neuron:nth-child(2) td:nth-child(2)').text().match(/Cold Tap Water/), "Typed Cold Tap Water");
	});
});

test("destroy", function () {

	this.create();

	S(".neuron:nth-child(2) .destroy").click();

	//makes the next confirmation return true
	S.confirm(true);

	S('.neuron:nth-child(2)').missing(function () {
		ok("destroyed");
	});

});