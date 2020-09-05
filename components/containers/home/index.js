import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTestApi } from '../../../store/modules/get_api'
import { ImgControl, MainBoard, HalfLeft, HalfRight } from '../../units/theme-comp';

class Test extends React.PureComponent {
    
    constructor(props) {
        super(props);
    }
    
    render(){
        const {
            payload
        } = this.props;
        const leftElement = [];
        const rightElement = [];
        payload.map( (data, i) => 
            data['data'].map( (subData, j) => {
                    if (j === 0){
                        leftElement.push(<ImgControl key={j} src={subData['image_url']}/>);
                    }
                    rightElement.push(<ImgControl key={j} src={subData['image_url']}/>);
                }
            )
        )
        return(
            <>
                
                <div>
                    <div className="container">
                        <HalfLeft>
                            {leftElement}
                        </HalfLeft>
                        <HalfRight>
                            {rightElement}
                        </HalfRight>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatch = (dispatch) => bindActionCreators({
    fetchTestApi,
}, dispatch);

const mapState = ({ mytest }) => ({
    payload: mytest.payload
});
    
export default connect(
    mapState,
    mapDispatch,
)(Test);
