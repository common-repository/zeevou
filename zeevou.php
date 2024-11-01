<?php
/**
 * Plugin Name: Zeevou
 * Contributors: zeevou
 * Plugin URI: https://zeevou.com
 * Description: Zeevou is a global community that helps you grow your hospitality business through cutting-edge automation, industry-leading training, and world-class support.
 * Version: 0.7.70
 * Stable tag: 0.7.70
 * Tags: Booking Website Engine, Airbnb, Booking.com, Expedia, Agoda, VRBO, HomeAway, Hotel, iCal, Zeevou, Short Term Accommodation, Serviced Apartment, Hospitality, Vacation Rentals, Property Management System, Property Management Software (PMS), Central Reservation System (CRS), Holiday Homes, Channel Manager, Guesthouse, Booking System, Free Booking Engine, Direct Booking Website
 * Requires at least: 3.1.0
 * Tested up to: 5.9.2
 * Text Domain: zeevou-wp
 * Author: Zeevou Team
 */
define( 'ZEEVOU_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
require_once( ZEEVOU_PLUGIN_DIR . 'variables.php' );
//require_once dirname( __FILE__ ) .'/variables.php';

function zeevou_properties_wp() {

    $zeevou_url = '';
    $zeevou_url = esc_url(rtrim(get_option('zeevou_url'),'/').'/search/');

    if($zeevou_url != ""){
        $zeevou_url = str_replace('https://', '', $zeevou_url);
        $zeevou_url = str_replace('http://', '', $zeevou_url);
        $zeevou_url = "https://".$zeevou_url;

    }
    // echo $zeevou_url;
    $zeevpuPluginContent='<div class="zeevou-search-widget zeevou-location-widget"><form id="zeevou-search-form" name="zeevou-search_form" action='.$zeevou_url.' method="GET" _lpchecked="1"><div class="zeevou-search-box-container zeevou-remove-white"></div></form></div><script>zvSearchContentCreation();</script>';

    return $zeevpuPluginContent;

}


add_action('wp_enqueue_scripts','zeevou_properties_init');

add_shortcode('zeevou-home-search', 'zeevou_properties_wp');

function zeevou_properties_init() {
    wp_enqueue_style( 'font-awesome-css', plugins_url( '/css/font-awesome.min.css', __FILE__ ));
    wp_enqueue_style( 'daterangepicker-css', plugins_url( '/css/daterangepicker.css', __FILE__ ));
    wp_enqueue_style( 'style-css', plugins_url( '/css/style.css', __FILE__ ));
    wp_enqueue_style( 'switchery-css', plugins_url( '/css/switchery.min.css', __FILE__ ));
    wp_enqueue_style( 'lightgallery-css', plugins_url( '/css/lightgallery.min.css', __FILE__ ));
    wp_enqueue_style( 'intlTelInput-css', plugins_url( '/css/intlTelInput.css', __FILE__ ));

    wp_enqueue_script( 'jquery-dateformat-js', plugins_url( '/js/jquery-dateformat.min.js', __FILE__ ),array('jquery'));
    wp_enqueue_script( 'moment-js', plugins_url( '/js/moment.min.js', __FILE__ ));
    wp_enqueue_script( 'daterangepicker-js', plugins_url( '/js/daterangepicker.min.js', __FILE__ ));
    wp_enqueue_script( 'switchery-js', plugins_url( '/js/switchery.min.js', __FILE__ ));
    wp_enqueue_script( 'lightgallery-js', plugins_url( '/js/lightgallery-all.min.js', __FILE__ ));
    wp_enqueue_script( 'intlTelInput-js', plugins_url( '/js/intlTelInput.min.js', __FILE__ ));
    wp_enqueue_script( 'search-js', plugins_url( '/js/search.js', __FILE__),array('jquery')  );



    wp_localize_script('search-js', 'getSettings', array(
        'pluginsUrl' => plugins_url(), 'zvCityName' =>get_option( 'zeevou_city_name' ), 'zvCityRadio' =>get_option( 'zeevou_city_radio' ), 'zvBorderRadius' =>get_option( 'zeevou_border_radius' )
    , 'zvAlignRadio' =>get_option( 'zeevou_align_radio' ), 'zvMaxWidth' =>get_option( 'zeevou_max_width' ), 'zvDefaultAccDuration' =>get_option('zeevou_default_acc_duration')
    , 'zvDefaultAdultsNo' =>get_option('zeevou_default_adults_no'), 'zvDefaultChildrenNo' =>get_option('zeevou_default_children_no'), 'zvDefaultInfantsNo' =>get_option('zeevou_default_infants_no')
    , 'zvDirectUrl' => get_option('zeevou_url'), 'zvAdminUrl' => admin_url(), 'zvHubUrl' => PMS_HOST, 'zvBrandId' => get_post_meta( get_the_ID(), 'zeevou_brand', true )
    ));

    $prop_url =  esc_url(rtrim(get_post_meta( get_the_ID(), 'zeevou_page_url', true ),'/'));
    $prop_url= $prop_url."/";

    wp_localize_script('search-js', 'getPageSettings', array(
        'zvPropertyPageUrl' => $prop_url
    ));


}

//============================================================================
if (!defined('ZEEVOU_PLUGIN_VERSION'))
    define('ZEEVOU_PLUGIN_VERSION', '0.7.70');

function zeevou_plugin_check_version() {
    if (ZEEVOU_PLUGIN_VERSION !== get_option('zeevou_plugin_version'))
        zeevou_plugin_activation();
}

add_action('plugins_loaded', 'zeevou_plugin_check_version');

function zeevou_plugin_activation(){
    update_option('zeevou_plugin_version', ZEEVOU_PLUGIN_VERSION);

    if (get_option('zeevou_url') === false)
        update_option('zeevou_url', '');

    if (get_option('zeevou_access_token') === false)
        update_option('zeevou_access_token', '');

    if (get_option('zeevou_refresh_token') === false)
        update_option('zeevou_refresh_token', '');

    if (get_option('zeevou_token_date') === false)
        update_option('zeevou_token_date', '');

    if (get_option('zeevou_city_name') === false)
        update_option('zeevou_city_name', '');

    if (get_option('zeevou_city_radio') === false)
        update_option('zeevou_city_radio', 'Multi-City');

    if (get_option('zeevou_border_radius') === false)
        update_option('zeevou_border_radius', '12');

    if (get_option('zeevou_align_radio') === false)
        update_option('zeevou_align_radio', 'center');

    if (get_option('zeevou_max_width') === false)
        update_option('zeevou_max_width', '100');

    if (get_option('zeevou_default_acc_duration') === false)
        update_option('zeevou_default_acc_duration', '1');

    if (get_option('zeevou_default_adults_no') === false)
        update_option('zeevou_default_adults_no', '2');

    if (get_option('zeevou_default_children_no') === false)
        update_option('zeevou_default_children_no', '0');

    if (get_option('zeevou_default_infants_no') === false)
        update_option('zeevou_default_infants_no', '0');


}



function zeevou_properties_register_settings() {
    zeevou_plugin_activation();
    //  add_option( 'zeevou_url', '');
    register_setting( 'zeevou_settings', 'zeevou_url', 'zeevou_properties_callback' );

    //  register_setting( 'zeevou_settings', 'zeevou_api_key', 'zeevou_properties_callback' );

    //  register_setting( 'zeevou_settings', 'zeevou_test_origin', 'zeevou_properties_callback' );

    register_setting( 'zeevou_settings', 'zeevou_access_token', 'zeevou_properties_callback' );
    register_setting( 'zeevou_settings', 'zeevou_refresh_token', 'zeevou_properties_callback' );
    register_setting( 'zeevou_settings', 'zeevou_token_date', 'zeevou_properties_callback' );


    //  add_option( 'zeevou_city_name', '');
    register_setting( 'zeevou_settings', 'zeevou_city_name', 'zeevou_properties_callback' );

    //  add_option( 'zeevou_city_radio', '');
    register_setting( 'zeevou_settings', 'zeevou_city_radio', 'zeevou_properties_callback' );

    //  add_option( 'zeevou_border_radius', '');
    register_setting( 'zeevou_settings', 'zeevou_border_radius', 'zeevou_properties_callback' );

    //  add_option( 'zeevou_align_radio', '');
    register_setting( 'zeevou_settings', 'zeevou_align_radio', 'zeevou_properties_callback' );

    //  add_option( 'zeevou_max_width', '');
    register_setting( 'zeevou_settings', 'zeevou_max_width', 'zeevou_properties_callback' );

    register_setting( 'zeevou_settings', 'zeevou_default_acc_duration', 'zeevou_properties_callback' );

    register_setting( 'zeevou_settings', 'zeevou_default_adults_no', 'zeevou_properties_callback' );

    register_setting( 'zeevou_settings', 'zeevou_default_children_no', 'zeevou_properties_callback' );

    register_setting( 'zeevou_settings', 'zeevou_default_infants_no', 'zeevou_properties_callback' );


}
add_action( 'admin_init', 'zeevou_properties_register_settings' );



//===============================================================================

add_filter('plugin_action_links_'.plugin_basename(__FILE__), 'zeevou_plugin_page_settings_link');
function zeevou_plugin_page_settings_link( $links ) {
    $links[] = '<a href="' .
        admin_url( 'admin.php?page=zeevou_settings' ) .
        '">' . __('Settings') . '</a>';
    return $links;
}

//===============================================================================




add_action( 'admin_menu', 'zeevou_admin_menu' );
function zeevou_admin_menu(){
    $page_title = 'Zeevou';
    $menu_title = 'Zeevou';
    $capability = 'manage_options';
    $menu_slug  = 'zeevou_settings';
    $function   = 'zeevou_admin_menu_page';
    $icon_url   = plugins_url( '/css/images/zeevou_yellow_xs2.png', __FILE__ );
    $position   = 4;
    add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position );
}


