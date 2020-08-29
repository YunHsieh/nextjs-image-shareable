import { BackgroundScreen, LoginCard, LoginCardHover, LoginContext, LoginTail } from '../units/card-comp';
import { fullTitleName } from '../../constants';
import Layout from './layout'

class UserLogin extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
    hideComponent() {
      this.props.hideComponent();
    }
    render() {
        return (
          <>
            <LoginCard>
            {fullTitleName}
              <LoginCardHover>
                <LoginContext>
                  <div className="container">
                    <div className="columns">
                      <div className="col-12">
                        <input type="text" id="userid" name="userid" placeholder="Email/ID"/>
                        </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="columns">
                      <div className="col-12">
                        <input type="password" id="pw" name="pw" placeholder="Password"/>
                      </div>
                    </div>
                  </div>
                </LoginContext>
  
                <LoginTail>
                  <input type="submit" value="Register"/>
                  <input type="submit" value="Login"/>
                </LoginTail>
              </LoginCardHover>
            </LoginCard>
            { true && <Layout /> }
            <BackgroundScreen onClick={() => this.hideComponent()}>
            </BackgroundScreen>
          </>
      );
    }
  }

  export default UserLogin;
