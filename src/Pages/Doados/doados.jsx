import Style  from './doados.module.scss'
import ficcao from '../../assets/ficcao.png'



export default function Doados(){
    return(
        <section className={Style.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={Style.boxBooks}>
                <article>
                    <img src={ficcao} alt='Capa livro ficção'/>
                    <h3>O Protagronista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                            
                </section>
        </section>
    )
}