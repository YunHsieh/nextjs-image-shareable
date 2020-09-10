import React, { createRef } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTestApi } from '../../../store/modules/get_api'
import { ImgControl, MainBoard, HalfLeft, HalfRight } from '../../units/theme-comp';


class Test extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.myRef = createRef([]);
        this.myRef.current = []
        this.leftElement = [];
        this.rightElement = [];
    }

    onMouseMove(e) {
        console.log('move in here');
        this.moving && this.onMove(e);
    }
    
    render(){
        const {
            payload
        } = this.props;

        const executeScroll = (index) => {
            window.scrollTo({ behavior: 'smooth', top: this.myRef.current[index].offsetTop })
        };
        
        // sort the data display image in album and image detail
        payload.map((data, i) => 
            data['data'].map( (subData, j) => {
                    if (j === 0){
                        this.leftElement.push(subData['image_url']);
                    }
                    this.rightElement.push(subData['image_url']);
                }
            )
        )

        return(
            <>
                <div>                 
                    <div className="container">
                        <HalfLeft>
                            {this.leftElement.map( (data, i) => 
                                <ImgControl onClick={executeScroll.bind(this, i*2)} onMouseMove={e => this.onMouseMove(e)} key={i} src={data}/>)
                            }
                        </HalfLeft>
                        <HalfRight>
                            {this.rightElement.map( (data, i) => 
                                <ImgControl ref={el => this.myRef.current[i] = el} onMouseMove={e => this.onMouseMove(e)} key={i} src={data}/>)
                            }
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
