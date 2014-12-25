define(function() {
	function sortVersion(o1, o2) {
		var v1 = o1[0],
			v2 = o2[0],
			arr1 = v1.split('.'),
			arr2 = v2.split('.'),
			len1 = arr1.length,
			len2 = arr2.length,
			len = Math.max(len1, len2);

		for(var i = 0; i < len; i++) {
			//位数不够，0来凑
			if(typeof arr1[i] === 'undefined') {
				arr1[i] = 0;
			}

			if(typeof arr2[i] === 'undefined') {
				arr2[i] = 0;
			}

			var n1 = parseInt(arr1[i], 10),
				n2 = parseInt(arr2[i], 10);
			if(n1 > n2) {
				return -1;
			} else if(n1 < n2) {
				return 1;
			}
		}

		return 0;
	};

	function format(data) {
		var ret = {};

		for(var group in data) {
			var old_modules = data[group],
				new_modules = [],
				map_modules = {};

			for(var i = 0; i < old_modules.length; i++) {
				var old_module = old_modules[i];

				if(old_module.path && old_module.data){
					var path = old_module.path.replace(/.*\/code\//i, ''),
						vers = old_module.data.version,
						name = old_module.data.name,
						desc = old_module.data.description || '';

					var module;

					if(map_modules[name]) {
						module = map_modules[name];
					} else {
						module = {};
						module.name = name;
						module.versions = [];
						
						new_modules.push(module);
						map_modules[name] = module;
					}

					module.versions.push([vers, path, desc, old_module]);
					module.versions.sort(sortVersion);
				} else {
					continue;
				}

			}

			ret[group] = new_modules;
		}

		return ret;
	};

	return function(callback) {
		var xhr = $.get('data/modules.php', null, null, 'json');
		xhr.success(function(data) {
			callback(format(data));
		}); 
	};
});