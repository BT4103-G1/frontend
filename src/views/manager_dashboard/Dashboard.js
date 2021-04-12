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
import GlobalView from "./charts/GlobalView";
import LocalView from "./charts/LocalView";

const Dashboard = () => {
  const [percentageMode, setPercentageMode] = useState(false);
  return (
    <>
      <WidgetsDropdown />
      <div style={{ marginTop: -12 }}>
        <CCard style={{ padding: "10px 20px 10px 20px" }}>
          <h4 id="traffic" style={{ margin: "10px 0 0 0" }}>
            Aircraft Monitor
          </h4>
          <div className="small text-muted" style={{ margin: "0 0 15px 0" }}>
            Detailed Overview of Aircraft Turbo Engine Health
          </div>
          <AircraftMonitor />
        </CCard>
      </div>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <h4 id="traffic" className="card-title mb-0">
                    Feature Analysis
                  </h4>
                  <div className="small text-muted">Global Interpretation</div>
                </CCol>
              </CRow>
              <GlobalView />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <h4 id="traffic" className="card-title mb-0">
                    Feature Analysis
                  </h4>
                  <div className="small text-muted">Local Interpretation</div>
                </CCol>
                <CCol>
                  <div style={{ marginLeft: 100 }} className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Aircraft 334637
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Item
                      </a>
                      <a className="dropdown-item" href="#">
                        Another Item
                      </a>
                      <a className="dropdown-item" href="#">
                        One more item
                      </a>
                    </div>
                  </div>
                </CCol>
              </CRow>
              <LocalView />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
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
