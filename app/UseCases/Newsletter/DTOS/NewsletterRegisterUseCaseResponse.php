<?php 

namespace App\UseCases\Newsletter\Dtos;

class NewsletterRegisterUseCaseResponse {

    private string $status;

    public function setStatus(string $status) {
        $this->status = $status;
    }

    public function getStatus(): string {
        return $this->status;
    }

}