<?php

namespace App\Controllers;

class Team extends BaseController
{
    public function index()
    {
        $data = ['Title' => 'Time'];
        return view('team', $data);
    }
}
