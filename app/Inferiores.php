<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inferiores extends Model
{
    protected $fillable = [ 'celda', 'estado', 'placa', 'marca', 'duracion'];
}
