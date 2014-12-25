define(['{{module}}'], function() {
	describe('Test template', function() {

		var templateSettings;

		before(function() {
			templateSettings = _.clone(_.templateSettings);
		});

		describe('template', function() {
			it('can do basic attribute interpolation', function() {
				var basicTemplate = _.template("<%= thing %> is gettin' on my noives!");
				var result = basicTemplate({thing : 'This'});
				expect(result).to.equal("This is gettin' on my noives!");
			});

			it('can handel sans semicolon', function() {
				var sansSemicolonTemplate = _.template("A <% this %> B");
				expect(sansSemicolonTemplate()).to.equal("A  B");
			});

			it('can handel back slash', function() {
				var backslashTemplate = _.template("<%= thing %> is \\ridanculous");
				expect(backslashTemplate({thing: 'This'})).to.equal("This is \\ridanculous");
			});

			it('can handle slash escapes in interpolations.', function() {
				var escapeTemplate = _.template('<%= a ? "checked=\\"checked\\"" : "" %>');
				expect(escapeTemplate({a: true})).to.equal('checked="checked"');
			});

			it('can run arbitrary javascript in templates', function() {
				var fancyTemplate = _.template("<ul><% \
      for (var key in people) { \
    %><li><%= people[key] %></li><% } %></ul>");
				var result = fancyTemplate({people : {moe : "Moe", larry : "Larry", curly : "Curly"}});
				expect(result).to.equal("<ul><li>Moe</li><li>Larry</li><li>Curly</li></ul>");
			});

			it('Can use escaped characters (e.g. \\n) in Javascript', function() {
				var escapedCharsInJavascriptTemplate = _.template("<ul><% _.each(numbers.split('\\n'), function(item) { %><li><%= item %></li><% }) %></ul>");
				var result = escapedCharsInJavascriptTemplate({numbers: "one\ntwo\nthree\nfour"});
				expect(result).to.be.equal("<ul><li>one</li><li>two</li><li>three</li><li>four</li></ul>");
			});

			it('namespace collision template', function() {
				var namespaceCollisionTemplate = _.template("<%= pageCount %> <%= thumbnails[pageCount] %> <% _.each(thumbnails, function(p) { %><div class=\"thumbnail\" rel=\"<%= p %>\"></div><% }); %>");
				var result = namespaceCollisionTemplate({
					pageCount: 3,
					thumbnails: {
						1: "p1-thumbnail.gif",
						2: "p2-thumbnail.gif",
						3: "p3-thumbnail.gif"
					}
				});
				expect(result).to.equal("3 p3-thumbnail.gif <div class=\"thumbnail\" rel=\"p1-thumbnail.gif\"></div><div class=\"thumbnail\" rel=\"p2-thumbnail.gif\"></div><div class=\"thumbnail\" rel=\"p3-thumbnail.gif\"></div>");
			});

			it('no interpolate template', function() {
				var noInterpolateTemplate = _.template("<div><p>Just some text. Hey, I know this is silly but it aids consistency.</p></div>");
				var result = noInterpolateTemplate();
				expect(result).to.equal("<div><p>Just some text. Hey, I know this is silly but it aids consistency.</p></div>");
			});

			it('can handle quotations', function() {
				var quoteTemplate = _.template("It's its, not it's");
				expect(quoteTemplate({})).to.equal("It's its, not it's");
			});

			it('quote in statement and body', function() {
				var quoteInStatementAndBody = _.template("<%\
      if(foo == 'bar'){ \
    %>Statement quotes and 'quotes'.<% } %>");
				expect(quoteInStatementAndBody({foo: "bar"})).to.equal("Statement quotes and 'quotes'.");
			});

			it('with new lines and tabs', function() {
				var withNewlinesAndTabs = _.template('This\n\t\tis: <%= x %>.\n\tok.\nend.');
				expect(withNewlinesAndTabs({x: 'that'})).to.equal('This\n\t\tis: that.\n\tok.\nend.');
			});

			it('can escape html special character', function() {
				var template = _.template("<i><%- value %></i>");
				var result = template({value: "<script>"});
				expect(result).to.equal('<i>&lt;script&gt;</i>');
			});

			it('can handel object', function() {
				var stooge = {
					name: "Moe",
					template: _.template("I'm <%= this.name %>")
				};
				expect(stooge.template()).to.equal("I'm Moe");
			});

			it('template from html', function() {
				// check $.browser first !
				if ($.browser && !$.browser.msie) {
					var fromHTML = _.template($('#template').html());
					expect(fromHTML({data : 12345}).replace(/\s/g, '')).to.equal('<li>24690</li>');
				}
			});
		});

		describe('custom setting 1', function() {
			before(function() {
				_.templateSettings = {
					evaluate    : /\{\{([\s\S]+?)\}\}/g,
					interpolate : /\{\{=([\s\S]+?)\}\}/g
				};
			});

			after(function() {
				_.templateSettings = _.clone(templateSettings);
			});

			it('can run arbitrary javascript in templates', function() {

				var custom = _.template("<ul>{{ for (var key in people) { }}<li>{{= people[key] }}</li>{{ } }}</ul>");
				var result = custom({people : {moe : "Moe", larry : "Larry", curly : "Curly"}});
				expect(result).to.equal("<ul><li>Moe</li><li>Larry</li><li>Curly</li></ul>");
			});

			it('can handle quotations', function() {
				var customQuote = _.template("It's its, not it's");
				expect(customQuote({})).to.equal("It's its, not it's");
			});

			it("Statement quotes and 'quotes'.", function() {
				var quoteInStatementAndBody = _.template("{{ if(foo == 'bar'){ }}Statement quotes and 'quotes'.{{ } }}");
				expect(quoteInStatementAndBody({foo: "bar"})).to.equal("Statement quotes and 'quotes'.");
			});
		});

		describe('custom setting 2', function() {
			before(function() {
				_.templateSettings = {
					evaluate    : /<\?([\s\S]+?)\?>/g,
					interpolate : /<\?=([\s\S]+?)\?>/g
				};
			});

			after(function() {
				_.templateSettings = _.clone(templateSettings);
			});

			it('can run arbitrary javascript in templates', function() {
				var customWithSpecialChars = _.template("<ul><? for (var key in people) { ?><li><?= people[key] ?></li><? } ?></ul>");
				var result = customWithSpecialChars({people : {moe : "Moe", larry : "Larry", curly : "Curly"}});
				expect(result).to.equal("<ul><li>Moe</li><li>Larry</li><li>Curly</li></ul>");
			});

			it('can handle quotations with custom',function() {
				var customWithSpecialCharsQuote = _.template("It's its, not it's");
				expect(customWithSpecialCharsQuote({})).to.equal("It's its, not it's");
			});

			it("Statement quotes and 'quotes'.", function() {
				var quoteInStatementAndBody = _.template("<? if(foo == 'bar'){ ?>Statement quotes and 'quotes'.<? } ?>");
				expect(quoteInStatementAndBody({foo: "bar"})).to.equal("Statement quotes and 'quotes'.");
			});
		});

		describe('custom setting 3', function() {
			before(function() {
				_.templateSettings = {
					interpolate : /\{\{(.+?)\}\}/g
				};
			});

			after(function() {
				_.templateSettings = _.clone(templateSettings);
			});

			it("can mimic mustache.js", function() {
				var mustache = _.template("Hello {{planet}}!");
				expect(mustache({planet : "World"})).to.equal("Hello World!");
			});

			it('can handle missing escape and evaluate settings', function() {
				var templateWithNull = _.template("a null undefined {{planet}}");
				expect(templateWithNull({planet : "world"})).to.equal("a null undefined world");
			});
		});

		describe('other', function() {
			it('_.template provides the generated function source, when a SyntaxError occurs', function() {
				try {
					_.template('<b><%= if x %></b>');
				} catch (ex) {
					var source = ex.source;
				}
				expect(source).to.match(/__p/);
			});

			it('_.template handles \\u2028 & \\u2029', function() {
				var tmpl = _.template('<p>\u2028<%= "\\u2028\\u2029" %>\u2029</p>');
				expect(tmpl()).to.equal('<p>\u2028\u2028\u2029\u2029</p>');
			});

			it('result calls functions and returns primitives', function() {
				var obj = {w: '', x: 'x', y: function(){ return this.x; }};
				expect(_.result(obj, 'w')).to.equal('');
				expect(_.result(obj, 'x')).to.equal('x');
				expect(_.result(obj, 'y')).to.equal('x');
				expect(_.result(obj, 'z')).to.equal(undefined);
				expect(_.result(null, 'x')).to.equal(undefined);
			});

			it('_.templateSettings.variable', function() {
				var s = '<%=data.x%>';
				var data = {x: 'x'};
				expect(_.template(s, data, {variable: 'data'})).to.equal('x');
				_.templateSettings.variable = 'data';
				expect(_.template(s)(data)).to.equal('x');
				_.templateSettings = _.clone(templateSettings);
			});

			it('#547 - _.templateSettings is unchanged by custom settings.', function() {
				expect(_.templateSettings.variable).to.not.be.ok;
				_.template('', {}, {variable: 'x'});
				expect(_.templateSettings.variable).to.not.be.ok;
			});

			it('#556 - undefined template variables.', function() {
				var template = _.template('<%=x%>');
				expect(template({x: null})).to.equal('');
				expect(template({x: undefined})).to.equal('');

				var templateEscaped = _.template('<%-x%>');
				expect(templateEscaped({x: null})).to.equal('');
				expect(templateEscaped({x: undefined})).to.equal('');

				var templateWithProperty = _.template('<%=x.foo%>');
				expect(templateWithProperty({x: {} })).to.equal('');
				expect(templateWithProperty({x: {} })).to.equal('');

				var templateWithPropertyEscaped = _.template('<%-x.foo%>');
				expect(templateWithPropertyEscaped({x: {} })).to.equal('');
				expect(templateWithPropertyEscaped({x: {} })).to.equal('');
			});

			it('interpolate evaluates code only once.', function() {
				var count = 0;
				var template = _.template('<%= f() %>');
				template({f: function(){ expect(count++).to.not.be.ok; }});

				var countEscaped = 0;
				var templateEscaped = _.template('<%- f() %>');
				templateEscaped({f: function(){ expect(countEscaped++).to.not.be.ok; }});
			});

			it('#746 - _.template settings are not modified.', function() {
				var settings = {};
				_.template('', null, settings);
				expect(settings).to.eql({});
			});

			it('#779 - delimeters are applied to unescaped text.', function() {
				var template = _.template('<<\nx\n>>', null, {evaluate: /<<(.*?)>>/g});
				expect(template()).to.equal('<<\nx\n>>');
			});
		});
	});
});