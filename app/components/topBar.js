import React from 'react';
require("../../assets/components/topBar.less");
export default class Topbar extends React.Component {
    constructor(p){
        super(p)
    }
    render() {
        return (
            <div className="topBox">
                <a className="a_btn bg_success">demo</a>
            </div>
        )
    }
}