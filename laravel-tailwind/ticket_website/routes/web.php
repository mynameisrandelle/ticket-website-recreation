<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;

// Route::get('/', function () {
//     return view('users.loginPage');
// });

//$_GET ROUTE
Route::get('/', [UserController::class, 'loginView'])->name('login');

Route::get('/register', [UserController::class, 'registerView'])->name('register');

Route::get('/dashboard', [UserController::class, 'ticketDashboard'])->name('dashboard');

Route::get('/billing_address', [DashboardController::class, 'billAddressView'])->name('billAddress');

Route::get('/receipt', [DashboardController::class, 'receiptView'])->name('receipt');

//$_POST ROUTE
Route::post('/register', [UserController::class, 'registerValidate']);

Route::post('/', [UserController::class, 'loginValidate']);

Route::post('/logout', [UserController::class, 'logout'])->name('logout');

Route::post('/priceTicket', [DashboardController::class, 'priceTicket'])->name('priceTicket');

Route::post('/checkout', [DashboardController::class, 'storeBillingInfo'])->name('storeBilling');
