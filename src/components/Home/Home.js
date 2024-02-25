import MiddleBar from "../MiddleBar/MiddleBar";
import Sidebar from "../Sidebar/Sidebar";
import TableData from "../TableData/TableData";
import Todo from "../Todo/Todo";
import WidgetCard from "../WidgetCard/WidgetCard";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className='home'>
        <section className='home__sidebar'>
          <Sidebar />
        </section>
        {/*dashboard  */}

        <section className='home__column'>
          <MiddleBar />
        </section>
        <section className='home__todo'>
          <Todo />
        </section>
      </section>
    </>
  );
};

export default Home;
