<?php

namespace App\Controllers;

use App\UseCases\Newsletter\NewsletterRegisterUseCase;

class Newsletter extends BaseController
{
    public function register()
    {   
        $email = $_POST["email"];
        $data = NewsletterRegisterUseCase::getInstance()->run($email);
        return $data->toJson();
    }
    
}
