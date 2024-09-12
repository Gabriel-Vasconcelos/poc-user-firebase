"use client"

import { useState } from "react";
import { auth, db } from "@/firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salva os dados adicionais no Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        cpf,
        email,
        createdAt: new Date(),
      });

      console.log('Usuário cadastrado com sucesso:', user);
      setError(null);
      setSuccess("Usuário cadastrado com sucesso");
    } catch (error) {
      setSuccess(null);
      setError(`Erro ao cadastrar usuário`);
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <div>
        <Label htmlFor="name" className="">Nome</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="cpf" className="">CPF</Label>
        <Input
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="password" className="">Senha</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-500 text-sm">{success}</div>}

      <Button
        type="submit"
        className="w-full"
      >
        Cadastrar
      </Button>
    </form>
  )
}

export default SignUpForm;