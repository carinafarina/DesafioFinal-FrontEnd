
import Style  from './querodoar.module.scss'
import livro from '../../assets/Frame.png'
import axios from 'axios'
import {useState} from 'react'


export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async()=>{
        const urlApi = "https://desafio2-api-livros-vainaweb.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }
        const envioApi = await axios.post(urlApi, dadosEnviar)

        alert('Livro Enviado!')

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
        console.log(e.target.value)
    }
    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
        console.log(e.target.value)
    }
    const capturaAutor = (e) =>{
        setAutor(e.target.value)
        console.log(e.target.value)
    }
    const capturaImagem = (e) =>{
        setImagem_url(e.target.value)
        console.log(e.target.value)
    }

    return(
        <section className={Style.principal}>
            <section className={Style.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div>
                        <img src={livro} alt='Imgem de um livro'/>  
                        <h3>Informações do Livro </h3>                            
                    </div>
                    <input type='text'placeholder='Título'onChange={capturaTitulo} value={titulo}/>
                    <input type='text'placeholder='Categoria'onChange={capturaCategoria} value={categoria}/>
                    <input type='text'placeholder='Autor'onChange={capturaAutor} value={autor}/>
                    <input type='text'placeholder='Link da Imagem'onChange={capturaImagem} value={imagem_url}/>
                    <input className={Style.doar} type='submit' value="Doar" onClick={enviarDados}/>
                </form>
            </section>
        </section>
    )
}   