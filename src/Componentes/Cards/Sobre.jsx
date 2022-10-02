import Capa from './../../assets/capasobre.jpg'
import './sobre.estilo.css'


function Sobre () {
    return (
    <div className='Sobre'>
        <section className='section-contain'>
            <h2> Sobre </h2>
        </section>
        <img src= {Capa} alt='Pratos brancos com comidas diferentes em fundo escuro' />
        <h1 className='sobre-titulo'>Comer é um ato social</h1>
        <p className='sobre-para'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae corporis ipsam eum tempora et accusamus consequuntur asperiores quam necessitatibus veritatis possimus quis doloribus iusto suscipit, perspiciatis dolorum! Perspiciatis, et!</p>
        <p className='sobre-para'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, expedita necessitatibus nobis voluptates rem perspiciatis. Excepturi, odio soluta iusto temporibus inventore quasi nobis quibusdam earum eum aliquam vel. Neque, atque.</p>
        <p className='sobre-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facere aliquid, nesciunt voluptates ab deserunt. Quibusdam tempore officiis veniam qui obcaecati hic exercitationem recusandae culpa? Quod repudiandae molestiae aperiam exercitationem?</p>
        <p className='sobre-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat aliquam dolorum aut ab praesentium! Quas, ad rem odio enim consectetur sapiente, omnis architecto sed autem eaque tenetur, dolore minima.</p>
        <p className='sobre-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat aliquam dolorum aut ab praesentium! Quas, ad rem odio enim consectetur sapiente, omnis architecto sed autem eaque tenetur, dolore minima.</p>
    </div>
    )
}

export default Sobre