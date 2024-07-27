import {
  Button,
  Card,
  Container,
  Navbar,
  Strings,
  Table,
  Text,
} from ".././lib";
import DocumentGenerator from "./Pages/Generate.jsx";
import ManageResidents from "./Pages/MangeRes.jsx";
import ManageRequests from "./Pages/ManageReq.jsx";
import ManageTransactions from "./Pages/Transactions.jsx";
import { useNavigate } from "react-router-dom";
import "../css/Instant.css";
import Circle from "../assets/UX.png";
import logop1 from "../assets/Logo/document.png";
import logop2 from "../assets/Logo/resident.png";
import logop3 from "../assets/Logo/request.png";
import logop4 from "../assets/Logo/transaction.png";

export default function Personnel() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen lightsteelblue ">
      <>
        <DocumentGenerator />
        <ManageResidents />
        <ManageRequests />
        <ManageTransactions />

        <Navbar.Navbar props="info fixed-top">
          <img src={Circle} width={45} className=" fixed-top ml-2 top-1" />
          <div className="container-fluid ml-14">
            <Navbar.Brand label="You are here in Personnel!" />
            <div className="btn2">
          <div
          className="button hover:bg-sky-800 hover:rounded-md p-1 text-white inline-block mx-auto cursor-pointer"
          onClick={() => navigate("/login")}>LOGOUT</div>
          </div>
          </div>
        </Navbar.Navbar>

        <Container>
          <Table.Row props="class1 m-8 g-5 py- justify-content-center">
            <Table.Col props="col-sm-12 text-black">
              <h1>{Strings.panelAskLabel}</h1>
            </Table.Col>

            <Table.Col props="col-sm-12 col-lg-4 mx-auto block">
              <Card.Card props="RGB text-center text-black text-xl">
                <Card.Body props="p-5 ">
                  <img src={logop1} width={50} className="block mx-auto"></img>
                  <Card.Title label={Strings.panelCardCreateDocumentLabel} />
                </Card.Body>

                <Card.Footer>
                  <Button
                    props="btn-light"
                    toggle="modal"
                    target="documentGenerator"
                    label={Strings.panelCardButtonClick}
                  />
                </Card.Footer>
              </Card.Card>
            </Table.Col>

            <Table.Col props="col-sm-12 col-lg-4 ">
              <Card.Card props="RGB text-center text-black text-xl">
                <Card.Body props="p-5 ">
                  <img src={logop2} width={50} className="block mx-auto"></img>
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
            <Table.Col props="col-sm-12 col-lg-4">
              <Card.Card props="RGB text-center text-black text-xl">
                <Card.Body props="p-5">
                  <img src={logop3} width={50} className="block mx-auto"></img>
                  <Card.Title label={Strings.panelCardManageRequestLabel} />
                </Card.Body>
                <Card.Footer>
                  <Button
                    props="btn-light"
                    toggle="modal"
                    target="manageRequests"
                    label={Strings.panelCardButtonClick}
                  />
                </Card.Footer>
              </Card.Card>
            </Table.Col>

            <Table.Col props="col-sm-12 col-lg-4">
              <Card.Card props="RGB text-center text-black text-xl">
                <Card.Body props="p-5">
                  <img src={logop4} width={50} className="block mx-auto"></img>
                  <Card.Title label={Strings.panelCardManageTransactionLabel} />
                </Card.Body>

                <Card.Footer>
                  <Button
                    props="btn-light"
                    toggle="modal"
                    target="manageTransactions"
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
