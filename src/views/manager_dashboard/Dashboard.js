import React from "react";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";

import WidgetsDropdown from "./WidgetsDropdown";
import TrafficChart from "./TrafficChart.js";
import AircraftMonitor from "./AircraftMonitor";

const Dashboard = () => {
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
        <AircraftMonitor />
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
          <TrafficChart style={{ height: "300px", marginTop: "40px" }} />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
