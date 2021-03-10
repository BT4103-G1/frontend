import React from "react";
import { CCard, CCardBody, CCol, CRow, CWidgetDropdown } from "@coreui/react";
import ChartLineSimple from "./charts/ChartLineSimple";
import PieChart from "./charts/TotalPieChart";

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-info"
          header="Engines Status"
          text="Operational Usage of Engines"
          footerSlot={
            <div
              style={{
                height: 70,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              <CRow>
                <CCol sm="6" lg="6">
                  <b>353</b>
                  <br />
                  <text class={"normal"}> Operating</text>
                </CCol>
                <CCol sm="6" lg="6">
                  <b>23</b>
                  <br />
                  <text class={"danger"}> Off </text>
                </CCol>
              </CRow>
            </div>
          }
        />
      </CCol>

      <CCol sm="10" lg="6">
        <CWidgetDropdown
          color="gradient-primary"
          header="Detailed Engine Health"
          text="Breakdown of Engine Health Status"
          footerSlot={
            <div
              style={{
                height: 70,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              <CRow>
                <CCol sm="6" lg="3">
                  <b>353</b>
                  <br />
                  <text className={"normal"}> Normal</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b>353</b>
                  <br />
                  <text className={"warning"}> Warning</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b>353</b>
                  <br />
                  <text className={"critical"}> Critical</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b>23</b>
                  <br />
                  <text> Repair</text>
                </CCol>
              </CRow>
            </div>
          }
        />
      </CCol>

      <CCol sm="2" lg="2">
        <CCard>
          <CCardBody>
            <CCol>
              <h5 id="traffic" className="card-title mb-0">
                Overview
              </h5>
              <div className="small text-muted mb-3">Total Engine Status</div>
            </CCol>
            <PieChart />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
