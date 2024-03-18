import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput = '',
  }

  UpdateSearchInput = value => {
    this.setSate({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setSate({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {SuggestionsList} = this.props
    const searchResults = SuggestionsList.filter(eachSuggestion =>
      eachSuggestion.Suggestion.toLowerCase().includes(
        searchInput.toLocaleLowerCase(),
      ),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                alt="search-icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  SuggestionDetails={eachSuggestion}
                  UpdateSearchInput={this.UpdateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