function zeevou_handle_form() {
    if(
        ! isset( $_POST['zeevou_form'] ) ||
        ! wp_verify_nonce( $_POST['zeevou_form'], 'zeevou_update' )
    ){ ?>
        <div class="error">
            <p>Sorry, your nonce was not correct. Please try again.</p>
        </div> <?php
        exit;
    } else {
        // Handle our form data


        $zeevou_url = sanitize_text_field( $_POST['zeevou_url'] );

        if($zeevou_url != ""){
            $zeevou_url = esc_url(rtrim($zeevou_url,'/'));
            $zeevou_url = str_replace('https://', '', $zeevou_url);
            $zeevou_url = str_replace('http://', '', $zeevou_url);

            $zeevou_url = "https://".$zeevou_url;
        }
// $zeevou_url = str_replace("http://", "https://", $zeevou_url);

// $zeevou_api_key = sanitize_text_field( $_POST['zeevou_api_key'] );
// $zeevou_test_origin = sanitize_text_field( $_POST['zeevou_test_origin'] );
        $zeevou_city_name = sanitize_text_field( $_POST['zeevou_city_name'] );
        $zeevou_city_radio = sanitize_text_field( $_POST['zeevou_city_radio'] );
        $zeevou_border_radius = sanitize_text_field( $_POST['zeevou_border_radius'] );
        $zeevou_align_radio = sanitize_text_field( $_POST['zeevou_align_radio'] );
        $zeevou_max_width = sanitize_text_field( $_POST['zeevou_max_width'] );
        $zeevou_default_acc_duration = sanitize_text_field( $_POST['zeevou_default_acc_duration'] );
        $zeevou_default_adults_no = sanitize_text_field( $_POST['zeevou_default_adults_no'] );
        $zeevou_default_children_no = sanitize_text_field( $_POST['zeevou_default_children_no'] );
        $zeevou_default_infants_no = sanitize_text_field( $_POST['zeevou_default_infants_no'] );



        update_option('zeevou_url', $zeevou_url);
        // update_option('zeevou_api_key', $zeevou_api_key);
        // update_option('zeevou_test_origin', $zeevou_test_origin);
        update_option('zeevou_city_name', $zeevou_city_name);
        update_option('zeevou_city_radio', $zeevou_city_radio);
        update_option('zeevou_border_radius', $zeevou_border_radius);
        update_option('zeevou_align_radio', $zeevou_align_radio);
        update_option('zeevou_max_width', $zeevou_max_width);
        update_option('zeevou_default_acc_duration', $zeevou_default_acc_duration);
        update_option('zeevou_default_adults_no', $zeevou_default_adults_no);
        update_option('zeevou_default_children_no', $zeevou_default_children_no);
        update_option('zeevou_default_infants_no', $zeevou_default_infants_no);


        ?>
        <div class="updated">
            <p>Your fields were saved!</p>
        </div>

        <?php
    }
}



