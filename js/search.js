var zvpluginUrl = getSettings.pluginsUrl;
var zvCityName = getSettings.zvCityName;
var zvCityRadio = getSettings.zvCityRadio;
var zvBorderRadius = getSettings.zvBorderRadius;
var zvAlignRadio = getSettings.zvAlignRadio;
var zvMaxWidth = getSettings.zvMaxWidth;
var zvDefaultAccDuration = getSettings.zvDefaultAccDuration;
var zvDefaultAdultsNo = getSettings.zvDefaultAdultsNo;
var zvDefaultChildrenNo = getSettings.zvDefaultChildrenNo;
var zvDefaultInfantsNo = getSettings.zvDefaultInfantsNo;
var zvDirectUrl = getSettings.zvDirectUrl;
var zvAdminUrl = getSettings.zvAdminUrl;
var zvBrandId = getSettings.zvBrandId;
var zvHubUrl = getSettings.zvHubUrl;





function zvSearchContentCreation() {




    var searchContainerEl = jQuery('.zeevou-search-box-container.zeevou-remove-white');
    searchContainerEl.html("<div id='zeevou-row1' class='zeevou_pl-row' style='position:relative'></div>");
    var searchRow = jQuery('#zeevou-row1');
    searchRow.html("<div id='zeevou-search-table'><div id='zeevou-row2' class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs zeevou-inputs-container' style='position:relative'></div><div class='zeevou_pl-col-1 zeevou_pl-col-sm-1 zeevou_pl-col-xs-1 zeevou-button-container' style='position:relative; height:fit-content;'></div></div></div>");
    var inputsContainer = jQuery('.zeevou-inputs-container');
    var buttonContainer = jQuery('.zeevou-button-container');


    inputsContainer.html("<div class='zeevou_pl-row zeevou-inputs-row' style='position:relative'></div>");
    var inputsRow = jQuery('.zeevou-inputs-row');

    if (zvCityRadio == 'Single City' && zvCityName != '') {
        inputsRow.append("<input type=hidden style='padding-left:25px;' class='zeevou-zv-input zeevou-placeholder2' type='text' placeholder='City, Address, Landmark, Property Name' id='zeevou-location-input' name='destination' >");
        inputsRow.append("<div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs zeevou-map-wrapper vertical-line-wrapper zeevou-add-white'><div style='width:100%' id='zeevou-date-table'><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs'><p id='zeevou-date-text'>Check-in - Check-out</p></div></div><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs' style='height:fit-content' ><input style='padding-left:25px; padding-right:10px; display:block; ' class='zeevou-zv-input zeevou-placeholder2' type='text' id='zeevou-zv-checkin-date'  value='' /><input type=hidden name=checkin id=zeevou-checkin><input type=hidden name=checkout id=zeevou-checkout></div></div></div></div>");
        inputsRow.append("<div class='zeevou_pl-col-2 zeevou_pl-col-sm-2 zeevou_pl-col-xs-2 zeevou-work-wrapper vertical-line-wrapper' style='width:1px;'><div style='width:100%; display:none;' id='zeevou-work-trip-table'><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs'><p id='zeevou-work-trip-text'>Work Trip</p></div></div><div class='zeevou_pl-row' style='margin-top: 5px;'><div id='zeevou-switch-div' class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs' style='height:fit-content' ><input type='checkbox' class='zeevou-js-switch' name='work' style='display:block; padding:15px 0px;' /></div></div></div></div>");
        inputsRow.append("<div class='zeevou_pl-col-4 zeevou_pl-col-sm-4 zeevou_pl-col-xs-4 zeevou-guest-wrapper '><div style='width:100%' id='zeevou-guest-table'><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs'><p id='zeevou-guest-text'>Guests</p></div></div><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs' style='height:fit-content' ><input readonly autocomplete='off' type='text' style='padding-left:25px; display:block; ' class='zeevou-zv-input zeevou-placeholder2 zeevou-dropdown-toggle' placeholder='2 Guests' value='2 guests' id='zeevou-guests'></div></div></div><input type=hidden name=adults id=zeevou-hid_adults><input type=hidden name=children id=zeevou-hid_children><input type=hidden name=infants id=zeevou-hid_infants></div>");

    } else {

        inputsRow.append("<div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs zeevou-map-wrapper vertical-line-wrapper zeevou-add-white'><div style='width:100%' id='zeevou-location-table'><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs'><p id='zeevou-location-text'>Where are you going?</p></div></div><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs' style='height:fit-content'><input style='padding-left:25px; display:block;' class='zeevou-zv-input zeevou-placeholder2' type='text' placeholder='City, Address, Landmark, Property Name' id='zeevou-location-input' name='destination' ></div></div></div></div>");
        inputsRow.append("<div class='zeevou_pl-col-1 zeevou_pl-col-sm-1 zeevou_pl-col-xs-1 zeevou-work-wrapper vertical-line-wrapper' style='display:none;'><div style='width:100%; display:none;' id='zeevou-work-trip-table'><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs'><p id='zeevou-work-trip-text'>Work Trip</p></div></div><div class='zeevou_pl-row' style='margin-top: 5px;'><div id='zeevou-switch-div' class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs' style='height:fit-content' ><input type='checkbox' class='zeevou-js-switch' name='work' style='display:block; padding:15px 0px;' /></div></div></div></div>");
        inputsRow.append("<div class='zeevou_pl-col-4 zeevou_pl-col-sm-4 zeevou_pl-col-xs-4 zeevou-date-wrapper vertical-line-wrapper'><div style='width:100%' id='zeevou-date-table'><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs'><p id='zeevou-date-text'>Check-in - Check-out</p></div></div><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs' style='height:fit-content' ><input style='padding-left:25px; padding-right:10px; display:block; ' class='zeevou-zv-input zeevou-placeholder2' type='text' id='zeevou-zv-checkin-date'  value='' /><input type=hidden name=checkin id=zeevou-checkin><input type=hidden name=checkout id=zeevou-checkout></div></div></div></div>");
        inputsRow.append("<div class='zeevou_pl-col-2 zeevou_pl-col-sm-2 zeevou_pl-col-xs-2 zeevou-guest-wrapper '><div style='width:100%' id='zeevou-guest-table'><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs'><p id='zeevou-guest-text'>Guests</p></div></div><div class='zeevou_pl-row'><div class='zeevou_pl-col zeevou_pl-col-sm zeevou_pl-col-xs' style='height:fit-content' ><input readonly autocomplete='off' type='text' style='padding-left:25px; display:block; ' class='zeevou-zv-input zeevou-placeholder2 zeevou-dropdown-toggle' placeholder='2 Guests' value='2 guests' id='zeevou-guests'></div></div></div><input type=hidden name=adults id=zeevou-hid_adults><input type=hidden name=children id=zeevou-hid_children><input type=hidden name=infants id=zeevou-hid_infants></div>");
    }

    buttonContainer.append("<div class='zeevou-button-wrapper' style='height:fit-content' ><button class='zeevou-search-button zeevou-white' ><i class='fa fa-search' style='color:rgba(0, 0, 0, 0.65); font-size:24px;'></i></button></div>");


    jQuery('body').append("<div style='top: 90px; display: none;' id='zeevou-guests-panel' class='zeevou-dropdown-menu' ></div>");
    var guestPanel = jQuery('#zeevou-guests-panel');
    guestPanel.append("<div><label>Adults</label><a href='#' class='zeevou-minus'><i class='fa fa-minus'></i></a><input type='text'  id='zeevou-adults' placeholder='2' value='2' title='Adults' class='zeevou-guest-type' readonly><a href='#' class='zeevou-plus'><i class='fa fa-plus'></i></a></div>");
    guestPanel.append("<div><label>Children</label><a href='#' class='zeevou-minus'><i class='fa fa-minus'></i></a><input type='text'  id='zeevou-children' placeholder='0' value='0' title='children' class='zeevou-guest-type' readonly><a href='#' class='zeevou-plus'><i class='fa fa-plus'></i></a></div>");
    guestPanel.append("<div><label>Infants</label><a href='#' class='zeevou-minus'><i class='fa fa-minus'></i></a><input type='text'  id='zeevou-infants' placeholder='0' value='0' title='infants' class='zeevou-guest-type' readonly><a href='#' class='zeevou-plus'><i class='fa fa-plus'></i></a></div>");



    var resizeFunct = function() {

        // console.log(jQuery('.zeevou-search-widget').width());

        var widgetSize = jQuery('.zeevou-search-widget').width();

        switch (true) {
            case widgetSize >= 810:
                jQuery('.zeevou-work-wrapper').addClass('zeevou-work-wrapper-xxl');
                jQuery('.zeevou-work-wrapper').removeClass('zeevou-work-wrapper-xl');

                jQuery('.zeevou-date-wrapper').addClass('zeevou-date-wrapper-xxl');
                jQuery('.zeevou-date-wrapper').removeClass('zeevou-date-wrapper-xl');


                jQuery('.zeevou-button-wrapper').addClass('zeevou-button-wrapper-xxl');
                jQuery('.zeevou-button-wrapper').removeClass('zeevou-button-wrapper-md');

                jQuery('.zeevou-button-container').addClass('zeevou-button-container-xxl');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-md');

                jQuery('.zeevou-inputs-container').addClass('zeevou-inputs-container-xxl');
                jQuery('.zeevou-inputs-container').removeClass('zeevou-inputs-container-md');

                jQuery('.zeevou-search-button').addClass('zeevou-search-button-xxl');
                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-md');


                jQuery('#zeevou-work-trip-text').addClass('zeevou-work-trip-text-xxl');
                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-sm');

                jQuery('#zeevou-location-text').addClass('zeevou-location-text-xxl');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-sm');

                jQuery('#zeevou-date-text').addClass('zeevou-date-text-xxl');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-sm');

                jQuery('#zeevou-guest-text').addClass('zeevou-guest-text-xxl');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-sm');

                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-sm');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-sm');


                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-xs');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-xs');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-xs');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-xs');

                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-xs');
                jQuery('.zeevou-search-button i').removeClass('zeevou-search-button_i-xs');
                jQuery('.zeevou-placeholder2').removeClass('zeevou-placeholder2-xs');
                jQuery('.zeevou-placeholder2').addClass('zeevou-placeholder2-xxl');

                jQuery('#zeevou-work-trip-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-location-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-date-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-guest-table').removeClass('zeevou-search-tables-xs');

                jQuery('#zeevou-work-trip-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-location-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-date-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-guest-table').addClass('zeevou-search-tables-xxl');


                break;
            case widgetSize < 810 && widgetSize >= 600:
                jQuery('.zeevou-work-wrapper').addClass('zeevou-work-wrapper-xl');
                jQuery('.zeevou-work-wrapper').removeClass('zeevou-work-wrapper-xxl');

                jQuery('.zeevou-date-wrapper').addClass('zeevou-date-wrapper-xl');
                jQuery('.zeevou-date-wrapper').removeClass('zeevou-date-wrapper-xxl');


                jQuery('.zeevou-button-wrapper').addClass('zeevou-button-wrapper-xxl');
                jQuery('.zeevou-button-wrapper').removeClass('zeevou-button-wrapper-md');

                jQuery('.zeevou-button-container').addClass('zeevou-button-container-xxl');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-md');

                jQuery('.zeevou-inputs-container').addClass('zeevou-inputs-container-xxl');
                jQuery('.zeevou-inputs-container').removeClass('zeevou-inputs-container-md');

                jQuery('.zeevou-search-button').addClass('zeevou-search-button-xxl');
                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-md');


                jQuery('#zeevou-work-trip-text').addClass('zeevou-work-trip-text-xxl');
                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-sm');

                jQuery('#zeevou-location-text').addClass('zeevou-location-text-xxl');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-sm');

                jQuery('#zeevou-date-text').addClass('zeevou-date-text-xxl');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-sm');

                jQuery('#zeevou-guest-text').addClass('zeevou-guest-text-xxl');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-sm');

                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-sm');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-sm');


                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-xs');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-xs');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-xs');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-xs');

                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-xs');
                jQuery('.zeevou-search-button i').removeClass('zeevou-search-button_i-xs');
                jQuery('.zeevou-placeholder2').removeClass('zeevou-placeholder2-xs');
                jQuery('.zeevou-placeholder2').addClass('zeevou-placeholder2-xxl');

                jQuery('#zeevou-work-trip-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-location-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-date-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-guest-table').removeClass('zeevou-search-tables-xs');

                jQuery('#zeevou-work-trip-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-location-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-date-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-guest-table').addClass('zeevou-search-tables-xxl');

                break;
            case widgetSize < 600 && widgetSize >= 464:
                jQuery('.zeevou-work-wrapper').addClass('zeevou-work-wrapper-xl');
                jQuery('.zeevou-work-wrapper').removeClass('zeevou-work-wrapper-xxl');

                jQuery('.zeevou-date-wrapper').addClass('zeevou-date-wrapper-xl');
                jQuery('.zeevou-date-wrapper').removeClass('zeevou-date-wrapper-xxl');


                jQuery('.zeevou-button-wrapper').addClass('zeevou-button-wrapper-md');
                jQuery('.zeevou-button-wrapper').removeClass('zeevou-button-wrapper-xxl');

                jQuery('.zeevou-button-container').addClass('zeevou-button-container-md');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-xxl');

                jQuery('.zeevou-inputs-container').addClass('zeevou-inputs-container-md');
                jQuery('.zeevou-inputs-container').removeClass('zeevou-inputs-container-xxl');

                jQuery('.zeevou-search-button').addClass('zeevou-search-button-md');
                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-xxl');


                jQuery('#zeevou-work-trip-text').addClass('zeevou-work-trip-text-xxl');
                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-sm');

                jQuery('#zeevou-location-text').addClass('zeevou-location-text-xxl');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-sm');

                jQuery('#zeevou-date-text').addClass('zeevou-date-text-xxl');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-sm');

                jQuery('#zeevou-guest-text').addClass('zeevou-guest-text-xxl');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-sm');

                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-sm');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-sm');


                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-xs');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-xs');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-xs');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-xs');

                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-xs');
                jQuery('.zeevou-search-button i').removeClass('zeevou-search-button_i-xs');
                jQuery('.zeevou-placeholder2').removeClass('zeevou-placeholder2-xs');
                jQuery('.zeevou-placeholder2').addClass('zeevou-placeholder2-xxl');

                jQuery('#zeevou-work-trip-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-location-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-date-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-guest-table').removeClass('zeevou-search-tables-xs');

                jQuery('#zeevou-work-trip-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-location-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-date-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-guest-table').addClass('zeevou-search-tables-xxl');

                break;
            case widgetSize < 464 && widgetSize >= 275:
                jQuery('.zeevou-work-wrapper').addClass('zeevou-work-wrapper-xl');
                jQuery('.zeevou-work-wrapper').removeClass('zeevou-work-wrapper-xxl');

                jQuery('.zeevou-date-wrapper').addClass('zeevou-date-wrapper-xl');
                jQuery('.zeevou-date-wrapper').removeClass('zeevou-date-wrapper-xxl');


                jQuery('.zeevou-button-wrapper').addClass('zeevou-button-wrapper-md');
                jQuery('.zeevou-button-wrapper').removeClass('zeevou-button-wrapper-xxl');

                jQuery('.zeevou-button-container').addClass('zeevou-button-container-md');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-xxl');

                jQuery('.zeevou-inputs-container').addClass('zeevou-inputs-container-md');
                jQuery('.zeevou-inputs-container').removeClass('zeevou-inputs-container-xxl');

                jQuery('.zeevou-search-button').addClass('zeevou-search-button-md');
                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-xxl');


                jQuery('#zeevou-work-trip-text').addClass('zeevou-work-trip-text-sm');
                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-xxl');

                jQuery('#zeevou-location-text').addClass('zeevou-location-text-sm');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-xxl');

                jQuery('#zeevou-date-text').addClass('zeevou-date-text-sm');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-xxl');

                jQuery('#zeevou-guest-text').addClass('zeevou-guest-text-sm');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-xxl');

                jQuery('#zeevou-guest-text').addClass('zeevou-guest-text-sm');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-xxl');

                jQuery('.zeevou-search-button').addClass('zeevou-search-button-sm');
                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-md');

                jQuery('.zeevou-button-container').addClass('zeevou-button-container-sm');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-md');


                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-xs');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-xs');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-xs');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-xs');

                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-xs');
                jQuery('.zeevou-search-button i').removeClass('zeevou-search-button_i-xs');
                jQuery('.zeevou-placeholder2').removeClass('zeevou-placeholder2-xs');
                jQuery('.zeevou-placeholder2').addClass('zeevou-placeholder2-xxl');

                jQuery('#zeevou-work-trip-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-location-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-date-table').removeClass('zeevou-search-tables-xs');
                jQuery('#zeevou-guest-table').removeClass('zeevou-search-tables-xs');

                jQuery('#zeevou-work-trip-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-location-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-date-table').addClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-guest-table').addClass('zeevou-search-tables-xxl');

                break;

            case widgetSize < 275 && widgetSize >= 50:

                // 810
                jQuery('.zeevou-work-wrapper').addClass('zeevou-work-wrapper-xl');
                jQuery('.zeevou-work-wrapper').removeClass('zeevou-work-wrapper-xxl');

                jQuery('.zeevou-date-wrapper').addClass('zeevou-date-wrapper-xl');
                jQuery('.zeevou-date-wrapper').removeClass('zeevou-date-wrapper-xxl');

                // 600
                jQuery('.zeevou-button-wrapper').addClass('zeevou-button-wrapper-md');
                jQuery('.zeevou-button-wrapper').removeClass('zeevou-button-wrapper-xxl');

                jQuery('.zeevou-button-container').addClass('zeevou-button-container-md');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-xxl');

                jQuery('.zeevou-inputs-container').addClass('zeevou-inputs-container-md');
                jQuery('.zeevou-inputs-container').removeClass('zeevou-inputs-container-xxl');

                jQuery('.zeevou-search-button').addClass('zeevou-search-button-md');
                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-xxl');

                // 464
                jQuery('#zeevou-work-trip-text').addClass('zeevou-work-trip-text-sm');
                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-xxl');

                jQuery('#zeevou-location-text').addClass('zeevou-location-text-sm');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-xxl');

                jQuery('#zeevou-date-text').addClass('zeevou-date-text-sm');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-xxl');

                jQuery('#zeevou-guest-text').addClass('zeevou-guest-text-sm');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-xxl');

                jQuery('#zeevou-guest-text').addClass('zeevou-guest-text-sm');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-xxl');

                jQuery('.zeevou-search-button').addClass('zeevou-search-button-sm');
                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-md');

                jQuery('.zeevou-button-container').addClass('zeevou-button-container-sm');
                jQuery('.zeevou-button-container').removeClass('zeevou-button-container-md');


                //275
                jQuery('#zeevou-work-trip-text').addClass('zeevou-work-trip-text-xs');
                jQuery('#zeevou-work-trip-text').removeClass('zeevou-work-trip-text-sm');

                jQuery('#zeevou-location-text').addClass('zeevou-location-text-xs');
                jQuery('#zeevou-location-text').removeClass('zeevou-location-text-sm');

                jQuery('#zeevou-date-text').addClass('zeevou-date-text-xs');
                jQuery('#zeevou-date-text').removeClass('zeevou-date-text-sm');

                jQuery('#zeevou-guest-text').addClass('zeevou-guest-text-xs');
                jQuery('#zeevou-guest-text').removeClass('zeevou-guest-text-sm');

                jQuery('.zeevou-search-button').addClass('zeevou-search-button-xs');
                jQuery('.zeevou-search-button').removeClass('zeevou-search-button-sm');

                jQuery('.zeevou-search-button i').addClass('zeevou-search-button_i-xs');
                jQuery('.zeevou-placeholder2').addClass('zeevou-placeholder2-xs');
                jQuery('.zeevou-placeholder2').removeClass('zeevou-placeholder2-xxl');

                jQuery('#zeevou-work-trip-table').addClass('zeevou-search-tables-xs');
                jQuery('#zeevou-location-table').addClass('zeevou-search-tables-xs');
                jQuery('#zeevou-date-table').addClass('zeevou-search-tables-xs');
                jQuery('#zeevou-guest-table').addClass('zeevou-search-tables-xs');

                jQuery('#zeevou-work-trip-table').removeClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-location-table').removeClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-date-table').removeClass('zeevou-search-tables-xxl');
                jQuery('#zeevou-guest-table').removeClass('zeevou-search-tables-xxl');


                break;

            case widgetSize < 50:

                break;
        }



    }

    // var revapi = jQuery(document).ready(function() {

    //     jQuery('#slider-1').show().revolution({

    //         /* SLIDER SETTINGS HERE */

    //     });
    // });

    // // revapi.one('revolution.slide.onloaded', function() {

    // //     console.log('slider loaded');

    // // });

    // revapi.on('revolution.slide.onafterswap', function(event, data) {


    //     console.log('slider after changed');
    //     resizeFunct();

    // });


    // resizeFunct();

    jQuery(window).on('load', function() {
        resizeFunct();
    });

    jQuery(document).ready(function($) {

        resizeFunct();
        calculateGuests();
        updateGuestsValue();

        $(window).resize(function() {

            resizeFunct();

            var pos = $('.zeevou-dropdown-toggle').offset();
            var width = $('.zeevou-dropdown-toggle').width();
            $(".zeevou-dropdown-menu").css({ "left": (pos.left - 16) + "px", "top": (pos.top + 28) + "px" });


        })


    });

    // window.addEventListener("pageshow", function(event) {
    //     var historyTraversal = event.persisted ||
    //         (typeof window.performance != "undefined" &&
    //             window.performance.navigation.type === 2);
    //     if (historyTraversal) {
    //         // Handle page restore.
    //         calculateGuests();
    //         updateGuestsValue();
    //     }
    // });


    jQuery(function($) {

        $('.zeevou-dropdown-toggle').on('click', function(event) {
            var pos = $(this).offset();
            var width = $(this).width();
            $(".zeevou-dropdown-menu").css({ "left": (pos.left - 16) + "px", "top": (pos.top + 28) + "px" });
            $('.zeevou-dropdown-menu').slideToggle();
            event.stopPropagation();
        });

        $('.zeevou-dropdown-menu').on('click', function(event) {
            event.stopPropagation();
        });

        $(window).on('click', function() {
            $('.zeevou-dropdown-menu').slideUp();
        });

    });

    var elems = document.querySelectorAll('.zeevou-js-switch');
    for (var i = 0; i < elems.length; i++) {
        var switchery = new Switchery(elems[i], {
            size: 'small'
        });
    }



    var calculateGuests = function() {
        if (jQuery('#zeevou-infants').val() == 0) {
            jQuery('#zeevou-guests').val(parseInt(jQuery('#zeevou-adults').val()) + parseInt(jQuery('#zeevou-children').val()) + ' guests');
        } else {
            jQuery('#zeevou-guests').val(parseInt(jQuery('#zeevou-adults').val()) + parseInt(jQuery('#zeevou-children').val()) + ' guests, ' + parseInt(jQuery('#zeevou-infants').val()) + ' infants');
        }
    }

    var updateGuestsValue = function() {
        jQuery('#zeevou-hid_adults').val(parseInt(jQuery('#zeevou-adults').val()));
        jQuery('#zeevou-hid_infants').val(parseInt(jQuery('#zeevou-infants').val()));
        jQuery('#zeevou-hid_children').val(parseInt(jQuery('#zeevou-children').val()));
    }


    jQuery('.zeevou-plus').click(function(e) {
        var subguests = jQuery(this).parent().find('.zeevou-guest-type');
        var num = parseInt(jQuery.trim(subguests.val()));
        jQuery(this).parent().find('.zeevou-guest-type').val(++num);
        calculateGuests();
        updateGuestsValue();
        e.preventDefault();
        return false;
    });
    jQuery('.zeevou-minus').click(function(e) {
        var subguests = jQuery(this).parent().find('.zeevou-guest-type');
        var num = parseInt(jQuery.trim(subguests.val()));
        if (num > 0) {
            jQuery(this).parent().find('.zeevou-guest-type').val(--num);
        }
        calculateGuests();
        updateGuestsValue();
        e.preventDefault();
        return false;
    });


    //================================================================================================

    var today = moment();
    var lastDay = moment().add(zvDefaultAccDuration, 'days');
    // var today_formatted = $.format.date(today, 'E, MMM dd');
    // var dayaftertomorrow_formatted = $.format.date(dayaftertomorrow, 'E, MMM dd');
    // $('#zv-checkin-date').attr('placeholder', today_formatted + ' - ' + dayaftertomorrow);
    // $('#zv-checkout-date').attr('placeholder', dayaftertomorrow_formatted);
    jQuery('#zeevou-checkin').val(today.format('YYYYMMDD'));
    jQuery('#zeevou-checkout').val(lastDay.format('YYYYMMDD'));

    jQuery(function($) {
        $('input[id="zeevou-zv-checkin-date"]').daterangepicker({

            startDate: today,
            endDate: lastDay,
            minDate: new Date(),
            // maxYear: parseInt(moment().format('YYYY'), 10),
            opens: 'right',
            autoApply: true,
            alwaysShowCalendars: true,
            locale: {
                format: 'DD MMM YYYY'
            }
        }, function(start, end, label) {


            if (end.format('DD/MM/YYYY') == start.format('DD/MM/YYYY')) {
                $('#zeevou-zv-checkin-date').data('daterangepicker').setEndDate(moment(start.format('YYYYMMDD'), "YYYYMMDD").add(1, 'days'));

                // console.log('start: ' + start.format('MM/DD/YYYY') + ' ' + 'end: ' + end.format('MM/DD/YYYY'));
                $('#zeevou-checkin').val(start.format('YYYYMMDD'));
                $('#zeevou-checkout').val(moment(start.format('YYYYMMDD'), "YYYYMMDD").add(1, 'days').format('YYYYMMDD'));
            } else {
                $('#zeevou-checkin').val(start.format('YYYYMMDD'));
                $('#zeevou-checkout').val(end.format('YYYYMMDD'));
            }


        });
    });


    //================================================================================================
    //Apply Settings==================================================================================
    //================================================================================================

    if (zvCityRadio == 'Single City' && zvCityName != '') {
        jQuery('#zeevou-location-input').val(zvCityName);
        jQuery("#zeevou-location-input").prop('readonly', true);
    }

    if (zvMaxWidth != '') {

        jQuery("<style> .zeevou-search-widget-width-setting { max-width: " + zvMaxWidth + "% !important;  }</style>").appendTo("head");

        jQuery('.zeevou-search-widget').addClass('zeevou-search-widget-width-setting');
        resizeFunct();
    }

    if (zvBorderRadius != '') {

        jQuery("<style> .zeevou-search-widget-border-setting { border-radius: " + zvBorderRadius + "px !important;  }</style>").appendTo("head");

        jQuery('.zeevou-search-button').addClass('zeevou-search-widget-border-setting');
        jQuery('.zeevou-inputs-container').addClass('zeevou-search-widget-border-setting');

    }

    if (zvAlignRadio == 'center' || zvAlignRadio == '') {
        jQuery('.zeevou-search-widget').addClass('zeevou-center');
    }

    if (zvAlignRadio == 'right') {
        jQuery('.zeevou-search-widget').addClass('zeevou-right');
    }

    if (zvAlignRadio == 'left') {
        jQuery('.zeevou-search-widget').addClass('zeevou-left');
    }

    if (zvDefaultAdultsNo != '') {
        jQuery('#zeevou-adults').val(zvDefaultAdultsNo);
    }
    if (zvDefaultChildrenNo != '') {
        jQuery('#zeevou-children').val(zvDefaultChildrenNo);
    }
    if (zvDefaultInfantsNo != '') {
        jQuery('#zeevou-infants').val(zvDefaultInfantsNo);
    }
}

