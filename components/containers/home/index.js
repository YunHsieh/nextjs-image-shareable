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
        payload.forEach((data, i) => {
            data['data'].forEach( (subData, j) => {
                const idx = (i * data['data'].length) + j;
                if (j === 0){
                    this.leftElement.push(
                        <ImgControl onClick={executeScroll.bind(this, idx)} 
                            onMouseMove={e => this.onMouseMove(e)} 
                            key={idx} 
                            src={subData['image_url']}/>
                        );
                }
                
                this.rightElement.push(<ImgControl 
                    ref={el => {
                        this.myRef.current[idx] = el;
                    }} 
                    onMouseMove={e => this.onMouseMove(e)} 
                    key={`img-${idx}`} 
                    src={subData['image_url']}/>
                );
            })
        })

        return(
            <>  
                <div className="container">
                    <HalfLeft>
                        {this.leftElement}
                    </HalfLeft>
                    <HalfRight>
                        {this.rightElement}
                    </HalfRight>
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
