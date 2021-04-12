import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Notifications = () => {
  const itemsCount = 3
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell"/>
        <CBadge shape="pill" color="danger">{itemsCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          color="light"
        >
          <strong>You have {itemsCount} messages</strong>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="message">

            <div>
              <small className="text-muted float-right mt-1">Just now</small>
            </div>
            <div className="text-truncate font-weight-bold">Aircraft 351232 in critical health</div>
            <div className="small text-muted text-truncate">Your 351232 aircraft has entered critical stage.
              Please assign a team to look into this aircraft immediately
              ...
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">

            <div>
              <small className="text-muted float-right mt-1">5 minutes ago</small>
            </div>
            <div className="text-truncate font-weight-bold">Aircraft 125122 in critical health</div>
            <div className="small text-muted text-truncate">Your 125122 aircraft has entered critical stage.
              Please assign a team to look into this aircraft immediately
              ...
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div>
            <div>
              <small className="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">Aircraft 204912 in critical health</div>
            <div className="small text-muted text-truncate">Your 204912 aircraft has entered critical stage.
              Please assign a team to look into this aircraft immediately
              ...
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem
          header
          tag="div"
          color="light"
        >
          <strong>Aircraft Status</strong>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>Seletar</b></small>
          </div>
          <CProgress size="xs" color="info" value={75}/>
          <small className="text-muted">92/123 aircrafts in use. </small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>Paya Lebar</b></small>
          </div>
          <CProgress size="xs" color="warning" value={70}/>
          <small className="text-muted">101/146 aircrafts in use.</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small><b>Changi</b></small>
          </div>
          <CProgress size="xs" color="danger" value={90}/>
          <small className="text-muted">183/204 aircrafts in use.</small>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default Notifications
