<?php
header("Access-Control-Allow-Origin: *");
require_once 'mysql.php';

$product_name = $_POST['product_name'];
$owner_id = $_POST['owner_id'];
$price = $_POST['price'];
// $product_name = "測試";
// $owner_id = "123456";
// $price = 50;
$date = date("Y-m-d");
$msg = "";
try {
    $conn = open_db();
    $sql = "INSERT INTO `product`( `product_name`, `owner_id`, `price`, `date`)";
    $sql .= sprintf("VALUES('%s','%s',%d,'%s')", $product_name, $owner_id, $price, $date);
    $result = $conn->query($sql);
    if ($result) {
        $msg = "新增成功";
    } else {
        $msg = "ERROR";
    }
} catch (Exception $e) {
    $msg = $e->getMessage();
}
echo $msg;
