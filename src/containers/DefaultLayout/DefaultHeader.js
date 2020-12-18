import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.png'
import { getCookie } from '../../utils/helper';
import { USER_TYPE } from '../../utils/constants';
// import { useHistory } from 'react-router-dom';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultHeader = props => {
  // const history = useHistory()

  const logout = async () => {
    // const response = await auth.logout()
    // console.log(response);
    // if (response) {
    //   history.replace('/login')
    // }
  }

  // eslint-disable-next-line
  const { children, ...attributes } = props;
  const userType = getCookie(USER_TYPE)
  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: logo, atitlelt: '4planr' }}
        minimized={{ src: sygnet, width: 30, height: 30, alt: 'Scheduler' }}
      />
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@scheduler.com" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem><i className="fa fa-user"></i> Welcome {userType === 'admin' ? 'Admin' : 'User'}</DropdownItem>
            <DropdownItem onClick={logout}><i className="fa fa-lock"></i> Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  );

}

export default DefaultHeader;

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;