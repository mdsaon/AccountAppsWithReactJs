import React, { Component } from 'react';

class Header extends Component {
    handleSubmit =(e) =>{
    e.preventDefault()
    let desc= this.refs.des.value;
    let amount = this.refs.amount.value;
    this.props.handleAdd(desc,amount);
    console.log(desc,amount);

  }

    render(){
        return(
                <div className ="header-title">
                    <h1>{this.props.title}</h1>
                    <form onSubmit={this.handleSubmit}>
                    <input type= "text"
                           name= "description"
                           ref= 'des'/>

                    <input type= "text"
                           name= "amount"
                           ref= 'amount'/>

                    <select value={this.props.selectForm} onChange={this.props.handleSelect} name="options">
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>

                    </select>

                    <button type="submit">Add</button> 
                    </form>
                </div>
        );
    }
}
export default Header;