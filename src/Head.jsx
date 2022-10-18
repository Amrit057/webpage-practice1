import pic from "./webpal.png";
function Head() {
  return (
    <div className="head_div">
      <div className="logo">
        <img src={pic} alt="Digital Agency"></img>
      </div>
      <div className="head_div_nav">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Pages</li>
          <li>Block</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="buy_div">
        <p className="buy">BUY NOW</p>
      </div>
    </div>
  );
}

export default Head;
