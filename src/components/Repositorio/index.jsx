import { useState, useEffect } from "react"
import styles from './Repolist.module.css';
const repoList = ({nomeUsuario}) => {
    const [repo, setRepo] = useState([]);
    const [EstaCarregando, setEstacarregando] = useState(true);


    useEffect(() => {
        setEstacarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(resposta => resposta.json())
            .then(respostaJson => {
                setTimeout(() => {
                    setEstacarregando(false)
                    setRepo(respostaJson)
                
                }, 3000)
            })
    }, [nomeUsuario])

    return (
        
        <div className="container">
            {EstaCarregando  ? (
                <h1>Esta carregando</h1>
            ) :(
        <ul className={styles.list}>
            {repo.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.listName}>
                    <b>Nome: </b>
                    {repositorio.name}
                    </div>
                    <div className={styles.listItemLanguage}>
                    <b>Linguagem: </b>
                    {repositorio.language}
                    </div>
                    <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar GitHub</a>
                </li>
            ))}
                
        </ul>

            )}
        </div>
    )
}

<style>

</style>

export default repoList;