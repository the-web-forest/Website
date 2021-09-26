<?php

namespace App\Controllers;

use App\UseCases\Newsletter\NewsletterRegisterUseCase;

class Newsletter extends BaseController
{
    public function register()
    {
        $data = NewsletterRegisterUseCase::getInstance()->run("mdbf42@gmail.com");
        return $data->getStatus();
    }
    
}
