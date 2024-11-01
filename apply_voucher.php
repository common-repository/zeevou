<?php

require_once('../../../wp-config.php'); 

$code = $_POST['code'];
$price = $_POST['price'];
$arrival_date = $_POST['arrival_date'];
$departure_date = $_POST['departure_date'];
$adults_no = $_POST['adults_no'];
$nights = $_POST['nights'];
$booking_date = $_POST['booking_date'];
$unit_type_id = $_POST['unit_type_id'];
$rate_plan_id = $_POST['rate_plan_id'];
$access_token = get_option('zeevou_access_token');
$refresh_token = get_option('zeevou_refresh_token');


$finalprice = $price;

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://hub.zeevou.com/apis/vouchers?code='.$code,
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

$vouchers = json_decode($response);
foreach ($vouchers as $voucher) {
    // var_dump($voucher);

    $application = $voucher->application;
    $promotion = $application->promotion;
    $unittypes = $application->unit_types;
    $rateplans = $application->rate_plans;

    $is_verified = true;
    //voucher verification
    if ($promotion->min_nights) {
        if (!($promotion->min_nights <= $nights)) {
          $is_verified = false;
          // echo "min_nights";
        }
    }

    if ($promotion->max_nights) {
      if (!($promotion->max_nights >= $nights)) {
        $is_verified = false;
        // echo "max_nights";
      }
    }

    if ($promotion->min_amount) {
      if (!($promotion->min_amount <= $price)) {
        $is_verified = false;
        // echo "min_amount";
      }
    }

    if ($promotion->max_amount) {
      if (!($promotion->max_amount >= $price)) {
        $is_verified = false;
        // echo "max_amount";
      }
    }

    if ($promotion->min_sleepers) {
      if (!($promotion->min_sleepers <= $adults_no)) {
        $is_verified = false;
        // echo "min_sleepers";
      }
    }

    if ($promotion->max_sleepers) {
      if (!($promotion->max_sleepers >= $adults_no)) {
        $is_verified = false;
        // echo "max_sleepers";
      }
    }

    
    if ($application->booking_date_from) {
      if (!($application->booking_date_from <= $booking_date)) {
        $is_verified = false;
        // echo "booking_date_from";
      }
    }

    if ($application->booking_date_to) {
      if (!($application->booking_date_to >= $booking_date)) {
        $is_verified = false;
        // echo "booking_date_to";
      }
    }

    if ($application->arrival_date_from) {
      if (!($application->arrival_date_from <= $arrival_date)) {
        $is_verified = false;
        // echo "arrival_date_from";
      }
    }

    if ($application->arrival_date_to) {
      if (!($application->arrival_date_to >= $arrival_date)) {
        $is_verified = false;
        // echo "arrival_date_to";
      }
    }

    if ($voucher->limit) {
      if (!($voucher->limit > 0)) {
        $is_verified = false;
        // echo "limit";
      }
    }

    $unittype_isset = false;
    if(count($unittypes) > 0){
      foreach ($unittypes as $unittype) {
        if($unittype->id == $unit_type_id){
          $unittype_isset = true;
        }
      }
    }else{
      $unittype_isset = true;
    }   
    
    $rateplan_isset = false;
    if(count($rateplans) > 0){
      foreach ($rateplans as $rateplan) {
        
        if($rateplan->id == $rate_plan_id){
          $rateplan_isset = true;
        }
      }
    }else{
      $rateplan_isset = true;
    } 

    if(!$unittype_isset){
      $is_verified = false;
      // echo "unittype";
    }

    if(!$rateplan_isset){
      $is_verified = false;
      // echo "rateplan";
    }

    
    if($is_verified){
      $discount = 0;
      if(!is_null($promotion->percent_item)){
        $discount = $price * $promotion->percent_item / 100;
      }
      if(!is_null($promotion->fix_rate_item)){
        $discount += $promotion->fix_rate_item;
      }

    }


}

$result = new stdClass();
$result->discount = $discount;
$result->promotion_id = $promotion->id;
$result->apply_other_discounts = $promotion->apply_other_discounts;

echo json_encode($result);






?>