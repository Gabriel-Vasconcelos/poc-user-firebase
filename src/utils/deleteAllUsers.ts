import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

// Função para deletar todos os documentos da coleção 'users' no Firestore
const deleteAllUsersInFirestore = async () => {
	try {
		const querySnapshot = await getDocs(collection(db, 'users'));

		querySnapshot.forEach(async (userDoc) => {
			await deleteDoc(doc(db, 'users', userDoc.id));
		});

		console.log('Todos os usuários foram deletados do Firestore com sucesso.');
	} catch (error) {
		console.error('Erro ao deletar usuários do Firestore:', error);
	}
};

export default deleteAllUsersInFirestore;
