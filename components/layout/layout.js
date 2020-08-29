import UserLogin from './login';
import { NavbarBase } from '../units/navbar-comp';

import ClientTransport from '../../helpers/apis';
import { fetchTestApi } from '../../store/modules/get_api'

export const siteTitle = "WTF = Welcome To Facebook";

class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHideLogin: false
    };
    this.switchLoginStatus = this.switchLoginStatus.bind(this);
  }
  switchLoginStatus = async(status) => {
    this.setState({ showHideLogin: status });
  }
  render() {
    const { showHideLogin } = this.state;
    return (
       <>
          {showHideLogin && <UserLogin hideComponent={this.switchLoginStatus} />}
          <NavbarBase>
            <button onClick={() => this.switchLoginStatus(true)}> Login </button>
          </NavbarBase>
       </>
    )
  }
}

export default Layout;
