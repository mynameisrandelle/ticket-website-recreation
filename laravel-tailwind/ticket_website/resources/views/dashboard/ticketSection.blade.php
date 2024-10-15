
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel-Tailwind Ticket Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
    @vite('resources/css/app.css')
</head>
<body>
<div class="container mx-auto py-3">
        <header>
            <div class="flex flex-col md:flex-row items-center pb-3 mb-4 border-b">
                <a href="" class="flex items-center text-gray-900 text-2xl font-semibold">
                    Ticket Sales
                </a>
                <nav class="mt-2 md:mt-0 md:ml-auto">
                    <p class="mr-3 py-2 text-gray-800 inline-block">Hi {{ session('username') }}!</p>
                    <form action="{{ route('logout') }}" method="post" class="inline-block">
                        @csrf
                        <input type="submit" class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block" value="Log Out" name="logout">
                    </form>
                </nav>
            </div>

            <div class="text-center my-16">
                <h1 class="text-4xl font-normal text-gray-800">Concert Tickets</h1>
                <p class="text-lg text-gray-600">Ticket Sales for the upcoming legendary 3-day tour of iShowSpeed, "Dreamland"</p>
            </div>
        </header>

        <main>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <x-ticket-button>
                    <h4 class="text-lg font-normal">Standard Ticket</h4>
                    <h1 class="text-2xl font-bold">$50</h1>
                    <ul class="mt-3 mb-4">
                        <li>Upper Box Seat</li>
                        <li>1 Day Ticket</li>
                    </ul>
                    <form action="{{ route('priceTicket') }}" method="post">
                        @csrf
                        <input type="hidden" name="price" value="50">
                        <input type="hidden" name="product" value="Standard Ticket">
                        <input type="submit" class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded" name="buy" value='Buy'>
                    </form>
                </x-ticket-button>

                <x-ticket-button>
                    <h4 class="text-lg font-normal">Deluxe Ticket</h4>
                    <h1 class="text-2xl font-bold">$125</h1>
                    <ul class="mt-3 mb-4">
                        <li>Premium Box Seat</li>
                        <li>3 Days Ticket</li>
                        <li>Free Exclusive Merchandise</li>
                    </ul>
                    <form action="{{ route('priceTicket') }}" method="post">
                        @csrf
                        <input type="hidden" name="price" value="125">
                        <input type="hidden" name="product" value="Deluxe Ticket">
                        <input type="submit" class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded" name="buy" value='Buy'>
                    </form>
                </x-ticket-button>

                <x-ticket-button>
                    <h4 class="text-lg font-normal">V.I.P Ticket</h4>
                    <h1 class="text-2xl font-bold">$225</h1>
                    <ul class="mt-3 mb-4">
                        <li>V.I.P Room</li>
                        <li>3 Day Ticket</li>
                        <li>Free Exclusive Merchandise</li>
                        <li>Backstage Meet and Greet</li>
                    </ul>
                    <form action="{{ route('priceTicket') }}" method="post">
                        @csrf
                        <input type="hidden" name="price" value="225">
                        <input type="hidden" name="product" value="V.I.P Ticket">
                        <input type="submit" class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded" name="buy" value='Buy'>
                    </form>
                </x-ticket-button>
            </div>

            <footer class="my-5 pt-5 text-gray-600 text-center text-small">
                <p class="mb-1">&copy; 2024 Dreamland</p>
            </footer>
        </main>
    </div>
</body>
</html>


