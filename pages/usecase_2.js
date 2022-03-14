import Link from "next/link";
import Navbar from "components/Navbar";
import Top from "components/usecase2/Top";
import Intro from "components/usecase2/Intro";
import Cameras from "components/usecase2/Cameras";
import Howitworks from "components/usecase2/Howitworks";
import Ui2 from "components/usecase2/Ui2";
import CommentEW from "components/usecase2/CommentEW";
import Ask from "components/Ask";
import Contact from "components/Contact";
import Footer from "components/Footer";

export default function Usecase2() {
    return (
      <div className="selection:bg-lime-300">
        <Navbar />
        <Top />
        <Intro />
        <Cameras />
        <Howitworks />
        <Ui2 />
        <CommentEW />
        <Ask />
        <Contact />
        <Footer />
      </div>
    );
  }
  