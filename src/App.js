import React, { Component } from 'react';
import Header from './Components/Header';
import Income from './Components/Income';
import Expense from './Components/Expense';
import Balance from './Components/Balance';
import './App.css';

class App extends Component {
 constructor(props){
 	super(props);
 	this.state ={
 		balance:100,
 		descValue: "",
  	    amountValue:"",
  	    select: "",
  	    incomes: [
  	    	{
  	    		description:'Salary',
  	    		amount: 500
  	    	},
  	    	{
  	    		description:'Bonus',
  	    		amount: 100
  	    	}
  	    ],
  	    expenses: [
  	      	{
  	    		description:'Salary',
  	    		amount: 500
  	    	},
  	    	{
  	    		description:'Bonus',
  	    		amount: 100
  	    	}
  	    ]
 	}
 	this.handleChangeDesc =this.handleChangeDesc.bind(this);
 	this.handleChangeAmount =this.handleChangeAmount.bind(this);
 	this.handleSelect =this.handleSelect.bind(this);
 	this.displayDateTime =this.displayDateTime.bind(this);
 	this.handleAdd =this.handleAdd.bind(this);
 	this.handleAdd =this.handleAdd.bind(this);
 }


  handleChangeDesc(e){
  	this.setState({descValue:e.target.value})
  }

  handleChangeAmount(e){
  	this.setState({amountValue:e.target.value})
  }

  handleSelect(e){
  	this.setState({select:e.target.value});
  }

  displayDateTime(){
    let now = new Date();
	 let year = now.getFullYear();
	 let month = now.getMonth() + 1;
	 let date = now.getDate();
	 let hours = now.getHours();
	 let minutes = now.getMinutes();

	 if(hours < 10){
	 hours = '0' + hours;
	}
	 if (minutes < 10) {
	    minutes = '0' + minutes;
	 }

	 let dateMonthYear = date + '.' + month + '.' + year
	 let time = hours + ':' + minutes
	 let fullTime = dateMonthYear + ' ' + time
	 return fullTime
  }

  handleAdd(description, amount){
  	let select = this.state.select;
  	let incomes = this.state.incomes;
  	let expenses = this.state.expenses;

  	if(select === "income"){
  		let incomeData = incomes.push({
  			description,
  			amount,
  			time:this.displayDateTime()
  		});
  		this.setState({incomes});
  	}
  	else if(select === "expense"){
  		let expenseData = expenses.push({
  			description,
  			amount,
  			time:this.displayDateTime()
  		});
  		this.setState({expenses});
  	}
  	else {
  		;;
  	}
  }

 

  render() {
        let incomeData = 0;
        let incomes = this.state.incomes;
            for(let i=0;i<incomes.length;i++){
                incomeData +=Number(incomes[i].amount);
              }

        let expenseData = 0;
        let expenses = this.state.expenses;
            for(let i=0;i<expenses.length;i++){
            expenseData +=Number(expenses[i].amount);
              }
        let balance = incomeData - expenseData;
    return (
      <div className="App">
      	<div className = "header-section">
        	<Header 
        		title={<h3>Account Statement</h3>}
        		selectForm={this.state.select}
        		handleSelect={this.handleSelect}
        		handleAdd={this.handleAdd}
            handleBalance={this.handleBalance}
            />
        </div>
      	<div className = "income-section">
            <Income incomes={this.state.incomes}/>
        </div>
        <div className = "expense-section">
            <Expense expenses={this.state.expenses}/>
        </div>
        <div className = "balance-section">
            <Balance balances= {balance} />
        </div>
      </div>
    );
  }
}

export default App;
