import Style  from './doados.module.scss'
import ficcao from '../../assets/ficcao.png'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Doados(){

    const [livros, setLivros] = useState ([])


    const getLivros = async () => {
        const response =  await axios.get( "https://desafio2-api-livros-vainaweb.onrender.com/livros")
        setLivros(response.data)

    }

    useEffect(()=>{
        getLivros()
    },[])

    

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
                   {livros.map((item)=>(
                        <article>
                            <img src={item.imagem_url} alt=''/>
                            <h3>{item.titulo}</h3>
                            <p>{item.categoria}</p>
                            <p>{item.autor}</p>
                        </article>

                   ))}         
                </section>
        </section>
    )
}