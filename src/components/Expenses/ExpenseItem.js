import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDeets from './ExpenseDeets';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <ExpenseDeets title={props.title} amount={props.amount}/>
            </Card>
        </li>       
    );
}

export default ExpenseItem;