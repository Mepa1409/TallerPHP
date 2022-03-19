<?php

$channelsJSON = file_get_contents('doc\info.json');
$channelsPHP = json_decode($channelsJSON,true);

var_dump($channelsPHP[0]);