function disableDate(disabledDate) {

    // $('input[id="zeevou-property_date_input"]').daterangepicker({beforeShowDay: function(dt) {
    //     var datestring = $.datepicker.formatDate('dd-mm-yy', dt);
    // }});
    // var drp = jQuery('#zeevou-property_date_input').data('daterangepicker');
    // var startDate = jQuery('#zeevou-property_date_input').data('daterangepicker').startDate._d;
    // console.log(startDate);

    // jQuery('.date-' + disabledDate + '').css({ "background-color": "grey" });
    // var newdate = moment(disabledDate, "YYYYMMDD").add(1, 'days');
    var dateDisabledDate = moment(disabledDate, "YYYY-MM-DD");
    var yesterdayDate = moment(dateDisabledDate, "YYYY-MM-DD").subtract(1, 'days');



    jQuery('.date-' + disabledDate + '').css({ "background-color": "grey" });
    jQuery('.date-' + disabledDate + '').removeClass("available");
    jQuery('.date-' + disabledDate + '').addClass("off");
    jQuery('.date-' + disabledDate + '').addClass("disabled");
    jQuery('.date-' + disabledDate + '').addClass("manualdisabled");


    if (!jQuery('.date-' + yesterdayDate.format("YYYY-MM-DD") + '').hasClass("disabled") && !jQuery('.date-' + yesterdayDate.format("YYYY-MM-DD") + '').hasClass("firstmdisabled")) {
        // console.log(disabledDate);
        jQuery('.date-' + disabledDate + '').removeClass("disabled");
        jQuery('.date-' + disabledDate + '').removeClass("off");
        jQuery('.date-' + disabledDate + '').addClass("firstmdisabled");
        jQuery('.date-' + disabledDate + '').addClass("available");

        // if (!jQuery('.date-' + disabledDate + '').hasClass("ends"))
        if (jQuery('.date-' + disabledDate + '').hasClass("end-date")) {
            jQuery('.date-' + disabledDate + '').addClass('zeevou-triangle-end');
        }
    }


}

