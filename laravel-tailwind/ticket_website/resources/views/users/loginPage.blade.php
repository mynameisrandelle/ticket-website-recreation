<x-user-layout>

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li class="text-red-500">{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

    <form action="" method="post">
        @csrf
        <div class="mb-4">
            <label for="email" class="text-gray-700 text-sm">Email address</label>
            <input type="email" class="w-full p-2 pl-10 text-sm text-gray-700" id="email" placeholder="name@example.com" name="email" >

            <x-form-error name="email"/>
        </div>

        <div class="mb-4">
            <label for="password" class="text-gray-700 text-sm">Password</label>
            <input type="password" class="w-full p-2 pl-10 text-sm text-gray-700" id="password" placeholder="Password" name="password" >

            <x-form-error name="password"/>
        </div>

        <input class="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full" type="submit" value="Sign In">
    </form>
</x-user-layout>