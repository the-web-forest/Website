<?php

namespace App\Helpers;

class PageHelper {

    public static function buildPageTitle ($title = null) {
        $config = $config ?? config('App');
        $pageName = $config->appName;
    
        if($title) {
            $pageName = "$pageName | $title";
        }
    
        return $pageName;
    }

}