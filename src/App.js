import "./styles.css";
import useUsersList from "./useUsersList";
import Home from "./Home.jsx";

export default function App() {
  const user = useUsersList();
  console.log("user", user);
  return (
    <>
      <Home user={user} />
    </>
  );
}
