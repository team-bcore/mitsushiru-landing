import Link from "next/link";
import Navbar from "components/Navbar";
import Intro from "components/usecase1/Intro";
import Cameras from "components/usecase1/Cameras";
import Data from "components/usecase1/Data";
import Ui from "components/usecase1/Ui";
import Comment1 from "components/usecase1/Comment1";
import Comment2 from "components/usecase1/Comment2";
import Ask from "components/Ask";
import Contact from "components/Contact";
import Footer from "components/Footer";

export default function Usecase1() {
  return (
    <div className="selection:bg-lime-300">
      <Navbar />
      <Intro />
      <Cameras />
      <Data />
      <Ui />
      <Comment1 />
      <Comment2 />
      <Ask />
      <Contact />
      <Footer />
    </div>
  );
}
