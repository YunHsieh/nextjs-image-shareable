import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTestApi } from '../../../store/modules/get_api'

class Test extends React.PureComponent {
    constructor(props) {
        super(props);  
    }
    
    render(){
        const {
            ablum_name
        } = this.props;
        return(
            <>
                <div>
                    {ablum_name}
                </div>
            </>
        )
    }
}

const mapDispatch = (dispatch) => bindActionCreators({
    fetchTestApi,
}, dispatch);

const mapState = ({ mytest }) => ({
    ablum_name: mytest.ablum_name
});
    
export default connect(
    mapState,
    mapDispatch,
)(Test);
