<?php
$file = __DIR__ . '/../index.html';

$time = filemtime($file);

echo json_encode([
    "timestamp" => date("d.m.Y / H:i:s", $time)
]);
