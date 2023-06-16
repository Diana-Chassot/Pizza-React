import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function ButtonNavigation() {
  const navigate = useNavigate();
  return (
    <Button
      className="btn btn--dark"
      text="Order now"
      onClick={() => navigate("/menu")}
    ></Button>
  );
}

export default ButtonNavigation;
