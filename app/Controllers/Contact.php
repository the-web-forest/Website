<?php

namespace App\Controllers;

use App\Helpers\PageHelper;

class Contact extends BaseController
{
    public function index()
    {
        $data = ['Title' => PageHelper::buildPageTitle('Contato')];
        return view('contact', $data);
    }
}