function getPropertyAvailability(prop_id) {
    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';

    return new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: ajaxUrl,
            data: {
                action: 'zeevougetpropertyavailability',
                "property": prop_id
            },
            method: 'POST',
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
    // }

}

function zeevouPropertyContentCreation(prop_id) {

    var zvPropertyPageUrl = getPageSettings.zvPropertyPageUrl;
    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';

    var zeevouPropertyForm = jQuery('#zeevou-property-form');
    var zeevouPropertyWidget = jQuery('.zeevou-property_widget');
    zeevouPropertyWidget.append(
        jQuery('<div />', { 'id': 'zeevou-search-loading-container' }).append(
            jQuery('<img />', { 'class': 'zeevou-loading-img', 'id': 'zeevou-search-widget-loading-img', 'src': zvpluginUrl + '/zeevou/img/loading1.gif' }).append(

            )
        )
    );


    zeevouPropertyForm.append("<p class='zeevou-property_text' id='zeevou-property_guests_text' >Guests</p>");
    zeevouPropertyForm.append("<input readonly autocomplete='off' type='text'  class='zeevou-property_input zeevou-property-dropdown-toggle' placeholder='2 Guests' value='2 Guests' id='zeevou-property_guests_input'>");
    zeevouPropertyForm.append("<input type=hidden name=adults id=zeevou-property_hid_adults><input type=hidden name=children id=zeevou-property_hid_children><input type=hidden name=infants id=zeevou-property_hid_infants>");

    zeevouPropertyForm.append("<p class='zeevou-property_text' id='zeevou-property_date_text' >Check-in - Check-out</p>");
    zeevouPropertyForm.append("<input autocomplete='off' class='zeevou-property_input' type='text' id='zeevou-property_date_input'  value='' />");
    zeevouPropertyForm.append("<input type=hidden name=checkin id=zeevou-property_checkin><input type=hidden name=checkout id=zeevou-property_checkout>");
    zeevouPropertyForm.append("<div class='zeevou-property-button-wrapper' style='height:fit-content' ><button class='zeevou-property-search-button zeevou-property-white' ><i class='fa fa-search' style='color:rgba(0, 0, 0, 0.65); font-size:20px;'></i></button></div>");

    zeevouPropertyForm.hide();
    jQuery.when(getPropertyAvailability(prop_id)).done(function(data) {
        jQuery('#zeevou-search-loading-container').hide();
        zeevouPropertyForm.show();

        zvAvailabilityArr = JSON.parse(data);

        if (zvAvailabilityArr === 0) {
            console.log("not connected to a property");
            // jQuery('#zeevou-property-form').append(
            //     jQuery('<div />', {
            //         'class': 'zeevou-error-text',
            //         'id': 'zeevou-error-text-cannot-connect',
            //         'text': 'This page is not connected to a property'
            //     })
            // );
            return;
        }

        if (zvAvailabilityArr == null) {
            console.log("cannot connect");
            // jQuery('#zeevou-property-form').append(
            //     jQuery('<div />', { 'class': 'zeevou-error-text', 'id': 'zeevou-error-text-cannot-connect', 'text': 'Could not connect to the server. Please try again.' })
            //
            // );
            return;
        }


        zvAvailabilityArr.reverse();

        var minstayVal = 1;
        var maxstayVal = 999;




        //================================================================================================
        var prop_today = moment();
        var prop_lastDay = moment().add(zvDefaultAccDuration, 'days');

        //date placeholder definition
        for (let i = 0; i < zvAvailabilityArr.length; i++) {
            var mydate = zvAvailabilityArr[i];
            var prop_today_date = prop_today.format("YYYY-MM-DD");
            if (mydate.date == prop_today_date) {


                var j = i;


                mynewdate = zvAvailabilityArr[j];
                minstayVal = mynewdate.min_stay;

            }

        }
        //============================

        var tri_end = '';
        var errShowing = false;
        jQuery(function($) {
            $('input[id="zeevou-property_date_input"]').daterangepicker({

                // startDate: prop_today,
                // endDate: prop_lastDay,
                minDate: new Date(),
                // maxYear: parseInt(moment().format('YYYY'), 10),
                opens: 'right',
                autoUpdateInput: false,
                // autoApply: true,
                alwaysShowCalendars: true,
                locale: {
                    format: 'DD MMM YYYY',
                    cancelLabel: 'Clear Dates'
                }
            }, function(start, end, label) {
                tri_end = '';

                if (end.format('DD/MM/YYYY') == start.format('DD/MM/YYYY')) {
                    if (!jQuery('.date-' + start.format('YYYY-MM-DD') + '').hasClass("firstmdisabled")) {
                        $('#zeevou-property_date_input').data('daterangepicker').setEndDate(moment(start.format('YYYYMMDD'), "YYYYMMDD").add(1, 'days'));
                        end = moment(start.format('YYYYMMDD'), "YYYYMMDD").add(1, 'days');

                        // console.log('start: ' + start.format('MM/DD/YYYY') + ' ' + 'end: ' + end.format('MM/DD/YYYY'));
                        $('#zeevou-property_checkin').val(start.format('YYYYMMDD'));
                        $('#zeevou-property_checkout').val(moment(start.format('YYYYMMDD'), "YYYYMMDD").add(1, 'days').format('YYYYMMDD'));
                    }
                } else {
                    $('#zeevou-property_checkin').val(start.format('YYYYMMDD'));
                    $('#zeevou-property_checkout').val(end.format('YYYYMMDD'));

                    tempStart = start;
                    while (tempStart.format('YYYYMMDD') < end.format('YYYYMMDD')) {

                        if (jQuery('.date-' + tempStart.format('YYYY-MM-DD') + '').hasClass("manualdisabled")) {
                            // console.log(jQuery('.date-' + tempStart.format('YYYY-MM-DD') + '').hasClass("manualdisabled"));

                            jQuery('.date-' + tempStart.format('YYYY-MM-DD') + '').addClass('zeevou-triangle-end');
                            tri_end = 'date-' + tempStart.format('YYYY-MM-DD') + '';
                            // jQuery('.date-' + tempStart.format('YYYY-MM-DD') + '').css({ "background-color": "blue" });
                            $('#zeevou-property_date_input').data('daterangepicker').setEndDate(moment(tempStart.format('YYYYMMDD'), "YYYYMMDD"));
                            $('#zeevou-property_checkout').val(moment(tempStart.format('YYYYMMDD'), "YYYYMMDD").format('YYYYMMDD'));
                            end = tempStart;
                            break;
                        }

                        tempStart = moment(tempStart.format('YYYYMMDD'), "YYYYMMDD").add(1, 'days');

                    }
                }

                var classList = jQuery('.date-' + start.format('YYYY-MM-DD') + '').attr("class");

                // Creating class array by splitting class list string
                var classArr = classList.split(/\s+/);

                $.each(classArr, function(index, value) {
                    if (value.startsWith("zv-min-")) {
                        minstayVal = parseInt(value.replace("zv-min-", ""));

                    }
                    if (value.startsWith("zv-max-")) {
                        maxstayVal = parseInt(value.replace("zv-max-", ""));

                    }


                });

                jQuery('#zeevou-property-daterange-err').hide();
                errShowing = false;

                // console.log(end.diff(start, 'days'));
                // jQuery('.date-' + start.format('YYYY-MM-DD') + '')
                if (end.diff(start, 'days') < minstayVal) {

                    jQuery('#zeevou-property-daterange-err').html("We're sorry. The minimum stay for the selected date range in this property is " + minstayVal + " nights");
                    jQuery('#zeevou-property-daterange-err').show();
                    errShowing = true;

                    jQuery('#zeevou-booking_widget').hide();

                } else {



                }

                if (end.diff(start, 'days') > maxstayVal) {

                    jQuery('#zeevou-property-daterange-err').html("We're sorry. The maximum stay for the selected date range in this property is " + maxstayVal + " nights");
                    jQuery('#zeevou-property-daterange-err').show();
                    errShowing = true;

                    jQuery('#zeevou-booking_widget').hide();

                } else {




                }


            });


            $('input[id="zeevou-property_date_input"]').on('showCalendar.daterangepicker', function(ev, picker) {


                var ajaxUrl = zvAdminUrl + 'admin-ajax.php';


                for (let i = 0; i < zvAvailabilityArr.length; i++) {
                    const element = zvAvailabilityArr[i];
                    if (element.availability == 0) {
                        disableDate(element.date);
                    } else {}
                    jQuery('.date-' + element.date + '').addClass("zv-min-" + element.min_stay);
                    jQuery('.date-' + element.date + '').addClass("zv-max-" + element.max_stay);
                }

                if (tri_end != '') {

                    jQuery('.' + tri_end + ':not(.ends)').addClass('zeevou-triangle-end');

                }



            });
            $('input[id="zeevou-property_date_input"]').on('clickDate.daterangepicker', function(ev, picker) {
                // console.log("clicked " + ev.target);
                // console.log(picker.startDate.format('YYYY-MM-DD'));
                // console.log(picker.endDate.format('YYYY-MM-DD'));
                // disableDate("2021-02-03");
                // disableDate("2021-02-04");

                for (let i = 0; i < zvAvailabilityArr.length; i++) {
                    const element = zvAvailabilityArr[i];
                    if (element.availability == 0) {
                        // console.log("date: " + element.date);
                        disableDate(element.date);
                    } else {
                        // console.log("available: " + element.date);
                    }
                }
            });



            $('input[id="zeevou-property_date_input"]').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
                picker.setStartDate(0);
                picker.setEndDate(0);


                $('#zeevou-property_date_input').data('daterangepicker').show();
            });


            $('input[id="zeevou-property_date_input"]').on('apply.daterangepicker', function(ev, picker) {
                // console.log("apply " + ev.target);
                $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
                if (errShowing) {
                    $('#zeevou-property_date_input').data('daterangepicker').show();

                }
            });

            jQuery('.daterangepicker').prepend("<p id='zeevou-property-daterange-err'></p>");

        });






        // ============================================Property Guests Dropdown==============================================

        jQuery('body').append("<div style='top: 90px; display: none;' id='zeevou-property-guests-panel' class='zeevou-property-dropdown-menu' ></div>");
        var propGuestPanel = jQuery('#zeevou-property-guests-panel');
        propGuestPanel.append("<div><label>Adults</label><a href='#' class='zeevou-property-minus'><i class='fa fa-minus'></i></a><input type='text'  id='zeevou-property-adults' placeholder='2' value='2' title='Adults' class='zeevou-property-guest-type' readonly><a href='#' class='zeevou-property-plus'><i class='fa fa-plus'></i></a></div>");
        propGuestPanel.append("<div><label>Children</label><a href='#' class='zeevou-property-minus'><i class='fa fa-minus'></i></a><input type='text'  id='zeevou-property-children' placeholder='0' value='0' title='children' class='zeevou-property-guest-type' readonly><a href='#' class='zeevou-property-plus'><i class='fa fa-plus'></i></a></div>");
        propGuestPanel.append("<div style='display:none;'><label>Infants</label><a href='#' class='zeevou-property-minus'><i class='fa fa-minus'></i></a><input type='text'  id='zeevou-property-infants' placeholder='0' value='0' title='infants' class='zeevou-property-guest-type' readonly><a href='#' class='zeevou-property-plus'><i class='fa fa-plus'></i></a></div>");


        jQuery(function($) {

            $('.zeevou-property-dropdown-toggle').on('click', function(event) {
                var pos = $(this).offset();
                var width = $(this).width();
                var height = $(this).height();
                $(".zeevou-property-dropdown-menu").css({ "left": (pos.left - 1) + "px", "top": (pos.top + height + 10) + "px" });
                $('.zeevou-property-dropdown-menu').slideToggle();
                event.stopPropagation();
            });

            $('.zeevou-property-dropdown-menu').on('click', function(event) {
                event.stopPropagation();
            });

            $(window).on('click', function() {
                $('.zeevou-property-dropdown-menu').slideUp();
            });

        });





        var calculateGuests = function() {
            if (jQuery('#zeevou-property-infants').val() == 0) {
                jQuery('#zeevou-property_guests_input').val(parseInt(jQuery('#zeevou-property-adults').val()) + parseInt(jQuery('#zeevou-property-children').val()) + ' Guests');
            } else {
                jQuery('#zeevou-property_guests_input').val(parseInt(jQuery('#zeevou-property-adults').val()) + parseInt(jQuery('#zeevou-property-children').val()) + ' Guests, ' + parseInt(jQuery('#zeevou-property-infants').val()) + ' Infants');
            }
        }

        var updateGuestsValue = function() {
            jQuery('#zeevou-property_hid_adults').val(parseInt(jQuery('#zeevou-property-adults').val()));
            jQuery('#zeevou-property_hid_infants').val(parseInt(jQuery('#zeevou-property-infants').val()));
            jQuery('#zeevou-property_hid_children').val(parseInt(jQuery('#zeevou-property-children').val()));
        }


        jQuery('.zeevou-property-plus').click(function(e) {
            var subguests = jQuery(this).parent().find('.zeevou-property-guest-type');
            var num = parseInt(jQuery.trim(subguests.val()));
            jQuery(this).parent().find('.zeevou-property-guest-type').val(++num);
            calculateGuests();
            updateGuestsValue();
            e.preventDefault();
            return false;
        });
        jQuery('.zeevou-property-minus').click(function(e) {
            var subguests = jQuery(this).parent().find('.zeevou-property-guest-type');
            var num = parseInt(jQuery.trim(subguests.val()));
            if (num > 0) {
                jQuery(this).parent().find('.zeevou-property-guest-type').val(--num);
            }
            calculateGuests();
            updateGuestsValue();
            e.preventDefault();
            return false;
        });


        jQuery(document).ready(function($) {


            calculateGuests();
            updateGuestsValue();

            $(window).resize(function() {



                var pos = $('.zeevou-property-dropdown-toggle').offset();
                var width = $('.zeevou-property-dropdown-toggle').width();
                var height = $('.zeevou-property-dropdown-toggle').height();
                $(".zeevou-property-dropdown-menu").css({ "left": (pos.left - 1) + "px", "top": (pos.top + height + 10) + "px" });


            })


        });



        //=======================search button click============================
        jQuery('.zeevou-property-search-button').click(function() {

            if (jQuery('#zeevou-property_date_input').val() == "") {
                return;
            }

            var zv_checkin = jQuery('input[name="checkin"]').val();
            var zv_checkout = jQuery('input[name="checkout"]').val();
            var zv_adults = parseInt(jQuery('input[name="adults"]').val());
            var zv_children = parseInt(jQuery('input[name="children"]').val());


            zv_checkin_moment = moment(zv_checkin, "YYYYMMDD");
            zv_checkout_moment = moment(zv_checkout, "YYYYMMDD");
            zv_nights = zv_checkout_moment.diff(zv_checkin_moment, 'days');

            jQuery('.zeevou-price-select').prop("selectedIndex", 0);

            if (jQuery('#zeevou-booking_widget').length) {

                if (zv_nights < minstayVal) {
                    jQuery('#zeevou-booking_widget').hide();
                    return;
                } else {
                    jQuery('#zeevou-booking_widget').show();
                }

                if (zv_nights > maxstayVal) {
                    jQuery('#zeevou-booking_widget').hide();
                    return;
                } else {
                    jQuery('#zeevou-booking_widget').show();
                }



            } else {
                finalPropertySearchUrl = zvPropertyPageUrl + '?checkin=' + zv_checkin + '&checkout=' + zv_checkout + '&adults=' + zv_adults;
                window.location.href = finalPropertySearchUrl;
                return;

            }




            jQuery('.zeevou-checkin-date').text(zv_checkin_moment.format('ddd, MMM DD, YYYY') + " - " + zv_checkout_moment.format('ddd, MMM DD, YYYY'));

            var night_text = "nights";
            var guest_text = "guests";
            zv_adults += zv_children;
            // console.log(zv_adults);

            if (zv_adults == 1)
                guest_text = "guest";
            if (zv_nights == 1)
                night_text = "night";

            jQuery('.zeevou-checkin-nights').text(zv_nights + " " + night_text + " " + zv_adults + " " + guest_text);

            jQuery('#zeevou-reserve-modal-finalise-button').show();
            jQuery('#zeevou-reserve-modal-cancel-button').show();
            jQuery('#zeevou-reserve-modal-message-error').addClass("zeevou-hidden");
            jQuery('#zeevou-reserve-modal-message-success').addClass("zeevou-hidden");

        });
    });



}


