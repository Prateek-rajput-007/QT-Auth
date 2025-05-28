import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'User', email: 'N/A' };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Dashboard</div>
        <div className="flex items-center space-x-4">
          <div className="text-white">
            <span className="font-semibold">{user.name}</span> ({user.email})
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;