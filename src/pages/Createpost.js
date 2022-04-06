import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
const {signout} = useAuth();
const navigate = useNavigate();

  return (
    <div>
      <h1>Createpost</h1>
      <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log out</button>
    </div>
  )
  
}

export { Createpost }