function zeevouDescriptionContentCreation(property) {
    // console.log(property);

    // description = 'this is the desc test';

    var zeevou_description_widget = jQuery('#zeevou-description_widget');

    zeevou_description_widget.append(property.description);
}

function getPropertyUnitImages(prop_id) {
    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';

    return new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: ajaxUrl,
            data: {
                action: 'zeevoupropertyunitimages',
                "property": prop_id
            },
            method: 'POST',
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
    // }

}

function zeevouImagesContentCreation(property) {

    var images = property.property_images;
    jQuery.when(getPropertyUnitImages(property.id)).done(function(data) {

        units = JSON.parse(data);
        jQuery.each(units, function(ukey, uvalue) {
            var unitImages = uvalue.unit_images;

            jQuery.each(uvalue.unit_images, function(ikey, ivalue) {
                images.push(ivalue);
            });


        });

        images.forEach(zeevouImagesPrint);

    });

}

function zeevouImagesPrint(item, index) {
    var zeevou_images_widget = jQuery('#zeevou-images_widget');

    // zeevou_images_widget.append('<img src="' + item.medium_size_url + '" >');
    var itemImageUrl = zvHubUrl + 'apis/attachments/resize/' + item.file.id;

    if (index == 0)
        zeevou_images_widget.append('<div class="zeevou-img-top_part"></div>');
    var top_part = jQuery('.zeevou-img-top_part');
    if (index == 0)
        top_part.append('<div class="zeevou-img-large_image" style="width: 66.66%; height: 346px;"></div>');
    var large_image = jQuery('.zeevou-img-large_image');
    if (index == 0)
        large_image.append('<div class="zeevou-img-react_lightgallery_item" data-src="' + itemImageUrl + '/1024/1024/' + item.file.file_name + '"><img src="' + itemImageUrl + '/300/200/' + item.file.file_name + '" ></div>');

    if (index == 1)
        top_part.append('<div class="zeevou-img-small_right_part_image" style="width: 66.66%; height: 346px;"></div>');
    var small_right_part_image = jQuery('.zeevou-img-small_right_part_image');
    if (index == 1 || index == 2)
        small_right_part_image.append('<div class="zeevou-img-react_lightgallery_item" data-src="' + itemImageUrl + '/1024/1024/' + item.file.file_name + '"><img src="' + itemImageUrl + '/300/200/' + item.file.file_name + '" ></div>');

    if (index == 3 || index == 4 || index == 5)
        zeevou_images_widget.append('<div class="zeevou-img-small_picture_bottm"><div class="zeevou-img-react_lightgallery_item" data-src="' + itemImageUrl + '/1024/1024/' + item.file.file_name + '"><img src="' + itemImageUrl + '/300/200/' + item.file.file_name + '" ></div></div>');
    if (index > 5)
        zeevou_images_widget.append('<div class="zeevou-img-more_picture"><div class="zeevou-img-react_lightgallery_item" data-src="' + itemImageUrl + '/1024/1024/' + item.file.file_name + '"><img src="' + itemImageUrl + '/300/200/' + item.file.file_name + '" ></div></div>');

    jQuery(document).ready(function($) {
        jQuery('#zeevou-images_widget').lightGallery({
            pager: false,
            thumbnail: true,
            share: false,
            autoplay: false,
            rotate: false,
            comment: false,
            hash: false,
            video: false,
            selector: '.zeevou-img-react_lightgallery_item'
        });

    });
}

