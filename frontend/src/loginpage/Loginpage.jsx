import { useContext, useState, useRef } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { loginUser, signUpUser } from "./api/users";
import { AuthContext } from "../context/auth-context";

const Loginpage = () => {
  const [tab, setTab] = useState(true);

  let navigate = useNavigate();
  // Authentication
  const auth = useContext(AuthContext);
  const [authError, setAuthError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const signUpUserMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      auth.login(data.id, data.token);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      setAuthError("Failed to sign up, please try again");
      setisLoading(false);
    },
  });

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      auth.login(data.id, data.token, data.email);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      setAuthError("failed to log in, please check your credentials");
      setisLoading(false);
    },
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setAuthError(false);
    setisLoading(true);

    if (tab) {
      loginUserMutation.mutate({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      signUpUserMutation.mutate({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const loadingSpinner = (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading ...
        </span>
      </div>
    </div>
  );

  let content;

  if (tab == true) {
    content = (
      <form
        onSubmit={onSubmitHandler}
        //action="/login"
        //method="POST"
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
            ref={emailRef}
            class="bg-gray-50 dark:bg-neutral-800 border border-gray-200 text-gray-900 dark:text-gray-50 sm:text-sm"
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
            ref={passwordRef}
            class="bg-gray-50 dark:bg-neutral-800 border border-gray-200 text-gray-900 dark:text-gray-50 sm:text-sm"
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
    );
  } else {
    content = (
      <form
        onSubmit={onSubmitHandler}
        //action="/signup"
        //method="POST"
        class=" space-y-8 md:space-y-10 px-8 pt-6 pb-8 mb-4"
      >
        <div class=" mt-10">
          <label
            for="name"
            class="block text-sm font-medium text-gray-900 dark:text-gray-50"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            class="bg-gray-50 dark:bg-neutral-800 border border-gray-200 text-gray-900 dark:text-gray-50 sm:text-sm"
            placeholder="Your Name"
            required=""
          ></input>
        </div>
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
            ref={emailRef}
            class="bg-gray-50 dark:bg-neutral-800 border border-gray-200 text-gray-900 dark:text-gray-50 sm:text-sm"
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
            ref={passwordRef}
            class="bg-gray-50 dark:bg-neutral-800 border border-gray-200 text-gray-900 dark:text-gray-50 sm:text-sm"
            placeholder="*******"
            required=""
          ></input>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class=" bg-sky-500 hover:bg-sky-700 text-gray-50 font-bold py-2 px-4 rounded-lg"
          >
            Register
          </button>
        </div>
      </form>
    );
  }

  return (
    <div class="flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-pink-500 h-screen">
      <div class="inline-flex ">
        <button
          onClick={() => setTab(true)}
          class="max-w-md px-10 
          bg-gray-50 text-black font-bold hover:bg-gray-500 
          dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-600 rounded-t-lg"
        >
          Sign in
        </button>
        <button
          onClick={() => setTab(false)}
          class="max-w-md px-10 
          bg-gray-50 text-black font-bold hover:bg-gray-500 
          dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-600 rounded-t-lg"
        >
          Register
        </button>
      </div>
      <div class="max-w-md px-10 bg-gray-50 dark:bg-neutral-800 rounded-lg ">
        {content}
        {isLoading && loadingSpinner}
      </div>
    </div>
  );
};

export default Loginpage;
