export default function SignUpPage() {
    return (
      <>
        <div className='bg-white'>
          <div className="relative isolate px-4  lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className='min-h-screen flex flex-col  px-6 lg:px-2 lg:py-18 md:pt-6  items-center isolate'>
              <div className="flex min-h-full flex-1 flex-col justify-center px-2 lg:px-2 lg:py-10 md:pt-6">
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up
                  </h2>
                </div>
  
                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                      </label>
                      <div className="mt-2">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="username"
                          required
                          className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6 px-2"
                        />
                        <p className="pt-1 inset-y-0 right-0 pr-3 flex items-center text-sm px-1 text-gray-500">
                            Must be at least 8 characters.
                        </p>
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6 px-2"
                        />
                        
                      </div>
                    </div>
  
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Password
                        </label>
                        <div className="text-sm">
                          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="new-password"
                          required
                          className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm sm:leading-6 px-2"
                        />
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
  
                  <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  