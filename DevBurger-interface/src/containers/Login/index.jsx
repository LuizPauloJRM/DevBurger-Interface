import Logo from '../../assets/logo.svg'
import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";

import { Button } from '../../components/Button';

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Bem vindo ao <span>Dev Burguer</span>
                    <br /> Acesse
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

                </Form>
                <p>
                    Não possui conta e deseja criar a sua? <a>Clique aqui e faça seu cadastro</a>
                </p>
            </RightContainer>

        </Container >
    );
}