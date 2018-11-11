<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Entrada;
use App\Superiores;
use App\Inferiores;
use Illuminate\Http\Response;

class entradaController extends Controller
{

    public function index()
    {
        $superiores = Superiores::orderBy('id', 'asc');
        $inferiores = Inferiores::orderBy('id', 'asc');

        //return ['celdasarriba' => $superiores, 'celdasabajo' => $inferiores];
        return response(Superiores::all()->jsonSerialize(), response::HTTP_CREATED);
    }


    public function store(Request $request)
    {   
        
        Entrada::create($request->all());
        return ;
    }

 

    public function update(Request $request, Entrada $entrada)
    {
        //
    }

    public function destroy(Entrada $entrada)
    {
        //
    }
}
