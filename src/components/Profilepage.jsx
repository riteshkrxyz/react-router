import { useParams } from "react-router-dom";

const Profilepage = () => {
  const params = useParams();
  console.log(params);
  return <div>Profile Page for {params.profileId}</div>;
};

export default Profilepage;
