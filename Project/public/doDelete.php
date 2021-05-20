<?php
header("Access-Control-Allow-Origin: *");
require_once 'mysql.php';

$product_id = $_POST['product_id'];
$msg = "";
try {
    $conn = open_db();
    $sql = "DELETE FROM `product`";
    $sql .= "WHERE `product_id` IN (" . $product_id . ")";
    $result = $conn->query($sql);
    if ($result) {
        $msg = "刪除成功";
    } else {
        $msg = $sql;
    }
} catch (Exception $e) {
    $msg = $e->getMessage();
}

echo $msg;
