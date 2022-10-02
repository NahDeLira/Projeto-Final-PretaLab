import Titulo from "./../../Componentes/Cards/Titulo"
import Ingredientes from "./../../Componentes/Cards/Ingredientes"
import Preparo from "./../../Componentes/Cards/Preparo"
import curry from "./../../assets/Curry.jpg"
import feijoada from "./../../assets/feijoada.jpg"
import './../../Componentes/Cards/cards.estilo.css'



 function Receitas (props) {
            return (
       <div className="card-content">
    <section className='section-contain1'>
            <h3> Receitas </h3>
        </section>
   <div className="card-itens">
        <img src={curry} alt="comida de grao de bico e temperos"/>
        <Titulo className = "Titulo" info = "Ensopado" />
        <Ingredientes className="ingredientes" ingr = "INGREDIENTES: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        <Preparo prep = "PREPARO: Ths simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    </div>
    
    <div className="card-itens">
    <img className = "imagem" src={feijoada} alt="prato amarelo com feijao preto arroz e couve"/>
    <Titulo className = "Titulo" info = "Feijoada de Dona Fatinha" />
    <Ingredientes ingr = "INGREDIENTES:It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using" />
    <Preparo prep = " PREPARO: Ths simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    </div>
    </div>
    )
}
export default Receitas
        