import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { FaBeer, FaHome } from "react-icons/fa";
import { UserContext } from "@/context/UserProvider";
// import { MoonIcon, SunIcon } from "@/components/iconsvg";
import { ThemeContext } from "@/context/ThemeProvider";
import Header from "@/components/header";
import Top from "@/components/Top";
import MiddleSection from "@/components/dashboard/MiddleSection";
import BottomSection from "@/components/dashboard/BottomSection";

export default function Home() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);
  const { changeTheme, theme } = useContext(ThemeContext);

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user]);

  // if (!user) {
  //   return null;
  // }

  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <main
        className={`flex container mx-auto min-h-screen flex-col items-center justify-between `}
      >
        <Top />
        <MiddleSection />
        <BottomSection />
      </main>
    </div>
  );
}
