<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Create_newsletter_subscriptions extends Migration
{
    public function up()
    {
        $fields = [
            'id'    => [
                'type'           => 'INT',
                'constraint'     => 5,
                'unsigned'       => true,
                'auto_increment' => true
            ],
            'email' => [
                'type'=> 'VARCHAR',
                'constraint'     => 100,
                'null'           => false,
            ],
            'created_at' => [
                'type' => 'DATETIME'
            ],
            'updated_at' => [
                'type' => 'DATETIME'
            ]
            ];
        $this->forge->addField($fields);
        $this->forge->addKey('id', true);
        $this->forge->createTable('newsletter_subscriptions');
    }

    public function down()
    {
        $this->forge->dropTable('newsletter_subscriptions');
    }
}
