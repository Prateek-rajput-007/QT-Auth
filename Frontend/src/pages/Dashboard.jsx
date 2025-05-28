import Navbar from '../components/Navbar';
import ProtectedTable from '../components/ProtectedTable';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center p-6">
        <ProtectedTable />
      </div>
    </div>
  );
};

export default Dashboard;