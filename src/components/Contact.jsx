import { Navbar } from ".././lib";
import Circle from "../assets/UX.png";
import "../css/Instant.css";
import { useNavigate } from "react-router-dom";

export function Contact() {
  return (
    <div className=" min-h-screen bg-gray-800">
      <div>
        <Navbar.Navbar props="bg-secondary fixed-top">
          <img src={Circle} width={45} className=" fixed-top ml-2 top-1" />
          <div className="container-fluid ml-14">
            <Navbar.Brand label="You are here in Contact Us!" />
          </div>
        </Navbar.Navbar>
      </div>
      <ContactList />
    </div>
  );
}
export function ContactList() {
  const navigate = useNavigate();
  return (
    <div className=" py-40">
     <h1 className=" text-center text-white font-sans text-2xl">NO CONTACT AVAILABLE</h1>
     <div className=" text-white cursor-pointer">
      <div className="button" onClick={() => navigate("/")}>
        RETURN
      </div>
    </div>
    </div>
  );
}
export default Contact;

// import { useNavigate } from "react-router-dom";
// export default function Contact() {
//   const navigate = useNavigate();
//   return (
//     <div className=" min-h-screen bg-slate-900">
//       <div className=" text-white cursor-pointer">
//         <div className="button" onClick={() => navigate("/")}>
//           RETURN
//         </div>
//       </div>
//     </div>
//   );
// }
