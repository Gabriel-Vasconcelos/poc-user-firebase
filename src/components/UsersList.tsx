"use client"

import { db } from '@/firebase/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Skeleton } from './ui/skeleton';


interface User {
  id: string;
  name: string;
  cpf: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersList: User[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as User));
        setUsers(usersList);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <Table>
          <TableCaption>
            Lista de Usuários
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id} className="">
                <TableCell className="">
                  {user.name}
                </TableCell>
                <TableCell className="">
                  {user.cpf}
                </TableCell>
                <TableCell className="">
                  {user.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {loading && (
        <div className='grid grid-cols-3 gap-5'>
          <Skeleton className='w-full h-7' />
          <Skeleton className='w-full h-7' />
          <Skeleton className='w-full h-7' />
          <Skeleton className='w-full h-7' />
          <Skeleton className='w-full h-7' />
          <Skeleton className='w-full h-7' />
        </div>
      )}
    </div>
  );
};

export default UserList;
