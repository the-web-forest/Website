<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $data = ['Title' => 'Home'];
        return view('index',  $data);
    }
}
