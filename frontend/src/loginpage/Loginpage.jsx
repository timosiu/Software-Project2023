import { useContext, useState, useRef, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { loginUser, signUpUser } from "./api/users";
import { AuthContext } from "../context/auth-context";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorBox } from "../components/ErrorBox";

const Loginpage = () => {
  const [tab, setTab] = useState(true);

  useEffect(() => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    if (!tab) {
      nameRef.current.value = "";
    }
  }, [tab]);

  // Tab change
  const loginMode = () => {
    setTab(!tab);
    setAuthError(false);
  };

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
      setAuthError(error.message);
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
      setAuthError(error.message);
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

  let content;

  if (tab == true) {
    content = (
      <form
        onSubmit={onSubmitHandler}
        className=" space-y-8 md:space-y-10 px-8 pt-6 pb-8 mb-4"
      >
        <div className={`mt-${authError ? "1" : "10"}`}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-light-text dark:text-dark-text"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            className=" w-full bg-light-bg dark:bg-dark-bg border border-light-text dark:border-dark-text text-light-text dark:text-dark-text sm:text-sm"
            placeholder="you@example.com"
            required=""
          ></input>
        </div>
        <div className="">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-light-text dark:text-dark-text"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            className=" w-full bg-light-bg dark:bg-dark-bg border border-light-text dark:border-dark-text text-light-text dark:text-dark-text sm:text-sm"
            placeholder="*******"
            required=""
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-haven-red hover:bg-light-accent dark:hover:bg-dark-accent text-light-text dark:text-dark-text font-bold py-2 px-4"
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
        className=" space-y-8 md:space-y-10 px-8 pt-6 pb-8 mb-4"
      >
        <div className={`mt-${authError ? "1" : "10"}`}>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-light-text dark:text-dark-text"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            className="w-full bg-light-bg dark:bg-dark-bg border border-light-text dark:border-dark-text text-light-text dark:text-dark-text sm:text-sm"
            placeholder="Your Name"
            required=""
          ></input>
        </div>
        <div className=" mt-10">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-light-text dark:text-dark-text"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            className=" w-full bg-light-bg dark:bg-dark-bg border border-light-text dark:border-dark-text text-light-text dark:text-dark-text sm:text-sm"
            placeholder="you@example.com"
            required=""
          ></input>
        </div>
        <div className="">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-light-text dark:text-dark-text"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            className=" w-full bg-light-bg dark:bg-dark-bg border border-light-text dark:border-dark-text text-light-text dark:text-dark-text sm:text-sm"
            placeholder="*******"
            required=""
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-haven-red hover:bg-light-accent dark:hover:bg-dark-accent text-light-text dark:text-dark-text font-bold py-2 px-4"
          >
            Register
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="inline-flex">
        <button
          onClick={loginMode}
          className="max-w-md px-10 mt-32
          bg-light-bg text-light-text font-bold hover:bg-light-accent
          dark:bg-dark-bg dark:text-dark-text dark:hover:bg-dark-accent border border-b-0 border-r-0 border-light-text dark:border-dark-text"
        >
          Sign in
        </button>
        <button
          onClick={loginMode}
          className="max-w-md px-10 mt-32
          bg-light-bg text-light-text font-bold hover:bg-light-accent 
          dark:bg-dark-bg dark:text-dark-text dark:hover:bg-dark-accent border border-b-0 border-l-0 border-light-text dark:border-dark-text"
        >
          Register
        </button>
      </div>
      <div className="max-w-sm  px-10 mb-10 bg-light-bg dark:bg-dark-bg border border-light-text dark:border-dark-text">
        {authError && <ErrorBox errorText={authError} />}
        {content}
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default Loginpage;
