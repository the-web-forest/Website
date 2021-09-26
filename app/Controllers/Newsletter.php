<?php

namespace App\Controllers;

use App\UseCases\Newsletter\NewsletterRegisterUseCase;

class Newsletter extends BaseController
{
    public function register()
    {
        $data = NewsletterRegisterUseCase::getInstance()->run("dev.victor.bacega@gmail.com");
        return $data->toJson();
    }
    
}
