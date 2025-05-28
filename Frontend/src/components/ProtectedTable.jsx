import { useState } from 'react';
import Pagination from './Pagination';

const ProtectedTable = () => {
  const users = [
    { id: 1, name: 'John Doe', dob: '1990-05-15', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', dob: '1985-08-22', email: 'jane@example.com' },
    { id: 3, name: 'Alice Brown', dob: '1992-03-10', email: 'alice@example.com' },
    { id: 4, name: 'Bob Johnson', dob: '1988-12-01', email: 'bob@example.com' },
    { id: 5, name: 'Carol White', dob: '1995-07-19', email: 'carol@example.com' },
    { id: 6, name: 'David Lee', dob: '1983-11-23', email: 'david@example.com' },
    { id: 7, name: 'Eva Green', dob: '1991-02-14', email: 'eva@example.com' },
    { id: 8, name: 'Frank Black', dob: '1987-09-30', email: 'frank@example.com' },
    { id: 9, name: 'Grace Kim', dob: '1993-04-25', email: 'grace@example.com' },
    { id: 10, name: 'Henry Adams', dob: '1989-06-17', email: 'henry@example.com' },
    { id: 11, name: 'Ivy Turner', dob: '1994-10-05', email: 'ivy@example.com' },
    { id: 12, name: 'Jack Wilson', dob: '1986-03-22', email: 'jack@example.com' },
    { id: 13, name: 'Liam Carter', dob: '1990-01-12', email: 'liam@example.com' },
    { id: 14, name: 'Mia Evans', dob: '1992-09-08', email: 'mia@example.com' },
    { id: 15, name: 'Noah Scott', dob: '1987-04-03', email: 'noah@example.com' },
    { id: 16, name: 'Olivia King', dob: '1996-12-21', email: 'olivia@example.com' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const totalPages = Math.ceil(users.length / recordsPerPage);

  const paginatedUsers = users.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="max-w-screen-xl mx-auto mt-10 p-4 sm:p-8 bg-white rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">User Data</h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] sm:min-w-[900px] h-auto sm:h-[600px] border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="border p-2 sm:p-4 text-base sm:text-lg">ID</th>
              <th className="border p-2 sm:p-4 text-base sm:text-lg">Name</th>
              <th className="border p-2 sm:p-4 text-base sm:text-lg">Date of Birth</th>
              <th className="border p-2 sm:p-4 text-base sm:text-lg">Email</th>
              <th className="border p-2 sm:p-4 text-base sm:text-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, idx) => (
              <tr
                key={user.id}
                className={`${
                  idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-50 transition-colors`}
                style={{ height: '64px' }}
              >
                <td className="border p-2 sm:p-4">{user.id}</td>
                <td className="border p-2 sm:p-4 flex items-center gap-2 sm:gap-4">
                  <img
                    src={`https://i.pravatar.cc/40?img=${user.id}`}
                    alt={user.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border"
                  />
                  <span className="text-sm sm:text-base">{user.name}</span>
                </td>
                <td className="border p-2 sm:p-4 text-sm sm:text-base">{user.dob}</td>
                <td className="border p-2 sm:p-4 text-sm sm:text-base">{user.email}</td>
                <td className="border p-2 sm:p-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${user.id % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {user.id % 2 === 0 ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProtectedTable;