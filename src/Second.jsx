import img from "./about-1.png";
function Second() {
  return (
    <div className="second_div">
      <img src={img} alt="second-image"></img>
      <div className="second_div_1">
        <h2>Refreshingly Unique</h2>
        <h2>Company About.</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences.
          </p>
        </p>
      </div>
    </div>
  );
}

export default Second;
