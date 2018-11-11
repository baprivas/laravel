<?php

use Illuminate\Database\Seeder;
use App\Superiores;

class ParteSuperiorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   

        Superiores::create([
            'celda' => 'c1',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);

        Superiores::create([
            'celda' => 'c2',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);
        
        Superiores::create([
            'celda' => 'c3',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);

        Superiores::create([
            'celda' => 'c4',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);

        Superiores::create([
            'celda' => 'c5',
            'estado' => 'ocupado',
            'placa' => 'HKH',
            'marca' => 'Jeep',

        ]);

        Superiores::create([
            'celda' => 'c6',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);
        
        Superiores::create([
            'celda' => 'c7',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);

        Superiores::create([
            'celda' => 'c8',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);
        
        Superiores::create([
            'celda' => 'c9',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);
        
        Superiores::create([
            'celda' => 'c10',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);        
    }
}
