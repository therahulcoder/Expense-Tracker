import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function DisplayExpenses(props) {

  const [filterYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = year => {
    setFilteredYear(year);  
    // console.log("Year");
    // console.log(year);
  }

  return (
    <div>

      <Card className="expenses">

        <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler}/>

        {props.expenses_list.map((i) => (
          <ExpenseItem
            key={i.id}
            title={i.title}
            amount={i.amount}
            date={i.date}
          /> 
        )
        )}


      </Card>
    </div>
  );
}

export default DisplayExpenses;
