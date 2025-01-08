import Main from "src/components/templates/Main";
import Sidebar from "src/components/templates/Sidebar";

const style = {display: "flex" , gap: "10px"}

function HomePage() {
  return (
    <div style={style}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default HomePage;
