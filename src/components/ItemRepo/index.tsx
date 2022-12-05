import { 
  ItemContainer,
  Column,
  LanguageLogo,
} from './styles';

interface IItemRepo {
  repo: any,
  handleRemoveRepo: (id:string) => void,
}

const ItemRepo = ({repo, handleRemoveRepo}:IItemRepo) => {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <LanguageLogo src={`https://cdn.worldvectorlogo.com/logos/${repo.language}.svg`.toLowerCase()} width={64} height={64}/>
        <Column>
          <a href={repo.html_url} rel="noreferrer" target="_blanck">Ver repositório</a>
          <a href="#" rel="noreferrer" className='remove' onClick={handleRemove}>Remover</a>
        </Column>
        
        <hr className='division' />
    </ItemContainer>
  );
}

export default ItemRepo;