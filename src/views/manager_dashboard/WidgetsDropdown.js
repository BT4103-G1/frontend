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
          style={{height: 180, backgroundImage: "linear-gradient(to bottom right, #4b348f , #2a608a)"}}
          header="Engines Status"
          text="Operational Usage of Engines"
          footerSlot={
            <div
              style={{
                height: 70,
                textAlign: "center",
                marginBottom: 15,
              }}
            >
              <CRow>
                <CCol sm="6" lg="6">
                  <b><text class={"big"}>450</text> </b>
                  <br />
                  <text class={"normal"}>Operating</text>
                </CCol>
                <CCol sm="6" lg="6">
                  <b>
                    <text className={"big"}>23</text>
                  </b>
                  <br />
                  <text class={"danger"}>Off</text>
                </CCol>
              </CRow>
            </div>
          }
        />
      </CCol>

      <CCol sm="10" lg="6">
        <CWidgetDropdown
          style={{height: 180, backgroundImage: "linear-gradient(to bottom right, #4b348f , #2a608a  )"}}
          header="Detailed Engine Health"
          text="Breakdown of Engine Health Status"
          footerSlot={
            <div
              style={{
                height: 70,
                textAlign: "center",
                marginBottom: 15,
              }}
            >
              <CRow>
                <CCol sm="6" lg="3">
                  <b><text className={"big"}>300</text></b>
                  <br />
                  <text className={"normal"}> Normal</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b><text className={"big"}>100</text></b>
                  <br />
                  <text className={"warning"}> Warning</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b><text className={"big"}>50</text></b>
                  <br />
                  <text className={"critical"}> Critical</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b><text className={"big"}>23</text></b>
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
          style={{height: 180, backgroundImage: "linear-gradient(to bottom right, #4b348f , #2a608a  )"}}
          header="Overview"
          text="Total Engine Status"
          footerSlot={
            <div style={{marginBottom: 10}}> <PieChart/> </div>
          }
         />
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
