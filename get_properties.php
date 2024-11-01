<?php

require_once('../../../wp-config.php'); 

$brand = (int)$_POST['brand'];
$access_token = get_option('zeevou_access_token');
$refresh_token = get_option('zeevou_refresh_token');

// $data = array(
//     'default_brand' => $brand
// );
// $payload = json_encode($data);

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://hub.zeevou.com/apis/v2/properties?default_brand='.$brand.'&is_active=true&allow_direct_booking=true&order[name]=asc',
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
// var_dump($payload);
$response = curl_exec($curl);

curl_close($curl);
echo $response;


?>