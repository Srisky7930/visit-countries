import './index.css'

const CountryList = props => {
  const {each, visitCountry} = props
  const {id, name, isVisited} = each

  const onClickVisit = () => {
    visitCountry(id)
  }

  return (
    <li className="list-items">
      <p className="country-name"> {name} </p>
      {isVisited ? (
        <p className="visited-button">Visited</p>
      ) : (
        <button className="visit-button" type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryList
