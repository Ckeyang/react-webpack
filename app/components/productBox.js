import React from 'react';
import Btn from './btn/btn';
import {Link} from 'react-router-dom';
require('../assets/main.less');
export default   class App extends React.Component {

    render() {
        const btns = [{
            className: "a_btn", linkUrl:"/repos", btnName: "repos"
        }, {
            className: "a_btn", linkUrl:"/", btnName: "app"
        }, {
            className: "a_btn", linkUrl: "/about", btnName: "about"
        }];
        return (
            <div className="productBox">
                App<br/>
                {btns.map((item,i)=>{
                    return <Link key={i} to={item.linkUrl}><Btn className={item.className} onClickListener={item.onClickListener}
                                                                btnName={item.btnName}/></Link>
                })}
            </div>
        );
    }
};
