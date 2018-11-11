<?php

use Illuminate\Database\Seeder;
use App\Inferiores;

class ParteinferiorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Inferiores::create([
            'celda' => 'c11',
            'estado' => 'ocupado',
            'placa' => 'HKH',
            'marca' => 'Jeep',

        ]);

        Inferiores::create([
            'celda' => 'c12',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);
        
        Inferiores::create([
            'celda' => 'c13',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);

        Inferiores::create([
            'celda' => 'c14',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);

        Inferiores::create([
            'celda' => 'c15',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,

        ]);

        Inferiores::create([
            'celda' => 'c16',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);
        
        Inferiores::create([
            'celda' => 'c17',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);

        Inferiores::create([
            'celda' => 'c18',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);
        
        Inferiores::create([
            'celda' => 'c19',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]);
        
        Inferiores::create([
            'celda' => 'c20',
            'estado' => 'disponible',
            'created_at' => null,
            'updated_at' => null,
        ]); 
    }
}
