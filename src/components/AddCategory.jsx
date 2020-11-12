import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e ) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {

        if(inputValue.trim().length > 2){
            setCategories(cats=>[ inputValue,...cats])
            setInputValue('')
        }

        e.preventDefault()
        

    }

    return (
        <form onSubmit={handleSubmit}>
                <h1>{inputValue}</h1>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory; 