function zeevou_admin_menu_page(){
    // wp_enqueue_style( 'bootstrap-css', plugins_url( '/css/bootstrap.min.css', __FILE__ ));
    wp_enqueue_style( 'dw_style', plugin_dir_url( __FILE__ ) . 'css/dw-style.css', array(), '1.0' );
    // wp_enqueue_script( 'jquery');
    wp_enqueue_script( 'settings', plugins_url( '/js/settings.js', __FILE__ ), array('jquery') );
    wp_localize_script('settings', 'dw_getSettings', array(
        'pluginsUrl' => plugins_url(), 'zvAdminUrl' => admin_url()
    ));
    wp_enqueue_script( 'bs-input-spinner', plugins_url( '/js/bootstrap-input-spinner.js', __FILE__ ));


    $zeevou_logo_url = plugins_url( '/css/images/zeevou-logo-sm.png', __FILE__ );
    $zeevou_loading_img_url = plugins_url( '/css/images/loading.gif', __FILE__ );

    if( isset($_POST['updated']) && $_POST['updated'] === 'true' ){
        zeevou_handle_form();
    }

    // echo get_option('zeevou_access_token');


    ?>
    <div class="zeevou_pl-settings-container">
        <img class="settings-logo" alt="Zeevou | The Direct Booking Revolution!" title="Zeevou | The Direct Booking Revolution!" src=<?php echo $zeevou_logo_url;?> >


        <form method="post" >
            <input type="hidden" name="updated" value="true" />
            <?php wp_nonce_field( 'zeevou_update', 'zeevou_form' ); ?>
            <?php settings_fields( 'zeevou_settings' ); ?>
            <?php do_settings_sections( 'zeevou_settings' ); ?>

            <table class="form-table">
                <tr valign="top">
                    <th scope="row" class='zeevou-url-label'><label for="zeevou_url">Zeevou URL</label></th>
                    <td><input type="text" id="zeevou_url" name="zeevou_url" value="<?php echo get_option('zeevou_url'); ?>" class="regular-text" /></td>
                </tr>
            </table>

            <table class="form-table">
                <tr>
                    <h6 class="search-widget-custom-title">Search Widget Customisation</h6>
                </tr>
                <tr valign="top">
                    <th scope="row" class='zv-search-method-label'><label for="search_method">Search Method</label></th>
                    <td>
                        <label class="radio-inline"><input type="radio" name="zeevou_city_radio" id="multi-city-radio" value="Multi-City" <?php if(get_option('zeevou_city_radio')=='Multi-City'|| get_option('zeevou_city_radio')==''){ echo 'checked';} ?> >Multi-City</label>
                        <label class="radio-inline"><input type="radio" name="zeevou_city_radio" id="single-city-radio" value="Single City" <?php if(get_option('zeevou_city_radio')=='Single City'){ echo 'checked';} ?> >Single City</label>
                    </td>
                </tr>
            </table>


            <table class="form-table city-name-box" style="display:none">
                <tr valign="top">
                    <th scope="row" class='zv-city-name-label'><label for="zeevou_city_name">City Name</label></th>
                    <td><input type="text" id="zeevou_city_name" name="zeevou_city_name" value="<?php echo get_option('zeevou_city_name'); ?>" class="regular-text" /></td>
                </tr>
            </table>

            <table class="form-table">
                <tr valign="top">
                    <th scope="row" class='zv-default-acc-duration-label'><label for="zeevou_default_acc_duration">Default Accommodation Duration</label></th>
                    <td style="width: 200px; float:left;"><input type="number" id="zeevou_default_acc_duration" name="zeevou_default_acc_duration" value="<?php if(get_option('zeevou_default_acc_duration')==''){echo 1;}else echo get_option('zeevou_default_acc_duration'); ?>" min="1" max="180" step="1"/></td>
                    <td style= "float: left; margin-bottom: 0px !important; padding: 20px 0 0 0 !important;"><p>Night(s)</p></td>
                </tr>
            </table>

            <table class="form-table">
                <tr valign="top">
                    <th scope="row" class='zv-default-guests-no-label'><label for="zeevou_default_adults_no">Default Number of Guests</label></th>
                    <td style="width: 200px; float:left;"><input type="number" id="zeevou_default_adults_no" name="zeevou_default_adults_no" value="<?php if(get_option('zeevou_default_adults_no')==''){echo 1;}else echo get_option('zeevou_default_adults_no'); ?>" min="0" max="100" step="1"/></td>
                    <td style= "float: left; margin-bottom: 0px !important; padding: 20px 0 0 0 !important; margin-right:20px;"><p>Adult(s)</p></td>


                    <td style="width: 200px; float:left;"><input type="number" id="zeevou_default_children_no" name="zeevou_default_children_no" value="<?php if(get_option('zeevou_default_children_no')==''){echo 1;}else echo get_option('zeevou_default_children_no'); ?>" min="0" max="100" step="1"/></td>
                    <td style= "float: left; margin-bottom: 0px !important; padding: 20px 0 0 0 !important; margin-right:20px;"><p>Child/Children</p></td>


                    <td style="width: 200px; float:left;"><input type="number" id="zeevou_default_infants_no" name="zeevou_default_infants_no" value="<?php if(get_option('zeevou_default_infants_no')==''){echo 1;}else echo get_option('zeevou_default_infants_no'); ?>" min="0" max="100" step="1"/></td>
                    <td style= "float: left; margin-bottom: 0px !important; padding: 20px 0 0 0 !important; margin-right:20px;"><p>Infant(s)</p></td>
                </tr>
            </table>



            <table class="form-table">


                <tr>
                    <th scope="row" class='border-radius-label'><label for="zeevou_border_radius">Border Radius</label></th>
                    <td>
                        <div class="range-slider br">
                            <input class="range-slider__range br" name="zeevou_border_radius" type="range" value="<?php if(get_option('zeevou_border_radius')==''){echo 12;}else echo get_option('zeevou_border_radius'); ?>" min="0" max="50">
                            <span class="range-slider__value br">0</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class='zv-alignment-label'><label for="Alignment">Alignment</label></th>
                    <td>
                        <label class="radio-inline"><input type="radio" name="zeevou_align_radio" id="left-radio" value="left" <?php if(get_option('zeevou_align_radio')=='left'){ echo 'checked';} ?> >Left</label>
                        <label class="radio-inline"><input type="radio" name="zeevou_align_radio" id="center-radio" value="center" <?php if(get_option('zeevou_align_radio')=='center'|| get_option('zeevou_align_radio')==''){ echo 'checked';} ?> >Center</label>
                        <label class="radio-inline"><input type="radio" name="zeevou_align_radio" id="right-radio" value="right" <?php if(get_option('zeevou_align_radio')=='right'){ echo 'checked';} ?> >Right</label>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class='zv-max-width-label'><label for="zeevou_max_width">Max Width</label></th>
                    <td>
                        <div class="range-slider mw">
                            <input class="range-slider__range mw" name="zeevou_max_width" type="range" value="<?php if(get_option('zeevou_max_width')==''){echo 100;}else echo get_option('zeevou_max_width'); ?>" min="20" max="100">
                            <span class="range-slider__value mw">0</span>
                        </div>
                    <td>
                </tr>

            </table>
            <table class="form-table">
                <tr>
                    <h6 class="zeevou-auth-title">Zeevou Authentication</h6>
                </tr>
                <tr valign="top" id="zeevou_username_row" style="<?php if(get_option('zeevou_access_token') != '' || get_option('zeevou_refresh_token') != '') echo 'display:none;' ?>">
                    <th scope="row" class='zeevou-username-label'><label for="zeevou_username">Username</label></th>
                    <td><input type="text" id="zeevou_username" name="zeevou_username" value="" class="regular-text" /></td>
                </tr>
                <tr valign="top" id="zeevou_password_row" style="<?php if(get_option('zeevou_access_token') != '' || get_option('zeevou_refresh_token') != '') echo 'display:none;' ?>">
                    <th scope="row" class='zeevou-password-label'><label for="zeevou_password">Password</label></th>
                    <td><input type="password" id="zeevou_password" name="zeevou_password" value="" class="regular-text" /></td>
                </tr>
                <tr>
                    <th scope="row"></th>

                    <td>
                        <div class="zeevou_pl-row">
                            <div class="zeevou_pl-col-3">
                                <button type="button" id="zeevou-connect-btn" class="btn btn-primary"
                                        style="background-color: #3B2357; color:#F7B21A; font-weight: bold; width: 120px; <?php if(get_option('zeevou_access_token') != '' || get_option('zeevou_refresh_token') != '') echo 'display:none;' ?>">Connect</button>
                                <button type="button" id="zeevou-disconnect-btn" class="btn btn-primary"
                                        style="background-color: #3B2357; color:#F7B21A; font-weight: bold; width: 120px; <?php if(get_option('zeevou_access_token') == '' || get_option('zeevou_refresh_token') == '') echo 'display:none;' ?>"></button>
                            </div>
                            <div id="zeevou_connect_loading" class="zeevou_pl-col" style="display:none;">
                                <img src=<?php echo $zeevou_loading_img_url;?> class="zeevou_loading_img" style="width:38px; height:38px;" />
                            </div>
                        </div>
                    </td>

                    <td></td>
                </tr>

            </table>
            <table class="form-table">
                <tr>
                    <h6 class="instructions_title">Instructions</h6>
                </tr>
                <tr>
                    <p>Search Widget Shortcode: <b>[zeevou-home-search]</b></br>Use this shortcode to add the search widget in your website pages. You can add it anywhere in your page!</p>

                    <p>Property Search Widget Shortcode: <b>[zeevou-property-search]</b><br>Use this shortcode to add the property search widget in your website pages. You should also choose the correct brand and property for each page. You can add the widget in your sidebar or anywhere else in your page!</p>

                    <p>Amenities Widget Shortcode: <b>[zeevou-property-amenities]</b></br>Use this shortcode to add the amenities widget in your website property pages. You can add it anywhere in your page!</p>

                    <p>Description Widget Shortcode: <b>[zeevou-property-description]</b></br>Use this shortcode to add the description widget in your website property pages. You can add it anywhere in your page!</p>

                    <p>Images Widget Shortcode: <b>[zeevou-property-images]</b></br>Use this shortcode to add the images widget in your website property pages. You can add it anywhere in your page!</p>

                    <p>Booking Widget Shortcode: <b>[zeevou-property-booking]</b></br>Use this shortcode to add the booking widget in your website property pages. You can add it anywhere in your page and book directly from your website!</p>
                </tr>
            </table>
            <?php  submit_button(); ?>
        </form>
    </div>
    <?php
}
//===============================================================================
//===============================================================================
add_action( 'add_meta_boxes', 'zv_create_custom_meta_box', 10, 2 );

