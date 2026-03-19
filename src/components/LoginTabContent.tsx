import ButtonSubmit from "./ButtonSubmit";
import FormInput from "./FormInput";

export default function LoginTabContent() {
    return (
        <div>
            <p className="font-bold text-blue text-[30px]">Olá, de novo!</p>
            <p className="text-[16px] text-gray mb-8">
                Por favor, insira os seus dados pra fazer login.
            </p>

            <form>
                <FormInput
                    label="E-mail"
                    inputType="email"
                    placeholder="Insira o seu e-mail"
                ></FormInput>
                <FormInput
                    label="Senha"
                    inputType="password"
                    placeholder="Insira a sua senha"
                ></FormInput>

                <ButtonSubmit label="Continuar"></ButtonSubmit>
            </form>

            <p className="mx-auto w-[320px] mt-10 text-[12px] text-navy text-center">
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
