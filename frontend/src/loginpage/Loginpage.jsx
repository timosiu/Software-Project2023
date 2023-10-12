const Loginpage = () => {
  return (
    <div class="flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-pink-500 h-screen">
      <div class="max-w-md px-10 bg-gray-50 dark:bg-neutral-800 rounded-lg ">
        <form
          action="/login"
          method="POST"
          class=" space-y-8 md:space-y-10 px-8 pt-6 pb-8 mb-4"
        >
          <div class=" mt-10">
            <label
              for="email"
              class="block text-sm font-medium text-gray-900 dark:text-gray-50"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 dark:bg-neutral-800 border border-gray-200 text-gray-900 sm:text-sm"
              placeholder="you@example.com"
              required=""
            ></input>
          </div>
          <div class="">
            <label
              for="password"
              class="block text-sm font-medium text-gray-900 dark:text-gray-50"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              class="bg-gray-50 dark:bg-neutral-800 border border-gray-200 text-gray-900 sm:text-sm"
              placeholder="*******"
              required=""
            ></input>
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class=" bg-sky-500 hover:bg-sky-700 text-gray-50 font-bold py-2 px-4 rounded-lg"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
