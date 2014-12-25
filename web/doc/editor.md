<link rel=stylesheet href="css/codemirror.css">

<style>
.CodeMirror {
	height: 480px;
}
#mirror {
	border: solid 1px #333;
	border-left: 0;
	height: 480px;
	padding: 0 5px 0 5px;
	overflow: auto;
}
</style>

##### Markdown 在线编辑

<div class="row content-wrap">
	<div class="col-6">
		<textarea id="editor" mode="gfm">
GitHub Flavored Markdown
========================

Everything from markdown plus GFM features:

## URL autolinking

Underscores_are_allowed_between_words.

## Fenced code blocks (and syntax highlighting)

```javascript
for (var i = 0; i < items.length; i++) {
    console.log(items[i], i); // log them
}
```

## Task Lists

- [ ] Incomplete task list item
- [x] **Completed** task list item

See http://github.github.com/github-flavored-markdown/.
		</textarea>
	</div>
	<div class="col-6">
		<div id="mirror"></div>
	</div>
</div>

See http://github.github.com/github-flavored-markdown/

<script>
require(['js/lib/codemirror.js', 'js/lib/marked', 'js/util/showdoc'],function(_, marked, getDoc){
	var editor = $('#editor')[0].editor;
	function parse(){
		var content = editor.getTextArea().value;
		getDoc('md:' + content, function(content) {
    		$('#mirror').html(content);
    	});	
	}
	editor.on('change', parse);
	parse();
});
</script>