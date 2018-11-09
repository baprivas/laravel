<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Entrada;

class entradaController extends Controller
{

    public function index()
    {
        //
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
