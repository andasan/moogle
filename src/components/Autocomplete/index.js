import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Input'
import './styles.scss'

const Autocomplete = ({ articles, searchValue, onSearchChange }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(articles.length > 0){
      setFilteredSuggestions(articles)
      setShowSuggestions(true)
    }
  }, [articles])

  const onClickHandler = (label) => {
    //navigate to this link....
    // console.log(label)
    navigate(`/search?query=${label}`)
    setFilteredSuggestions([])
    setShowSuggestions(false)
  }

  const SuggestionsListComponent = () => (
    <div className='input-suggestions'>
      {filteredSuggestions.map((suggestion) => (
        <div className='input-suggestions-item'
          key={suggestion.id}
          onClick={() => onClickHandler(suggestion.label)}
        >
          {suggestion.label}
        </div>
      ))}
    </div>
  )

  return (
    <div className='autocomplete-container'>
      <Input onChange={onSearchChange} value={searchValue} type="text" />
      {showSuggestions && searchValue && <SuggestionsListComponent />}
    </div>
  )
}

export default Autocomplete