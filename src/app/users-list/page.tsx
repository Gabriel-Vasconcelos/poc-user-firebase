import React from 'react';
import UsersList from '@/components/UsersList';

const UsersPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">Usuários Cadastrados</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default UsersPage;
