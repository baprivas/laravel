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
        $superiores = Superiores::all();
        $inferiores = Inferiores::all();
        $juntos = [$superiores, $inferiores];
        //return ['celdasarriba' => $superiores, 'celdasabajo' => $inferiores];
        //return response([Superiores::all()->jsonSerialize(), response::HTTP_CREATED]);
        return response()->json($juntos);
    }


    public function store(Request $request)
    {   
        
        Entrada::create($request->all());
        return ;
    }

 

    public function update(Request $request, $id)
    {
        if ($request->panel === 'superior'){
            Superiores::find($id)->update($request->all());
        }

        if ($request->panel === 'inferior'){
            Inferiores::find($id)->update($request->all());
        }
            
        
    }

    public function destroy(Entrada $entrada)
    {
        //
    }
}
