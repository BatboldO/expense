import MiddleSection from "@/components/dashboard/MiddleSection";

import TopSection from "@/components/dashboard/TopSection";
import Header from "@/components/header";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const DashboardPage = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <main className="container mx-auto mt-6">
        <TopSection />
        <MiddleSection />
        {/* <TopInfo />
        <MiddleInfo />
        <BottomInfo /> */}
      </main>
    </div>
  );
};

export default DashboardPage;
