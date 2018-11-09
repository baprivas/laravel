<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entrada extends Model
{
    protected $fillable = ['id', 'placa', 'marca', 'estado', 'puesto',];
}
