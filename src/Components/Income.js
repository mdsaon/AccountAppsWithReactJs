import React, { Component } from 'react';


class Income extends Component {
    render(){
    let incomes = this.props.incomes.map(income =><li>{income.description} {income.amount} {income.time}</li>);
    	console.log(incomes.amount);
        return(
                <div className ="income-section-part">
                   <p>Income Statement</p>
                   <p>{incomes}{incomes.time}</p>
                </div>
        );
    }
}
export default Income;