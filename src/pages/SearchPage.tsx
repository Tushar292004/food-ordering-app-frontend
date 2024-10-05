import { useParams } from "react-router-dom";

const SeachPage = () => {
  const {city} = useParams();
  return <span> User Searched For {city}</span>
}

export default SeachPage;