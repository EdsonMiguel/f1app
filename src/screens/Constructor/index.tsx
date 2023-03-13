import { Header} from '../../components/Header';
import { Container, Content } from './styles';
import { ConstructorsCard } from '../../components/ConstructorsCard';
export function ConstructorScreen() {
  return(
    <Container>
      <Header title='CONSTRUCTORS'/>
      <Content>
        <ConstructorsCard />
      </Content>
    </Container>
  )
}