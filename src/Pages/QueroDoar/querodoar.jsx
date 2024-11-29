
import Style  from './querodoar.module.scss'
import livro from '../../assets/frame.png'



export default function QueroDoar(){
    return(
        <section className={Style.principal}>
            <section className={Style.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action=''>
                    <div>
                        <img src={livro} alt='Imgem de um livro'/>  
                        <h3>Informações do Livro </h3>                            
                    </div>
                    <input type='text'placeholder='Título'/>
                    <input type='text'placeholder='Categoria'/>
                    <input type='text'placeholder='Autor'/>
                    <input type='text'placeholder='Link da Imagem'/>
                    <input className={Style.doar} type='submit' value="Doar"/>
                </form>
            </section>
        </section>
    )
}   