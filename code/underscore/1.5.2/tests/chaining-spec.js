// based on 3a6b32f5b9

define(['{{module}}'], function(_tmp) {
	describe('Test Chaining', function() {
		describe('map/flatten/reduce', function() {
			it('counted all the letters in the song', function() {
				var lyrics = [
					"I'm a lumberjack and I'm okay",
					"I sleep all night and I work all day",
					"He's a lumberjack and he's okay",
					"He sleeps all night and he works all day"
				];
				var counts = _(lyrics).chain()
					.map(function(line) { return line.split(''); })
					.flatten()
					.reduce(function(hash, l) {
						hash[l] = hash[l] || 0;
						hash[l]++;
						return hash;
					}, {}).value();
				expect(counts.a == 16 && counts.e == 10).to.be.ok;
			});
		});

		describe('select/reject/sortBy', function(){
			it('filtered and reversed the numbers', function() {
				var numbers = [1,2,3,4,5,6,7,8,9,10];
				numbers = _(numbers).chain().select(function(n) {
					return n % 2 === 0;
				}).reject(function(n) {
						return n % 4 === 0;
					}).sortBy(function(n) {
						return -n;
					}).value();
				expect(numbers.join(', ')).to.equal('10, 6, 2');
			});
		});

		describe('select/reject/sortBy in functional style', function() {
			it('filtered and reversed the numbers', function() {
				var numbers = [1,2,3,4,5,6,7,8,9,10];
				numbers = _.chain(numbers).select(function(n) {
					return n % 2 === 0;
				}).reject(function(n) {
						return n % 4 === 0;
					}).sortBy(function(n) {
						return -n;
					}).value();
				expect(numbers.join(', ')).to.equal('10, 6, 2');
			});
		});

		describe('reverse/concat/unshift/pop/map', function() {
			it('can chain together array functions.', function() {
				var numbers = [1,2,3,4,5];
				numbers = _(numbers).chain()
					.reverse()
					.concat([5, 5, 5])
					.unshift(17)
					.pop()
					.map(function(n){ return n * 2; })
					.value();
				expect(numbers.join(', ')).to.equal('34, 10, 8, 6, 4, 2, 10, 10');
			})
		});

		it('chaining works in small stages', function() {
			var o = _([1, 2, 3, 4]).chain();
			expect(o.filter(function(i) { return i < 3; }).value()).to.eql([1, 2]);
			expect(o.filter(function(i) { return i > 2; }).value()).to.eql([3, 4]);
		});
	});
});