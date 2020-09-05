import UserLogin from './login';
import { NavbarBase } from '../units/navbar-comp';

import { IconImage } from '../units/login-comp';

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
             <IconImage onClick={() => this.switchLoginStatus(true)}/>
          </NavbarBase>
       </>
    )
  }
}

export default Layout;
