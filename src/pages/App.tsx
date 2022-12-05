import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';

import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState<any[]>([])

  const handleSearchRepo = async() => {
    const { data }:any = await api.get(`repos/${currentRepo}`);

    if(data.id) {

      const isExist = repos.find(repo => repo.id === data.id)
      
      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
      
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id:string) => {
    setRepos(repos.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src="https://r-ladies-sao-paulo.github.io/2020-hacktoberfest/slides/open_source/img/github1.png" width={72} height={72} alt='github logo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
    <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
