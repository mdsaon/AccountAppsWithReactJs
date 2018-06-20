import React, { Component } from 'react';

class Balance extends Component {
    render(){
        return(
                <div className ="balance-section-part">
                   <p>Balance Statement</p>
                   <p><b>Your Balance Is :{this.props.balances}</b></p>
                </div>
        );
    }
}
export default Balance;