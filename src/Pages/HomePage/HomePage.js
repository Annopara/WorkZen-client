import Home from "../../components/Home/Home";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { projectId } = useParams();
  return (
    <>
      <section className='homepage'>
        {/* Sidebar */}
        <section className='homepage__sidebar'>
          <Home projectId={projectId} />
        </section>
      </section>
    </>
  );
};
export default HomePage;
