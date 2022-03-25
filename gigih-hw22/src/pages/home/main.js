import React from "react";
import CardForm from "../../components/cardForm";
import CardLagu from "../../components/cardLagu";
import data from "../../data";

export default function Main() {
  return (
    <div>
      <CardForm />
      <CardLagu data={data} />
    </div>
  );
}
