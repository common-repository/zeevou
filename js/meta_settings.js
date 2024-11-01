var zvpluginUrl = ms_getSettings.pluginsUrl;
var zeevouUrl = ms_getSettings.zeevou_url;
var zvAdminUrl = ms_getSettings.zvAdminUrl;

jQuery(document).ready(function($) {

    $("#zeevou_brands").change(function() {

        zeevou_get_properties("");
    });



    $("#zeevou_properties").change(function() {

        zeevou_generate_page_url("");
    });

});

function zeevou_generate_page_url(savedPageURL) {


    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';
    var propertySelect = jQuery('#zeevou_properties');
    var brand = jQuery("#zeevou_brands").val();

    var page = jQuery("#zeevou_property_page").val();

    if (jQuery("#zeevou_properties").val() != 0) {

        if (jQuery("#zeevou_properties").val() == "more") {

            page++;


            jQuery("#zeevou_brands_loading").show();
            (function($) {

                $.ajax({
                    url: ajaxUrl,
                    data: {
                        action: 'zeevougetproperties',
                        page: page,
                        brand: brand
                    },
                    method: 'POST', //Post method
                    success: function(response) {

                        var propertiesArray = JSON.parse(response);
                        propertiesArray = propertiesArray.data;
                        if (propertiesArray.length > 0) {
                            $("#zeevou_properties option[value='more']").remove();
                        } else {
                            jQuery("#zeevou_brands_loading").hide();
                            return;
                        }
                        propertiesArray.forEach(element => {
                            propertySelect.append('<option value="' + element.id + '">' + element.name + '</option>');
                        });

                        jQuery("#zeevou_brands_loading").hide();
                        jQuery("#zeevou_property_page").val(page);
                        propertySelect.append('<option value="more">Load More</option>');

                    },
                    error: function(error) {
                        console.log(error);
                        jQuery("#zeevou_brands_loading").hide();
                    },

                })
            })(jQuery);

            return;
        }

        var prop_address = jQuery("#zeevou_properties").find(":selected").data('value');
        var prop_name = jQuery("#zeevou_properties").val().replace(/\s+/g, "-");

        var page_url = prop_address.link;
        page_url = page_url.toLowerCase();


        jQuery("#zeevou_page_url").val(page_url);
        jQuery("#zeevou_property_id").val(prop_address.id);
    } else {
        jQuery("#zeevou_page_url").val("");
        jQuery("#zeevou_pageurl_label_row").hide('slow');
        jQuery("#zeevou_pageurl_input_row").hide('slow');
        jQuery("#zeevou_property_id").val("");
    }
}

function zeevou_get_properties(propertyValue, savedPageURL) {

    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';
    var brandSelect = jQuery('#zeevou_brands');

    var page = jQuery("#zeevou_brand_page").val();

    if (jQuery("#zeevou_brands").val() != 0) {


        if (jQuery("#zeevou_brands").val() == "more") {

            page++;

            jQuery("#zeevou_brands_loading").show();
            (function($) {

                $.ajax({
                    url: ajaxUrl,
                    data: {
                        action: 'zeevougetbrands',
                        page: page
                    },
                    method: 'POST', //Post method
                    success: function(response) {

                        var brandsArray = JSON.parse(response);
                        if (brandsArray.length > 0) {
                            $("#zeevou_brands option[value='more']").remove();
                        } else {
                            return;
                        }
                        brandsArray.forEach(element => {
                            brandSelect.append('<option value="' + element.id + '">' + element.name + '</option>');
                        });

                        jQuery("#zeevou_brands_loading").hide();
                        jQuery("#zeevou_brand_page").val(page);
                        brandSelect.append('<option value="more">Load More</option>');

                    },
                    error: function(error) {
                        console.log(error);
                        jQuery("#zeevou_brands_loading").hide();
                        jQuery("#zeevou_brand_page").val(page);
                    },

                })
            })(jQuery);

            return;
        }

        var brand = jQuery("#zeevou_brands").val();


        jQuery("#zeevou_brands_loading").show();

        (function($) {

            $.ajax({
                url: ajaxUrl,
                data: {
                    action: 'zeevougetproperties',
                    page: 1,
                    brand: brand
                },
                method: 'POST', //Post method
                success: function(response) {
                    // console.log("data: " + response);
                    jQuery("#zeevou_brands_loading").hide();

                    jQuery("#zeevou_properties_label_row").show('slow');
                    jQuery("#zeevou_properties_input_row").show('slow');
                    var propertySelect = jQuery('#zeevou_properties');
                    propertySelect.empty();
                    propertySelect.append('<option value="0">Please select a property</option>');


                    if (response != "") {
                        var propertiesArray = jQuery.parseJSON(response);
                        // console.log(propertiesArray);
                        propertiesArray = propertiesArray.data;

                        // propertiesArray.sort(SortByName);



                        propertiesArray.forEach(element => {

                            // var country = element.address.country.name.replace(/\s+/g, "-");
                            // var city = element.address.city.replace(/\s+/g, "-");
                            var link = element.property_link;
                            var id = element.id;

                            var dataValue = '{"id":' + id + ',"link":"' + link + '"}';
                            // console.log(dataValue);
                            if (propertyValue == "" || propertyValue != element.name) {
                                propertySelect.append('<option data-value=' + dataValue + ' value="' + element.name + '">' + element.name + '</option>');
                            } else {
                                propertySelect.append('<option data-value=' + dataValue + ' value="' + element.name + '" selected>' + element.name + '</option>');
                                zeevou_generate_page_url(savedPageURL);
                            }
                        });

                        propertySelect.append('<option value="more">Load More</option>');

                    }

                },
                error: function(error) {
                    console.log(error);
                    jQuery("#zeevou_brands_loading").hide();
                },

            })
        })(jQuery);

        // jQuery.post(zvpluginUrl + "/zeevou/get_properties.php", { brand: brand }, function(data) {
        //     // console.log("data: " + data);




        // });



    } else {
        jQuery('#zeevou_properties').val(0);
        jQuery("#zeevou_page_url").val("");
        jQuery("#zeevou_property_id").val("");

        jQuery("#zeevou_properties_label_row").hide('slow');
        jQuery("#zeevou_properties_input_row").hide('slow');

        jQuery("#zeevou_pageurl_label_row").hide('slow');
        jQuery("#zeevou_pageurl_input_row").hide('slow');

        jQuery('#zeevou_properties option').each(function() {
            if (jQuery(this).val() != 0) {
                jQuery(this).remove();
            }
        });
    }
}

//This will sort your array
function SortByName(a, b) {
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}