import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Page, Input, Loop, Table, Text, Tick } from "../../lib";
import AddUser from "./Added/AddUser";
import { EditUser, SetUserId } from "./Added/EditUser";
import PromoteUser from "./Added/PromoteUser";

export default function ManageUsers() {
  useEffect(() => {
    Tick(RecognizeFilteringMethod);
  }, []);

  const SearchResidents = async (keyword) => {
    const search = {
      account_search_id: keyword,
      account_search_username: keyword,
    };

    await axios.post("https://localhost:4435/residents/post", data);
    sendData(res.data);
  };

  const OrderById = async () => {
    const res = await axios.get("https://localhost:4435/accounts");
    sendData(res.data);
  };

  const RecognizeFilteringMethod = () => {
    let search = document.querySelector('#searchUsers');

    if(search.value !== '') return SearchResidents(search.value);

    return OrderById();
  }

  return (
    <>
      <AddUser />
      <EditUser />
      <Page id="manageUsers" title="Manage Users" fullscreen={true}>
        <div className="d-flex flex-row justify-content-center">
          <form className="d-flex mb-4">
            <Input name="searchUsers" label="Search users" />
            <Button props="btn-secondary mx-3" type="button" label="Search" />
            <Button
              props="btn-success"
              toggle="modal"
              target="addUser"
              type="button"
              label="Add"
            />
          </form>
        </div>

        <form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Account Type</th>
                {/* <th scope='col'>Date Joined</th> */}
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              <Loop repeat={data.length}>
                {(index) => (
                  <tr key={index}>
                    <th scope="row">{data[index].user_id}</th>
                    <td>{data[index].user_name}</td>
                    <td>{data[index].user_password}</td>
                    <td>{data[index].user_type}</td>
                    {/* <td>{ data[index].user_created }</td> */}
                    <td>
                      <Button
                        label="Edit Account Users"
                        type="button"
                        click={() => SetUserId(data[index].user_id)}
                        toggle="modal"
                        target="editUser"
                        props="btn-info mx-2"
                      />
                      <Button
                        label="Remove Account"
                        type="button"
                        props="btn-warning mx-2"
                      />
                      <div className="btn-group" role="group">
                        <Button
                          label="Promote Account"
                          type="button"
                          props="btn-success dropdown-toggle"
                          toggle="dropdown"
                        />
                        <ul className="dropdown-menu cursor-pointer">
                          <li
                            onClick={() =>
                              PromoteUser("Admin", data[index].user_id)
                            }
                          >
                            <a className="dropdown-item">To Admin</a>
                          </li>
                          <li
                            onClick={() =>
                              PromoteUser("Personnel", data[index].user_id)
                            }
                          >
                            <a className="dropdown-item">To Personnel</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                )}
              </Loop>
            </tbody>
          </table>
        </form>
      </Page>
    </>
  );
}
