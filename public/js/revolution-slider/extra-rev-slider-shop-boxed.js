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




          var revapi1,
            tpj;
          jQuery(function() {
            tpj = jQuery;
            if(tpj("#rev_slider_shop_boxed").revolution == undefined){
              revslider_showDoubleJqueryError("#rev_slider_shop_boxed");
            }else{
              revapi1 = tpj("#rev_slider_shop_boxed").show().revolution({
                jsFileLocation:"js/",
                visibilityLevels:"1240,1024,769,480",
                gridwidth:"1340,1024,778,480",
                gridheight:"900,600,600,600",
                minHeight:"",
                spinner:"spinner3",
                editorheight:"700,600,600,600",
                responsiveLevels:"1240,1024,769,480",
                shadow:6,
                navigation: {
                  mouseScrollNavigation:false,
                  arrows: {
                    enable:true,
                    style:"zeus",
                    hide_onmobile:true,
                    hide_under:768,
                    left: {
                      h_offset:0
                    },
                    right: {
                      h_offset:0
                    }
                  },
                  bullets: {
                    enable:true,
                    tmp:"<span class=\"tp-bullet-image\"></span>",
                    style:"hebe"
                  }
                },
                parallax: {
                  levels:[2,3,4,5,6,7,10,12,15,18,20,40,50,60,70,55],
                  type:"scroll",
                  origo:"slidercenter",
                  speedbg:10,
                  speedls:10
                },
                scrolleffect: {
                  set:true,
                  fade:true,
                  multiplicator:1.3,
                  multiplicator_layers:1.3
                },
                fallbacks: {
                  allowHTML5AutoPlayOnAndroid:true
                },
              });
            }
            
          });
})(jQuery);