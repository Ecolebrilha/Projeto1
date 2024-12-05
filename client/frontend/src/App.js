import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    email: '',
    senha: '',
    cpf: ''
  });

  // Função para carregar os usuários
  const loadUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users'); // Rota atualizada
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  // Função para adicionar ou atualizar um usuário
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      // Atualizar
      await axios.put(`http://localhost:3000/api/users_update`, formData); // Rota atualizada
    } else {
      // Inserir
      await axios.post('http://localhost:3000/api/users', formData); // Rota atualizada
    }
    setFormData({ id: '', nome: '', email: '', senha: '', cpf: '' });
    loadUsers();
  };

  // Função para deletar usuário
  const handleDelete = async (id) => {

    console.log(id)
    await axios.delete(`http://localhost:3000/api/users_delete`, {
       data: { id } // Passando o ID do usuário para ser deletado
    }); // Rota atualizada
    loadUsers();
  };

  // Função para editar usuário
  const handleEdit = (user) => {
    setFormData(user);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="App">
      <h1>Gerenciamento de Usuários</h1>
      
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={formData.senha}
          onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="CPF"
          value={formData.cpf}
          onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
          required
        />
        <button type="submit">{formData.id ? 'Atualizar Usuário' : 'Adicionar Usuário'}</button>
      </form>
      
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.Id} - {user.Nome} - {user.Email} - {user.cpf}
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.Id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
