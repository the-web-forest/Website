<?php

namespace App\Entities;

use CodeIgniter\Entity\Entity;

class NewsletterSubscription extends Entity
{
    protected $attributes = [
        'id' => null,
        'email' => null,
        'created_at' => null,
        'updated_at' => null,
    ];
}