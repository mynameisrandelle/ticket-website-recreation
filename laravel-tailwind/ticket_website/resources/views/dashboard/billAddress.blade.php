<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel-Tailwind Ticket Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
    @vite('resources/css/app.css')
</head>

<body class="bg-gray-100">
    <div class="container mx-auto p-5">
        <main>
            <div class="py-5 text-center">
                <h2 class="text-2xl font-bold">Checkout Form</h2>
            </div>

            <form action="{{ route('storeBilling')}}" method="post">
                @csrf
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div class="md:col-span-2">
                        <h4 class="text-lg font-semibold mb-3">Billing Address</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label for="firstName" class="block text-sm font-medium">First Name</label>
                                <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="firstName" name="firstName">
                                <x-form-error name="firstName"/>
                            </div>

                            <div>
                                <label for="lastName" class="block text-sm font-medium">Last Name</label>
                                <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="lastName" name="lastName">
                                <x-form-error name="lastName"/>
                            </div>
                            
                            <div class="col-span-2">
                                <label for="email" class="block text-sm font-medium">Email</label>
                                <input type="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="email" name="email" placeholder="example@email.com" value="{{ session('email') }}">
                                <x-form-error name="email"/>
                            </div>
                            
                            <div class="col-span-2">
                                <label for="address" class="block text-sm font-medium">Address</label>
                                <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="address" name="address" placeholder="1234 Main St">
                                <x-form-error name="address"/>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 col-span-2">
                                <div>
                                    <label for="country" class="block text-sm font-medium">Country</label>
                                    <select class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="country" name="country">
                                        <option>Philippines</option>
                                        <option>Japan</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="state" class="block text-sm font-medium">State</label>
                                    <select class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="state" name="state">
                                        <option>Manila</option>
                                        <option>Cebu</option>
                                        <option>Ilocos Norte</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="zip" class="block text-sm font-medium">Zip</label>
                                    <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="zip" name="zip">
                                    <x-form-error name="zip"/>
                                </div>
                            </div>
                        </div>

                        <hr class="my-4">

                        <h4 class="text-lg font-semibold mb-3">Payment</h4>

                        <div class="my-3">
                            <div class="flex items-center mb-3">
                                <input id="credit" name="paymentMethod" value="Credit Card" type="radio" class="form-check-input" checked required>
                                <label class="ml-2" for="credit">Credit Card</label>
                            </div>
                            <div class="flex items-center mb-3">
                                <input id="debit" name="paymentMethod" value="Debit Card" type="radio" class="form-check-input" required>
                                <label class="ml-2" for="debit">Debit Card</label>
                            </div>
                            <div class="flex items-center mb-3">
                                <input id="paypal" name="paymentMethod" value="GCash" type="radio" class="form-check-input" required>
                                <label class="ml-2" for="paypal">GCash</label>
                            </div>
                        </div>

                        <hr class="my-4">

                        <div class="mb-3">
                            <input class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded" type="submit" name="checkout" value="Pay Now">
                        </div>
                    </div>

                    <div class="md:col-span-1">
                        <h4 class="text-blue-600 text-lg font-semibold mb-3">Your Cart</h4>
                        <ul class="list-none mb-3">
                            <li class="flex justify-between items-center border-b py-2">
                                <div>
                                    <h6 class="my-0 font-medium">{{ session('billingData.product') }}</h6>
                                </div>
                                <span class="text-gray-600 font-bold">$ {{ session('billingData.price') }}</span>
                            </li>
                            <li class="flex justify-between items-start border-b py-2">
                                <div class="flex flex-col">
                                    <h6 class="my-0">Number of Tickets: </h6>
                                </div>
                                <div>
                                    <select class="form-select w-full p-2 border border-gray-300 rounded-md shadow-sm" id="totalTickets" name="totalTickets" required>
                                        @for ($i = 1; $i < 11; $i++)
                                            <option>{{ $i }}</option>
                                        @endfor
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>

            <div class="grid grid-cols-3 gap-5">
                <div class="col-span-2">
                    <form action="{{ route('dashboard') }}" method="get">
                        @csrf
                        <input type="submit" class="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded" name="dashboard" value="Back to Dashboard">
                    </form>
                </div>
            </div>

        </main>

        <footer class="my-5 pt-5 text-gray-600 text-center text-sm">
            <p class="mb-1">&copy; 2024 Dreamland</p>
        </footer>
    </div>
</body>

</html>