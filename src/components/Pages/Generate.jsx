import axios from "axios";
import { Button, Input, Page, Tick, Text } from "../../lib";

import TransacProfile from "./TransacProfile";

export function CreateBrgyClearance(fullname, sex) {
  const DateX = new Date();
  const day = DateX.getDate <= 9 ? `0${DateX.getDate()}` : DateX.getDate();
  const month = DateX.getMonth <= 9 ? `0${DateX.getMonth()}` : DateX.getMonth();
  const year = DateX.getFullYear();
  const date = `${year}${month}${day}`;
  const data = {
    doc_filename: `${fullname}${date}Clearance`,
    doc_fullname: fullname,
    doc_sex: sex,
    doc_captain: 'DOMINGO T. SERASPE',
  };

  axios.post("http://localhost:4435/pdf/create/barangay-clearance", data);
}

export function CreateCertificateOfIndigency(fullname, civilStatus) {
  const DateX = new Date();
  const day = DateX.getDate <= 9 ? `0${DateX.getDate()}` : DateX.getDate();
  const month = DateX.getMonth <= 9 ? `0${DateX.getMonth()}` : DateX.getMonth();
  const year = DateX.getFullYear();
  const date = `${year}${month}${day}`;
  const data = {
    doc_filename: `${fullname}${date}Indigency`,
    doc_fullname: fullname,
    doc_civilStatus: civilStatus,
    doc_captain: 'DOMINGO T. SERASPE',
  };

  axios.post(
    `http://localhost:4435/pdf/create/certificate-of-indigency`,
    data
  );      
}

export function CreateCertificateOfResidency(fullname, civilStatus, sex) {
  const DateX = new Date();
  const day = DateX.getDate <= 9 ? `0${DateX.getDate()}` : DateX.getDate();
  const month = DateX.getMonth <= 9 ? `0${DateX.getMonth()}` : DateX.getMonth();
  const year = DateX.getFullYear();
  const date = `${year}${month}${day}`;
  const data = {
    doc_filename: `${fullname}${date}Residency`,
    doc_fullname: fullname,
    doc_civilStatus: civilStatus,
    doc_sex: sex,
    doc_captain: 'DOMINGO T. SERASPE',

  };  

  axios.post(
    "http://localhost:4435/pdf/create/certificate-of-residency",
    data
  );
}

export function GenerateDocument() {
  let docName = document.querySelector("#docName");
  let docSex = document.querySelector("#docSex");
  let docCivilStatus = document.querySelector("#docCivilStatus");

  let d1 = document.querySelector("#d1");
  let d2 = document.querySelector("#d2");
  let d3 = document.querySelector("#d3");

  let total = 0;

  if (d1.checked)
    CreateBrgyClearance(docName.value, docSex.value), (total += 50);
  if (d2.checked)
    CreateCertificateOfIndigency(docName.value, docCivilStatus.value),
      (total += 50);
  if (d3.checked)
    CreateCertificateOfResidency(
      docName.value,
      docCivilStatus.value,
      docSex.value
    ),
      (total += 50);

  localStorage.amount = total;
}

export function Footer() {
  return (
    <>
      <Button
        label="Cancel"
        toggle="modal"
        target="documentGenerator"
        props="btn-secondary"
      />
      <Button
        label="Done"
        toggle="modal"
        target="transactionProfile"
        props="btn-primary"
        click={() => GenerateDocument()}
      />
    </>
  );
}

/* ADD SOME INPUT HERE */
export default function DocumentGenerator() {
  let count = 0;
  return (
    <>
      <TransacProfile />
      <Page
        id="documentGenerator"
        title="Generate a Document"
        enableFooter={true}
        footerChildren={<Footer />}
      >
        <Input id="docName" label="Fullname" props="mb-3" />
        <Input id="docSex" label="Gender" props="mb-3" />
        <Input id="docCivilStatus" label="Mobile Number" props="mb-3" />
        <Input id="docAddress" label="Address" props="mb-3" />
        <Input id="docReason" label="Reason" props="mb-4 p-4"/>
        <hr />
        <h1 className="my-3 text-blue-700 font-semibold">Select documents that you want to generate: </h1>
        <div className="form-check font-semibold">
          <input
            id="d1"
            className="form-check-input"
            type="checkbox"
            value="50"
          />
          <label className="form-check-label" htmlFor="d1">
            Barangay Clearance
          </label>
        </div>

        <div className="form-check font-semibold">
          <input
            id="d2"
            className="form-check-input"
            type="checkbox"
            value="50"
          />
          <label className="form-check-label" htmlFor="d2">
            Certificate of Indigency
          </label>
        </div>

        <div className="form-check font-semibold  ">
          <input
            id="d3"
            className="form-check-input"
            type="checkbox"
            value="50"
          />
          <label className="form-check-label" htmlFor="d3">
            Certificate of Residency
            
          </label>
        </div>
      </Page>
    </>
  );
}
