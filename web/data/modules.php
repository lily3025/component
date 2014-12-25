<?php
ini_set('display_errors', false);
date_default_timezone_set('PRC');

$base_dir = '../../code';

$cacheFn = '/tmp/qiwoo/modules.cache.php';
$checkSum = '';

$output = array();

function checkCache(&$output) {
	global $base_dir, $cacheFn, $checkSum;

	@$cache = include($cacheFn);

	exec("tree -a {$base_dir}", $result);
	$checkSum = md5(implode('\n', $result));
	if ($cache && $cache['checksum'] == $checkSum) {
		$output = $cache['data'];
		return true;
	}
	return false;
}
if (checkCache($output)) {
	die(json_encode($output));
}

$output = array();
function isModule($path) {
	return is_file($path . '/package.json');
}

function readPackage($path) {
	$ret = array();
	$data = json_decode(file_get_contents($path . '/package.json'), true);
	$ret['data'] = $data;
	$ret['path'] = $path;
	if(empty($data) || empty($data['keywords'])) {
		$ret['category'] = 'unknown';
	} else {
		$ret['category'] = $data['keywords'][0];
	}
	return $ret;
}

function getModules($new_path) {
	$category = '';

	$items = array();
	if(isModule($new_path)) {
		$item = readPackage($new_path);
		$category = $item['category'];
		array_push($items, $item);
	} else {
		$new_list = scandir($new_path);
		$items = array();
		foreach($new_list as $new_folder) {
			if(0 !== strpos($new_folder, '.')) {
				$new_new_path = $new_path . '/' . $new_folder;
				if(isModule($new_new_path)) {
					$item = readPackage($new_new_path);
					$category = $item['category'];
					array_push($items, $item);
				}
			}
		}
	}

	return array('items' => $items, 'category' => $category);
}


$list = scandir($base_dir);
foreach($list as $folder) {
	if(0 !== strpos($folder, '.')) {
		$data = getModules($base_dir . '/' . $folder);
		$category = $data['category'];
		$modules = $data['items'];
		if(!empty($modules)) {
			if(empty($output[$category])) {
				$output[$category] = array();
			}

			$output[$category] = array_merge($output[$category], $modules);
		}
	}
}

//write cache
$cache = array(
	'time' => date('Y-m-d H:i:s'),
	'checksum' => $checkSum,
	'data' => $output
);
$content = "<?php\nreturn " . var_export($cache, true) . ';';
@file_put_contents($cacheFn, $content);

echo ' ' . json_encode($output);