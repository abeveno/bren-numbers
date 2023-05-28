<?php

if ($handle = opendir('.')) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".." && $entry != 'index.php') {
            echo str_replace(Array('.php', '.png', '-'),Array(''),$entry).": 'assets/images/$entry',\n";
        }
    }
    closedir($handle);
}