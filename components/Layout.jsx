// Component
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout({ children }) {
   return (
     <> 
      <Header/>
        {children}
      <Footer/>
     </>
   );
}
