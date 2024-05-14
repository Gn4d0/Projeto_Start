import styles from './Footer.module.css'



function Footer(){
    return(
        
        <footer className = {styles.footer}>
            <nav> 
                <a href= "">Home</a>
                <a href= "">Seja Parceiro</a>
                <a href= "">Contatos</a>
                <span> 2025 todos os direitos reservados </span>
            </nav>


        </footer>

    )

}

export default Footer