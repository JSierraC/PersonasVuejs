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
    return view('index');
});
Route::post('obtenerPersonas','PersonasController@obtenerPersonas');
Route::post('guardarPersonas','PersonasController@guardarPersonas');
Route::post('actualizarPersonas','PersonasController@actualizarPersonas');
Route::post('eliminarPersonas','PersonasController@eliminarPersonas');