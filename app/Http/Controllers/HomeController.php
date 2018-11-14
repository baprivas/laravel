<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Entrada;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection as Collection;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function score()
    {
        // $entradas = Entrada::all();
        $records = DB::select("SELECT c.descripcion as 'Puesto', COUNT(e.puesto) as 'Total', SUM(e.duracion) as 'DuracionFin'
         FROM entradas as e, contadores as c
        WHERE c.descripcion = e.puesto
        GROUP BY c.descripcion HAVING COUNT(*) >= 1
        ORDER BY COUNT(e.puesto) DESC");
        $records = Collection::make($records);
        $records =  $records->sortByDesc('Total');
        
        return response()->json($records);
    }

    
}
