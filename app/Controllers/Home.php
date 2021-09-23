<?php

namespace App\Controllers;

use App\Helpers\PageHelper;

class Home extends BaseController
{
    public function index()
    {
        $data = ['Title' => PageHelper::buildPageTitle()];
        return view('index',  $data);
    }
}
