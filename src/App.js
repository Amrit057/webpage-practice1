import Head from "./Head";
import HeadContent from "./HeadContent";
import Container from "./Container";
import Second from "./Second";
import { FiActivity } from "react-icons/fi";
import { AiFillRocket } from "react-icons/ai";
import { AiOutlineBarcode } from "react-icons/ai";
import "./App.css";
import "./Head.css";

function App() {
  return (
    <div className="app">
      <div className="topContainer">
        <div className="heading">
          <div className="head">
            <Head />
          </div>
          <HeadContent />
        </div>
        <div className="card">
          <div className="card1">
            <Container
              icon={<FiActivity className="icon" />}
              title=" App Development "
              content="At WebPal, we examine all of your needs in order to provide you with high-quality, smooth mobile applications that evolve with technological advancement. We provide customised mobile applications on a variety of scales because we understand how to harness the power of many technologies and smoothly integrate them."
            />
          </div>
          <div className="card2">
            <Container
              icon={<AiOutlineBarcode className="icon" />}
              title="Software Development"
              content="Our software development expertise is innovative and on pace with next-generation software applications. Allow us to design, develop, and improve your software products so you can concentrate on your core business."
            />
          </div>
          <div className="card3">
            <Container
              icon={<AiFillRocket className="icon" />}
              title="Game Development"
              content="At WebPal, we examine all of your needs in order to provide you with high-quality, smooth mobile applications that evolve with technological advancement. We provide customised mobile applications on a variety of scales because we understand how to harness the power of many technologies and smoothly integrate them."
            />
          </div>
        </div>
      </div>
      <Second />
    </div>
  );
}

export default App;
