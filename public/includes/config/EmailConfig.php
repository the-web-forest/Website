<?php 

class EmailConfig {

    private $host = 'smtp.titan.email';
    private $username = 'contato@thewebforest.com';
    private $password = 'x!OafdA0$^Ab';
    private $name = 'The Web Forest';

    /**
     * Get the value of host
     */ 
    public function getHost()
    {
        return $this->host;
    }

    /**
     * Get the value of username
     */ 
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Get the value of password
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }
}