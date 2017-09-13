import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Btn from '../components/btn/btn';
import "../assets/components/topBar.less";
import  *as actions from "../actions/actions"
class Topbar extends React.Component {
    constructor(p) {
        super(p);
    };

    render() {
        return (
            <div className="topBox">
                <Btn className={this.props.className} btnName={this.props.btnName} onClickListener={()=>{this.doTest.bind(this)()}}/>
            </div>
        )
    };

    doTest(){
        if(this.props.btnName=='test'){
            this.props.actions.test();
        }else if(this.props.btnName=='emphasize'){
            this.props.actions.test2();
        }else{
            this.props.actions.test();
        }
    }

}
let mapStateToProps=(state)=>{
    return {
        className : state.TestReducer.className,
        btnName:state.TestReducer.btnName,
        onClickListener : state.TestReducer.onClickListener
    }
};
let mapDispatchToProps=(dispatch)=>{
    return {
        actions: bindActionCreators(actions,dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topbar);