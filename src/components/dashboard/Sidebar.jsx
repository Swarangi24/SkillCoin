import { NavLink } from 'react-router-dom'
import { FiHome, FiGift, FiSearch, FiCreditCard, FiStar, FiUser } from 'react-icons/fi'

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FiHome /> },
    { name: 'Offer Skill', path: '/dashboard/offer-skill', icon: <FiGift /> },
    { name: 'Request Skill', path: '/dashboard/request-skill', icon: <FiSearch /> },
    { name: 'Wallet', path: '/dashboard/wallet', icon: <FiCreditCard /> },
    { name: 'Trust Score', path: '/dashboard/trust-score', icon: <FiStar /> },
    { name: 'Profile', path: '/dashboard/profile', icon: <FiUser /> },
  ]
  
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-4">
        <h2 className="text-xl font-bold text-primary">SkillCoin</h2>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg ${
                    isActive 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
                end={item.path === '/dashboard'}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
