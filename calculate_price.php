<?php

require_once('../../../wp-config.php'); 


$arrival_date = $_POST['arrival_date'];
$departure_date = $_POST['departure_date'];
$adults_no = $_POST['adults_no'];
$nights = $_POST['nights'];
$rate_plan_id = $_POST['rate_plan_id'];
$rate_plan_min_guests = $_POST['rate_plan_min_guests'];
$access_token = get_option('zeevou_access_token');
$refresh_token = get_option('zeevou_refresh_token');

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://hub.zeevou.com/apis/rates?rate_plan='.$rate_plan_id.'&date[before]='.$departure_date.'&date[after]='.$arrival_date,
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

// echo $response;

$finalprice = 0;

$rates = json_decode($response);
foreach ($rates as $rate) {
    if($rate->date != $departure_date){
        
        $finalprice+= $rate->price->value;

        if ($rate->extra_guest_price != null && $rate_plan_min_guests != null && $rate_plan_min_guests <= $adults_no) {
            $finalprice+= ($rate->extra_guest_price * ($adults_no - $rate_plan_min_guests));
        }
    }

}

echo $finalprice;



?>