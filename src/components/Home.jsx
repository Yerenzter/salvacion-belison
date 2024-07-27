import Logo from "../assets/UX.png";
import Logo2 from "../assets/UX2.png";
import { useNavigate } from "react-router-dom";
import "../css/Instant.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-screen gap-1 grid justify-content-center align-content-center">
      <div className="reflex flex space-x-5 ml-36 cursor-pointer font-semibold"></div>
      <div
        className=" p-20 grid justify-items-center rounded-2xl"
        id="bg-responsive"
      >
        <div className="h1-responsive">
          <h1 className="corner rounded-xl txt-sm txt-md txt-lg txt-xl text-black font-bold cursor-pointer">
            BARANGAY SALVACION
          </h1>
          <img
            src={Logo}
            width={100}
            className="inline-block mx-auto opacity-100"
          />
          <div className=" inline-block ml-6">
            <img
              src={Logo2}
              width={100}
              className="inline-block mx-auto opacity-100"
            />
          </div>

          <div className=" inline-block ml-5">
            <div
              className="button hover:bg-white hover:rounded-md p-1 text-black inline-block mx-auto cursor-pointer  text-xl font-bold"
              onClick={() => navigate("/contact")}
            >
              CONTACT
            </div>

            <div className=" inline-block ml-3">
              <div
                className="button hover:bg-white hover:rounded-md p-1 text-blue-700 inline-block mx-auto cursor-pointer text-xl font-bold"
                onClick={() => navigate("/login")}
              >
                LOGIN
              </div>
              <p className="inline-block ml-16 text-black font-bold text-2xl"><b className="segment">WELCOME!</b> TO OUR INFORMATION SYSTEM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
