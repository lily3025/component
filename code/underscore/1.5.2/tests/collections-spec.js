// based on 27311a90e2

define(['{{module}}'], function(_tmp) {
	describe('Test Collections', function() {
		describe('each', function() {

			it('each iterators provide value and iteration count', function() {
				_.each([1, 2, 3], function(num, i) {
					expect(num).to.equal(i + 1);
				});
			});

			it('context object property accessed', function() {
				var answers = [];
				_.each([1, 2, 3], function(num){
					answers.push(num * this.multiplier);
				}, {multiplier : 5});
				expect(answers.join(', ')).to.equal('5, 10, 15');
			});

			it('aliased as "forEach"', function() {
				var answers = [];
				_.forEach([1, 2, 3], function(num){
					answers.push(num);
				});
				expect(answers.join(', ')).to.equal('1, 2, 3');
			});

			it('iterating over objects works, and ignores the object prototype.', function() {
				var answers = [];
				var obj = {one : 1, two : 2, three : 3};
				obj.constructor.prototype.four = 4;

				_.each(obj, function(value, key){
					answers.push(key);
				});
				expect(answers.join(", ")).to.equal('one, two, three');

				delete obj.constructor.prototype.four;
			});

			it('can reference the original collection from inside the iterator', function() {
				var answer = null;
				_.each([1, 2, 3], function(num, index, arr){
					if (_.include(arr, num)) {
						answer = true;
					}
				});
				expect(answer).to.be.true;
			});

			it('handles a null properly', function() {
				var answers = 0;
				_.each(null, function(){
					++answers;
				});
				expect(answers).to.equal(0);
			});
		});

		describe('map', function() {

			it('doubled numbers', function() {
				var doubled = _.map([1, 2, 3], function(num){
					return num * 2;
				});
				expect(doubled.join(', ')).to.equal('2, 4, 6');
			});

			it('aliased as "collect"', function() {
				var doubled = _.collect([1, 2, 3], function(num){
					return num * 2;
				});
				expect(doubled.join(', ')).to.equal('2, 4, 6');
			});

			it('tripled numbers with context', function() {
				var tripled = _.map([1, 2, 3], function(num){
					return num * this.multiplier;
				}, {multiplier : 3});
				expect(tripled.join(', ')).to.equal('3, 6, 9');
			});


			it('OO-style doubled numbers', function() {
				var doubled = _([1, 2, 3]).map(function(num){
					return num * 2;
				});
				expect(doubled.join(', ')).to.equal('2, 4, 6');
			});

			$('body').append('<div id="map-test"><div id="id1"></div><div id="id2"></div></div>');

			if (document.querySelectorAll) {
				it('Can use collection methods on NodeLists.', function() {
					var ids = _.map(document.querySelectorAll('#map-test *'), function(n){ return n.id; });
					expect(ids).to.eql(['id1', 'id2']);
				});
			}

			it('Can use collection methods on jQuery Array-likes.', function() {
				var ids = _.map($('#map-test').children(), function(n){
					return n.id;
				});
				expect(ids).to.eql(['id1', 'id2']);
			});

			$('body').append('<img id="chart_image" />');
			it('can use collection methods on HTMLCollections', function() {
				var ids = _.map(document.images, function(n){
					return n.id;
				});
				expect(ids[0] == 'chart_image').to.be.ok;
			});

			it('handles a null properly', function() {
				var ifnull = _.map(null, function() {
					"use strict";

				});
				expect(_.isArray(ifnull) && ifnull.length === 0).to.be.ok;
			});
		});

		describe("reduce", function() {

			it('can sum up an array', function() {
				var sum = _.reduce([1, 2, 3], function(sum, num){ return sum + num; }, 0);
				expect(sum).to.equal(6);
			});

			it('can reduce with a context object', function() {
				var context = {multiplier : 3};
				var sum = _.reduce([1, 2, 3], function(sum, num){ return sum + num * this.multiplier; }, 0, context);
				expect(sum).to.equal(18);
			});

			it('aliased as "inject"', function() {
				var sum = _.inject([1, 2, 3], function(sum, num){ return sum + num; }, 0);
				expect(sum).to.equal(6);
			});

			it('OO-style reduce', function() {
				var sum = _([1, 2, 3]).reduce(function(sum, num){ return sum + num; }, 0);
				expect(sum).to.equal(6);
			});

			it('default initial value', function() {
				var sum = _.reduce([1, 2, 3], function(sum, num){ return sum + num; });
				expect(sum).to.equal(6);
			});

			it('can reduce via multiplication', function() {
				var prod = _.reduce([1, 2, 3, 4], function(prod, num){ return prod * num; });
				expect(prod).to.equal(24);
			});

			it('handles a null (without initial value) properly', function() {
				var ifnull;
				try {
					_.reduce(null, function(){});
				} catch (ex) {
					ifnull = ex;
				}
				expect(ifnull).to.be.an(TypeError);
			});

			it('handles a null (with initial value) properly', function() {
				expect(_.reduce(null, function(){}, 138)).to.equal(138);
			});

			it('undefined can be passed as a special case', function() {
				expect(_.reduce([], function(){}, undefined), undefined).to.be.undefined;
			});

			it('throws an error for empty arrays with no initial value', function() {
				expect(function() { _.reduce([], function(){}); }).to.throwTypeError;
			});

		});

	});
});
