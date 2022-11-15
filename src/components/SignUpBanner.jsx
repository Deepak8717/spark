const SignUpBanner = () => {
  return (
    <div className="h-[700px] flex justify-center items-center text-white sign-up-container">
      <div className="w-[50%] mx-auto text-center">
        <h1 className="text-7xl font-bold ">
          Save time & money. Get started in under 3 minutes
        </h1>
        <p className="text-xl">
          Use your virtual card or top up your virtual account to start making
          payments instantly
        </p>
        <button className="bg-black p-4 px-8  m-8 text-xl font-bold rounded-xl">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpBanner;
