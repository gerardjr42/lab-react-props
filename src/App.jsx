import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";

//Imported components
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";

const targetAmount = 1000;

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <RecentDonations/>
        </section>
        <section className="">
          <Progress/>
          <DonationForm/>
        </section>
      </main>
    </>
  );
}

export default App;
