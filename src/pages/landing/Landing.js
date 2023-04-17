import Typewriter from "typewriter-effect";
import SocialIcons from "../../components/SocialIcons";
import Contact from '../contact/Contact';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Queenstown from '../../images/queenstown.JPG'

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${Queenstown})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <><section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <Typewriter
          className="description"
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("I'm a Developer")
              .pauseFor(1000)
              .deleteChars(9)
              .typeString("Student")
              .pauseFor(1000)
              .deleteChars(13)
              .typeString("Co-Founder")
              .pauseFor(1000)
              .deleteChars(10)
              .typeString("Sessional Academic")
              .start();
          }}
        />
      </div>
      <div className="image-container">
      </div>
      <SocialIcons />
      </section>
        <About 
          name="Nathan Wang" 
          email="nathan123wang@gmail.com" 
          location="Brisbane, Australia" 
          availability="Looking for Internship" 
        />
        <Portfolio />
        <Contact 
          name="Nathan Wang" 
          email="nathan123wang@gmail.com" 
          location="Brisbane, Australia" 
          availability="Looking for Internship"        
        />
      </>
  );
};

export default Landing;
