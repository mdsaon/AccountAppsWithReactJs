import React, { Component } from 'react';

class Expense extends Component {
	
    render(){
    	let expenses = this.props.expenses.map(expense => <li>{expense.description} {expense.amount} {expense.time}</li>);
        return(
                <div className ="expense-section-part">
                   <p>Expense Statement</p>
                   <p>{expenses}</p>
                </div>
        );
    }
}
export default Expense;