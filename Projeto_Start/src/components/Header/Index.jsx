import styles from './Header.module.css'


function Header() {
    return (
        
        <header className = {styles.header}>

            <span> Mesa Solidária </span>
            <nav> 
                <a href= "">Home</a>
                <a href= "">Seja Parceiro</a>
                <a href= "">Contatos</a>
            </nav>


        </header>

    )
}

export default Header

