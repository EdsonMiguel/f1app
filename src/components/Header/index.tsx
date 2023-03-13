import { Container, Title } from './styles';

interface IProps {
  title: string;
}
export function Header({ title }: IProps){
  return(
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}