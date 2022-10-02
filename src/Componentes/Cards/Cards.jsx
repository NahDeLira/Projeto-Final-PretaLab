import Titulo from "./Titulo"
import Ingredientes from "./Ingredientes"
import Preparo from "./Preparo"
import temperos from "./../../assets/temperos.jpg"
import africana from "./../../assets/africana.jpg"
import './cards.estilo.css'




function Cards (props) {
    return(
   <div className="card-content">
    <section className='section-contain1'>
            <h2> Blog </h2>
        </section>
   <div className="card-itens">
        <img src={temperos} alt="feira livre com diversos temperos de diversas cores"/>
        <Titulo className = "Titulo" info = "Tempero vem de África" subinfo = "As rotas do sabor que começam com a exploraçao eu ropéia até os dias de hoje" />
        <Ingredientes ingr = "A culinária dos países africanos é abundante em temperos, especiarias e diversidade de alimentos e de receitas, que não são devidamente reconhecidas no Brasil e pelo mundo, resultado da discriminação e do racismo ainda existente sobre a cultura africana." />
        <Preparo prep = "É possível ter evidências dessa diversidade das cozinhas africanas enraizadas aqui no Brasil por meio de alimentos e temperos trazidos pelas populações africanas escravizadas, como o azeite de dendê, o inhame, a jaca, a melancia, o tamarindo e até em utensílios como o pilão e a colher de pau." />
    </div>
    
    <div className="card-itens">
    <img className = "imagem" src={africana} alt="mulher negra vendendo vegetais vermelhos numa feira"/>
    <Titulo className = "Titulo" info = "Comida e afeto" subinfo = "Tradição ancestral que vai a mesa" />
    <Ingredientes ingr = "Ths simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    <Preparo prep = "Ths simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    </div>
    </div>
    )
}
export default Cards