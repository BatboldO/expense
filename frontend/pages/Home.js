import { useContext } from "react";
import { useRouter } from "next/router";
import { FaBeer, FaHome } from "react-icons/fa";
import { UserContext } from "@/context/UserProvider";
import { ThemeContext } from "@/context/ThemeProvider";
import Header from "@/components/header";
import Top from "@/components/Top";

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
  const getIcons = (name, color) => {
    const icons = {
      beer: <FaBeer size={90} color={color} />,
      home: <FaHome size={90} color={color} />,
    };
    return icons[name];
  };

  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <main
        className={`flex container mx-auto min-h-screen flex-col items-center justify-between `}
      >
        <Top />
        {/* <MiddleInfo />
            <BottomInfo /> */}
      </main>
    </div>
  );
}
