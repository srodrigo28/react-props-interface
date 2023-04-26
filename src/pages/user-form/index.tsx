import { FormEvent, useState } from "react"

export function UserForm() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [estado, setEstado] = useState('')

    const form = (event: FormEvent) => {
        event.preventDefault();
        const UserForm = {
            nome,
            idade,
            estado,
        }
        alert('cadastrado com sucesso!' + '\n \n' + nome );
        console.log(UserForm)
    }

    return (
            <form>
                <input
                    type="text"
                    value={nome}
                    placeholder="nome"
                    onChange={event => setNome(event.target.value)}
                />
                 <input
                    type="text"
                    value={idade}
                    placeholder="idade"
                    onChange={event => setIdade(event.target.value)}
                />
                 <input
                    type="text"
                    value={estado}
                    placeholder="estado"
                    onChange={event => setEstado(event.target.value)}
                />
                <button onClick={form}>Cadastrar</button>
            </form>
    )
}