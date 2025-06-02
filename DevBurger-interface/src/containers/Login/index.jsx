import Logo from '../../assets/logo.svg'
import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";


export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Bem vindo ao <span>Dev Burguer</span> Acesse
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Link>Esqueci minha senha</Link>
                    <Button>Entrar</Button>
                    <Link>Não possui conta e deseja criar a sua? Clique aqui e faça seu cadastro</Link>
                </Form>
            </RightContainer>
        </Container>
    );
}