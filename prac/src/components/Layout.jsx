import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", minHeight: "60vh", padding: "0 24px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
