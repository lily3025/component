define(['{{module}}'], function(moment){
	describe('demo', function(){
		describe('diff', function(){
			it('test diff demo', function(){
				expect(moment(1000).diff(0)).to.be(1000);
			});
			
		});
	});
});