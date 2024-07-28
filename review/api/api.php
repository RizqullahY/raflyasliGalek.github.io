<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
   $filename = 'text.txt';

   if (file_exists($filename)) {
      $data = file_get_contents($filename);
      echo json_encode(['data' => $data]);
   } else {
      echo json_encode(['error' => 'File not found']);
   }
} else {
   echo json_encode(['error' => 'Invalid request method']);
}
?>
