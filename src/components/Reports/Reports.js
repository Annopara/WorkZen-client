import Sidebar from "../Sidebar/Sidebar";
// import "./Projects.scss";
import Reportdata from "../Reportdata/Reportdata";

const Reports = () => {
  return (
    <section className='projects'>
      <section className='projects__sidebar'>
        <Sidebar />
      </section>
      {/*dashboard  */}

      <section className='projects__column'>
        <Reportdata />
      </section>
    </section>
  );
};

export default Reports;
