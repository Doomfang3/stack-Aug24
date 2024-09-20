import { useLocation, useNavigate, useParams } from 'react-router-dom'

function TechnologyPage({ technologies }) {
  const navigate = useNavigate()
  const location = useLocation()

  const { slug } = useParams()

  const currentTech = technologies.find(tech => tech.slug === slug)

  console.log(currentTech)

  const navigateBack = () => {
    navigate(`/company/${location.state.company}`)
  }

  return (
    <div>
      <h1>Technology Details</h1>
      <img src={currentTech.image} style={{ width: '100px' }} />
      <h2>{currentTech.name}</h2>
      <p>{currentTech.description}</p>
      {location.state?.company && (
        <button type='button' onClick={navigateBack}>
          Back
        </button>
      )}
    </div>
  )
}

export default TechnologyPage