function zeevouBookingWidgetMainTemplate(zeevou_booking_widget) {

    zeevou_booking_widget.append(
        jQuery('<div />', { 'id': 'zeevou-bw-loading-container' }).append(
            jQuery('<img />', { 'class': 'zeevou-loading-img', 'id': 'zeevou-booking-widget-loading-img', 'src': zvpluginUrl + '/zeevou/img/loading1.gif' }).append(

            )
        )
    );

    zeevou_booking_widget.append(
        jQuery('<div />', { 'class': 'zeevou-modal hidden', 'id': 'zeevou-reserve-modal' }).append(
            jQuery('<div />', { 'class': 'zeevou-modal-container' }).append(
                jQuery('<div />', { 'class': 'zeevou-modal-body' }).append(
                    jQuery('<div />', { 'id': 'zeevou-reserve-modal-header' }).append(
                        jQuery('<span />', { 'class': 'zeevou-mtext', 'text': 'Reserve Your Stay' }),
                        jQuery('<span />', { 'class': 'fa fa-times zeevou-mclose' })
                    ),
                    jQuery('<div />', { 'id': 'zeevou-reserve-modal-content', 'class': 'zeevou_pl-row' }).append(
                        jQuery('<div />', { 'class': 'zeevou_pl-col-5 zeevou-reserve-modal-content-left' }).append(
                            jQuery('<div />', { 'class': 'zeevou_pl-row' }).append(
                                jQuery('<div />', { 'class': 'zeevou_pl-col-5 zeevou-bm-unittype' }).append(

                                ),

                            ),
                            jQuery('<div />', { 'class': 'zeevou_pl-row' }).append(
                                jQuery('<div />', { 'class': 'zeevou_pl-col zeevou-bm-price' }).append(

                                )
                            ),
                            //inputs
                            jQuery('<div />', { 'class': 'zeevou_pl-row' }).append(
                                jQuery('<div />', { 'class': 'zeevou_pl-col' }).append(
                                    '<label class="zeevou-reservation-form-label zeevou-form-label-required" for="zeevou-reservation-form-firstname" title="First Name">First Name</label>',
                                    '<input class="zeevou-reservation-form-input zeevou-form-input-required" id="zeevou-reservation-form-firstname" >'
                                ),
                                jQuery('<div />', { 'class': 'zeevou_pl-col' }).append(
                                    '<label class="zeevou-reservation-form-label zeevou-form-label-required" for="zeevou-reservation-form-lastname" title="Last Name">Last Name</label>',
                                    '<input class="zeevou-reservation-form-input zeevou-form-input-required" id="zeevou-reservation-form-lastname" >'
                                )
                            ),
                            jQuery('<div />', { 'class': 'zeevou_pl-row' }).append(
                                jQuery('<div />', { 'class': 'zeevou_pl-col' }).append(
                                    '<label class="zeevou-reservation-form-label zeevou-form-label-required" for="zeevou-reservation-form-email" title="Email">Email</label>',
                                    '<input class="zeevou-reservation-form-input zeevou-form-input-required" id="zeevou-reservation-form-email" >'
                                ),
                            ),
                            jQuery('<div />', { 'class': 'zeevou_pl-row' }).append(
                                jQuery('<div />', { 'class': 'zeevou_pl-col zeevou-hidden', 'id': 'zeevou-reservation-form-mobilenumber-container' }).append(
                                    '<label class="zeevou-reservation-form-label" id="zeevou-reservation-form-mobilenumber-label" for="zeevou-reservation-form-mobilenumber" title="Mobile Number">Mobile Number</label>',
                                    '<input class="zeevou-reservation-form-input" type="tel" id="zeevou-reservation-form-mobilenumber">'
                                ),
                            ),
                            jQuery('<div />', { 'class': 'zeevou_pl-row' }).append(
                                jQuery('<div />', { 'class': 'zeevou_pl-col-3' }).append(
                                    '<label class="zeevou-reservation-form-label" id="zeevou-reservation-form-vouchercode-label" for="zeevou-reservation-form-vouchercode" title="Voucher Code">Voucher Code</label>',

                                ),
                                jQuery('<div />', { 'class': 'zeevou_pl-col-5' }).append(
                                    '<input class="zeevou-reservation-form-input" id="zeevou-reservation-form-vouchercode" >'
                                ),
                                jQuery('<div />', { 'class': 'zeevou_pl-col-3' }).append(
                                    jQuery('<button />', { 'class': 'zeevou-reserve-modal-button', 'id': 'zeevou-reserve-modal-voucher-apply-button', 'text': 'Apply' }).append(

                                    ),
                                    jQuery('<img />', { 'class': 'zeevou-loading-img', 'id': 'zeevou-reserve-modal-loading-img', 'src': zvpluginUrl + '/zeevou/img/loading1.gif' }).append(

                                    )
                                ),
                            ),
                        ),
                        jQuery('<div />', { 'class': 'zeevou_pl-col-6 zeevou-reserve-modal-content-right' }).append(
                            jQuery('<div />', { 'class': 'zeevou-price-breakdown-card' }).append(
                                jQuery('<div />', { 'class': 'zeevou-bm-date' }).append(

                                ),
                                jQuery('<div />', { 'class': 'zeevou-pbc-adult-child' }).append(
                                    jQuery('<div />', { 'class': 'zeevou-pbc-adult' }).append(
                                        '<p class="zeevou-pbc-adult-text" >Adults</p>',
                                        '<h6 class="zeevou-pbc-adult-no" ></h6>'
                                    ),
                                    jQuery('<div />', { 'class': 'zeevou-pbc-child' }).append(
                                        '<p class="zeevou-pbc-child-text" >Children</p>',
                                        '<h6 class="zeevou-pbc-child-no" ></h6>',
                                    )
                                ),
                                jQuery('<div />', { 'class': 'zeevou-pbc-pricing' }).append(
                                    jQuery('<div />', { 'class': 'zeevou-pbc-night-breakdown-container' }).append(
                                        jQuery('<div />', { 'class': 'zeevou-pbc-night-promotion-container' }).append(
                                            '<p class="zeevou-pbc-night-breakdown-text" ></p>',
                                            '<div class="zeevou-pbc-promotion-discount" ></div>'
                                        ),
                                        '<h6 class="zeevou-pbc-night-breakdown" ></h6>'
                                    ),
                                    jQuery('<div />', { 'class': 'zeevou-pbc-extra-guest' }).append(

                                    ),
                                    jQuery('<div />', { 'class': 'zeevou-pbc-addons' }).append(

                                    ),
                                    jQuery('<div />', { 'class': 'zeevou-pbc-tax' }).append(

                                    ),
                                    jQuery('<div />', { 'class': 'zeevou-pbc-total-price-container' }).append(
                                        '<p class="zeevou-pbc-total-price-text" >Total</p>',
                                        '<h6 class="zeevou-pbc-total-price" ></h6>'
                                    ),
                                    jQuery('<div />', { 'class': 'zeevou-pbc-include-tax' }).append(
                                        '<p class="zeevou-pbc-include-tax-text" >Includes taxes and charges</p>'
                                    ),
                                )
                            ),
                        ),
                    ),
                    jQuery('<div />', { 'id': 'zeevou-reserve-modal-bottom' }).append(
                        jQuery('<div />', { 'class': 'zeevou_pl-row' }).append(
                            jQuery('<div />', { 'class': 'zeevou_pl-col' }).append(
                                '<p id="zeevou-reserve-modal-message-error" class="zeevou-hidden">Please fill all required fields.</p>',
                                '<p id="zeevou-reserve-modal-message-error-email" class="zeevou-hidden">Please enter a valid email address.</p>',
                                '<p id="zeevou-reserve-modal-message-error-mobile" class="zeevou-hidden">Please enter a valid mobile number.</p>',
                                '<p id="zeevou-reserve-modal-message-success" class="zeevou-hidden">Reservation is done. Please check your email.</p>'
                            )
                        ),
                        jQuery('<button />', { 'class': 'zeevou-reserve-modal-button', 'id': 'zeevou-reserve-modal-cancel-button', 'text': 'Cancel' }).append(

                        ),
                        jQuery('<button />', { 'class': 'zeevou-reserve-modal-button', 'id': 'zeevou-reserve-modal-finalise-button', 'text': 'Submit Reservation' }).append(

                        ),
                        jQuery('<img />', { 'class': 'zeevou-loading-img', 'id': 'zeevou-reserve-modal-finalise-loading-img', 'src': zvpluginUrl + '/zeevou/img/loading1.gif' }).append(

                        )
                    )
                )
            )
        )
    );


    const mobileinput = document.querySelector("#zeevou-reservation-form-mobilenumber");

    mobileinput.addEventListener("keydown", event => {
        const keyCode = event.keyCode;

        const excludedKeys = [8, 37, 39, 46, 32, 189];

        if (!((keyCode >= 48 && keyCode <= 57) ||
            (keyCode >= 96 && keyCode <= 105) ||
            (excludedKeys.includes(keyCode)))) {
            event.preventDefault();
        }
    });



}



function zeevouBookingWidgetUnitTypesTemplate(zeevou_booking_widget, value) {
    zeevou_booking_widget.append(
        jQuery('<div />', { 'class': '' }).append(
            jQuery('<div />', { 'class': 'zeevou-unittype-item', 'id': 'zeevou-unittype-item-' + value.id }).append(

                jQuery('<div />', { 'class': 'zeevou-unittype-reservation-detail-left' }).append(
                    jQuery('<div />', { 'class': 'zeevou-unittype-name-div' }).append(
                        jQuery('<strong />', { 'text': value.name, 'class': 'zeevou-unittype-name ' })
                    ),
                    jQuery('<div />', { 'class': 'zeevou-unittype-amenities' }).append(

                    )
                ),
                jQuery('<div />', { 'class': 'zeevou-unittype-reservation-detail-mid' }).append(
                    // '<div class="zeevou-img-unit-react_lightgallery_item" data-src="' + 'https://hub.zeevou.com/apis/attachments/resize/50534/1024/1024/6098c00413262884908050.jpg' + '"><img src="' + 'https://hub.zeevou.com/apis/attachments/resize/50534/1024/1024/6098c00413262884908050.jpg' + '" ></div>'
                )


            )

        )

    );

    //===========

    // jQuery.each(value.units, function(unit_key, unit_value) {
    //     jQuery.each(unit_value.images, function(image_key, image_value) {
    //     });
    // });


    var first_unit_img_added = false;
    var image_delay = 1;


    //UNITTYPE_IMAGES
    // jQuery.each(value.units, function(unitKey, unitValue) {

    //     jQuery.each(unitValue.images, function(imageKey, imageValue) {
    //         var is_last = false;
    //         if ((value.units.length - 1) == unitKey) {
    //             if ((unitValue.images.length - 1) == imageKey) {
    //                 is_last = true;
    //             }
    //         }


    //         if (!first_unit_img_added) {
    //             zeevouGetUnitImages(imageValue.file, first_unit_img_added, value.id, is_last, image_delay);

    //             first_unit_img_added = true;
    //         } else {
    //             zeevouGetUnitImages(imageValue.file, first_unit_img_added, value.id, is_last, image_delay);

    //         }

    //         image_delay += 1;
    //     });
    // });



    jQuery('#zeevou-unittype-item-' + value.id).append(

        jQuery('<div />', { 'class': 'zeevou-unittype-reservation-detail-right' }).append(
            jQuery('<div />', { 'class': 'zeevou-checkin-details' }).append(
                jQuery('<div />', { 'class': 'zeevou-checkin-date' }),
                jQuery('<div />', { 'class': 'zeevou-checkin-nights' })
            ),
            jQuery('<div />', { 'class': 'zeevou-price-rateplan-container zeevou-rateplan-container' }).append(

                jQuery('<div />', { 'class': 'zeevou-price-combobox' }).append(
                    jQuery('<span />', { 'class': 'zeevou-tooltip-text' }).append(

                    ),
                    jQuery('<select />', { 'class': 'zeevou-price-select' }).append(

                    )
                ),

            ),
            jQuery('<div />', { 'class': 'zeevou-enter-dates-error' }).append(
                jQuery('<div />', { 'id': 'zeevou-enter-dates-error-txt', 'class': 'zeevou-error-text', 'text': 'Please enter your desired stay dates to continue.' })
            )
        ),
        jQuery('<div />', { 'class': 'zeevou-price-rateplan-container zeevou-price-container' }).append(
            jQuery('<div />', { 'class': 'zeevou-price-text' }).append(

            )
        ),
        jQuery('<div />', { 'class': 'zeevou-include-tax' }).append(
            '<p class="zeevou-include-tax-text" >Includes taxes and charges</p>'
        )
    );
}

function zeevouBookingWidgetRatePlansTemplate(value, rp_value, rp_key, currency) {



    jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-select').append(
        jQuery('<option />', { 'class': 'zeevou-price-option', 'value': rp_value.id, 'title': rp_value.name, 'text': rp_value.name }).append(

        )
    );

    if (rp_key == 0) {

        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-text').html('<div class="zeevou-pbc-promotion-discount" ></div><div style="text-decoration: line-through; text-decoration-color: red; width:fit-content; float:left; margin-left: 10px;">' + currency + rp_value.total_price_without_promotion.toFixed(2) + '</div><div style="float:left; margin-left: 10px;">'+ currency + rp_value.total_price.toFixed(2));
        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-select').prop('disabled', 'disabled');
        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-tooltip-text').text(rp_value.name);
        
        if(value.zv_accomodation_price > 0){

            if(typeof value.zv_accomodation_price !== 'undefined' && value.zv_accomodation_price > 0){
                promotion_discount = Math.round((value.zv_promotion_price / (value.zv_accomodation_before_tax_price + value.zv_promotion_price))*100);
            }
            jQuery('.zeevou-pbc-promotion-discount').text(promotion_discount+"%");
            jQuery('.zeevou-pbc-promotion-discount').show();
        }else{
            jQuery('.zeevou-pbc-promotion-discount').hide();
        }

    }else{
        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-select').prop('disabled', false);
    }


    // if (rp_key == 0) {
    //     if (rp_value.type == 'Nightly') {
    //         jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-text').text('Price from ' + currency + rp_value.default_price.base_value + '/night');
    //     }
    // }
}

function refresh_token() {
    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';

    // if(key > 0){
    //     var delay = 1500*key;
    //
    //     return new Promise(resolve => setTimeout(resolve, delay));
    //
    // }else{
    return new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: ajaxUrl,
            data: {action: 'refresh_token'},
            method: 'POST',
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
    // }

}

function getPropertyUnitTypes(prop_id) {
    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';

    return new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: ajaxUrl,
            data: {
                action: 'zeevoupropertyunittypes',
                "property": prop_id
            },
            method: 'POST',
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
    // }

}

