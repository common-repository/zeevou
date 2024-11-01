<?php

require_once('../../../wp-config.php');
require_once('refresh_token.php'); 

refresh_token();

$access_token = get_option('zeevou_access_token');
$refresh_token = get_option('zeevou_refresh_token');

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://hub.zeevou.com/apis/brands',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer '.$access_token
  ),
));

$response = curl_exec($curl);

curl_close($curl);
// $brands = json_decode($response);
echo $response;


?>