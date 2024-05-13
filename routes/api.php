<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::controller(\App\Http\Controllers\AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me', 'me');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [\App\Http\Controllers\ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [\App\Http\Controllers\ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [\App\Http\Controllers\ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/', [\App\Http\Controllers\PagesController::class, 'home'])->name('home');
Route::get('/search', [\App\Http\Controllers\PagesController::class, 'search'])->name('search');

Route::controller(\App\Http\Controllers\PagesController::class)->group(function () {
    Route::get('search/{search}', 'search')->name('pages.search');
});


Route::controller(\App\Http\Controllers\VideoController::class)->group(function () {
    Route::post('video', 'store');
//    Route::get('video/add', 'create')->name('video.create');
//
//    Route::get('video/edit/{id}', 'edit')->name('video.edit');

    Route::put('video/update/{id}', 'update')->name('video.update');
    Route::delete('video/delete/{id}', 'delete')->name('video.delete');

    Route::get('videos', 'index');
    Route::get('video/{id}', 'show');
});

Route::controller(\App\Http\Controllers\CanalController::class)->group(function () {
    Route::post('canal', 'store')->name('canal.store');

    Route::get('canal/add', 'create')->name('canal.create');

    Route::get('canal', 'show')->name('canal.show');
});

Route::controller(\App\Http\Controllers\ComentarioController::class)->group(function () {
    Route::post('comentario/{id}', 'store')->name('comentario.store');
    Route::get('comentario/add/{id}', 'create')->name('comentario.create');
});
