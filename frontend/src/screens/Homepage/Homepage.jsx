import "./homepage.css";
import headerImg from "../../assets/images/background-landscape.png";

const Homepage = () => {
  return (
    <>
      <div className="hero-container grid span_12">
        <div className="hero-img">
          <img src={headerImg} alt="moonlit sky" />
        </div>
        <div className="container grid">
          <div className="hero-content">
            <h1>Luna's Art Page</h1>
            <p>
              I'm Luna, I'm originally from Campeche. I'm beautiful and I like
              to draw beautiful things. I love roses and anime. What's your type
              of girl?
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
