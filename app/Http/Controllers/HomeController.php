<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Superiores;
use App\Inferiores;
use Illuminate\Http\Response;

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

    }

    public function inicio()
    {
        return view('home');
    }
}
