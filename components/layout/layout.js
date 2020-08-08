import UserLogin from './login';
import { NavbarBase } from '../units/navbar-comp';
import { BackgroundScreen } from '../units/card-comp';


export const siteTitle = "WTF = Welcome To Facebook";

class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHideLogin: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent() {
      this.setState({ showHideLogin: !this.state.showHideLogin });
  }
  render() {
    const { showHideLogin } = this.state;
    return (
       <>
          {showHideLogin && <UserLogin showHideLogin={showHideLogin} hideComponent={this.hideComponent}/>}
          <NavbarBase>
            <button onClick={() => this.hideComponent()}> Login </button>
          </NavbarBase>
       </>
    )
  }
}

export default Layout;
