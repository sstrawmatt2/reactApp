import PropTypes from 'prop-types'
import Button from './Button'
import React, { Component }  from 'react';


const Header = ({title}) => {
    return (
        <header class = 'header'>
            <h1 >{title}</h1>
            <Button color='green' text='Add'/>
            <Button color='Blue' text='Hello'/>
            <Button color='purple' text='Hello'/>
            
        </header>
    )
}

//style={{color: 'green', backgroundColor: 'blue'}}

Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header

