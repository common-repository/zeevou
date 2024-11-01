<?php

// include_once('..\..\..\wp-includes\option.php');
// include_once( '..\..\..\wp-includes\formatting.php' );
require_once('../../../wp-config.php'); 

$username = $_POST['username'];
$password = $_POST['password'];




    $grant_type = "password";
    $client_id = "M5Cu9D7Nfmw4rdgR1HA4eRN_Qq3Gb4ce";
    $client_secret = "D1HanI9dOpejWDKXrv4bQ1ro5sA8G5hnLB-IrIESjEvuLP8mLMJkMk7rq47UauR0LKBYGmL0Ir21Fhc5U55QGC";
    $API_URL = "https://hub.zeevou.com/oauth2-token";
    
    
    $data = array(
        'grant_type' => $grant_type,
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'username' => $username,
        'password' => $password
    );
    $payload = json_encode($data);
// echo $payload;

    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => $API_URL,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "POST",
      CURLOPT_POSTFIELDS => $payload,
      CURLOPT_HTTPHEADER => array('Content-Type:application/json')
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    $tokens = json_decode($response);
    // var_dump($tokens);
    // echo $tokens->access_token;
    $access_token = sanitize_text_field($tokens->access_token);
    $refresh_token = sanitize_text_field($tokens->refresh_token);
    update_option('zeevou_access_token', $access_token);
    update_option('zeevou_refresh_token', $refresh_token);

    echo 'Success';

    // echo get_option('zeevou_access_token');

//     $includedStuff = get_included_files();
//  print_r($includedStuff);

?>