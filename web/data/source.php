<?php

function endsWith($haystack, $needle) {
    return $needle === "" || substr($haystack, -strlen($needle)) === $needle;
}

$file = trim($_GET['file']);
$code_path = realpath(dirname(__FILE__) . '/../../code/');
$abs_path = realpath($code_path . '/' . $file);

if(strpos($abs_path, $code_path) !== 0 || !endsWith($abs_path, '.md')) {
	die('error');
}

$content = file_get_contents($abs_path);
$content = preg_replace('/^```.*$\n/m', "", $content);

echo "```html\n";
echo $content;
echo "```";