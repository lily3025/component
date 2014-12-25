define(['module/cookie/1.0.2/cookie'], function(Cookie) {
	var Cart = {
			_key  : 'qiwoo_cart',

			_items : [],
			
			_addItem : function(name, ver, path) {
				var flag = false;
				for(var i = 0; i < this._items.length; i++) {
					if(name == this._items[i][0]) {
						this._items[i] = [name, ver, path];
						flag = true;
						break;
					}
				}
				if(!flag) {
					this._items.push([name, ver, path]);
				}

				Cookie.set(this._key, JSON.stringify(this.getItems()), {'path' : '/', 'expires' : 24 * 3600 * 1000});
			},

			_removeItem : function(name, ver) {
				var newItem = [];
				for(var i = 0; i < this._items.length; i++) {
					var item = this._items[i];
					if(name == item[0] || ver == item[1]) {
						continue;
					}

					newItem.push(item);
				}

				this._items = newItem;

				Cookie.set(this._key, JSON.stringify(this.getItems()), {'path' : '/', 'expires' : 24 * 3600 * 1000});
			},

			_empty : function() {
				this._items = [];
				Cookie.remove(this._key, {'path' : '/'});
			},

			_bindEvent : function() {
				var instance = this,
					timer = null;

				$('body').on('click', 'a.add-to-cart', function(e) {
					var el   = $(this),
						name = el.data('name'),
						ver  = el.data('ver'),
						path = el.data('path');

					instance._addItem(name, ver, path);

					if(timer) {
						clearTimeout(timer);
						timer = null;
					} else {
						$('.dropdown .toggle').css('background', '#333');
						$('.dropdown .menu').fadeIn(500);
					}

					timer = setTimeout(function() {
							$('.dropdown .menu').slideUp(300, function() {
									$('.dropdown .menu').css('display', '');
									$('.dropdown .toggle').css('background', '');

									timer = null;
								});
						}, 3500);

					$('.dropdown').mouseenter(function() {
						if(timer) {
							clearTimeout(timer);
							timer = null;
							
							$('.dropdown .menu').css('display', '');
							$('.dropdown .toggle').css('background', '');
						}
					});

					$(instance).trigger('change', {items : instance.getItems()});
					
					return false;
				}).on('click', 'a.remove-from-cart, a.remove-from-cart2', function(e) {
					var el   = $(this),
						name = el.data('name'),
						ver  = el.data('ver');

					instance._removeItem(name, ver);
					$(instance).trigger('change', {items : instance.getItems()});

					return false;
				}).on('click', '#cart .download', function(e) {
					var items = instance.getItems();

					location.href = 'download.html?d=' + encodeURIComponent(JSON.stringify(items));
					return false;
				}).on('click', '#cart .empty', function(e) {
					instance._empty();
					$(instance).trigger('change', {items : []});
					return false;
				});
			},

			inCart : function(name, ver) {
				for(var i = 0; i < this._items.length; i++) {
					var item = this._items[i];
					if(item[0] == name && item[1] == ver) {
						return true;
					}
				}

				return false;
			},

			getItems : function() {
				return this._items;
			},

			init : function() {
				this._bindEvent();
				try {
					this._items = JSON.parse(Cookie.get(this._key));
				} catch(e) { }
			}
		};

	return Cart;
});
