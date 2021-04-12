import React from "react";
import {
  CCol,
  CProgress,
  CProgressBar,
  CRow,
  CWidgetDropdown,
} from "@coreui/react";

const WidgetsDropdown = () => {
  // render

  return (
    <div className="row no-gutters">
      <div className="col-5">
        <CWidgetDropdown
          style={{
            padding: 0,
            height: 180,
            backgroundImage:
              "linear-gradient(to bottom right, #4b348f , #2a608a)",
          }}
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
                  <b>
                    <text class={"big"}>450</text>{" "}
                  </b>
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
      </div>
      <div className="col-5">
        <CWidgetDropdown
          style={{
            height: 180,
            backgroundImage:
              "linear-gradient(to bottom right, #4b348f , #2a608a  )",
          }}
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
                  <b>
                    <text className={"big"}>300</text>
                  </b>
                  <br />
                  <text className={"normal"}> Normal</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b>
                    <text className={"big"}>100</text>
                  </b>
                  <br />
                  <text className={"warning"}> Warning</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b>
                    <text className={"big"}>50</text>
                  </b>
                  <br />
                  <text className={"critical"}> Critical</text>
                </CCol>
                <CCol sm="6" lg="3">
                  <b>
                    <text className={"big"}>23</text>
                  </b>
                  <br />
                  <text> Repair</text>
                </CCol>
              </CRow>
            </div>
          }
        />
      </div>
      <div className="col-2">
        <CWidgetDropdown
          style={{
            height: 180,
            backgroundImage:
              "linear-gradient(to bottom right, #4b348f , #2a608a  )",
          }}
          header="Overview"
          text="Total Engine Status"
          footerSlot={
            <CProgress animated className="ml-2 mr-2 mb-5 bg-white">
              <CProgressBar
                showValue
                value={300}
                color="success"
                height="30px"
              />
              <CProgressBar showValue value={100} color="warning" />
              <CProgressBar showValue value={50} color="danger" />
            </CProgress>
          }
        />
      </div>
    </div>
  );
};

export default WidgetsDropdown;
