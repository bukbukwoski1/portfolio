import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta
      corporis cum, fugiat quibusdam repudiandae reprehenderit doloribus omnis
      dolor qui modi, odio aspernatur ut natus in voluptates nulla velit nihil!
    </Paragrafo>
    <GithubSecao>
      <img src="https://placehold.co/600x400" alt="" />
      <img src="https://placehold.co/600x400" alt="" />
    </GithubSecao>
  </section>
)

export default Sobre
