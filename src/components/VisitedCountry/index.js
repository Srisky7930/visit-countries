import './index.css'

const VisitedCountry = props => {
  const {each, removeButton} = props
  const {id, imageUrl, name, isVisited} = each

  const onClickRemoveButton = () => {
    removeButton(id)
  }

  return (
    <li className="list">
      {isVisited ? (
        <div className="button-container">
          <img src={imageUrl} alt="thumbnail" className="image" />
          <div className="card">
            <p className="name"> {name} </p>
            <button
              className="remove-button"
              type="button"
              onClick={onClickRemoveButton}
            >
              Remove
            </button>
          </div>
        </div>
      ) : null}
    </li>
  )
}

export default VisitedCountry
