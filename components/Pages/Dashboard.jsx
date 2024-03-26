import { createContext, useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import Passwords from "@/components/Passwords";

function Dashboard() {

  return (
      <div className="w-full h-full grid grid-cols-[17.5rem_1fr]">
        <Sidebar />
        <div className="w-full h-full px-8 py-6 overflow-auto hide-scrollbar">
          <Header />
          <SearchBar />
          <Passwords />
        </div>
      </div>
  );
}

export default Dashboard;
