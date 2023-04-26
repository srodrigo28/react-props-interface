
interface UtestProps{
    nome: string;
    idade: number;
}

export function Utest(props: UtestProps) {
        <>
            <h1> Usuário </h1>
            <p> {props.nome} - {props.idade} </p>
        </>
}

export function Utest2({nome, idade}: UtestProps) {
        <>
            <h1> Usuário </h1>
            <p> {nome} - {idade} </p>
        </>
}

export function Utest3({ nome, idade }: UtestProps) {
    return (
        <>
            <h1> Usuário </h1>
            <p> {nome} - {idade} </p>
        </>
    )
}