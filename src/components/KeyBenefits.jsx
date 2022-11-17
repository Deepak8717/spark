import { RiAdminFill } from "react-icons/ri";
import { MdLogin, MdTextsms } from "react-icons/md";
import { IoLogoPwa } from "react-icons/io5";
import { AiFillCalculator, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiHistory, BiSelectMultiple, BiTrendingUp } from "react-icons/bi";
const KeyBenefits = () => {
  return (
    <div className="p-4">
      <h1 className="p-4 text-center text-5xl font-bold ">Key benefits</h1>
      <div className="mx-auto grid w-[100%] grid-cols-1 justify-items-center gap-4 md:grid-cols-2  lg:grid-cols-3">
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl shadow-md ">
          <RiAdminFill className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">
              User, accountant, admin
            </h1>
            <p className="text-lg capitalize text-gray-500">
              Describe each access level of Spark dashboard
            </p>
          </div>
        </div>
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl  shadow-md">
          <MdLogin className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">
              Single login for multiple company accounts
            </h1>
            <p className="text-lg capitalize text-gray-500">
              A convenient feature to switch between multiple subsidiary
              companies from the same dashboard
            </p>
          </div>
        </div>
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl  shadow-md">
          <IoLogoPwa className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">
              Progressive web app
            </h1>
            <p className="text-lg capitalize text-gray-500">
              A consistent experience across desktop and mobile
            </p>
          </div>
        </div>
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl  shadow-md">
          <MdTextsms className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">
              OTP via email & SMS
            </h1>
            <p className="text-lg capitalize text-gray-500">
              No reaching out for your phone. Access your OTP from your desktop
            </p>
          </div>
        </div>
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl  shadow-md">
          <AiFillCalculator className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">Convert to EMI</h1>
            <p className="text-lg capitalize text-gray-500">
              Worry less about large payments eating into your cash-flow.
            </p>
          </div>
        </div>
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl  shadow-md">
          <BiSelectMultiple className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">
              Multiple products, single access
            </h1>
            <p className="text-lg capitalize text-gray-500">
              UPI, Cards, QR Pay all accessible through the same login
              credentials
            </p>
          </div>
        </div>
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl  shadow-md">
          <AiOutlineUsergroupAdd className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">
              Automated user management
            </h1>
            <p className="text-lg capitalize text-gray-500">
              Invite team members to Kodo through the dashboard, issue cards,
              manage roles and more
            </p>
          </div>
        </div>
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl  shadow-md">
          <BiTrendingUp className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">
              Automated trend analysis
            </h1>
            <p className="text-lg capitalize text-gray-500">
              Keep an eye on the company’s financial health with real-time
              insights
            </p>
          </div>
        </div>
        <div className="h-[300px] max-w-[350px] rounded-xl p-4 text-4xl  shadow-md">
          <BiHistory className="h-24 w-28 text-[#1cb5e0]" />
          <div className="p-4">
            <h1 className="text-xl font-semibold capitalize">
              Time capsule of all spends & receipts
            </h1>
            <p className="text-lg capitalize text-gray-500">
              Go back in time effortlessly to evaluate past spends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
