(function($) {
    "use strict";

        if(typeof revslider_showDoubleJqueryError === "undefined") {
          function revslider_showDoubleJqueryError(sliderID) {
            var err = "<div class='rs_error_message_box'>";
            err += "<div class='rs_error_message_oops'>Oops...</div>";
            err += "<div class='rs_error_message_content'>";
            err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
            err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
            err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
            err += "</div>";
          err += "</div>";
            jQuery(sliderID).show().html(err);
          }
        }




          var revapi2,
            tpj;
          function revinit_revslider21() {
          jQuery(function() {
            tpj = jQuery;
            revapi2 = tpj("#rev_slider_1_1");
            if(revapi2==undefined || revapi2.revolution == undefined){
              revslider_showDoubleJqueryError("rev_slider_1_1");
            }else{
              revapi2.revolution({
                sliderLayout:"fullwidth",
                visibilityLevels:"1920,1700,1050,680",
                gridwidth:"1380,1024,778,480",
                gridheight:"900,700,640,600",
                spinner:"spinner0",
                perspective:600,
                perspectiveType:"local",
                editorheight:"900,700,640,600",
                responsiveLevels:"1920,1700,1050,680",
                progressBar: {
                  color:"rgba(199,199,199,0.5)",
                  size:5,
                  x:0,
                  y:0
                },
                navigation: {
                  wheelCallDelay:1000,
                  onHoverStop:false,
                  arrows: {
                    enable:true,
                    tmp:"<div class=\"tp-title-wrap\">    <div class=\"tp-arr-imgholder\"></div> </div>",
                    style:"zeus",
                    hide_onmobile:true,
                    hide_under:"778px",
                    left: {
                      h_offset:30
                    },
                    right: {
                      h_offset:30
                    }
                  },
                  bullets: {
                    enable:true,
                    tmp:"<span class=\"tp-bullet-image\"></span>",
                    style:"hebe",
                    hide_onmobile:false,
                    hide_under:"200px",
                    hide_onleave:false,
                    v_offset:35,
                    container:"layergrid"
                  }
                },
                parallax: {
                  levels:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,30],
                  type:"mouse",
                  origo:"slidercenter",
                  speed:"300ms",
                  speedbg:"3000ms",
                  speedls:"3000ms"
                },
                scrolleffect: {
                  set:true,
                  multiplicator:1.3,
                  multiplicator_layers:1.3
                },
                sbtimeline: {
                  set:true
                },
                fallbacks: {
                  allowHTML5AutoPlayOnAndroid:true
                },
              });
            }
            
          });
          } // End of RevInitScript
        var once_revslider21 = false;
        if (document.readyState === "loading") {document.addEventListener('readystatechange',function() { if((document.readyState === "interactive" || document.readyState === "complete") && !once_revslider21 ) { once_revslider21 = true; revinit_revslider21();}});} else {once_revslider21 = true; revinit_revslider21();}



})(jQuery);