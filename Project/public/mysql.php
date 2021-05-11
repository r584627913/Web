<?php

function open_db()
{
    $dbhost = "db.mis.kuas.edu.tw";
    $dbname = "s1106137135";
    $dbuser = "s1106137135";
    $dbpw = "F129467905";
    try {
        $mysqli = new mysqli($dbhost, $dbuser, $dbpw, $dbname);
        $mysqli->set_charset("UTF8");
        return $mysqli;
    } catch (Exception $e) {
        return $e->getMessage();
    }
}
