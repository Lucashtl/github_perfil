import styles from './Perfil.module.css';

const perfil = ({nomeUsuario}) =>{
    

    return(
        <header className={styles.header}>
        <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
        <h1 className='nome'>{nomeUsuario}</h1>
        </header>

    )

}

export default perfil;