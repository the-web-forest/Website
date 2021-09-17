<?php

namespace App\Controllers;

class Contact extends BaseController
{
    public function index()
    {
        $data = ['Title' => 'Contato'];
        return view('contact', $data);
    }
}
