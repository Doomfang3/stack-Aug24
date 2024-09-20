import { useNavigate, useParams } from 'react-router-dom'

function CompanyPage({ companies }) {
  const navigate = useNavigate()

  const { companySlug } = useParams()

  const currentCompany = companies.find(co => co.slug === companySlug)

  const navigateToTech = techSlug => {
    navigate(`/tech/${techSlug}`, {
      state: {
        company: companySlug,
      },
    })
  }

  return (
    <div>
      <h1>Company Profile</h1>
      <img src={currentCompany.logo} style={{ width: '100px' }} />
      <h2>{currentCompany.name}</h2>
      <h4>{currentCompany.website}</h4>
      <p>{currentCompany.description}</p>

      <ul>
        {currentCompany.techStack.map(currentTech => (
          <li
            key={currentTech.slug}
            onClick={() => navigateToTech(currentTech.slug)}
            style={{ cursor: 'pointer' }}
          >
            <img src={currentTech.image} style={{ width: '50px' }} />
            <p>{currentTech.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyPage
