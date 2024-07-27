import { Navbar } from ".././lib";
import Circle from "../assets/UX.png";
import "../css/Instant.css";
import { useNavigate } from "react-router-dom";

export function About() {
  return (
    <div className=" min-h-screen bg-gray-800">
      <div>
        <Navbar.Navbar props="bg-info fixed-top">
          <img src={Circle} width={45} className=" fixed-top ml-2 top-1" />
          <div className="container-fluid ml-14">
            <Navbar.Brand label="You are here in About Us!" />
          </div>
        </Navbar.Navbar>
      </div>
      <AboutList />
    </div>
  );
}
export function AboutList() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen bg-slate-900">
    <h1 className="text-center py-20 text-white text-xl ">
      <p className="position-absolute top-40 start-50 translate-middle-x p-10">
        Barangay Salvacion which is headed by Punong Barangay Domingo T.
        Seraspe, is one of the barangays located in the municipality of
        Belison, which is situated in the province of Antique in the Western
        Visayas region of the Philippines. Barangay Salvacion is one of the 11
        barangays in the municipality of Belison. Belison is a 5th class
        municipality located on the island of Panay in the province of
        Antique, which is part of the Western Visayas region (Region VI).
        Barangay Salvacion, within the municipality of Belison,
        Antique,representsa typical rural community in the Philippines.
        Barangay Salvacion is characterized by its diverse landscape that
        includes residential areas, agricultural lands, and coastal zones.
        This mix of environments supports a population of around 1,500
        residents, according to the latest census data. The barangay's
        location within the municipality of Belison places it strategically
        between the town center and the coast, providing both accessibility
        and natural resources that are vital to its economy.
      </p>
    </h1>
    <div className=" text-white cursor-pointer mt-48 ml-2 font-bold">
      <div className="button" onClick={() => navigate("/")}>
        RETURN
      </div>
    </div>
  </div>
  );
}
export default About;