function zv_create_custom_meta_box( $post_type, $post ) {
    add_meta_box( 'zeevou-property-metabox', __( 'Zeevou', 'zv-custom-meta-box' ), 'zv_custom_meta_box_content', 'page', 'normal', 'high' );
    add_meta_box( 'zeevou-property-metabox', __( 'Zeevou', 'zv-custom-meta-box' ), 'zv_custom_meta_box_content', 'property', 'normal', 'high' );
    add_meta_box( 'zeevou-property-metabox', __( 'Zeevou', 'zv-custom-meta-box' ), 'zv_custom_meta_box_content', 'project', 'normal', 'high' );
    add_meta_box( 'zeevou-property-metabox', __( 'Zeevou', 'zv-custom-meta-box' ), 'zv_custom_meta_box_content', 'listing', 'normal', 'high' );
    add_meta_box( 'zeevou-property-metabox', __( 'Zeevou', 'zv-custom-meta-box' ), 'zv_custom_meta_box_content', 'listings', 'normal', 'high' );
    add_meta_box( 'zeevou-property-metabox', __( 'Zeevou', 'zv-custom-meta-box' ), 'zv_custom_meta_box_content', 'propertiesnew', 'normal', 'high' );
    // add_meta_box( 'zeevou-property-name-metabox', __( 'Zeevou', 'zv-custom-meta-box2' ), 'zv_custom_meta_box_content', 'page', 'normal', 'high' );

    wp_enqueue_style( 'dw_style', plugin_dir_url( __FILE__ ) . 'css/dw-style.css', array(), '1.0' );

    wp_enqueue_script( 'meta_settings', plugins_url( '/js/meta_settings.js', __FILE__ ), array('jquery') );

    $zeevou_url = get_option('zeevou_url');
    if($zeevou_url != ""){
        $zeevou_url = str_replace('https://', '', $zeevou_url);
        $zeevou_url = str_replace('http://', '', $zeevou_url);
        $zeevou_url = "https://".$zeevou_url;

    }

    wp_localize_script('meta_settings', 'ms_getSettings', array(
        'pluginsUrl' => plugins_url(), 'zeevou_url' => $zeevou_url, 'zvAdminUrl' => admin_url()
    ));
}

//========================================================
add_action( 'wp_ajax_zeevougetbrands', 'zeevouGetBrands' );
add_action( 'wp_ajax_nopriv_zeevougetbrands', 'zeevouGetBrands' );

function zeevouGetBrands(){
    refresh_token();

    $page = $_POST['page'];

    $access_token = get_option('zeevou_access_token');
    $refresh_token = get_option('zeevou_refresh_token');

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => PMS_HOST.'apis/brands?properties[]=id&properties[]=name',
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

    echo $response;

    exit();

}

