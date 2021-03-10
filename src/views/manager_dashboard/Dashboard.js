import React, { useState } from "react";
import {
  CSwitch,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import { ButtonGroup, Button } from "react-bootstrap";

import WidgetsDropdown from "./WidgetsDropdown";
import TrafficChart from "./TrafficChart.js";
import AircraftMonitor from "./AircraftMonitor";
import LocationAndHealth from "./charts/LocationAndHealth";
import LocationAndAircraft from "./charts/LocationAndAircraft";

const Dashboard = () => {
  const [percentageMode, setPercentageMode] = useState(false);
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
          <CRow class="row justify-content-between">
            <CCol lg="10">
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-muted ">Aircraft Status Over Time</div>
            </CCol>
            <CCol lg="2">
              <div className="small text-muted mb-1 row">Percentage Mode</div>
              <div class={"row"}>
                <ButtonGroup size="sm">
                  <Button onClick={() => setPercentageMode(false)}>Off</Button>
                  <Button onClick={() => setPercentageMode(true)}>On</Button>
                </ButtonGroup>
              </div>
            </CCol>
          </CRow>
          <TrafficChart mode={percentageMode} />
        </CCardBody>
      </CCard>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <h4 id="traffic" className="card-title mb-0">
                    Location and Engine Status
                  </h4>
                  <div className="small text-muted">
                    Aircraft type based on location and engine status
                  </div>
                </CCol>
              </CRow>
              <LocationAndHealth />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <h4 id="traffic" className="card-title mb-0">
                    Location and Aircraft Type
                  </h4>
                  <div className="small text-muted">
                    Aircraft type based on location and aircraft type
                  </div>
                </CCol>
              </CRow>
              <LocationAndAircraft />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
