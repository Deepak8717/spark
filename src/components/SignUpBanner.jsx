import { Link } from "react-router-dom";

const SignUpBanner = () => {
  return (
    <div className="h-[400px] md:h-[600px] flex justify-center items-center text-white sign-up-container">
      <div className="max-w-[900px] p-4 mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold ">
          Save time & money. Get started in under 3 minutes
        </h1>
        <p className="text-lg md:text-xl my-2">
          Use your virtual card or top up your virtual account to start making
          payments instantly
        </p>
        <Link
          to="/signup"
          className="bg-[#000851] block w-fit mx-auto p-4 px-8 my-4 text-xl font-bold rounded-xl"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignUpBanner;
