var zvpluginUrl = dw_getSettings.pluginsUrl;
var zvAdminUrl = dw_getSettings.zvAdminUrl;

jQuery(document).ready(function($) {
    $("input[type='number']").inputSpinner();

    $(window).on("load", function() {
        // console.log($('#single-city-radio').attr("value"));
        if ($('input[id="multi-city-radio"]').is(':checked')) {
            // console.log($('input[id="multi-city-radio"]').attr("value"));
            $(".city-name-box").hide('slow');
        }
        if ($('input[id="single-city-radio"]').is(':checked')) {
            // console.log($('input[id="single-city-radio"]').attr("value"));
            $(".city-name-box").show('slow');
        }
    });

    var ajaxUrl = zvAdminUrl + 'admin-ajax.php';

    $("#zeevou-connect-btn").click(function() {
        console.log("btn clicked");
        username = $("#zeevou_username").val();
        password = $("#zeevou_password").val();
        //Ajax for calling php function
        $("#zeevou_connect_loading").show();

        (function($) {

            $.ajax({
                url: ajaxUrl,
                data: {
                    action: 'zeevouconnect',
                    username: username,
                    password: password
                },
                method: 'POST', //Post method
                success: function(response) {

                    console.log("data: " + response);
                    $("#zeevou_connect_loading").hide();
                    if (response == 'Success') {
                        $("#zeevou_username_row").hide('slow');
                        $("#zeevou_password_row").hide('slow');
                        $("#zeevou-connect-btn").hide();
                        $("#zeevou-disconnect-btn").show();

                    }

                },
                error: function(error) {
                    console.log(error);
                },

            })
        })(jQuery);

        // $.post(zvpluginUrl + "/zeevou/connect_zeevou.php", { username: username, password: password }, function(data) {
        //     console.log("data: " + data);
        //     $("#zeevou_connect_loading").hide();
        //     if (data == 'Success') {
        //         $("#zeevou_username_row").hide('slow');
        //         $("#zeevou_password_row").hide('slow');
        //         $("#zeevou-connect-btn").hide();
        //         $("#zeevou-disconnect-btn").show();

        //     }

        // });
    });

    $("#zeevou-disconnect-btn").click(function() {
        $("#zeevou_username_row").show('slow');
        $("#zeevou_password_row").show('slow');
        $("#zeevou-disconnect-btn").hide();
        $("#zeevou-connect-btn").show();


        (function($) {

            $.ajax({
                url: ajaxUrl,
                data: {
                    action: 'zeevoudisconnect'
                },
                method: 'POST', //Post method
                success: function(response) {

                },
                error: function(error) {
                    console.log(error);
                },

            })
        })(jQuery);

        // $.post(zvpluginUrl + "/zeevou/disconnect_zeevou.php", {}, function(data) {
        //     // console.log('disconnected');
        // });
    });


    $('input[name="zeevou_city_radio"]').click(function() {
        // console.log($(this).attr("value"));
        if ($(this).attr("value") == "Multi-City") {
            $(".city-name-box").hide('slow');
        }
        if ($(this).attr("value") == "Single City") {
            $(".city-name-box").show('slow');

        }

    });
    // $('input[name="city-radio"]').trigger('click');

});

var rangeSlider_br = function() {
    var slider = jQuery('.range-slider.br'),
        range = jQuery('.range-slider__range.br'),
        value = jQuery('.range-slider__value.br');

    slider.each(function() {

        value.each(function() {
            var value = jQuery(this).prev().attr('value');
            jQuery(this).html(value + 'px');
        });

        range.on('input', function() {
            jQuery(this).next(value).html(this.value + 'px');
        });
    });
};

rangeSlider_br();

var rangeSlider_mw = function() {
    var slider = jQuery('.range-slider.mw'),
        range = jQuery('.range-slider__range.mw'),
        value = jQuery('.range-slider__value.mw');

    slider.each(function() {

        value.each(function() {
            var value = jQuery(this).prev().attr('value');
            jQuery(this).html(value + '%');
        });

        range.on('input', function() {
            jQuery(this).next(value).html(this.value + '%');
        });
    });
};

rangeSlider_mw();