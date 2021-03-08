import React, { useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import { getBadge, jetData, jetFields, usersData } from "./constants";

import MainChartExample from "./MainChartExample.js";
import WidgetsDropdown from "./WidgetsDropdown";

const Dashboard = () => {
  const [details, setDetails] = useState([]);
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  return (
    <>
      <WidgetsDropdown />
      <CCard style={{ padding: "10px 20px 10px 20px" }}>
        <h4 id="traffic" style={{ margin: "10px 0 0 0" }}>
          Aircraft Monitor
        </h4>
        <div className="small text-muted">
          Detailed Overview of Aircraft Turbo Engine Health
        </div>
        <CDataTable
          items={jetData}
          fields={jetFields}
          columnFilter={"RUL"}
          itemsPerPageSelect
          itemsPerPage={10}
          hover
          sorter
          pagination
          scopedSlots={{
            RUL: (item) => (
              <td>
                <CBadge color={getBadge(item.RUL).color}>
                  {getBadge(item.RUL).health}
                </CBadge>
              </td>
            ),
          }}
        />
      </CCard>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-muted"> Aircraft Status Over Time</div>
            </CCol>
          </CRow>
          <MainChartExample style={{ height: "300px", marginTop: "40px" }} />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
