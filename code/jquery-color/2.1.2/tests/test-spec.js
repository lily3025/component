define(['{{module}}'], function(_) {
	describe('Parse Test', function() {
		describe('Parse from string', function() {
			it('jQuery.Color("red")', function() {
				var color = jQuery.Color("red");

				expect(color.red()).to.equal(255);
				expect(color.green()).to.equal(0);
				expect(color.blue()).to.equal(0);
				expect(color.alpha()).to.equal(1);
			});

			it('jQuery.Color("rgb(22, 33, 44)")', function() {
				var color = jQuery.Color("rgb(22, 33, 44)");

				expect(color.red()).to.equal(22);
				expect(color.green()).to.equal(33);
				expect(color.blue()).to.equal(44);
				expect(color.alpha()).to.equal(1);
			});

			it('jQuery.Color("#fcd")', function() {
				var color = jQuery.Color("#fcd");

				expect(color.red()).to.equal(255);
				expect(color.green()).to.equal(204);
				expect(color.blue()).to.equal(221);
				expect(color.alpha()).to.equal(1);
			});

			it('jQuery.Color("rgba(22, 33, 44, .5)")', function() {
				var color = jQuery.Color("rgba(22, 33, 44, .5)");

				expect(color.red()).to.equal(22);
				expect(color.green()).to.equal(33);
				expect(color.blue()).to.equal(44);
				expect(color.alpha()).to.equal(0.5);
			});
		});

		describe('Parse from arguments', function() {
			it('jQuery.Color( 255, 250, 245 )', function() {
				var color = jQuery.Color( 255, 250, 245 );

				expect(color.red()).to.equal(255);
				expect(color.green()).to.equal(250);
				expect(color.blue()).to.equal(245);
				expect(color.alpha()).to.equal(1);
			});

			it('jQuery.Color( [255, 250, 245] )', function() {
				var color = jQuery.Color( [255, 250, 245] );

				expect(color.red()).to.equal(255);
				expect(color.green()).to.equal(250);
				expect(color.blue()).to.equal(245);
				expect(color.alpha()).to.equal(1);
			});

			it('jQuery.Color( 255, 250, 245, .45 )', function() {
				var color = jQuery.Color( 255, 250, 245, .45 );

				expect(color.red()).to.equal(255);
				expect(color.green()).to.equal(250);
				expect(color.blue()).to.equal(245);
				expect(color.alpha()).to.equal(0.45);
			});

			it('jQuery.Color( [255, 250, 245, .18] )', function() {
				var color = jQuery.Color( [255, 250, 245, .18] );

				expect(color.red()).to.equal(255);
				expect(color.green()).to.equal(250);
				expect(color.blue()).to.equal(245);
				expect(color.alpha()).to.equal(0.18);
			});
		});

		describe('Parse from element', function() {
			var el = $('<div style="color:red;background:blue;">');

			it('jQuery.Color(el, "color")', function() {
				var color = jQuery.Color(el, "color");

				expect(color.red()).to.equal(255);
				expect(color.green()).to.equal(0);
				expect(color.blue()).to.equal(0);
				expect(color.alpha()).to.equal(1);
			});

			it('jQuery.Color(el, "background-color")', function() {
				var color = jQuery.Color(el, 'background-color');

				expect(color.red()).to.equal(0);
				expect(color.green()).to.equal(0);
				expect(color.blue()).to.equal(255);
				expect(color.alpha()).to.equal(1);
			});

			el.remove();
		});
	});

	describe('Getters/Setters Test', function() {
		it('Setters', function() {
			var color = jQuery.Color("red");
			expect(color.red()).to.equal(255);

			var colorNew = color.red(1);
			expect(colorNew.red()).to.equal(1);
			expect(color.red()).to.equal(255);
		});
	});

	describe('Other Test', function() {
		it('toRgbaString()', function() {
			var color = jQuery.Color("red");
			expect(color.toRgbaString()).to.equal("rgb(255,0,0)");

			var colorNew = color.alpha(.8);
			expect(colorNew.toRgbaString()).to.equal("rgba(255,0,0,0.8)");
		});
	});
});