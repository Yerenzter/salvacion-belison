import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/Instant.css";
import AddResident from "./Added/AddResident";

import {
  Button,
  Card,
  Input,
  Loop,
  Page,
  ProfileCard,
  Table,
  Text,
  Tick,
} from "../../lib";
import ResidentProfile from "./ResidentProfile";
export default function ManageResidents() {
  useEffect(() => {
    Tick(RecognizeFilteringMethod)
  }, []);

  const [data, sendData] = useState({});

  const SearchResident = async (keyword) => {
    let search = {
      resident_search_id: keyword,
      resident_search_firstname: keyword,
      resident_search_lastname: keyword
    }

    const res = await axios.post('https://localhost:4435/residents/search', search);
    sendData(res.data);
  }

  const OrderById = async () => {
    const res = await axios.get('https://localhost:4435/residents')
    sendData(res.data);
  } 

  const RecognizeFilteringMethod = () => {
    let search = document.querySelector('#searchResident');

    if(search.value !== '') return SearchResident(search.value);

    return OrderById();
  }

  return (
    <>
      <AddResident />
      <ResidentProfile />
      <Page id="manageResidents" title="Manage Residents " fullscreen={true}>
        <div className="d-flex flex-row justify-content-center ">
          <form className="d-flex mb-5 ">
            <Input name="searchResidents" label="Search residents" />
            <Button props="btn-secondary mx-3" type="button" label="Search" />
            <Button
              props="btn-info"
              type="button"
              toggle="modal"
              target="addResident"
              label="Register"
            />
          </form>
        </div>

        <form>
          <Table.Row props="gy-3">
            <Loop repeat={data.length}>
              {(index) => (
                <ProfileCard
                  key={index}
                  img=""
                  toggle="modal"
                  target="residentProfile"
                  name={data[index].resident_firstname}
                  purok={data[index].resident_civil_status}
                />
              )}
            </Loop>
          </Table.Row>
        </form>
      </Page>
    </>
  );
}
