import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import { api } from '../../services/api';
import Logo from '../../assets/logo.svg'
import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import { Button } from '../../components/Button';

export function Register() {
    const schema = yup.object({
        name: yup.string().required('Nome é obrigatório'),
        email: yup.string().email('Digite um email valido').required('O email é obrigatório'),
        password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite a senha'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
            .required('Confirme sua senha'),
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await toast.promise(
                api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando dados...',
                    success: 'Cadastro efetuado com sucesso!',
                    error: {
                        render({ data }) {
                            if (data?.response?.data?.message) {
                                return data.response.data.message;
                            }
                            return 'Tente novamente, algo está errado!';
                        }
                    },
                }
            );
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Crie sua conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Link>Esqueci minha senha</Link>
                    <Button type='submit'>Criar a sua conta</Button>
                    <p>
                        Já possui conta? <a href="#">Clique aqui para entrar</a>
                    </p>
                </Form>
            </RightContainer>
            <ToastContainer />
        </Container>
    );
}