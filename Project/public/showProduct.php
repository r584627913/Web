<?php
header("Access-Control-Allow-Origin: *");
require_once 'mysql.php';

try {
    $conn = open_db();
    $sql = "SELECT * FROM `product`";
    $result = $conn->query($sql);
    if ($result) {
        $msg = json_encode($result->fetch_assoc());
        // $msg = $result;
    } else {
        $msg = "ERROR";
    }
} catch (Exception $e) {
    $msg = $e->getMessage();
}
echo $msg;
return $msg;
