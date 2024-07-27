import axios from "axios";

import { Button, Container, Input, Page, Table, Text } from "../../../lib";

export function CreateResident() {
  let firstname = document.querySelector("#addFirstname");
  let middlename = document.querySelector("#addMiddlename");
  let lastname = document.querySelector("#addLastname");
  let age = document.querySelector("#addAge");
  let birthDay = document.querySelector("#addBirthDay");
  let birthMonth = document.querySelector("#addBirthMonth");
  let birthYear = document.querySelector("#addBirthYear");
  let sex = document.querySelector("#addSex");
  let occupation = document.querySelector("#addOccupation");
  let civilStatus = document.querySelector("#addCivilStatus");
  
  let data = {
    resident_firstname: firstname.value,
    resident_middlename: middlename.value,
    resident_lastname: lastname.value,
    resident_birthday: `${birthYear.value}${birthMonth.value}${birthDay.value}`,
    resident_sex: sex.value,
    resident_occupation: occupation.value,
    resident_civil_status: civilStatus.value,
  };

  axios.post("http://localhost:4435/residents", data);
}

export function Footer() {
  return (
    <>
      <Button
        label="Cancel"
        toggle="modal"
        target="manageResidents"
        props="btn-secondary"
      />
      <Button
        label="Done"
        toggle="modal"
        target="manageResidents"
        props="btn-primary"
        click={() => CreateResident()}
      />
    </>
  );
}

export default function AddResident() {
  return (
    <Page
      id="addResident"
      title="Sign the resident information to register"
      fullscreen={true}
      enableFooter={true}
      footerChildren={<Footer />}
    >
      <Container>
        <Table.Row>
          <Table.Col props="col-sm-12 col-md-2 col-lg-2 d-flex justify-content-center">
            <Text label="Add image here" />
          </Table.Col>

          <Table.Col props="col-sm-12 col-md-5 col-lg-5">
            <Input id="addFirstname" label="Firstname" props="mb-3" />
            <Input id="addMiddlename" label="Middlename" props="mb-3" />
            <Input id="addLastname" label="Lastname" props="mb-3" />
            <div className="input-group mb-3">
              <p className="input-group-text">Birthay</p>
              <input
                id="addBirthDay"
                className="form-control"
                placeholder="DD"
              />
              <input
                id="addBirthMonth"
                className="form-control"
                placeholder="MM"
              />
              <input
                id="addBirthYear"
                className="form-control"
                placeholder="YYYY"
              />
            </div>
            <Input id="addAge" label="Age" props="mb-3" />
            <div className="input-group mb-3">
              <Input id="addSex" label="Select Sex" readonly={true} />
              <ul className="dropdown-menu">
                <li onClick={() => (addSex.value = "Male")}>
                  <a className="dropdown-item">Male</a>
                </li>
                <li onClick={() => (addSex.value = "Female")}>
                  <a className="dropdown-item">Female</a>
                </li>
              </ul>
              <Button label="Select" toggle="dropdown" props="btn-primary" />
            </div>
          </Table.Col>

          <Table.Col props="col-sm-12 col-md-5 col-lg-5">
            <Input id="addOccupation" label="Occupation" props="mb-3" />
            <div className="input-group">
              <Input
                id="addCivilStatus"
                label="Select Civil Status"
                readonly={true}
              />
              <ul className="dropdown-menu">
                <li onClick={() => (addCivilStatus.value = "Single")}>
                  <a className="dropdown-item">Single</a>
                </li>
                <li onClick={() => (addCivilStatus.value = "Married")}>
                  <a className="dropdown-item">Married</a>
                </li>
                <li onClick={() => (addCivilStatus.value = "Widowed")}>
                  <a className="dropdown-item">Widowed</a>
                </li>
                <li onClick={() => (addCivilStatus.value = "Divorced")}>
                  <a className="dropdown-item">Divorced</a>
                </li>
              </ul>
              <Button label="Select" toggle="dropdown" props="btn-primary" />
            </div>
          </Table.Col>
        </Table.Row>
      </Container>
    </Page>
  );
}
