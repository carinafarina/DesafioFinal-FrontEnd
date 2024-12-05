import Style  from './footer.module.scss'
import face from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
 

export default function footer(){
    return(
        <footer>
            <section className={Style.boxSocial}>            
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={face} alt="Imagem logo facebook"/></a>
                    <a href=""> <img src={insta} alt="Imagem logo Intagram"/></a>
                    <a href=""> <img src={youtube} alt="Imagem logo youtube"/></a>
                    <a href=""> <img src={twitter} alt="Imagem logo twitter"/></a>
                    <a href=""> <img src={linkedin} alt="Imagem logo Linkedin"/></a>
                </nav>                
            </section>
            <section className={Style.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>

        </footer>
    )
}