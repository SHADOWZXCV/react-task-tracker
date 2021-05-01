const Button = ({ onShowAdd, showing }) => {

    const btnStyleClose = {
            backgroundColor: 'red'
    }
    const btnStyleOpen = {
        backgroundColor: 'green'
}
    return (
        <>
        {!showing ? <button className='btn' onClick={onShowAdd} style={btnStyleOpen}>Add</button> : <button className='btn' onClick={onShowAdd} style={btnStyleClose}>Close</button>}
        </>
    )
}

export default Button
