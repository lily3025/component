// based on 14c3f9a11f

define(['{{module}}'], function(_tmp) {

	describe('Test Utility', function() {

		it('#750 - Return _ instance.', function() {
			var instance = _([]);
			expect(_(instance) === instance).to.be.ok;
			expect(new _(instance) === instance).to.be.ok;
		});

		describe('identity', function() {
			it('moe is the same as his identity', function() {
				var moe = {name : 'moe'};
				expect(_.identity(moe)).to.equal(moe);
			});
		});

		describe('random', function() {

			var array = _.range(1000);
			var min = Math.pow(2, 31);
			var max = Math.pow(2, 62);

			it('should produce a random number greater than or equal to the minimum number', function() {
				expect(_.every(array, function() {
					return _.random(min, max) >= min;
				})).to.be.ok;
			});

			it('should produce a random number when passed `Number.MAX_VALUE`', function() {
				expect(_.some(array, function() {
					return _.random(Number.MAX_VALUE) > 0;
				})).to.be.ok;
			});

		});

		describe('uniqueId', function() {
			it('can generate a globally-unique stream of ids', function() {
				var ids = [], i = 0;
				while(i++ < 100) ids.push(_.uniqueId());
				expect(_.uniq(ids).length).to.equal(ids.length);
			});
		});

		describe('times', function() {

			it('is 0 indexed', function() {
				var vals = [];
				_.times(3, function (i) { vals.push(i); });
				expect(_.isEqual(vals, [0,1,2])).to.be.ok;
			});

			it('collects return values', function() {
				var vals = [];
				_(3).times(function(i) { vals.push(i); });
				expect(_.isEqual([0, 1, 2], _.times(3, function(i) { return i; }))).to.be.ok;
			});

			it('can use invalid number', function() {
				expect(_.times(0, _.identity)).to.eql([]);
				expect(_.times(-1, _.identity)).to.eql([]);
				expect(_.times(parseFloat('-Infinity'), _.identity)).to.eql([]);
			});
		});

		describe('mixin', function() {

			_.mixin({
				myReverse: function(string) {
					return string.split('').reverse().join('');
				}
			});

			it('mixed in a function to _', function() {
				expect(_.myReverse('panacea')).to.equal('aecanap');
			});

			it('mixed in a function to the OOP wrapper', function() {
				expect(_('champ').myReverse()).to.equal('pmahc');
			});

		});

		describe('escape', function() {
			it('special characters should be escaped', function() {
				expect(_.escape("Curly & Moe")).to.equal("Curly &amp; Moe");
				expect(_.escape('<a href="http://moe.com">Curly & Moe\'s</a>')).to.equal('&lt;a href=&quot;http://moe.com&quot;&gt;Curly &amp; Moe&#x27;s&lt;/a&gt;');
				expect(_.escape("Curly &amp; Moe")).to.equal("Curly &amp;amp; Moe");
				expect(_.escape(null)).to.equal('');
			});
		});

		describe('unescape', function() {
			it('special characters should be unescaped', function() {
				var string = "Curly & Moe";
				expect(_.unescape("Curly &amp; Moe")).to.equal(string);
				expect(_.unescape('&lt;a href=&quot;http://moe.com&quot;&gt;Curly &amp; Moe&#x27;s&lt;/a&gt;')).to.equal('<a href="http://moe.com">Curly & Moe\'s</a>');
				expect(_.unescape("Curly &amp;amp; Moe")).to.equal("Curly &amp; Moe");
				expect(_.unescape(null)).to.equal('');
				expect(_.unescape(_.escape(string))).to.equal(string);
			});
		});
	});

	describe('AMD Support', function() {
		it('Support used as an AMD module', function() {
			require(['underscore'], function(_) {
				expect(_.version).to.not.equal(undefined);
				expect(_.chain).to.be.a('function');
				_.each([1, 2, 3], function(num, i) {
					expect(num).to.equal(i + 1);
				});
			});
		});

		it('Support used as a global object', function() {
			require(['underscore'], function(_tmp) {
				expect(_).to.equal(_tmp);
				expect(_.version).to.not.equal(undefined);
				expect(_.chain).to.be.a('function');
				_.each([1, 2, 3], function(num, i) {
					expect(num).to.equal(i + 1);
				});
			});
		});
	})

});

