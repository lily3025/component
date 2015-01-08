```javascript
var support = {webp: undefined};

(function() {
    var image = new Image();
    image.onload = function() {
        support.webp = true;
        image = null;
    }
    image.onerror = function() {
        support.webp = false;
        image = null;
    }
    image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAgA0JaQAA3AA/vv9UAA=';
})();
```