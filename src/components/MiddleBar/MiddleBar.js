import TableData from "../TableData/TableData";
import TodoTable from "../TodoTable/TodoTable";
import WidgetCard from "../WidgetCard/WidgetCard";
import "./MiddleBar.scss";
import { Paper } from "@mui/material";

const MiddleBar = ({ projectId }) => {
  return (
    <>
      <section className='middlebar'>
        <Paper className='middlebar__top'>
          <WidgetCard />
        </Paper>

        {/*DataType */}

        <section className='middlebar__bottom'>
          <TableData projectId={projectId} />
          {/* <TodoTable /> */}
        </section>
      </section>
    </>
  );
};

export default MiddleBar;
