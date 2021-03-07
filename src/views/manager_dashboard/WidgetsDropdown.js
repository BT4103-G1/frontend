import React from "react";
import { CCol, CRow, CWidgetDropdown } from "@coreui/react";
import ChartLineSimple from "./charts/ChartLineSimple";

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-primary"
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
          color="gradient-info"
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
        <CWidgetDropdown
          color="gradient-warning"
          header="Hello James"
          text="How are you today?"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: "70px" }}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        />
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
