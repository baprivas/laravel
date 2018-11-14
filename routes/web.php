<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/record', 'HomeController@score')->name('score');
Route::resource('entradas', 'entradaController', ['except' => 'show', 'create', 'edit']);
