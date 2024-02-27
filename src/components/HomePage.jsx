import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
        officiis?
      </p>
      <Link to={"/about"}>About Link</Link>
      <br />
      <Link to={"/profile"}>Profile Page</Link>
    </div>
  );
};

export default HomePage;
