import React, { createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTestApi } from '../../../store/modules/get_api'
import { ImgControl, MainBoard, HalfLeft, HalfRight } from '../../units/theme-comp';


class Test extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.rightRef = createRef([]);
        this.rightRef.current = [];
        this.leftRef = createRef([]);
        this.leftRef.current = [];
        this.leftElement = [];
        this.rightElement = [];

        this.rightCurrentidx = 0;
        this.leftCurrentidx = 0;
    }

    onMouseMove(e) {
        console.log('move in here');
        this.moving && this.onMove(e);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
      }
    
      listenScrollEvent(event) {
          let currentScrollPosition = this.refs.leftScreen.scrollTop;

          let rightLastScrollTop = this.rightRef.current[0 + this.rightCurrentidx].offsetTop;
          let rightNextScrollTop = this.rightRef.current[2 + this.rightCurrentidx].offsetTop;

          let leftLastScrollTop = this.leftRef.current[0 + this.leftCurrentidx].offsetTop;
          let leftNextScrollTop = this.leftRef.current[1 + this.leftCurrentidx].offsetTop;

          if (leftLastScrollTop > currentScrollPosition){
            this.rightCurrentidx-=2;
            this.leftCurrentidx-=1;
          } else if (leftNextScrollTop < currentScrollPosition){
            this.rightCurrentidx+=2;
            this.leftCurrentidx+=1;
          }

          if (this.rightCurrentidx < 0 || this.leftCurrentidx < 0){
            this.rightCurrentidx = 0;
            this.leftCurrentidx = 0;
          }

          if (this.leftCurrentidx >= this.leftRef.current.length - 1){
            this.rightCurrentidx = this.rightRef.current.length - 4;
            this.leftCurrentidx = this.leftRef.current.length - 2;
          }
          let rightRatePercent = 1 - (leftNextScrollTop - currentScrollPosition) / (leftNextScrollTop - leftLastScrollTop)
          let leftRatePosition = rightLastScrollTop + ((rightNextScrollTop - rightLastScrollTop) * rightRatePercent)

          window.scrollTo({  top: leftRatePosition })
      }
    
    render(){
        const {
            payload
        } = this.props;

        const executeScroll = (index) => {
            window.scrollTo({ behavior: 'smooth', top: this.rightRef.current[index].offsetTop })
        };
        // sort the data display image in album and image detail
        payload.forEach((data, i) => {
            data['data'].forEach( (subData, j) => {
                const idx = (i * data['data'].length) + j;
                if (j === 0){
                    this.leftElement.push(
                        <ImgControl onClick={executeScroll.bind(this, idx)}
                            ref={el => {
                                this.leftRef.current[i] = el;
                            }}
                            onMouseMove={e => this.onMouseMove(e)} 
                            key={idx} 
                            src={subData['image_url']}/>
                    );
                }
                
                this.rightElement.push(<ImgControl 
                    ref={el => {
                        this.rightRef.current[idx] = el;
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
                    <HalfLeft ref="leftScreen" onScroll={this.listenScrollEvent.bind(this)}>
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
