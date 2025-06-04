import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Logo from '../../assets/logo.svg'
import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import { Button } from '../../components/Button';

export function Login() {
    const schema = yup
        .object({
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                    </InputContainer>
                    <Link>Esqueci minha senha</Link>
                    <Button type='submit'>Entrar</Button>
                    <p>
                        Não possui conta e deseja criar a sua? <a href="#">Clique aqui e faça seu cadastro</a>
                    </p>
                </Form>
            </RightContainer>
        </Container>
    );
}