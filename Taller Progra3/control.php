<?php

$channelsJSON = file_get_contents('doc\info.json');
$channelsPHP = json_decode($channelsJSON,true);

for ($i = 0; $i <sizeof($channelsPHP); $i++) {
   // echo( "\n".$channelsPHP[$i]["code"] ."\t ". $channelsPHP[$i]["name"] );
}

$s = '<table border="1">';
foreach ( $channelsPHP as $r ) {
        $s .= '<tr>';
        foreach ( $r as $v ) {
                $s .= '<td>'.$v.'</td>';
        }
        $s .= '</tr>';
}
$s .= '</table>';
echo $s;

