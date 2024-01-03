import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { StepProvider } from "@/context/StepProvider";
import TransactionProvider from "@/context/TransactionProvider";
import CategoryProvider from "@/context/CategoryProvider";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <StepProvider>
          <CategoryProvider>
            <TransactionProvider>
              <Component {...pageProps} />
              <ToastContainer />
            </TransactionProvider>
          </CategoryProvider>
        </StepProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
