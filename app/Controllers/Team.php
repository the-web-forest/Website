<?php

namespace App\Controllers;

use App\Helpers\PageHelper;

class Team extends BaseController
{
    public function index()
    {
        $data = ['Title' => PageHelper::buildPageTitle('Time')];
        return view('team', $data);
    }
}
