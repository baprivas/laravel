<?php

use Illuminate\Database\Seeder;
use App\user;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Francisco Alegre',
            'email' => 'francisco-alegra@gmail.com',
            'password' => bcrypt('qwerty'),
        ]);
    }
}
