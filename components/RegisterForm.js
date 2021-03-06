export const RegisterForm = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Already registered?
          <a href="#" className="ml-1 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
              <div className="mt-1">
                <input id="name" name="name" type="text" autoComplete="off" required className="" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" required className="" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="" />
              </div>
            </div>

            <div>
              <label htmlFor="password-repeat" className="block text-sm font-medium text-gray-700">Repeat password</label>
              <div className="mt-1">
                <input id="password-repeat" name="password-repeat" type="password" autoComplete="current-password" required className="" />
              </div>
            </div>

            <div className="flex items-center">
              <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
              <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900"
                >I agree to the
                <a href="#" className="mx-1 text-indigo-600 hover:text-indigo-500">Terms</a>
                and
                <a href="#" className="mx-1 text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
              </label>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0096FF] hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}