function zeevouBookingContentCreation(propId) {

    var zv_voucher_used = false;
    var zv_apply_other_discounts = true;

    var zv_redirect_confirmation = false;
    var zv_redirect_payment = false;

    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';

    jQuery.when(getPropertyUnitTypes(propId)).done(function(data) {

        unitTypes = JSON.parse(data);
        if (unitTypes == null || unitTypes === 0 || unitTypes.length === 0) {
            return;
        }

        var zeevou_booking_widget = jQuery('#zeevou-booking_widget');

        zeevouBookingWidgetMainTemplate(zeevou_booking_widget);

        const phoneInputField = document.querySelector("#zeevou-reservation-form-mobilenumber");
        const phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript: zvpluginUrl + '/zeevou/js/intl-utils.js',
        });

        var modal_container = document.querySelector("#zeevou-reserve-modal .zeevou-modal-container");

        jQuery('#zeevou-reserve-modal').click(function(e) {

            //clicking out of the modal will close it
            if (e.target !== modal_container) return;
            jQuery('#zeevou-reserve-modal').addClass("hidden");

        });

        jQuery('#zeevou-reserve-modal-header .zeevou-mclose').click(function(e) {
            jQuery('#zeevou-reserve-modal').addClass("hidden");
        });

        jQuery('#zeevou-reserve-modal-cancel-button').click(function(e) {
            jQuery('#zeevou-reserve-modal').addClass("hidden");
        });

        (function($) {

            $.ajax({
                url: ajaxUrl,
                data: {
                    action: 'zeevougetfrontendfieldsconfig',
                    brand: zvBrandId
                },
                method: 'POST', //Post method
                success: function(response) {

                    unitTypes[0].frontendfieldsconfig = JSON.parse(response);

                    if (unitTypes[0].frontendfieldsconfig != null) {

                        if (unitTypes[0].frontendfieldsconfig.config.reservation_mobile_number) {
                            jQuery('#zeevou-reservation-form-mobilenumber-container').removeClass("zeevou-hidden");

                        }

                        if (unitTypes[0].frontendfieldsconfig.config.is_required_reservation_mobile_number) {
                            jQuery('#zeevou-reservation-form-mobilenumber-label').addClass("zeevou-form-label-required");
                            jQuery('#zeevou-reservation-form-mobilenumber').addClass("zeevou-form-input-required");


                        }

                        if (unitTypes[0].frontendfieldsconfig.config.redirect_to_confirmation_link_at_point_of_booking) {
                            zv_redirect_confirmation = true;
                        }
                        if (unitTypes[0].frontendfieldsconfig.config.request_payment_at_point_of_booking) {
                            zv_redirect_payment = true;
                        }
                    }


                },
                error: function(error) { console.log(error) }
            })
        })(jQuery);




        zeevou_booking_widget.append(
            jQuery('<div />', { 'class': 'zeevou-error-text', 'id': 'zeevou-error-text-max-capacity', 'text': 'This property is unavailable for the requested number of guests.' })

        );


        var zv_selected_unittype_id = 0;
        var zv_selected_property_id = 0;
        var zv_selected_price = 0;
        var zv_selected_currency = "";
        var zv_selected_rate_plan_id = 0;
        var zv_selected_adults = 0;

        var zv_is_property_available_guests = false;
        jQuery.each(unitTypes, function(key, value) {

            value.zv_calculated_price = 0;
            value.zv_currency = "";
            value.zv_rp_id = 0;
            value.zv_price_per_night = 0;
            value.zv_addons = [];
            value.zv_extra_guest_price = 0;

            jQuery('#zeevou-error-text-max-capacity').hide();






            var zv_searchBtnClicked = false;


            zeevouBookingWidgetUnitTypesTemplate(zeevou_booking_widget, value);

            rateplan_delay = 0;

            jQuery.each(value.rate_plans, function(rp_key, rp_value) {

                rateplan_delay += 1;


            });




            jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-rateplan-container').hide();
            jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-include-tax').hide();


            if ((unitTypes.length - 1) == key) {
                jQuery('#zeevou-bw-loading-container').hide();
            }


            //UNITTYPE_IMAGES
            // jQuery(document).ready(function($) {
            //     var data = {
            //         'action': 'zeevougetunittypeimages',
            //         'unit_type_id': value.id
            //     };
            //     // We can also pass the url value separately from ajaxurl for front end AJAX implementations
            //     jQuery.post(ajaxUrl, data, function(response) {
            //         // console.log(response);
            //         value.units = JSON.parse(response);





            //     });
            // });









            //=======================search button click for each unittype============================
            jQuery('.zeevou-property-search-button').click(function() {
                // zv_searchBtnClicked = true;
                //======================================================
                //======================================================
                if (jQuery('#zeevou-property_date_input').val() == "") {
                    return;
                }

                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-rateplan-container').show();
                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-enter-dates-error').hide();

                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-select').html("");
                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-text').html('<img style="width:30px; height:30px; vertical-align: middle; display: inline-block;" src="' + zvpluginUrl + '/zeevou/img/loading1.gif' + '">');
                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-include-tax').hide();
                // var delay = 0;
                // if(key > 0){
                //     delay = 300;
                // }


                //======================================================
                //======================================================

            });
            //=====================================================

            //=====================================================

            zeevouBookingWidgetAddAmenities(value);




            // console.log('#zeevou-unittype-item-' + value.id + ' .zeevou-reserve-button');




            //unittype foreach end
        });


        //=======================search button click for booking widget============================
        jQuery('.zeevou-property-search-button').click(function() {
            jQuery('.zeevou-property-search-button').attr('disabled', true);

            if (jQuery('#zeevou-property_date_input').val() == "") {
                jQuery('.zeevou-property-search-button').attr('disabled', false);
                return;
            }

            jQuery.when(refresh_token()).done(function(data) {

                jQuery('.zeevou-property-search-button').attr('disabled', false);
                jQuery.each(unitTypes, function (key, value) {
                    var zv_checkin = jQuery('input[name="checkin"]').val();
                    var zv_checkout = jQuery('input[name="checkout"]').val();
                    var zv_adults = parseInt(jQuery('input[name="adults"]').val()) + parseInt(jQuery('input[name="children"]').val());
                    var zv_checkin_moment = moment(zv_checkin, "YYYYMMDD");
                    var zv_checkout_moment = moment(zv_checkout, "YYYYMMDD");
                    var zv_nights = zv_checkout_moment.diff(zv_checkin_moment, 'days');
                    var zv_adult_no = parseInt(jQuery('input[name="adults"]').val());
                    var zv_child_no = parseInt(jQuery('input[name="children"]').val());


                    var zv_checkout_moment_yesterday = zv_checkout_moment.subtract(1, 'days');




                    var data = {
                        'action': 'zeevougetrateandavailability',
                        'unit_type_id': value.id,
                        'guest_no': zv_adults,
                        'date_after': zv_checkin_moment.format("YYYY-MM-DD"),
                        'date_before': zv_checkout_moment_yesterday.format("YYYY-MM-DD")
                    };


                    jQuery.ajax({
                        url: ajaxUrl,
                        data: data,
                        method: 'POST',
                        success: function(response) {
                            jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-text').text("");
                            jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-include-tax').hide();

                            if (response === '[]' || response == "" || response == null) {

                                // jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-unittype-reservation-detail-right').html('<p style="color:red;">Not Available</p>');
                                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-rateplan-container').hide();
                                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-enter-dates-error').show();
                                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-error-text').text("Not Available");


                            } else {
                                var rateplans = JSON.parse(response);

                                jQuery.each(rateplans, function(rp_key, rp_value) {
                                    var currency = zeevouGetCurrencySymbol(rp_value.rates[0].price.currency);



                                    if (rp_key == 0) {
                                        value.zv_calculated_price = rp_value.total_price;
                                        value.zv_total_price_without_promotion = rp_value.total_price_without_promotion;
                                        //
                                        value.zv_rates = rp_value.rates;
                                        value.zv_min_guests = rp_value.min_guests;
                                        value.zv_extra_guest_price = zeevouCalculateExtraGuestPrice(value.zv_rates, value.zv_min_guests, zv_adults);
                                        //
                                        if(rp_value.show_to_guests){
                                            value.zv_accomodation_price = rp_value.tax_breakdown.find(item => item.title.toLowerCase() === 'accommodation').before_tax - value.zv_extra_guest_price;
                                        }else{
                                            value.zv_accomodation_price = rp_value.tax_breakdown.find(item => item.title.toLowerCase() === 'accommodation').after_tax - value.zv_extra_guest_price;
                                        }

                                        value.zv_accomodation_before_tax_price = rp_value.tax_breakdown.find(item => item.title.toLowerCase() === 'accommodation').before_tax;


                                        value.zv_promotion_price = rp_value.promotion_price;
                                        value.zv_accomodation_price_without_promotion = parseFloat(value.zv_accomodation_price) + parseFloat(value.zv_promotion_price);
                                        value.zv_accomodation_price_without_promotion = value.zv_accomodation_price_without_promotion;
                                        value.zv_currency = currency;
                                        value.zv_rp_id = rp_value.id;
                                        value.zv_addons = rp_value.addons;
                                        value.zv_tax_breakdown = rp_value.tax_breakdown;

                                        var zv_exclude_tax_price = rp_value.show_to_guests ? rp_value.before_tax : rp_value.after_tax;

                                        value.zv_price_per_night = value.zv_accomodation_price_without_promotion/zv_nights;
                                        value.zv_price_per_night = value.zv_price_per_night.toFixed(2);
                                        value.zv_tax_amount = rp_value.tax_amount.toFixed(2);
                                        value.zv_show_to_guests = rp_value.show_to_guests;
                                        value.zv_including_tax = rp_value.including_tax

                                        if(value.zv_tax_amount > 0 && !value.zv_show_to_guests){
                                            jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-include-tax').show();
                                        }else{
                                            jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-include-tax').hide();
                                        }
                                    }

                                    zeevouBookingWidgetRatePlansTemplate(value, rp_value, rp_key, currency);

                                    jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-select').change(function() {
                                        zv_voucher_used = false;
                                        zv_apply_other_discounts = true;
                                        var rp_selected_id = jQuery(this).val();

                                        if (rp_selected_id == rp_value.id) {

                                            value.zv_rp_id = rp_selected_id;

                                            jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-tooltip-text').text(rp_value.name);

                                            var currency = zeevouGetCurrencySymbol(rp_value.rates[0].price.currency);

                                            value.zv_currency = currency;
                                            value.zv_calculated_price = rp_value.total_price;
                                            value.zv_total_price_without_promotion = rp_value.total_price_without_promotion;
                                            //
                                            value.zv_rates = rp_value.rates;
                                            value.zv_min_guests = rp_value.min_guests;
                                            value.zv_extra_guest_price = zeevouCalculateExtraGuestPrice(value.zv_rates, value.zv_min_guests, zv_adults);
                                            //
                                            if(rp_value.show_to_guests){
                                                value.zv_accomodation_price = rp_value.tax_breakdown.find(item => item.title.toLowerCase() === 'accommodation').before_tax - value.zv_extra_guest_price;
                                            }else{
                                                value.zv_accomodation_price = rp_value.tax_breakdown.find(item => item.title.toLowerCase() === 'accommodation').after_tax - value.zv_extra_guest_price;
                                            }

                                            value.zv_accomodation_before_tax_price = rp_value.tax_breakdown.find(item => item.title.toLowerCase() === 'accommodation').before_tax;

                                            value.zv_promotion_price = rp_value.promotion_price;
                                            value.zv_accomodation_price_without_promotion = parseFloat(value.zv_accomodation_price) + parseFloat(value.zv_promotion_price);
                                            value.zv_accomodation_price_without_promotion = value.zv_accomodation_price_without_promotion;
                                            value.zv_addons = rp_value.addons;
                                            value.zv_tax_breakdown = rp_value.tax_breakdown;

                                            var zv_exclude_tax_price = rp_value.show_to_guests ? rp_value.before_tax : rp_value.after_tax;

                                            value.zv_price_per_night = value.zv_accomodation_price_without_promotion/zv_nights;
                                            value.zv_price_per_night = value.zv_price_per_night.toFixed(2);
                                            value.zv_tax_amount = rp_value.tax_amount.toFixed(2);
                                            value.zv_show_to_guests = rp_value.show_to_guests;
                                            value.zv_including_tax = rp_value.including_tax
                                            jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-text').text(currency + rp_value.total_price);
                                            if(value.zv_tax_amount > 0 && !value.zv_show_to_guests){
                                                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-include-tax').show();
                                            }else{
                                                jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-include-tax').hide();
                                            }

                                        }

                                    }); //select change end
                                });
                            }
                        },
                        error: function(err) {

                        }
                    });




                    if (zv_adults > value.maximum_capacity) {
                        jQuery('#zeevou-unittype-item-' + value.id).hide();
                        jQuery('.zeevou-property-search-button').attr('disabled', false);
                        return;
                    }
                    zv_is_property_available_guests = true;
                    jQuery('#zeevou-unittype-item-' + value.id).show();



                    jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-text').addClass('zeevou-price-text-sb-clicked');
                    jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-combobox').addClass('zeevou-price-combobox-sb-clicked');
                    // console.log(jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-reserve-button').length);

                    if (!jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-reserve-button').length) {


                        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-price-container').append(
                            jQuery('<button />', { 'class': 'zeevou-reserve-button', 'id': 'zeevou-reserve-button-' + value.id }).append(
                                jQuery('<span />', { 'text': ' Reserve' })
                            )
                        );



                    }
                        //reserve button action
                        jQuery('#zeevou-reserve-button-' + value.id).click(function() {
                            zv_checkin = jQuery('input[name="checkin"]').val();
                            zv_checkout = jQuery('input[name="checkout"]').val();
                            zv_checkin_moment = moment(zv_checkin, "YYYYMMDD");
                            zv_checkout_moment = moment(zv_checkout, "YYYYMMDD");
                            var zv_bm_date_text = zv_checkin_moment.format('ddd, MMM DD, YYYY') + " - " + zv_checkout_moment.format('ddd, MMM DD, YYYY');
                            var zv_pbc_adult_no = parseInt(jQuery('input[name="adults"]').val());
                            var zv_pbc_child_no = parseInt(jQuery('input[name="children"]').val());

                            jQuery('#zeevou-reserve-modal').removeClass("hidden");

                            jQuery('.zeevou-bm-unittype').text(value.name);
                            jQuery('.zeevou-bm-date').text(zv_bm_date_text);
                            jQuery('.zeevou-pbc-adult-no').text(zv_pbc_adult_no);
                            jQuery('.zeevou-pbc-child-no').text(zv_pbc_child_no);
                            jQuery('.zeevou-bm-price').text('Total Price: ' + value.zv_currency + value.zv_calculated_price);
                            if(value.zv_total_price_without_promotion != value.zv_calculated_price){
                                jQuery('.zeevou-pbc-total-price').html('<div style="text-decoration: line-through; text-decoration-color: red; width:fit-content; float:left; margin-left: 10px;">' + value.zv_currency + value.zv_total_price_without_promotion.toFixed(2) + '</div><div style="float:left; margin-left: 10px;">' + value.zv_currency + value.zv_calculated_price.toFixed(2) + '</div>');
                            }else{
                                jQuery('.zeevou-pbc-total-price').text(value.zv_currency + value.zv_calculated_price.toFixed(2));
                            }



                            if(value.zv_promotion_price > 0){
                                if(typeof value.zv_accomodation_price !== 'undefined' && value.zv_accomodation_price > 0){
                                    promotion_discount = Math.round((value.zv_promotion_price / (value.zv_accomodation_before_tax_price + value.zv_promotion_price))*100);
                                }
                                jQuery('.zeevou-pbc-promotion-discount').text(promotion_discount+"%");
                                jQuery('.zeevou-pbc-promotion-discount').show();
                            }else{
                                jQuery('.zeevou-pbc-promotion-discount').hide();
                            }

                            jQuery('.zeevou-pbc-night-breakdown-text').text(value.zv_currency+value.zv_price_per_night+' x '+zv_nights+' Nights');
                            if(value.zv_accomodation_price_without_promotion != value.zv_accomodation_price){
                                value.zv_accomodation_price = Number(value.zv_accomodation_price).toFixed(2);
                                value.zv_accomodation_price_without_promotion = Number(value.zv_accomodation_price_without_promotion).toFixed(2);
                                jQuery('.zeevou-pbc-night-breakdown').html('<div style="text-decoration: line-through; text-decoration-color: red; width:fit-content; float:left; margin-left: 10px;">' + value.zv_currency + value.zv_accomodation_price_without_promotion + '</div><div style="float:left; margin-left: 10px;">' + value.zv_currency + value.zv_accomodation_price + '</div>');
                            }else{
                                value.zv_accomodation_price = Number(value.zv_accomodation_price).toFixed(2);
                                jQuery('.zeevou-pbc-night-breakdown').text(value.zv_currency + value.zv_accomodation_price);
                            }

                            jQuery('.zeevou-pbc-tax').text("");
                            if(value.zv_tax_amount > 0 && value.zv_show_to_guests){
                                jQuery('.zeevou-pbc-tax').append(
                                    jQuery('<div />', {'class': 'zeevou-pbc-tax-container'}).append(
                                        '<p class="zeevou-pbc-tax-text" >Tax</p>',
                                        '<h6 class="zeevou-pbc-tax-price" >'+value.zv_currency+value.zv_tax_amount+'</h6>'
                                    )
                                );
                                jQuery('.zeevou-pbc-tax-price').text(value.zv_currency+value.zv_tax_amount);
                            }

                            if(value.zv_tax_amount > 0 && !value.zv_show_to_guests){
                                jQuery('.zeevou-pbc-include-tax').show();
                            }else{
                                jQuery('.zeevou-pbc-include-tax').hide();
                            }


                            // jQuery('.zeevou-pbc-extra-guest').text("");
                            // if(value.zv_extra_guest_price > 0){
                            //     jQuery('.zeevou-pbc-extra-guest').append(
                            //         jQuery('<div />', {'class': 'zeevou-pbc-extra-guest-container'}).append(
                            //             '<p class="zeevou-pbc-extra-guest-name" >' + "Extra guest price" + '</p>',
                            //             '<h6 class="zeevou-pbc-extra-guest-price" >' + value.zv_currency + value.zv_extra_guest_price.toFixed(2) + '</h6>'
                            //         )
                            //     );
                            // }

                            jQuery('.zeevou-pbc-addons').text("");
                            jQuery.each(value.zv_addons, function(addon_key, addon_value) {
                                addon_tax_breakdown = value.zv_tax_breakdown.find(item => item.title === addon_value.addon.name);
                                if(typeof addon_tax_breakdown !== 'undefined'){
                                    if(value.zv_show_to_guests){
                                        addon_price = addon_tax_breakdown.before_tax;
                                    }else{
                                        addon_price = addon_tax_breakdown.after_tax;
                                    }
                                }else{
                                    addon_price = addon_value.total_price;
                                }

                                if(addon_price > 0) {
                                    jQuery('.zeevou-pbc-addons').append(
                                        jQuery('<div />', {'class': 'zeevou-pbc-addon-container'}).append(
                                            '<p class="zeevou-pbc-addon-name" >' + addon_value.addon.label + '</p>',
                                            '<h6 class="zeevou-pbc-addon-price" >' + value.zv_currency + addon_price.toFixed(2) + '</h6>'
                                        )
                                    );
                                }
                            });

                            //here set unittype values#########
                            zv_selected_unittype_id = value.id;
                            zv_selected_property_id = value.property;
                            zv_selected_property_id = zv_selected_property_id.replace("/apis/properties/", "");
                            zv_selected_price = value.zv_calculated_price;
                            zv_selected_currency = value.zv_currency;
                            zv_selected_adults = zv_adults;
                            zv_selected_rate_plan_id = value.zv_rp_id;



                        });




                    if (!zv_is_property_available_guests) {
                        jQuery('#zeevou-error-text-max-capacity').show();

                    } else {
                        jQuery('#zeevou-error-text-max-capacity').hide();
                    }

                    zv_is_property_available_guests = false;
                });

            }).catch(function(err) {
                // Run this when promise was rejected via reject()
                console.log(err);
                jQuery('.zeevou-property-search-button').attr('disabled', false);
            });


        });



        var applied_vouchers = [];
        var zv_voucher_code = null;

        jQuery('#zeevou-reserve-modal-voucher-apply-button').click(function(e) {
            zv_voucher_code = null;

            var code = jQuery('#zeevou-reservation-form-vouchercode').val();

            var arrival_date = zv_checkin_moment.format("YYYYMMDD");
            var departure_date = zv_checkout_moment.format("YYYYMMDD");
            var adults_no = parseInt(zv_selected_adults);
            var zv_nights = zv_checkout_moment.diff(zv_checkin_moment, 'days');
            var booking_date = moment().format("YYYY-MM-DDThh:mm:ssZ");
            var unit_type_id = zv_selected_unittype_id;
            var rate_plan_id = zv_selected_rate_plan_id;

            jQuery('#zeevou-reserve-modal-voucher-apply-button').hide();
            jQuery('#zeevou-reserve-modal-loading-img').show();

            var ajaxUrl = zvAdminUrl + 'admin-ajax.php';
            jQuery.ajax({
                url: ajaxUrl,
                data: {
                    action: 'zeevougetvoucherprice',
                    code: code,
                    arrival_date: arrival_date,
                    departure_date: departure_date,
                    adults_no: adults_no,
                    unit_type_id: unit_type_id,
                    rate_plan_id: rate_plan_id
                },
                method: 'POST',
                success: function(response) {
                    jQuery('#zeevou-reserve-modal-loading-img').hide();
                    jQuery('#zeevou-reserve-modal-voucher-apply-button').show();
                    voucher_response = JSON.parse(response);
                    var newPrice = voucher_response.result.newPrice;
                    newPrice = parseFloat(newPrice);
                    zv_selected_price = parseFloat(zv_selected_price);
                    if(voucher_response.status == 0 && zv_selected_price > newPrice && newPrice > 0){
                        jQuery('.zeevou-bm-price').html('<div style="float:left;">Total Price:</div><div style="text-decoration: line-through; text-decoration-color: red; width:fit-content; float:left; margin-left: 10px;">' + zv_selected_currency + zv_selected_price + '</div><div style="float:left; margin-left: 10px;">' + zv_selected_currency + newPrice + '</div>');
                        jQuery('.zeevou-pbc-total-price').html('<div style="text-decoration: line-through; text-decoration-color: red; width:fit-content; float:left; margin-left: 10px;">' + zv_selected_currency + zv_selected_price + '</div><div style="float:left; margin-left: 10px;">' + zv_selected_currency + newPrice + '</div>');
                        zv_voucher_code = code;
                    }

                },
                error: function(err) {

                }

            });

        });



        jQuery('#zeevou-reserve-modal-finalise-button').click(function(e) {
            //booking



            zv_voucher_used = false;
            zv_apply_other_discounts = true;

            var isInputsEmpty = false;
            jQuery(".zeevou-form-input-required").map(function() {

                if (!this.value || this.value.length === 0) {
                    isInputsEmpty = true;
                }
            }).get();

            if (isInputsEmpty) {
                if (!jQuery('#zeevou-reserve-modal-message-success').hasClass("zeevou-hidden")) {
                    jQuery('#zeevou-reserve-modal-message-success').addClass("zeevou-hidden");
                }
                if (!jQuery('#zeevou-reserve-modal-message-error-email').hasClass("zeevou-hidden")) {
                    jQuery('#zeevou-reserve-modal-message-error-email').addClass("zeevou-hidden");
                }
                if (!jQuery('#zeevou-reserve-modal-message-error-mobile').hasClass("zeevou-hidden")) {
                    jQuery('#zeevou-reserve-modal-message-error-mobile').addClass("zeevou-hidden");
                }
                jQuery("#zeevou-reserve-modal-message-error").removeClass("zeevou-hidden");
                return;
            }

            var email = jQuery('#zeevou-reservation-form-email').val();
            var mobilenumber = phoneInput.getNumber();

            var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!email.match(validRegex)) {
                if (!jQuery('#zeevou-reserve-modal-message-success').hasClass("zeevou-hidden")) {
                    jQuery('#zeevou-reserve-modal-message-success').addClass("zeevou-hidden");
                }
                if (!jQuery('#zeevou-reserve-modal-message-error').hasClass("zeevou-hidden")) {
                    jQuery('#zeevou-reserve-modal-message-error').addClass("zeevou-hidden");
                }
                if (!jQuery('#zeevou-reserve-modal-message-error-mobile').hasClass("zeevou-hidden")) {
                    jQuery('#zeevou-reserve-modal-message-error-mobile').addClass("zeevou-hidden");
                }
                jQuery("#zeevou-reserve-modal-message-error-email").removeClass("zeevou-hidden");
                return;
            }

            if (!phoneInputField.value.length == 0) {

                if (!phoneInput.isValidNumber()) {
                    if (!jQuery('#zeevou-reserve-modal-message-success').hasClass("zeevou-hidden")) {
                        jQuery('#zeevou-reserve-modal-message-success').addClass("zeevou-hidden");
                    }
                    if (!jQuery('#zeevou-reserve-modal-message-error').hasClass("zeevou-hidden")) {
                        jQuery('#zeevou-reserve-modal-message-error').addClass("zeevou-hidden");
                    }
                    if (!jQuery('#zeevou-reserve-modal-message-error-email').hasClass("zeevou-hidden")) {
                        jQuery('#zeevou-reserve-modal-message-error-email').addClass("zeevou-hidden");
                    }
                    jQuery("#zeevou-reserve-modal-message-error-mobile").removeClass("zeevou-hidden");
                    return;
                }
            }

            jQuery('#zeevou-reserve-modal-finalise-button').hide();
            jQuery('#zeevou-reserve-modal-cancel-button').hide();
            jQuery("#zeevou-reserve-modal-finalise-loading-img").css("display", "block");

            var arrival_date = zv_checkin_moment.format("YYYY-MM-DD");
            var departure_date = zv_checkout_moment.format("YYYY-MM-DD");
            var bookedtime = moment();
            bookedtime = bookedtime.format("YYYY-MM-DD");
            var adults_no = parseInt(zv_selected_adults);
            var channel_code = "WEB";
            var firstname = jQuery('#zeevou-reservation-form-firstname').val();
            var lastname = jQuery('#zeevou-reservation-form-lastname').val();
            // var email = jQuery('#zeevou-reservation-form-email').val();




            let guest = { first_name: firstname, last_name: lastname, email: email, mobile_number: mobilenumber };
            // let total_price = { currency: zv_selected_currency, value: zv_selected_price };
            let channel = { code: channel_code };

            let booking = {
                guest: guest,
                unit_type: zv_selected_unittype_id,
                property: zv_selected_property_id,
                rate_plan: zv_selected_rate_plan_id,
                booked_time: bookedtime,
                arrival_date: arrival_date,
                departure_date: departure_date,
                number_of_adult_guests: adults_no,
                channel: channel,
                voucher_code: zv_voucher_code
            };
            let order_by = { first_name: firstname, last_name: lastname, email: email, mobile_number: mobilenumber };
            let order_by_corporation = null;

            var bookings = [booking];

            let postdata = { bookings: bookings, order_by: order_by, order_by_corporation: order_by_corporation };
            var postdataJson = JSON.stringify(postdata);
            // console.log(postdataJson);

            (function($) {

                $.ajax({
                    url: ajaxUrl,
                    data: {
                        action: 'zeevoucreatebooking',
                        postdata: postdataJson
                    },
                    method: 'POST', //Post method
                    success: function(data) {
                        try {
                            var groupBooking = JSON.parse(data);

                            if (!jQuery('#zeevou-reserve-modal-message-error').hasClass("zeevou-hidden")) {
                                jQuery('#zeevou-reserve-modal-message-error').addClass("zeevou-hidden");
                            }
                            if (!jQuery('#zeevou-reserve-modal-message-error-email').hasClass("zeevou-hidden")) {
                                jQuery('#zeevou-reserve-modal-message-error-email').addClass("zeevou-hidden");
                            }
                            if (!jQuery('#zeevou-reserve-modal-message-error-mobile').hasClass("zeevou-hidden")) {
                                jQuery('#zeevou-reserve-modal-message-error-mobile').addClass("zeevou-hidden");
                            }

                            jQuery('#zeevou-reservation-form-firstname').val('');
                            jQuery('#zeevou-reservation-form-lastname').val('');
                            jQuery('#zeevou-reservation-form-email').val('');
                            jQuery('#zeevou-reservation-form-mobilenumber').val('');

                            if(zv_redirect_confirmation){
                                window.location.href = groupBooking.bookings[0].confirmation_link;
                                return;
                            }
                            if(zv_redirect_payment){
                                window.location.href = groupBooking.bookings[0].payment_link;
                                return;
                            }
                            jQuery('#zeevou-reserve-modal-message-success').removeClass("zeevou-hidden");
                        } catch (error) {
                            jQuery('#zeevou-reserve-modal-message-error').removeClass("zeevou-hidden");
                        }
                        // jQuery('#zeevou-reserve-modal-finalise-button').show();
                        // jQuery('#zeevou-reserve-modal-cancel-button').show();
                        jQuery('#zeevou-reserve-modal-finalise-loading-img').hide();

                    },
                    error: function(error) { console.log(error) }
                })
            })(jQuery);


        });
    });







}

