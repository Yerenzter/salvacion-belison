import { Button, Card, Container, Modal, Navbar, Page, Strings, Table, Text,} from ".././lib";
import ManageUsers from "./Pages/Users.jsx";
import { useNavigate } from "react-router-dom";
import ManageResidents from "./Pages/MangeRes.jsx";
import SystemSettings from "./Pages/Settings.jsx";
import Circle from '../assets/UX.png';
import "../css/Instant.css";
import logo1 from "../assets/Logo/setting.png";
import logo2 from "../assets/Logo/group.png";
import logo3 from "../assets/Logo/profile.png";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <>
        <ManageUsers />
        <ManageResidents />
        <SystemSettings />
        <Navbar.Navbar props="info fixed-top">
        <img src={Circle} width={45} className=' fixed-top ml-2 top-1' />

          <div className="container-fluid ml-14">
            <Navbar.Brand label="You are here in Admin!" />

            <div className="btn3">
            <div
          className="button3 hover:bg-sky-800 hover:rounded-md p-1 text-white inline-block mx-auto cursor-pointer"
          onClick={() => navigate("/login")}>LOGOUT</div>
          </div>
          </div>
          
        </Navbar.Navbar>

        <Container>
          <Table.Row props="m-5 g-5 py-6 justify-content-center">
            <Table.Col props="col-sm-1 text-white">
              <h1>{Strings.panelAskLabel}</h1>
            </Table.Col>

            <Table.Col props="col-sm-12 col-lg-5 ">
              <Card.Card props="RGB text-center">
                <Card.Body props="p-5 text-black text-xl">
              <img src={logo2} width={50} className="block mx-auto"></img>
                  <Card.Title label={Strings.panelCardManageUserLabel} />
                </Card.Body>

                <Card.Footer>
                  <Button
                    props="btn-light"
                    toggle="modal"
                    target="manageUsers"
                    label={Strings.panelCardButtonClick}
                  />
                </Card.Footer>
              </Card.Card>
            </Table.Col>

            <Table.Col props="col-sm-12 col-lg-5">
              <Card.Card props="RGB text-center text-xl">
                <Card.Body props="p-5 text-black">
              <img src={logo3} width={50} className="block mx-auto"></img>
                  <Card.Title label={Strings.panelCardManageResidentLabel} />
                </Card.Body>

                <Card.Footer>
                  <Button
                    props="btn-light"
                    toggle="modal"
                    target="manageResidents"
                    label={Strings.panelCardButtonClick}
                  />
                </Card.Footer>
              </Card.Card>

            </Table.Col>
            <Table.Col props="col-sm-12 col-lg-5">
              <Card.Card props="RGB text-center">
                <Card.Body props="p-5 text-black text-xl">
              <img src={logo1} width={50} className="block mx-auto"></img>
                  <Card.Title label={Strings.panelCardManageSystemLabel} />
                </Card.Body>

                <Card.Footer>
                  <Button
                    props="btn-light"
                    toggle="modal"
                    target="systemSettings"
                    label={Strings.panelCardButtonClick}
                  />
                </Card.Footer>
              </Card.Card>
            </Table.Col>
          </Table.Row>
        </Container>
      </>
    </div>
  );
}
