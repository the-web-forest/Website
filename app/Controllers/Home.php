<?php

namespace App\Controllers;

use App\Helpers\PageHelper;
use App\Entities\NewsletterSubscription;
use App\Models\NewsletterSubscriptionModel;

class Home extends BaseController
{
    public function index()
    {
        $data = ['Title' => PageHelper::buildPageTitle()];
        return view('index',  $data);
    }
}