//========================================================
add_action( 'wp_ajax_zeevougetproperties', 'zeevouGetProperties' );
add_action( 'wp_ajax_nopriv_zeevougetproperties', 'zeevouGetProperties' );

function zeevouGetProperties(){
    refresh_token();

    $page = $_POST['page'];
    $brand = $_POST['brand'];

    $access_token = get_option('zeevou_access_token');
    $refresh_token = get_option('zeevou_refresh_token');

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => PMS_HOST.'apis/v2/properties?default_brand='.$brand.'&page='.$page.'&limit=50&is_active=true&allow_direct_booking=true&order[name]=asc&properties[]=id&properties[]=name',
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

    echo $response;

    exit();

}

add_action( 'wp_ajax_zeevouconnect', 'zeevouConnect' );
add_action( 'wp_ajax_nopriv_zeevouconnect', 'zeevouConnect' );

function zeevouConnect(){
    refresh_token();

    $username = $_POST['username'];
    $password = $_POST['password'];

    $grant_type = "password";
    $client_id = CLIENT_ID;
    $client_secret = CLIENT_SECRET;
    $API_URL = PMS_HOST."oauth2-token";

    $data = array(
        'grant_type' => $grant_type,
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'username' => $username,
        'password' => $password
    );
    $payload = json_encode($data);

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

    $access_token = sanitize_text_field($tokens->access_token);
    $refresh_token = sanitize_text_field($tokens->refresh_token);
    update_option('zeevou_access_token', $access_token);
    update_option('zeevou_refresh_token', $refresh_token);
    update_option('zeevou_token_date', new DateTime());

    echo 'Success';

    exit();

}

add_action( 'wp_ajax_zeevoudisconnect', 'zeevouDisconnect' );
add_action( 'wp_ajax_nopriv_zeevoudisconnect', 'zeevouDisconnect' );

function zeevouDisconnect(){

    update_option('zeevou_access_token', '');
    update_option('zeevou_refresh_token', '');

}

function zv_custom_meta_box_content($post) {


//    refresh_token();

    $access_token = get_option('zeevou_access_token');
    $refresh_token = get_option('zeevou_refresh_token');

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => PMS_HOST.'apis/brands?properties[]=id&properties[]=name',
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

    $brandsArr = json_decode($response);

    // echo $response;

    $zeevou_loading_img_url = plugins_url( '/css/images/loading.gif', __FILE__ );

    ?>
    <table class="form-table">

        <tr>
            <th style="width:120px; font-weight:700; font-size:12px; padding-bottom: 10px;">Brands</th>
        </tr>
        <tr>
            <td style="padding:0px 0px 10px 0px;">
                <div class="zeevou_pl-row" style="min-width:400px;">
                    <div class="zeevou_pl-col" style="max-width:350px;">
                        <select id='zeevou_brands' name='zeevou_brands' style="min-width: 300px; max-width:600px;" size="10">

                            <?php
                            $zv_brand = 0;
                            $zv_property = 0;
                            $zv_page_url = "";

                            if(isset(get_post_meta($post->ID ,'zeevou_brand')[0]))
                                $zv_brand = get_post_meta($post->ID ,'zeevou_brand')[0];
                            if(isset(get_post_meta($post->ID ,'zeevou_property')[0]))
                                $zv_property = get_post_meta($post->ID ,'zeevou_property')[0];
                            if(isset(get_post_meta($post->ID ,'zeevou_page_url')[0]))
                                $zv_page_url = get_post_meta($post->ID ,'zeevou_page_url')[0];

                            if($zv_brand === false || $zv_brand == 0){
                                echo '<option value="0" selected>Please select a brand</option>';
                            }else{
                                echo '<option value="0">Please select a brand</option>';
                            }

                            if($brandsArr != ""){
                                foreach ($brandsArr as $brand) {
                                    if(isset($brand->id)){
                                        if($zv_brand == $brand->id){
                                            echo '<option value="' . $brand->id . '" selected>' . $brand->name . '</option>';
                                            echo '<script>zeevou_get_properties("'.$zv_property.'", "'.$zv_page_url.'");</script>';
                                        }else{
                                            echo '<option value="' . $brand->id . '">' . $brand->name . '</option>';
                                        }
                                    }
                                }

                                echo '<option value="more">Load More</option>';
                            }
                            ?>
                        </select>
                    </div>
                    <div id="zeevou_brands_loading" class="zeevou_pl-col-1" style="display:none;">
                        <img src=<?php echo $zeevou_loading_img_url;?> class="zeevou_loading_img" style="width:38px; height:38px;" />
                    </div>
                </div>
            </td>
        </tr>

        <tr id="zeevou_properties_label_row" style="display:none;">
            <th style="width:120px; font-weight:700; font-size:12px; padding-bottom: 10px;">Properties</th>
        </tr>
        <tr id="zeevou_properties_input_row" style="display:none;">
            <td style="padding:0px 0px 10px 0px;">
                <div class="zeevou_pl-row" style="min-width:400px;">
                    <div class="zeevou_pl-col" style="max-width:350px;">
                        <select id='zeevou_properties' name='zeevou_properties' style="min-width: 300px; max-width:600px;" size="10">


                            <?php

                            if($zv_property === false || $zv_property == 0){
                                echo '<option value="0" selected>Please select a property</option>';
                            }else{
                                echo '<option value="0">Please select a property</option>';
                            }

                            ?>

                        </select>
                    </div>
                    <div id="zeevou_properties_loading" class="zeevou_pl-col-1" style="display:none;">
                        <img src=<?php echo $zeevou_loading_img_url;?> class="zeevou_loading_img" style="width:38px; height:38px;" />
                    </div>
                </div>
            </td>
        </tr>

        <tr id="zeevou_pageurl_label_row" style="display:none;">
            <th style="width:120px; font-weight:700; font-size:12px; padding-bottom: 10px;">Zeevou Booking Engine URL</th>
        </tr>
        <tr id="zeevou_pageurl_input_row" style="display:none;">
            <td style="padding:0px 0px 10px 0px;"><input type="text" style="width:100%; max-width:600px; height:38px;" id="zeevou_page_url" name="zeevou_page_url" value="" ></td>
        </tr>
        <tr>
            <td style="padding:0px 0px 10px 0px; display:none;"><input readonly type="text" style="max-width:600px; height:38px;" id="zeevou_property_id" name="zeevou_property_id" value="" >
                <input readonly type="text" style="max-width:600px; height:38px;" id="zeevou_brand_page" name="zeevou_brand_page" value=1 >
                <input readonly type="text" style="max-width:600px; height:38px;" id="zeevou_property_page" name="zeevou_property_page" value=1 ></td>
        </tr>
    </table>
    <?php
}


