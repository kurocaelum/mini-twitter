import { FaRegEnvelope, FaRegEye, FaRegUser } from "react-icons/fa";
import ButtonSubmit from "../components/ButtonSubmit";
import FormInput from "../components/FormInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
    nome: string;
    email: string;
    password: string;
};

export default function SignupTabContent() {
    // TODO: validação de campos; mensagens de erro
    const { register, handleSubmit } = useForm<Inputs>();
    const navigate = useNavigate();

    // TODO: Substituir console.log por lógica de cadastro real, e navegar pra home apenas após cadastro bem-sucedido
    const onSubmit: SubmitHandler<Inputs> = data => {
		console.log(data);
        navigate("/");
	};
    
    return (
        <div>
            <p className="font-bold text-blue dark:text-white2 text-[30px]">
                Olá, vamos começar!
            </p>
            <p className="text-[16px] text-gray dark:text-blue-steel mb-8">
                Por favor, insira os dados solicitados para fazer cadastro.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label="Nome"
                    id="nome"
                    inputType="text"
                    placeholder="Insira o seu nome"
                    icon={<FaRegUser className="w-6 h-6" />}
                    register={{...register("nome", { required: "O campo Nome é obrigatório" })}}
                />
                <FormInput
                    label="E-mail"
                    id="email"
                    inputType="email"
                    placeholder="Insira o seu e-mail"
                    icon={<FaRegEnvelope className="w-6 h-6" />}
                    register={{...register("email", { required: "O campo E-mail é obrigatório", pattern: { value: /^\S+@\S+\.\S+$/, message: "E-mail inválido" } })}}
                />
                <FormInput
                    label="Senha"
                    id="password"
                    inputType="password"
                    placeholder="Insira a sua senha"
                    icon={<FaRegEye className="w-6 h-6" />}
                    register={{...register("password", { required: "O campo Senha é obrigatório", minLength: { value: 6, message: "A senha deve ter pelo menos 6 caracteres" } })}}
                />
                    
                <ButtonSubmit label="Continuar"/>
            </form>

            <p className="mx-auto w-[320px] mt-10 text-[12px] text-navy dark:text-blue-steel2 text-center">
                Ao clicar em continuar, você concorda com nossos{" "}
                <span className="underline cursor-pointer">
                    Termos de Serviço
                </span>{" "}
                e{" "}
                <span className="underline cursor-pointer">
                    Política de Privacidade
                </span>
                .
            </p>
        </div>
    );
}
