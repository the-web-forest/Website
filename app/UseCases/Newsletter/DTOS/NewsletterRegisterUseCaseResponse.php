<?php 

namespace App\UseCases\Newsletter\Dtos;

class NewsletterRegisterUseCaseResponse {

    private string $status;
    private bool $error;

    public function setStatus(string $status) {
        $this->status = $status;
    }

    public function setError(bool $error) {
        $this->error = $error;
    }

    public function toJson(): string {
        return json_encode(get_object_vars($this));
    }

}