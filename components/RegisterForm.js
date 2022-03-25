export const RegisterForm = () => {

  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-20 w-auto" src="/logo.png" alt="Logo" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600 max-w">
          Already registered?
          <a href="#" class="ml-1 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</a>
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form class="mb-0 space-y-6" action="#" method="POST">

            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">First Name</label>
              <div class="mt-1">
                <input id="name" name="name" type="text" autocomplete="off" required class="" />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required class="" />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="mt-1">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="" />
              </div>
            </div>

            <div>
              <label for="password-repeat" class="block text-sm font-medium text-gray-700">Repeat password</label>
              <div class="mt-1">
                <input id="password-repeat" name="password-repeat" type="password" autocomplete="current-password" required class="" />
              </div>
            </div>

            <div class="flex items-center">
              <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
              <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
                >I agree to the
                <a href="#" class="mx-1 text-indigo-600 hover:text-indigo-500">Terms</a>
                and
                <a href="#" class="mx-1 text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
              </label>
            </div>

            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0096FF] hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}