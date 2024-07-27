import React, { useEffect, useState } from 'react'
import "../../css/Instant.css";
import { Container, Page, Tick, Text } from "../../lib";

export default function TransactionProfile() {
  useEffect(() => {
    Tick(getAmount)
  },[]);

  const [data, setData] = useState("");

  const getAmount = () => {
    let amountText = document.querySelector('#amountText');
    let count  = 0;

    amountText.textContent = localStorage.amount;
  }
  return (
    <Page id="transactionProfile" title="Request / Your payment">
      <Container props="All d-grid justify-content-center text-center">
        <Text label="Your request is 'DONE'. please wait for Approval." />
        <Text label="Your amount is:" />

        <h1 className="display-1" id="amountText"></h1>
      </Container>
    </Page>
  );
}
