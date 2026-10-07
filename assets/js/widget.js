window.addEventListener("load", function() {
    window.ee_form_widget_baseurl ="https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";// "https://eewidget.extraaedge.com/";
    if (!document.getElementById("__formWidgetCss")) {
        var e = document.createElement("link");
        e.id = "__formWidgetCss",
        e.rel = "stylesheet",
        e.href = window.ee_form_widget_baseurl + "css/stylesheet.min.css",
        e.type = "text/css"
		document.getElementsByTagName("head")[0].appendChild(e);
    }
    const t = document.createElement("script");
    t.type = "text/javascript",

     t.onload = async function () {
        try {
            // Form 2
            _eeFormWidget_form_3 = new eeFormWidget();
            await _eeFormWidget_form_3.init("dsbs", "form-3", "ee-form-3");

            // Form 5
            _eeFormWidget_form_4 = new eeFormWidget();
            await _eeFormWidget_form_4.init("dsbs", "form-4", "ee-form-4");

            

        } catch (e) {
            console.log("Form Widget Error:", e);
        }
    };

    t.src = window.ee_form_widget_baseurl + "js/eeFormWidget.min.js",
    document.getElementsByTagName("head")[0].appendChild(t)
});
