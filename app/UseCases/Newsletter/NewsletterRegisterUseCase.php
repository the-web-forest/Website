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

    function run(string $email): NewsletterRegisterUseCaseResponse {

        $response = new NewsletterRegisterUseCaseResponse();
        $response->setError(false);

        $alreadyRegistered = $this->userExists($email);

        if($alreadyRegistered) {
            $response->setStatus("ALREADY REGISTERED");
            return $response;
        }

        $registered = $this->register($email);
        
        if($registered) {
            $response->setStatus("USER REGISTERED");
        }

        return $response;
    }

    private function userExists(string $email): bool {
        try {
            $this->newsletterRepository->findByEmail($email);
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    private function register(string $email): bool {
        try {
            $this->newsletterRepository->create($email);
            return true;
        } catch (\Throwable $th) {
            var_dump($th);
            die();
            return false;
        }
    }

    static function getInstance() {
        return new NewsletterRegisterUseCase();
    }

} 