<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillingInfo extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'address',
        'country',
        'state',
        'zip',
        'payment_method',
        'product',
        'price',
        'total_tickets',
        'total_price',
    ];
    
}
