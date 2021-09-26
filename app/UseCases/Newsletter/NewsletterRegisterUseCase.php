<?php

namespace App\UseCases\Newsletter;

use App\Repositories\NewsletterRepository;
use App\UseCases\Newsletter\Dtos\NewsletterRegisterUseCaseResponse;

class NewsletterRegisterUseCase {

    private NewsletterRepository $newsletterRepository;

    public function __construct()
    {
        $this->newsletterRepository = NewsletterRepository::getInstance();
    }

    function run(string $email): NewsletterRegisterUseCaseResponse{
        $response = new NewsletterRegisterUseCaseResponse();

        $alreadyRegistered = $this->userExists($email);

        if($alreadyRegistered) {
            $response->setStatus("ALREADY REGISTERED");
            return $response;
        }

        return $response;
    }

    private function userExists(string $email): bool {
        try {
            $register = $this->newsletterRepository->findByEmail($email);
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    static function getInstance() {
        return new NewsletterRegisterUseCase();
    }

} 