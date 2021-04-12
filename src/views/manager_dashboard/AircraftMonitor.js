import React, { useState } from "react";
import { getBadge, jetData, jetFields } from "./constants";
import {
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CDataTable,
} from "@coreui/react";

const AircraftMonitor = () => {
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
    <CDataTable
      items={jetData}
      fields={jetFields}
      columnFilter={"RUL"}
      hover
      sorter
      pagination
      scopedSlots={{
        RUL: (item) => (
          <td>
            <CBadge color={getBadge(item.RUL).color} style={{ padding: 4 }}>
              {getBadge(item.RUL).health}
            </CBadge>
          </td>
        ),

        show_details: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="round"
                style={{
                  width: 60,
                  height: 27,
                  padding: 0,
                  fontSize: "0.875rem",
                }}
                onClick={() => {
                  toggleDetails(index);
                }}
              >
                {details.includes(index) ? "Hide" : "Show"}
              </CButton>
            </td>
          );
        },
        details: (item, index) => {
          return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <p className="text-muted"> RUL cycles left: {item.RUL}</p>
                <p className="text-muted">
                  Assigned team: {item.assigned_team}
                </p>

                <p className="text-muted">
                  No. of parts to fix: {item.parts_to_fix.length}
                </p>
                <p className="text-muted">
                  Identified parts:{" "}
                  {item.parts_to_fix.map((part) => (
                    <div className={"text-bubble"}> {part} </div>
                  ))}
                </p>
              </CCardBody>
            </CCollapse>
          );
        },
      }}
    />
  );
};

export default AircraftMonitor;
