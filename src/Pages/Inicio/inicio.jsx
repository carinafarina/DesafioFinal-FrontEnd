import Style  from './inicio.module.scss'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'


export default function Inicio(){   
    return(
        <main>
            <section className={Style.banner}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={Style.devoDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
            
            <section className={Style.boxCard}>
            <article>
                <img src={card1} alt='icon de Pessoas trabalhando'/>
                <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>      
            </article>

           <article>
                <img src={card2} alt='icon lendo livro'/>
                <p>Estimula o hábito da leitura e o aprendizado contínuo.</p> 
            </article>        
           
            <article>
                <img src={card3} alt='icon de pessoas trasformadoras'/>
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </article>

            <article>
                <img src={card4} alt='icon balança de 2 medias'/>
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </article>   
            </section>
            </section>       
        </main>
    )
}