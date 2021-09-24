<?php

namespace App\Models;

use CodeIgniter\Model;

class NewsletterSubscriptionModel extends Model
{
    protected $table         = 'newsletter_subscriptions';
    protected $allowedFields = [
        'id', 'email',
    ];
    protected $returnType    = 'App\Entities\NewsletterSubscription';
    protected $useTimestamps = true;
}