function zv_save_metabox_content( $post_id ) {
    if(isset($_POST["zv-metabox-content"])){
        $zv_input_content = $_POST["zv-metabox-content"];
        update_post_meta( $post_id, 'zv-property-metabox-content', $zv_input_content );

    }

    if(isset($_POST["zv-metabox-property-name"])){
        $zv_input_content = $_POST["zv-metabox-property-name"];
        update_post_meta( $post_id, 'zv-metabox-property-name-content', $zv_input_content );

    }

    if(isset($_POST["zeevou_brands"])){

        $zeevou_brand = $_POST["zeevou_brands"];
        update_post_meta( $post_id, 'zeevou_brand', $zeevou_brand );


    }

    if(isset($_POST["zeevou_properties"])){

        $zeevou_property = $_POST["zeevou_properties"];
        update_post_meta( $post_id, 'zeevou_property', $zeevou_property );

    }

    if(isset($_POST["zeevou_page_url"])){
        $zeevou_page_url = $_POST["zeevou_page_url"];
        update_post_meta( $post_id, 'zeevou_page_url', $zeevou_page_url );

    }

    if(isset($_POST["zeevou_property_id"])){
        $zeevou_property_id = $_POST["zeevou_property_id"];
        update_post_meta( $post_id, 'zeevou_property_id', $zeevou_property_id );

    }

    if(isset($_POST["zeevou_brand_page"])){
        $zeevou_brand_page = $_POST["zeevou_brand_page"];
        update_post_meta( $post_id, 'zeevou_brand_page', $zeevou_brand_page );

    }

    if(isset($_POST["zeevou_property_page"])){
        $zeevou_property_page = $_POST["zeevou_property_page"];
        update_post_meta( $post_id, 'zeevou_property_page', $zeevou_property_page );

    }

}

add_action( 'save_post', 'zv_save_metabox_content' );


add_action( 'wp_ajax_refresh_token', 'refresh_token' );
add_action( 'wp_ajax_nopriv_refresh_token', 'refresh_token' );

function refresh_token(){

    $current_date = new DateTime();
    if(!is_null(get_option('zeevou_token_date')) && get_option('zeevou_token_date') != ''){
        $seconds = abs($current_date->getTimestamp() - get_option('zeevou_token_date')->getTimestamp());
        if($seconds < 3600){
            return;
        }
    }
    $grant_type = "refresh_token";
    $client_id = "M5Cu9D7Nfmw4rdgR1HA4eRN_Qq3Gb4ce";
    $client_secret = "D1HanI9dOpejWDKXrv4bQ1ro5sA8G5hnLB-IrIESjEvuLP8mLMJkMk7rq47UauR0LKBYGmL0Ir21Fhc5U55QGC";
    $refresh_token = get_option('zeevou_refresh_token');
    $API_URL = PMS_HOST."oauth2-token";

    $data = array(
        'grant_type' => $grant_type,
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'refresh_token' => $refresh_token,
    );
    $payload = json_encode($data);

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

    // echo $response;
    $tokens = json_decode($response);

    if(isset($tokens->access_token) && isset($tokens->refresh_token)){

        $access_token = sanitize_text_field($tokens->access_token);
        $refresh_token = sanitize_text_field($tokens->refresh_token);
        update_option('zeevou_access_token', $access_token);
        update_option('zeevou_refresh_token', $refresh_token);
        update_option('zeevou_token_date', new DateTime());
    }

}

add_action( 'wp_ajax_zeevougetpropertyavailability', 'zeevouGetPropertyAvailability' );
add_action( 'wp_ajax_nopriv_zeevougetpropertyavailability', 'zeevouGetPropertyAvailability' );

function zeevouGetPropertyAvailability(){

    refresh_token();

    $access_token = get_option('zeevou_access_token');
    $FROM = date("Y-m-d");
    $TO = date('Y-m-d', strtotime('+2 years', strtotime($FROM)));
    $prop_id =  $_POST['property'];
//	    $prop_url =  esc_url(rtrim(get_post_meta( get_the_ID(), 'zeevou_page_url', true ),'/'));
//	    $prop_url= $prop_url."/";

    if($prop_id != "") {

        $data    = array(
            'date[before]'     => $TO,
            'date[after]'      => $FROM,
            'number_of_guests' => 2
        );
        $payload = json_encode( $data );

        $curl = curl_init();

        curl_setopt_array( $curl, array(
            CURLOPT_URL            => PMS_HOST.'apis/properties/' . $prop_id . '/availabilities?date[before]=' . $TO . '&date[after]=' . $FROM . '&number_of_guests=2',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => '',
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST  => 'GET',
            CURLOPT_HTTPHEADER     => array(
                'Authorization: Bearer ' . $access_token
            ),
        ) );

        $response = curl_exec( $curl );

//		    curl_close( $curl );
    }else{
//		    $response = 0;
    }
    echo $response;
    exit();
}

function zeevou_property_search_funct(){
    // $startTime = microtime(true);

    refresh_token();

    $access_token = get_option('zeevou_access_token');
    $FROM = date("Y-m-d");
    $TO = date('Y-m-d', strtotime('+2 years', strtotime($FROM)));
    $prop_id =  get_post_meta( get_the_ID(), 'zeevou_property_id', true );
    $prop_url =  esc_url(rtrim(get_post_meta( get_the_ID(), 'zeevou_page_url', true ),'/'));
    $prop_url= $prop_url."/";

//    if($prop_id != "") {
//
//	    $data    = array(
//		    'date[before]'     => $TO,
//		    'date[after]'      => $FROM,
//		    'number_of_guests' => 2
//	    );
//	    $payload = json_encode( $data );
//
//	    $curl = curl_init();
//
//	    curl_setopt_array( $curl, array(
//		    CURLOPT_URL            => 'https://hub.zeevou.com/apis/properties/' . $prop_id . '/availabilities?date[before]=' . $TO . '&date[after]=' . $FROM . '&number_of_guests=2',
//		    CURLOPT_RETURNTRANSFER => true,
//		    CURLOPT_ENCODING       => '',
//		    CURLOPT_MAXREDIRS      => 10,
//		    CURLOPT_TIMEOUT        => 30,
//		    CURLOPT_FOLLOWLOCATION => true,
//		    CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
//		    CURLOPT_CUSTOMREQUEST  => 'GET',
//		    CURLOPT_HTTPHEADER     => array(
//			    'Authorization: Bearer ' . $access_token
//		    ),
//	    ) );
//
//	    $response = curl_exec( $curl );
//
//	    curl_close( $curl );
//    }else{
//	    $response = 0;
//    }


    $content = '<div class="zeevou-property_widget"><div id="zeevou-property-form"  name="zeevou-property_form" ></div></div><script>zeevouPropertyContentCreation('.$prop_id.');</script>';
    return $content;
}
add_shortcode('zeevou-property-search', 'zeevou_property_search_funct');

