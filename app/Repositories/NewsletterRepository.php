<?php

namespace App\Repositories;

use App\Entities\NewsletterSubscription;
use App\Models\NewsletterSubscriptionModel;
use Error;

class NewsletterRepository {

    private NewsletterSubscriptionModel $newsletterSubscriptionModel;

    function __construct()
    {
        $this->newsletterSubscriptionModel = new NewsletterSubscriptionModel();
    }

    public function findByEmail(string $email): NewsletterSubscription{
        $newsletterSubscription = new NewsletterSubscription();
        $newsletterSubscription->setEmail($email);
        $dataArray = $this->newsletterSubscriptionModel->where('email', $email)->findAll(1);

        if(count($dataArray) > 0) {
            return $dataArray[0];
        }

        throw new Error("User Not Found");

    }

    static function getInstance(): NewsletterRepository {
        return new NewsletterRepository();
    }

}