// function zeevouCalculateAddonPrice(addon, nights, guests) {
//     var addon_price = 0;
//     if(addon.addon.type == "per booking"){
//         addon_price = addon.price.value;
//     }
//     if(addon.addon.type == "per night"){
//         addon_price = nights*addon.price.value;
//     }
//     if(addon.addon.type == "per guest"){
//         addon_price = guests*addon.price.value;
//     }
//     if(addon.addon.type == "per night/guest"){
//         addon_price = nights*guests*addon.price.value;
//     }
//     return addon_price;
// }

function zeevouCalculateExtraGuestPrice(rates, min_guest, number_of_guest) {
    extraGuestPrice = 0;
    if(number_of_guest > min_guest){
        moreGuest = number_of_guest - min_guest;
        jQuery.each(rates, function(ratekey, rateValue) {
            extraGuestPrice += (rateValue.extra_guest_price)*moreGuest;
        });
    }
    return extraGuestPrice;
}

function zeevouGetUnitImages(fileValue, first_unit_img_added, unit_type_id, is_last, image_delay) {


    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';

    var itemImageUrl = zvHubUrl + 'apis/attachments/resize/' + fileValue.id;


    if (!first_unit_img_added) {

        jQuery('#zeevou-unittype-item-' + unit_type_id + ' .zeevou-unittype-reservation-detail-mid').append(
            '<div class="zeevou-img-unit-react_lightgallery_item" data-src="' + itemImageUrl + '/1024/1024/' + fileValue.file_name + '"><img src="' + itemImageUrl + '/300/200/' + fileValue.file_name + '" ></div>'
        );

    } else {

        jQuery('#zeevou-unittype-item-' + unit_type_id + ' .zeevou-unittype-reservation-detail-mid').append(
            '<div class="zeevou-img-unit-more zeevou-img-unit-react_lightgallery_item" data-src="' + itemImageUrl + '/1024/1024/' + fileValue.file_name + '"><img src="' + itemImageUrl + '/300/200/' + fileValue.file_name + '" ></div>'
        );
    }

    if (is_last) {



        jQuery(document).ready(function($) {
            jQuery('.zeevou-unittype-reservation-detail-mid').lightGallery({
                pager: false,
                thumbnail: true,
                share: false,
                autoplay: false,
                rotate: false,
                comment: false,
                hash: false,
                video: false,
                selector: '.zeevou-img-unit-react_lightgallery_item'
            });

        });
    }


    // jQuery(document).ready(function($) {
    //     var data = {
    //         'action': 'zeevougetunitimages',
    //         'file_value': fileValue
    //     };
    //     // We can also pass the url value separately from ajaxurl for front end AJAX implementations
    //     jQuery.post(ajaxUrl, data, function(response) {
    //         console.log('response: ' + response);




    //     });
    // });

}

