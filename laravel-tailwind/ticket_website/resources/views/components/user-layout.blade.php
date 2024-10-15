
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
    <div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12">


        <nav class="flex justify-between mb-4">

            <a href="#" class="text-lg font-bold text-gray-800 hover:text-gray-900">

                <span>Reservation</span>

            </a>

            <a href="{{ Route::is('login') ? route('register') : route('login') }}" class="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                {{ Route::is('login') ? 'Create Account' : 'Sign In Account' }}
            </a>


        </nav>


        <div class="flex justify-center">

            <div class="w-full max-w-md p-4 md:p-6 lg:p-12">

                <form action="" method="post">

                    @csrf

                    @if (Route::is('login'))
                        <h1 class="text-3xl font-bold text-center mb-4">Sign In</h1>
                    @elseif (Route::is('register'))
                        <h1 class="text-3xl font-bold text-center mb-4">Create Account</h1>
                    @endif

                    {{ $slot }}

                    <p class="text-gray-600 text-sm text-center mt-4">Reservation - 2024</p>

                </form>

            </div>

        </div> 

    </div>
</body>
</html>


