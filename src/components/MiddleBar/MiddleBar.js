import TableData from "../TableData/TableData";
import WidgetCard from "../WidgetCard/WidgetCard";
import "./MiddleBar.scss";
import { Paper } from "@mui/material";

const MiddleBar = () => {
  return (
    <>
      <section className='middlebar'>
        <Paper className='middlebar__top'>
          <WidgetCard />
        </Paper>

        {/*DataType */}

        <section className='middlebar__bottom'>
          <TableData />
        </section>
      </section>
    </>
  );
};

export default MiddleBar;