function zeevouGetCurrencySymbol(currency_code) {
    var currency_symbol = '$';
    if (currency_code == 'GBP') {
        currency_symbol = '£';
    } else if (currency_code == 'USD') {
        currency_symbol = '$';
    } else if (currency_code == 'MXN') {
        currency_symbol = '$';
    } else if (currency_code == 'THB') {
        currency_symbol = '฿';
    } else if (currency_code == 'EUR') {
        currency_symbol = '€';
    } else if (currency_code == 'AUD') {
        currency_symbol = 'A$';
    } else if (currency_code == 'CAD') {
        currency_symbol = 'C$';
    } else if (currency_code == 'VND') {
        currency_symbol = 'đ';
    } else if (currency_code == 'EGP') {
        currency_symbol = 'E£';
    } else if (currency_code == 'ZAR') {
        currency_symbol = 'R';
    } else if (currency_code == 'BRL') {
        currency_symbol = 'R$';
    } else if (currency_code == 'MYR') {
        currency_symbol = 'RM';
    } else if (currency_code == 'IDR') {
        currency_symbol = 'Rp';
    } else if (currency_code == 'SGD') {
        currency_symbol = 'S$';
    } else if (currency_code == 'AED') {
        currency_symbol = 'د.إ';
    } else if (currency_code == 'PYG') {
        currency_symbol = '₲';
    } else {
        currency_symbol = currency_code;
    }

    return currency_symbol;

}

function zeevouBookingWidgetAddAmenities(value) {
    //add bedrooms amenity
    if (value.bedrooms > 0) {

        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-unittype-amenities').append(
            jQuery('<div />', { 'class': 'zeevou-unittype-amenity-item' }).append(
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<img />', { 'class': 'zeevou-unittype-amenity-img', 'title': 'bedrooms', 'src': zvpluginUrl + '/zeevou/css/images/amenities/' + 'bedrooms.png' }).append(

                    )
                ),
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<div />', { 'text': 'Bedrooms x ' + value.bedrooms, 'class': 'zeevou-unittype-amenity-txt' }).append(

                    )
                )
            )
        );

    }

    //add full Bath Plus Shower Rooms amenity
    // if (value.full_bath_plus_shower_rooms > 0) {
    //
    //     jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-unittype-amenities').append(
    //         jQuery('<div />', { 'class': 'zeevou-unittype-amenity-item' }).append(
    //             jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
    //                 jQuery('<img />', { 'class': 'zeevou-unittype-amenity-img', 'title': 'full Bath Plus Shower Rooms', 'src': zvpluginUrl + '/zeevou/css/images/amenities/' + 'full-bath-plus-shower-rooms.png' }).append(
    //
    //                 )
    //             ),
    //             jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
    //                 jQuery('<div />', { 'text': 'Full Bath Plus Shower Rooms x ' + value.full_bath_plus_shower_rooms, 'class': 'zeevou-unittype-amenity-txt' }).append(
    //
    //                 )
    //             )
    //         )
    //     );
    //
    // }

    //add full Bathrooms amenity
    if (value.full_bathrooms > 0) {

        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-unittype-amenities').append(
            jQuery('<div />', { 'class': 'zeevou-unittype-amenity-item' }).append(
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<img />', { 'class': 'zeevou-unittype-amenity-img', 'title': 'full Bathrooms', 'src': zvpluginUrl + '/zeevou/css/images/amenities/' + 'full-bathrooms.png' }).append(

                    )
                ),
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<div />', { 'text': 'Full Bathrooms x ' + value.full_bathrooms, 'class': 'zeevou-unittype-amenity-txt' }).append(

                    )
                )
            )
        );

    }

    //add full Shower Rooms amenity
    if (value.full_shower_rooms > 0) {

        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-unittype-amenities').append(
            jQuery('<div />', { 'class': 'zeevou-unittype-amenity-item' }).append(
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<img />', { 'class': 'zeevou-unittype-amenity-img', 'title': 'full Shower Rooms', 'src': zvpluginUrl + '/zeevou/css/images/amenities/' + 'full-shower-rooms.png' }).append(

                    )
                ),
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<div />', { 'text': 'Full Shower Rooms x ' + value.full_shower_rooms, 'class': 'zeevou-unittype-amenity-txt' }).append(

                    )
                )
            )
        );

    }

    //add shower amenity
    if (value.shower > 0) {

        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-unittype-amenities').append(
            jQuery('<div />', { 'class': 'zeevou-unittype-amenity-item' }).append(
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<img />', { 'class': 'zeevou-unittype-amenity-img', 'title': 'shower', 'src': zvpluginUrl + '/zeevou/css/images/amenities/' + 'shower.png' }).append(

                    )
                ),
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<div />', { 'text': 'Shower x ' + value.shower, 'class': 'zeevou-unittype-amenity-txt' }).append(

                    )
                )
            )
        );

    }

    //add toilets amenity
    if (value.toilets > 0) {

        jQuery('#zeevou-unittype-item-' + value.id + ' .zeevou-unittype-amenities').append(
            jQuery('<div />', { 'class': 'zeevou-unittype-amenity-item' }).append(
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<img />', { 'class': 'zeevou-unittype-amenity-img', 'title': 'toilets', 'src': zvpluginUrl + '/zeevou/css/images/amenities/' + 'toilets.png' }).append(

                    )
                ),
                jQuery('<div />', { 'class': 'zeevou-f-width' }).append(
                    jQuery('<div />', { 'text': 'Toilets x ' + value.toilets, 'class': 'zeevou-unittype-amenity-txt' }).append(

                    )
                )
            )
        );

    }
}


function zeevouAmenitiesContentCreation(amenities) {

    var zeevou_amenities_widget = jQuery('#zeevou-amenities_widget');

    if (amenities === 0) {
        return;
    }

    amenities.reverse();

    jQuery.each(amenities, function(key, value) {

        zeevou_amenities_widget.append(
            jQuery('<div />', { 'class': '' }).append(
                jQuery('<div />', { 'class': 'zeevou-amenity-item', 'id': 'zeevou-amenity-item-'+value.id }).append(
                    jQuery(value.icon),
                    jQuery('<span />', { 'text': value.name, 'class': 'zeevou-text ' })
                )
            )
        );
        jQuery('#zeevou-amenity-item-'+value.id+' svg').attr("width", "25px" );
        jQuery('#zeevou-amenity-item-'+value.id+' svg').attr("height", "25px" );
        jQuery('#zeevou-amenity-item-'+value.id+' svg').addClass("zeevou-icon");


    });


}