function zeevou_getAmenities($access_token, $propertyId, $page){

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => PMS_HOST.'apis/properties/'.$propertyId.'/amenities?page='.$page,
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

    return $response;
}

function zeevou_amenities_funct(){


    $access_token = get_option('zeevou_access_token');
    $prop_id =  get_post_meta( get_the_ID(), 'zeevou_property_id', true );

    $page = 0;
    $amenitiesArray = [];
    if($prop_id != "") {
        do {
            $page ++;
            $response       = zeevou_getAmenities( $access_token, $prop_id, $page );
            $respArray      = json_decode( $response );
            $amenitiesArray = array_merge( $amenitiesArray, $respArray );
        } while ( sizeof( $respArray ) == 50 );

        $response = json_encode( $amenitiesArray );
    }else{
        $response = 0;
    }
    $content = '<div class="zeevou-amenities_widget" id="zeevou-amenities_widget"></div><script>zeevouAmenitiesContentCreation('.$response.');</script>';
    return $content;
}

add_shortcode('zeevou-property-amenities', 'zeevou_amenities_funct');


function zeevou_description_funct(){


    $access_token = get_option('zeevou_access_token');
    $prop_id =  get_post_meta( get_the_ID(), 'zeevou_property_id', true );


    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => PMS_HOST.'apis/v2/properties/'.$prop_id.'?properties[]=id&properties[]=name&properties[]=description',
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

    // $response = '';

    $content = '<div class="zeevou-description_widget" id="zeevou-description_widget"></div><script>zeevouDescriptionContentCreation('.$response.');</script>';
    return $content;
}

add_shortcode('zeevou-property-description', 'zeevou_description_funct');

function zeevou_images_funct(){


    $access_token = get_option('zeevou_access_token');
    $prop_id =  get_post_meta( get_the_ID(), 'zeevou_property_id', true );


    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => PMS_HOST.'apis/v2/properties/'.$prop_id.'?properties[]=id&properties[]=name&properties[]=images',
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

    // $response = '';

    $content = '<div class="zeevou-images_widget" id="zeevou-images_widget"></div><script>zeevouImagesContentCreation('.$response.');</script>';
    return $content;
}

add_shortcode('zeevou-property-images', 'zeevou_images_funct');

add_action( 'wp_ajax_zeevoupropertyunitimages', 'zeevouPropertyUnitImages' );
add_action( 'wp_ajax_nopriv_zeevoupropertyunitimages', 'zeevouPropertyUnitImages' );

function zeevouPropertyUnitImages(){
    $curl = curl_init();
    $access_token = get_option('zeevou_access_token');
    $prop_id =  $_POST['property'];

    curl_setopt_array($curl, array(
        CURLOPT_URL => PMS_HOST.'apis/unit_types?property='.$prop_id.'&property_units.is_active=1&staah_rate_plans.orgin_limit_booking_engine=1&properties[]=unit_images',
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

    echo $response;
    exit();
}

add_action( 'wp_ajax_zeevoupropertyunittypes', 'zeevouPropertyUnitTypes' );
add_action( 'wp_ajax_nopriv_zeevoupropertyunittypes', 'zeevouPropertyUnitTypes' );

function zeevouPropertyUnitTypes(){

//	refresh_token();
    $access_token = get_option('zeevou_access_token');
    $prop_id =  $_POST['property'];


    if($prop_id != "") {

        $req_url = PMS_HOST.'apis/unit_types?property=' . $prop_id.'&&property_units.is_active=1&staah_rate_plans.orgin_limit_booking_engine=1';


        $curl = curl_init();

        curl_setopt_array( $curl, array(
            CURLOPT_URL            => $req_url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => '',
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 60,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST  => 'GET',
            CURLOPT_HTTPHEADER     => array(
                'Authorization: Bearer ' . $access_token
            ),
        ) );

        $response = curl_exec( $curl );

        curl_close( $curl );
    }else{
        $response = 0;
    }
    echo $response;
    exit();
}

function zeevou_booking_funct(){


    $access_token = get_option('zeevou_access_token');
    $prop_id =  get_post_meta( get_the_ID(), 'zeevou_property_id', true );
    $prop_name = get_post_meta( get_the_ID(), 'zeevou_property', true );
    $prop_name = urlEncode($prop_name);




    $content = '<div class="zeevou-booking_widget" id="zeevou-booking_widget"></div><script>zeevouBookingContentCreation('.$prop_id.');</script>';

    // $content.="Elapsed time is: ". (microtime(true) - $startTime) ." seconds";

    return $content;
}

add_shortcode('zeevou-property-booking', 'zeevou_booking_funct');


//========================================================
add_action( 'wp_ajax_zeevougetvoucherprice', 'zeevouGetVoucherPrice' );
add_action( 'wp_ajax_nopriv_zeevougetvoucherprice', 'zeevouGetVoucherPrice' );
function zeevouGetVoucherPrice(){
    $unitTypeId = $_POST['unit_type_id'];
    $ratePlanId = $_POST['rate_plan_id'];
    $arrivalDate = $_POST['arrival_date'];
    $departureDate = $_POST['departure_date'];
    $code = $_POST['code'];
    $adultsNo = $_POST['adults_no'];

    $access_token = get_option('zeevou_access_token');

    $req_url = PMS_HOST."apis/voucher_price?PLANID=$ratePlanId&CHKIN=$arrivalDate&CHKOUT=$departureDate&GA=$adultsNo&VOUCHERS=$code&SHOWERROR=true";

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $req_url,
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

    echo $response;

    exit();
}
//========================================================
add_action( 'wp_ajax_zeevougetrateplans', 'zeevouGetRatePlans' );
add_action( 'wp_ajax_nopriv_zeevougetrateplans', 'zeevouGetRatePlans' );

function zeevouGetRatePlans(){
    $rateplan = $_POST['rate_plan'];
    $access_token = get_option('zeevou_access_token');


    $utr_req_url = PMS_HOST.$rateplan;

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $utr_req_url,
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

    $utr_response = curl_exec($curl);

    curl_close($curl);

    //   $rateplan_detailed = json_decode($utr_response, true);
    //   array_push($rateplans_detailed, $rateplan_detailed);



    // var_dump($rateplan);

    // $rateplans_detailedJSON = json_encode($rateplans_detailed);

    echo $utr_response;

    exit();
}

//========================================================
add_action( 'wp_ajax_zeevougetrateandavailability', 'zeevouGetRateAndAvailability' );
add_action( 'wp_ajax_nopriv_zeevougetrateandavailability', 'zeevouGetRateAndAvailability' );

function zeevouGetRateAndAvailability(){
    $access_token = get_option('zeevou_access_token');
    $unittypeId = $_POST['unit_type_id'];
    $dateAfter = $_POST['date_after'];
    $dateBefore = $_POST['date_before'];
    $guestNo = $_POST['guest_no'];

    $ra_req_url = PMS_HOST.'apis/rate_and_availability?unit_type='.$unittypeId.'&date[after]='.$dateAfter.'&date[before]='.$dateBefore.'&number_of_guests='.$guestNo.'&allow_for_booking_engine=true';

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $ra_req_url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 60,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer '.$access_token
        ),
    ));

    $ra_response = curl_exec($curl);

    curl_close($curl);


    echo $ra_response;

    exit();


}
//========================================================
add_action( 'wp_ajax_zeevoucreatebooking', 'zeevouCreateBooking' );
add_action( 'wp_ajax_nopriv_zeevoucreatebooking', 'zeevouCreateBooking' );

