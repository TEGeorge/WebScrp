<?php
$dir = opendir('../');
if (!$dir) { echo "Error: couldn't open the directory."; exit; }

while ($name=readdir($dir))
  { if (!is_dir($name) && !is_executable($name))
    echo "$name,"; }

echo "-\r\n";

?>
