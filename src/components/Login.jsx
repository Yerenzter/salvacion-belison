import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../shared/preference";
import { useNavigate } from "react-router-dom";
import user from "../assets/Logo/Relog.png";
import { Button, Card, Container, Input, Strings, Table, Text } from ".././lib";
import "../css/Instant.css";

let getData = [];

export function RouteClient(type) {
  window.location.href = type === "Admin" ? "/admin" : "/personnel";
}

export function CheckCredentials(a, b) {
  for (let r = 0; r < getData.length; r++) {
    if (a === getData[r].user_name && b === getData[r].user_password) {
      return RouteClient(getData[r].user_type);
    }
  }
}

export function Authorize(username, password) {
  return CheckCredentials(username, password);
}

export default function Login() {
  const navigate = useNavigate();
  const [data, sendData] = useState({});

  useEffect(() => {
    authData();
  }, []);

  const authData = async () => {
    try {
      const res = await axios.get("http://localhost:4435/users");
      sendData(res.data);
    } catch (err) {
      throw err;
    }
  };

  getData = data;
  return (
    <div className="whole">
    <div className="gradient">
      <div className="h-screen">
        <div>
          <Container props="full d-grid align-items-center">
            <Table.Row props="p-10">
              <Table.Col props="clan col-sm-12 col-md-12 col-lg-6 d-none d-lg-block">
                <h1 className="cloud1 display-0 font-semibold text-black ml-44 text-3xl">
                  {Strings.loginHeaderTitle}
                </h1>
                <p className="claud1 ml-44 text-black font-bold py-12">➤  Admin account is your control or you are the owner of the entire system and you can access it all.</p>
                <p className="claud1 ml-44 text-black font-bold py-1">➤  Personnel account is you can Generate Documents, Manage Residents, Manage Requests, Manage Transactions.</p>
                <Text label={Strings.loginHeaderSubtitle} />
              </Table.Col>

              <Table.Col props="col-sm-12 col-md-12 col-lg-12 d-block d-lg-none my-5 text-center">
                <h1 className="display-1">{Strings.loginSubheaderTitle}</h1>
                <Text label={Strings.loginSubheaderInstruction}/>
              </Table.Col>
              <Table.Col props=" col-sm-12 col-md-12 col-lg-4">
                <form>
                  <Card.Card props="lan">
                    <Card.Body props="p-5">
                      <img
                        src={user}
                        width={50}
                        className="block mx-auto"
                      ></img>
                      <Input
                        label={Strings.loginFormUsername}
                        props="my-3"
                        id="loginUsername"
                      />
                      <Input
                        label={Strings.loginFormPassword}
                        type="password"
                        props="my-3"
                        id="loginPassword"
                      />
                    </Card.Body>
                    <div className="">
                      <Card.Footer props="px-1 d-flex justify-content-center">
                        <Button
                          label={Strings.loginButtonLogin}
                          type="button"
                          click={() =>
                            Authorize(loginUsername.value, loginPassword.value)
                          }
                          props="btn-secondary d-grid gap-2 col-5 mx-auto font-light"
                        />
                        <div
                          className="button hover:bg-slate-300 hover:rounded-md p-2 text-slate-500 inline-block mx-auto cursor-pointer text-sm"
                          onClick={() => navigate("/home")}
                        >
                          BACK TO HOME
                        </div>
                      </Card.Footer>
                    </div>
                  </Card.Card>
                </form>
              </Table.Col>
            </Table.Row>
          </Container>
        </div>
      </div>
    </div>
    </div>
  );
}
