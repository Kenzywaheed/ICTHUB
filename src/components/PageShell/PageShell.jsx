import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function PageShell({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
}