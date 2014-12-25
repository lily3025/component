<?php

ini_set("auto_detect_line_endings", true);

function endsWith($haystack, $needle) {
    return $needle === "" || substr($haystack, -strlen($needle)) === $needle;
}

$path = trim($_GET['path']);
$code_path = realpath(dirname(__FILE__) . '/../../code/');
$abs_path = realpath($code_path . '/' . $path);

if(strpos($abs_path, $code_path) !== 0) {
	die('error');
}

$result = array();

$docs = array();
$examples = array();
$tests = array();

$doc_path = $abs_path . '/' . 'docs';
$example_path = $abs_path . '/' . 'examples';
$test_path = $abs_path . '/' . 'tests';

if(is_dir($doc_path)) {
	$doc_list = scandir($doc_path);

	foreach($doc_list as $doc) {
		if(endsWith($doc, '.md')) {
			$fp = fopen($doc_path . '/' . $doc, 'r');
			while($line = fgets($fp)) {
				if(preg_match('/#+(.*)/', $line, $matches)) {
					$title = preg_replace("/[*_-]/", "", $matches[1]);
					array_push($docs, array('name' => $doc, 'title' => $title));
					break;
				}
			}
			fclose($fp);
		}
	}
}

if(is_dir($example_path)) {
	$example_list = scandir($example_path);

	foreach($example_list as $example) {
		if(endsWith($example, '.md')) {
			$fp = fopen($example_path . '/' . $example, 'r');
			while($line = fgets($fp)) {
				if(preg_match('/#+(.*)/', $line, $matches)) {
					$title = preg_replace("/[*_-]/", "", $matches[1]);
					array_push($examples, array('name' => $example, 'title' => $title));
					break;
				}
			}
			fclose($fp);
		}
	}
}

if(is_dir($test_path)) {
	$test_list = scandir($test_path);

	foreach($test_list as $test) {
		if(endsWith($test, 'spec.js')) {
			array_push($tests, $test);
		}
	}
}

$result = array('docs' => $docs, 'examples' => $examples, 'tests' => $tests);

$data = json_decode(file_get_contents($abs_path . '/package.json'), true);
$result['group'] = $data['keywords'][0];

echo json_encode($result);

