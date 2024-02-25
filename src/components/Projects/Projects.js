import CollapsibleTable from "../ProjectList/ProjectList";
import Sidebar from "../Sidebar/Sidebar";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className='projects'>
      <section className='projects__sidebar'>
        <Sidebar />
      </section>
      {/*dashboard  */}

      <section className='projects__column'>
        <CollapsibleTable />
      </section>
    </section>
  );
};

export default Projects;
