<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Test;
use App\Models\News;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [NewsController::class, 'index']);
Route::get('/show',[Test::class, 'show']); 
// Route::post('/storeNews', [NewsController::class]);
Route::resource('/myNews', NewsController::class)->middleware('auth');
// Route::get('/news/edit', [NewsController::class, 'edit'])->middleware('auth')->name('news.edit');
Route::put('/news/update', [NewsController::class, 'update'])->middleware('auth')->name('news.update');
Route::delete('/news/delet', [NewsController::class, 'destroy'])->middleware('auth')->name('news.destroy');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
            'user' => News::where('author', auth()->user()->email)->latest()->paginate(5)
        ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