function zeevouCreateBooking(){
    $postdata = $_POST['postdata'];
    $access_token = get_option('zeevou_access_token');
    $postdata = str_replace("\\", '', $postdata);

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => PMS_HOST.'apis/group_bookings',
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

    exit();
}
//========================================================

add_action( 'wp_ajax_zeevougetfrontendfieldsconfig', 'zeevouGetFrontendFieldsConfig' );
add_action( 'wp_ajax_nopriv_zeevougetfrontendfieldsconfig', 'zeevouGetFrontendFieldsConfig' );

function zeevouGetFrontendFieldsConfig(){

    $brand_id = $_POST['brand'];

    $access_token = get_option('zeevou_access_token');

    $req_url = PMS_HOST.'apis/brands/'.$brand_id.'?properties[organization_config][]=reservation_mobile_number&properties[organization_config][]=is_required_reservation_mobile_number&properties[organization_config][]=redirect_to_confirmation_link_at_point_of_booking&properties[organization_config][]=request_payment_at_point_of_booking';

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $req_url,
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

    echo $response;

    exit();

    // $frontendfieldsconfig = json_decode($response, true);
    // return $frontendfieldsconfig;
}

add_action( 'wp_ajax_zeevougetunittypeimages', 'zeevouGetUnitTypeImages' );
add_action( 'wp_ajax_nopriv_zeevougetunittypeimages', 'zeevouGetUnitTypeImages' );

function zeevouGetUnitTypeImages() {

    $unitTypeId = $_POST['unit_type_id'];
    $access_token = get_option('zeevou_access_token');

    // echo $unitTypeId;

    $units = zeevouGetUnits($unitTypeId, $access_token);


    $unitsJSON = json_encode($units);

    echo $unitsJSON;


    exit();

}

add_action( 'wp_ajax_zeevougetunitimages', 'zeevouGetUnitImages' );
add_action( 'wp_ajax_nopriv_zeevougetunitimages', 'zeevouGetUnitImages' );

function zeevouGetUnitImages() {

    $apiFile = $_POST['file_value'];
    $access_token = get_option('zeevou_access_token');

    $file_url = zeevouGetImage($apiFile, $access_token);

    echo $file_url;

    exit();
}


function zeevouGetUnits($unitTypeId, $access_token) {


    // $access_token = get_option('zeevou_access_token');

    $ut_req_url = PMS_HOST.'apis/units?unit_type='.$unitTypeId;

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $ut_req_url,
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

    $ut_response = curl_exec($curl);

    curl_close($curl);

    $units = json_decode($ut_response, true);

    return $units;
}

function zeevouGetImage($apiFile, $access_token) {


    // $access_token = get_option('zeevou_access_token');

    $imagefile_req_url = PMS_HOST.$apiFile.'/details';

    // echo $imagefile_req_url;

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $imagefile_req_url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17',
        CURLOPT_AUTOREFERER => true,
        CURLOPT_VERBOSE => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json',
            'Authorization: Bearer '.$access_token
        ),
    ));

    $imagefile_response = curl_exec($curl);

    // $error = curl_error($curl);
    // $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    // echo "httpCode: ".$httpCode."\n";
    // var_dump($error);
    // var_dump($imagefile_response);
    curl_close($curl);

    $file_details = json_decode($imagefile_response, true);

    $file_url = PMS_HOST.'apis/attachments/resize/'.$file_details['id'].'/1024/1024/'.$file_details['file_name'];

    return $file_url;
}

//ajaxs
//===================================================================
add_action( 'wp_ajax_zeevougetavailabilities', 'zeevou_get_availabilities' );
add_action( 'wp_ajax_nopriv_zeevougetavailabilities', 'zeevou_get_availabilities' );

function zeevou_get_availabilities() {

    // echo 'Heeeey';



//   $access_token = get_option('zeevou_access_token');
//   $FROM = date("Y-m-d");
//   $TO = date('Y-m-d', strtotime('+2 years', strtotime($FROM)));
//   $prop_id =  get_post_meta( get_the_ID(), 'zeevou_property_id', true );
//   $prop_url =  esc_url(rtrim(get_post_meta( get_the_ID(), 'zeevou_page_url', true ),'/'));
//   $prop_url= $prop_url."/";


// $data = array(
//     'date[before]' => $TO,
//     'date[after]' => $FROM
// );
// $payload = json_encode($data);

// $curl = curl_init();

// curl_setopt_array($curl, array(
//   CURLOPT_URL => 'https://hub.zeevou.com/apis/properties/'.$prop_id.'/availabilities?date[before]='.$TO.'&date[after]='.$FROM,
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => '',
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_TIMEOUT => 30,
//   CURLOPT_FOLLOWLOCATION => true,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => 'GET',
//   CURLOPT_HTTPHEADER => array(
//     'Authorization: Bearer '.$access_token
//   ),
// ));

// $response = curl_exec($curl);

// curl_close($curl);


    exit();
}

//===================================================================



?>
