<?php
require_once('../../../wp-config.php'); 

$postdata = $_POST['postdata'];
$access_token = get_option('zeevou_access_token');
$refresh_token = get_option('zeevou_refresh_token');

// echo $postdata;
$postdata = str_replace("\\", '', $postdata);
// echo $postdata;
// $data = json_decode($postdata);
// var_dump($data);
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://hub.zeevou.com/apis/group_bookings',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => $postdata,
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer '.$access_token,
    'Content-Type:application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>