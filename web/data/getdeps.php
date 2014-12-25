<?php
$name = trim($_GET['name']);
$ver = trim($_GET['ver']);
$path = trim($_GET['path']);

$code_path = realpath(dirname(__FILE__) . '/../../code');

$output_list = array();

function getModuleByPath($path) {
	global $code_path;
	global $output_list;

	#模块绝对路径
	$full_output_file = str_replace("module/", "", $path);
	$full_output_file = trim($full_output_file) . '.js';

	#如果之前添加过这个模块，直接返回
	if(false !== array_search($full_output_file, $output_list)) {
		return;
	}

	#解析依赖
	$abs_output_file = $code_path . '/' . $full_output_file;
	if(!is_file($abs_output_file)) {
		return;
	}

	#把模块路径存到 list 中
	array_push($output_list, $full_output_file);

	$output_content = file_get_contents($abs_output_file);
	$rDep = "/((?:define|require|requirejs)\([^\[\(\{]*\[)([^\]]+)/";
	
	if(preg_match($rDep, $output_content, $matches)) {
		$deps = explode(',', preg_replace("/['\"]/",'', $matches[2]));

		#依赖的模块，也需要递归处理
		foreach($deps as $dep) {
			getModuleByPath($dep);
		}
	}
}

function getModule($name, $ver, $path) {
	global $code_path;
	global $output_list;

	#模块绝对路径
	$abs_path = realpath($code_path . '/' . $path);

	#检测路径，防止恶意用户通过给 path 加 ../ 访问模块之外的目录
	if(strpos($abs_path, $code_path) !== 0) {
		die("$name($ver) 模块路径错误！");
	}

	#读取模块 package.json 信息
	$package_file = $abs_path . '/package.json';

	if(!is_file($package_file)) {
		die("$name($ver) 模块的 package.json 不存在！");
	}

	#从 package.json 中，找到模块 output 的 JS 文件名
	$package_info = json_decode(file_get_contents($package_file), true);
	$output_file = trim($package_info['output']);

	if(empty($output_file)) {
		die("$name($ver) 模块的 output 不存在！");
	}

	$full_output_file = $path . '/' . $output_file;

	#如果之前添加过这个模块，直接返回
	if(false !== array_search($full_output_file, $output_list)) {
		return;
	}
	
	#解析依赖
	$abs_output_file = $code_path . '/' . $full_output_file;
	if(!is_file($abs_output_file)) {
		return;
	}

	#把模块路径存到 list 中
	array_push($output_list, $full_output_file);

	$output_content = file_get_contents($abs_output_file);
	$rDep = "/((?:define|require|requirejs)\([^\[\(\{]*\[)([^\]]+)/";
	
	if(preg_match($rDep, $output_content, $matches)) {
		$deps = explode(',', preg_replace("/['\"]/",'', $matches[2]));

		#依赖的模块，也需要递归处理
		foreach($deps as $dep) {
			getModuleByPath($dep);
		}
	}
}

getModule($name, $ver, $path);

echo json_encode($output_list);
