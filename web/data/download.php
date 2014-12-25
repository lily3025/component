<?php
$data = json_decode($_GET['d']);
$code_path = realpath(dirname(__FILE__) . '/../../code');
$tmp_path = realpath(dirname(__FILE__) . '/../tmp');
$module_path = $tmp_path . "/module";

$now = 'q' . microtime(true) * 10000;

system("rm -rf {$module_path} && mkdir {$module_path}");

$output_list = array();

function getModule($name, $ver, $path, $output_file = '') {
	global $code_path;
	global $module_path;
	global $output_list;

	#模块绝对路径
	$abs_path = realpath($code_path . '/' . $path);

	#检测路径，防止恶意用户通过给 path 加 ../ 访问模块之外的目录
	if(strpos($abs_path, $code_path) !== 0) {
		die("$name($ver) 模块路径错误！");
	}

	#拷贝模块到 tmp，备用
	system("rm -rf {$module_path}/{$path}");
	system("mkdir -p {$module_path}/{$path}");
	system("cp -r {$abs_path}/* {$module_path}/{$path}");

	#没有指定output_file，从模块package.json取默认的output
	if(empty($output_file)) {
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
	}

	#如果之前添加过这个文件，直接返回
	if(false !== array_search($path . '/' . $output_file, $output_list)) {
		return;
	}

	#把 output 的 JS 文件名存起来（后面给模块具名时会用到）
	array_push($output_list, $path . '/' . $output_file);

	#解析依赖
	$output_content = file_get_contents($abs_path . '/' . $output_file);
	$rDep = "/((?:define|require|requirejs)\([^\[\(\{]*\[)([^\]]+)/";

	if(preg_match($rDep, $output_content, $matches)) {
		$deps = explode(',', preg_replace("/['\"]/",'', $matches[2]));

		#依赖的模块，也需要递归处理
		foreach($deps as $dep) {
			$sections = explode('/', trim($dep));

			#不是「module/<模块名>/<模块版本>/<output>」格式的模块，不处理
			if(count($sections) <= 1 || $sections[0] !== 'module') {
				continue;
			}

			$name = $sections[1];
			$ver = $sections[2];
			$path = $name . '/' .$ver;
			$file = $sections[3] . '.js';

			getModule($name, $ver, $path, $file);
		}
	}
}

foreach($data as $item) {
	$name = $item[0];
	$ver  = $item[1];
	$path = $item[2];

	getModule($name, $ver, $path);
}

$rExistId = "/define\(\s*['\"][^\[\('\"\{]+['\"]\s*,?/";
$rDefine = "/define\(/";

foreach($output_list as $js) {
	#require.js 本身不能处理
	if(endsWith($js, "require.js")) {
		continue;
	}

	$module_name = 'module/' . $js;
	$module_name = preg_replace("/\.js$/", "", $module_name);

	$js = $module_path . '/' . $js;

	$content = file_get_contents($js);

	#给匿名模块具名
	if(!preg_match($rExistId, $content, $matches)) {
		$content = preg_replace($rDefine, "define('{$module_name}', ", $content);
		file_put_contents($js, $content);
	}
}

#打包并 302 到下载地址
system("cd {$tmp_path} && zip -rqy {$now}.zip module");
header("location:../tmp/{$now}.zip");

function endsWith($haystack, $needle) {
    return $needle === "" || substr($haystack, -strlen($needle)) === $needle;
}
