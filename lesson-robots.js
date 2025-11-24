// Inline scripts from lesson-robots.html

var AppData = {
    host_path: "https://eduboom.ro",
    host_path_production: "eduboom.ro",
    site_assets_dir: "assets/eduboom-ro",
    current_language: "ro",
    version: "1.214",
    fb_id: 757323585114223,
    fb_sdk_version: "v11.0",
    ga_tracking: 1,
    ga_console: 0,
    is_logged: "false",
    session_timer: {"interval":300000, "elast_time":300000},
    interval_views_counter: 0,
    show_counter: true,
    //flowplayer_key: "",
    //flowplayer_version: "7.2.7",
    is_first_login: 0,
    locale_language: "ro_RO",
    login_loginpage: 0,
    error_tracking_timeout: "1000",
    accept_third_party_cookies: 0,
    tiktok_tracking: 1,
    tiktok_console: 0,
    data_layer_active: 1,
    data_layer_console: 0,
    capi_tracking: 1,
};

// Init dataLayer
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Start Google Tag
gtag('js', new Date());

// Default consent state – before choice
gtag('consent', 'default', {
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted' //must be granted always, regardless of choice.
});


// Configs
gtag('config', 'G-06BKCVX01P' );

gtag('config', 'AW-460032829');

gtag('config', 'AW-432769243');

// Google Tag Manager
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PTD57PS2');

// Embedded chatbot
window.embeddedChatbotConfig = {
    chatbotId: "3VkGdL2yVDZB9qtfBOqco",
    domain: "www.chatbase.co"
}