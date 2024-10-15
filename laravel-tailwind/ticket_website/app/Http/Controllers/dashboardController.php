<?php

namespace App\Http\Controllers;
use App\Models\BillingInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;


class DashboardController extends Controller
{
    public function billAddressView() {
        return view('dashboard.billAddress');
    }
    
    public function receiptView() {
        $billingData = Session::get('billingData');
    
        // Check if created_at exists in the session data
        if (isset($billingData['created_at'])) {
            // Retrieve the billing info using created_at
            $billingInfo = BillingInfo::where('created_at', $billingData['created_at'])->first();
    
            if ($billingInfo) {
                Session::put('billingInfo', [
                    'first_name' => $billingInfo->first_name,
                    'last_name' => $billingInfo->last_name,
                    'email' => $billingInfo->email,
                    'address' => $billingInfo->address,
                    'country' => $billingInfo->country,
                    'state' => $billingInfo->state,
                    'zip' => $billingInfo->zip,
                    'payment_method' => $billingInfo->payment_method,
                    'product' => $billingInfo->product,
                    'price' => $billingInfo->price,
                    'total_tickets' => $billingInfo->total_tickets,
                    'total_price' => $billingInfo->total_price,
                    'created_at' => $billingInfo->created_at,
                ]);
            } // <- Added closing brace here
        } // <- Ensure this closing brace is also present
    
        return view('dashboard.receiptPage');
    }

    public function priceTicket(Request $request) {
        // Store the email input into a session
        Session::put('billingData', [
            'price' => $request->price,
            'product' => $request->product,
        ]);

        return redirect()->route('billAddress');
    }

    public function storeBillingInfo(Request $request) {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'address' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'zip' => 'required|string|max:20',
            'paymentMethod' => 'required|string|max:50',
            'totalTickets' => 'required|integer|min:1',
        ]);
        
        // Check if billing data exists
        $pricePerTicket = Session::get('billingData');
        if (!$pricePerTicket) {
            return redirect()->route('billAddress')->withErrors('Billing data not found in session.');
        }

        $validatedData['totalPrice'] = $pricePerTicket['price'] * $validatedData['totalTickets'];
        $validatedData['price'] = $pricePerTicket['price'];
        $validatedData['product'] = $pricePerTicket['product'];

        // Call the method to create billing info
        $this->createBillingInfo($validatedData);

        return redirect()->route('receipt');
    }

    protected function createBillingInfo(array $data) {

        $billingInfo = BillingInfo::create([
            'first_name' => $data['firstName'],
            'last_name' => $data['lastName'],
            'email' => $data['email'],
            'address' => $data['address'],
            'country' => $data['country'],
            'state' => $data['state'],
            'zip' => $data['zip'],
            'payment_method' => $data['paymentMethod'],
            'total_tickets' => $data['totalTickets'],
            'product' => $data['product'],
            'price' => $data['price'],
            'total_price' => $data['totalPrice'],

        ]);
    
        // Store the created_at timestamp in the session
        Session::put('billingData.created_at', $billingInfo->created_at);
    
        return $billingInfo;
    }

}
