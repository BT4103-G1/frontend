import React from "react";
import { CCol, CRow, CWidgetDropdown } from "@coreui/react";
import ChartLineSimple from "./charts/ChartLineSimple";

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="8">
        <CWidgetDropdown
          color="gradient-primary"
          header="Manpower Requirement"
          text="Estimated manpower for next 5 days"
          footerSlot={
            <div
              style={{
                height: 70,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              <CRow class="row justify-content-around">
                <CCol sm="6" lg="2">
                  <text className={"normal"}>
                    <b>25</b>
                  </text>
                  <br />
                  <text> 11/3</text>
                </CCol>
                <CCol sm="6" lg="2">
                  <text className={"warning"}>
                    <b>44</b>
                  </text>
                  <br />
                  <text> 12/3</text>
                </CCol>
                <CCol sm="6" lg="2">
                  <text className={"critical"}>
                    <b>88</b>
                  </text>
                  <br />
                  <text> 13/3</text>
                </CCol>
                <CCol sm="6" lg="2">
                  <text className={"critical"}>
                    <b>123</b>
                  </text>
                  <br />
                  <text> 14/3</text>
                </CCol>
                <CCol sm="6" lg="2">
                  <text className={"normal"}>
                    <b>23</b>
                  </text>
                  <br />
                  <text> 15/3</text>
                </CCol>
              </CRow>
            </div>
          }
        />
      </CCol>

      <CCol sm="6" lg="4">
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
    </CRow>
  );
};

export default WidgetsDropdown;
