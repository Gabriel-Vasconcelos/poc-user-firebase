"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";

import deleteAllUsersInFirestore from "@/utils/deleteAllUsers";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Gerencia o estado do modal
  const { toast } = useToast();

  const handleDeleteAllUsers = async () => {
    try {
      await deleteAllUsersInFirestore();
      toast({
        title: "Sucesso",
        description: "Todos os usuários foram deletados do Firestore.",
        variant: "default"
      });
    } catch (error) {
      console.error("Erro ao deletar usuários:", error);
      toast({
        title: "Erro",
        description: "Erro ao deletar usuários.",
        variant: "destructive", // Estilo de toast de erro
      });
    }
    setIsDialogOpen(false); // Fecha o modal após a ação
    setTimeout(() => location.reload(), 2000);
  };

  return (
    <header className="flex items-center justify-between p-5">
      <h1 className="font-bold">POC User Firebase</h1>
      <div className="space-x-2">
        <Link href="/">
          <Button>Create User</Button>
        </Link>
        <Link href="/users-list">
          <Button variant={"outline"}>Users List</Button>
        </Link>
        <Button variant={"destructive"} onClick={() => setIsDialogOpen(true)}>
          Delete All Users
        </Button>
      </div>

      {/* Modal de confirmação */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tem certeza que deseja deletar todos os usuários?</DialogTitle>
          </DialogHeader>
          <p>Esta ação não pode ser desfeita. Isso irá deletar todos os dados de usuários do Firestore.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDeleteAllUsers}>
              Deletar Todos
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
