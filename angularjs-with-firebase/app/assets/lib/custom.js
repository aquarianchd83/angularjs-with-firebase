// JavaScript Document

$(document).ready(function () {


    $(".tab_content").hide();
    $(".tab_content:first").show();
    $('.tab_drawer_heading.d_active').closest('.tab_content').css("display", "block");

    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
    $('ul.tabs li').last().addClass("tab_last");




    $('.price').click(function () {
        $('.active').removeClass('active')
        $(this).addClass("active");
    });

    //portfolio-image selected
    $('.portfolio-image').click(function () {
        $(this).addClass("selected");

    });
    $('.box-body').click(function () {
        $(this).siblings().find('selected').removeClass('selected');
    });

    //loader
    $(window).load(function () {
        $('#spinner').fadeOut(200);
        $('#preloader').delay(200).fadeOut('slow');
        $('.wrapper').fadeIn(200);
        $('#custumize-style').fadeIn(200);
    });

    //favourite selected
    //$('.video_track p i').click(function () {
    //    $('.favourite').removeClass('favourite')
    //    $(this).addClass('favourite');
    //});

    //favourite selected
    $('.video_track p i').click(function () {
        $(this).toggleClass('favourite');
    });


    $('.modal-body .portfolio-image').hover(


        function () {
            console.log("asd");
            $(this).find('.image-icon').css("opacity", "1");
        },
		function () {
		    console.log("asd");
		    $(this).find('.image-icon').css("opacity", "0");
		}
	);

    $("[data-tt=tooltip]").tooltip();
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
        $('.sidebar-menu li > a.modal_menu').click(function () {
            $("body").removeClass("sidebar-open");
        });
    }


    $('.price').click(function () {
        $('.active').removeClass('active');
        $(this).addClass("active");

    });

    $("#showhide").click(function () {
        if ($("#register-form-password").attr("type") == "password") {
            $("#register-form-password").attr("type", "text");
        }
        else {
            $("#register-form-password").attr("type", "password");
        }

    });

    $("#reset").hide();
    $("#reset_bt").click(function () {
        $("#login").hide();
        $("#reset").show();
    });
    $("#cancel_bt").click(function () {
        $("#reset").hide();
        $("#login").show();
    });


    //login form validation
    $("#login-form").submit(function (event) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = $("#login-form-email").val();
        if ($("#login-form-email").val() == "") {
            $('.style-msg').remove();
            $("#login-form-email").closest('.col_full').removeClass('success').addClass('has-error');
            $("#login-form-email").focus();
            $("#login-form-email").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Email ID should not be empty.</div></div>');
            //alert("The First Name should not be empty");
            return false;
        }
        else if (!filter.test(email)) {
            $('.style-msg').remove();
            $("#login-form-email").closest('.col_full').removeClass('success').addClass('has-error');
            $("#login-form-email").focus();
            $("#login-form-email").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Email ID is not valid.</div></div>');
            return false;
        }
        else {
            $("#login-form-email").closest('.col_full').removeClass('has-error');
            $('.style-msg').remove();
        }
        if ($("#login-form-password").val() == "") {
            $('.style-msg').remove();
            $("#login-form-password").closest('.form-group').removeClass('success').addClass('has-error');
            $("#login-form-password").focus();
            $("#login-form-password").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> The Current Password should not be empty.</div></div>');
            //alert("The Current Password should not be empty");
            return false;
        }
        else if ($("#login-form-password").val().length < 8) {
            $('.style-msg').remove();
            $("#login-form-password").closest('.form-group').removeClass('success').addClass('has-error');
            $("#login-form-password").focus();
            $("#login-form-password").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Minimum 8 characters are required.</div></div>');
            //alert("Minimum 8 characters are required");
            return false;
        }
        else {
            $("#login-form-password").closest('.form-group').removeClass('has-error');
            $('.style-msg').remove();
        }
    });

    //reset form validation
    $("#reset-form").submit(function (event) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = $("#reset-form-email").val();
        if ($("#reset-form-email").val() == "") {
            $('.style-msg').remove();
            $("#reset-form-email").closest('.col_full').removeClass('success').addClass('has-error');
            $("#reset-form-email").focus();
            $("#reset-form-email").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Email ID should not be empty.</div></div>');
            //alert("The First Name should not be empty");
            return false;
        }
        else if (!filter.test(email)) {
            $('.style-msg').remove();
            $("#reset-form-email").closest('.col_full').removeClass('success').addClass('has-error');
            $("#reset-form-email").focus();
            $("#reset-form-email").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Email ID is not valid.</div></div>');
            return false;
        }
        else {
            $("#reset-form-email").closest('.col_full').removeClass('has-error');
            $('.style-msg').remove();
        }
    });


    //register form validation
    $("#register-form").submit(function (event) {

        if ($("#register-form-name").val() == "") {
            $("#register-form-name").closest('.form-group').removeClass('success').addClass('has-error');
            $("#register-form-name").focus();
            $("#register-form-name").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> The Name should not be empty.</div></div>');
            //alert("The First Name should not be empty");
            return false;
        }
        else if ($("#register-form-name").val().length < 2) {
            $('.style-msg').remove();
            $("#register-form-name").closest('.form-group').removeClass('success').addClass('has-error');
            $("#register-form-name").focus();
            $("#register-form-name").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Minimum 2 characters are required.</div></div>');
            //alert("Minimum 2 characters are required");
            return false;
        }
        else {
            $("#register-form-name").closest('.form-group').removeClass('has-error');
            $('.style-msg').remove();
        }

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = $("#register-form-email").val();
        if ($("#register-form-email").val() == "") {
            $('.style-msg').remove();
            $("#register-form-email").closest('.col_full').removeClass('success').addClass('has-error');
            $("#register-form-email").focus();
            $("#register-form-email").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Email ID should not be empty.</div></div>');
            //alert("The First Name should not be empty");
            return false;
        }
        else if (!filter.test(email)) {
            $('.style-msg').remove();
            $("#register-form-email").closest('.col_full').removeClass('success').addClass('has-error');
            $("#register-form-email").focus();
            $("#register-form-email").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Email ID is not valid.</div></div>');
            return false;
        }
        else {
            $("#register-form-email").closest('.col_full').removeClass('has-error');
            $('.style-msg').remove();
        }
        if ($("#register-form-password").val() == "") {
            $('.style-msg').remove();
            $("#register-form-password").closest('.form-group').removeClass('success').addClass('has-error');
            $("#register-form-password").focus();
            $("#register-form-password").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> The Current Password should not be empty.</div></div>');
            //alert("The Current Password should not be empty");
            return false;
        }
        else if ($("#register-form-password").val().length < 8) {
            $('.style-msg').remove();
            $("#register-form-password").closest('.form-group').removeClass('success').addClass('has-error');
            $("#register-form-password").focus();
            $("#register-form-password").parent().append('<div class="style-msg errormsg"><div class="sb-msg"><i class="icon-remove"></i><strong>Oh snap!</strong> Minimum 8 characters are required.</div></div>');
            //alert("Minimum 8 characters are required");
            return false;
        }
        else {
            $("#register-form-password").closest('.form-group').removeClass('has-error');
            $('.style-msg').remove();
        }
    });

});




