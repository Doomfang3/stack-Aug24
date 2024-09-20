import { Link } from 'react-router-dom'

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {companies.map(currentCompany => (
          <li key={currentCompany.id}>
            <Link to={`/company/${currentCompany.slug}`}>
              <img style={{ width: '50px' }} src={currentCompany.logo} />
              {currentCompany.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
