import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';



import { api } from '../../services/api';
import Logo from '../../assets/logo.svg'
import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import { Button } from '../../components/Button';

export function Login() {
    const schema = yup
        .object({
            email: yup.string().email('Digite um email valido').required('O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos  6 caracteres').required('Digite a senha'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    console.log(errors)



    const onSubmit = async (data) => {
        const response = await toast.promise(api.post('/sessions', {
            email: data.email,
            password: data.password,
        }),
            {
                pending: 'Verificando dados',
                success: 'Seja bem vindo',
                error: 'Email ou Senha incorretos',
            },
        );




        console.log(response);
    };



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
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                        {/*Elvis operator*/}
                    </InputContainer>
                    <Link>Esqueci minha senha</Link>
                    <Button type='submit'>Entrar</Button>
                    <p>
                        Não possui conta e deseja criar a sua? <a href="#">Clique aqui e faça seu cadastro</a>
                    </p>
                </Form>
            </RightContainer>
            <ToastContainer />
        </Container>
    );
}