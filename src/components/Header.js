import Button from './Button'
const Header = ({ onShowAdd, showing}) => {
    return (
        <div className='header'>
            <h3>Task Tracker</h3>
            <Button onShowAdd={onShowAdd} showing={showing}/>
        </div>
    )
}

export default Header
