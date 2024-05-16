import React from "react"
import Header from "../../components/Header/Index"
import Footer from "../../components/Footer"
import styles from "./home.module.css"


function Home(){
    return (
        <div>
        <Header />
       
        <h1 className={styles["title"]}>Home</h1>
        <Footer />
        </div>
      
    )
}

export default Home