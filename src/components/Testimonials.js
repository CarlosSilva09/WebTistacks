import React from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'João Silva',
    role: 'Fundador na Silva Tech',
    comment: 'A WebTIstacks transformou nosso site e aumentou significativamente nosso alcance online.',
    image: '/images/JoaoSilva.jpeg',
  },
  {
    name: 'Maria Santos',
    role: 'CEO na Confeitaria Delícias da Maria',
    comment: 'Profissionais dedicados e atendimento excelente. Recomendo para qualquer microempresa.',
    image: '/images/MariaSantos.jpeg',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Gerente de TI na Ponto Certo Contabilidade',
    comment: 'Soluções inovadoras e suporte rápido. Estamos muito satisfeitos com os resultados.',
    image: '/images/PedroOliveira.jpeg',
  },
  {
    name: 'Ana Costa',
    role: 'CEO da Loja Ana Fashion',
    comment: 'Equipe super atenciosa e criativa. Amei o novo visual da minha loja online!',
    image: '/images/AnaCosta.jpeg',
  },
  {
    name: 'Carlos Nunes',
    role: 'Diretor na Nunes Soluções Imobiliárias',
    comment: 'Recomendo fortemente! Atendimento rápido e soluções eficazes.',
    image: '/images/CarlosNunes.jpeg',
  },
  {
    name: 'Fernanda Lima',
    role: 'Consultora de Imagem e Estilo',
    comment: 'Ganhei muitos clientes novos depois da reformulação do meu site!',
    image: '/images/FernandaLima.jpeg',
  },
  {
    name: 'Bruno Marques',
    role: 'Designer na BM Criativa',
    comment: 'Trabalho impecável. Design moderno e otimizado.',
    image: '/images/BrunoMarques.jpeg',
  },
  {
    name: 'Larissa Almeida',
    role: 'Artesã na Alma da Terra',
    comment: 'Me explicaram tudo com paciência. Atendimento humano e eficiente!',
    image: '/images/LarissaAlmeida.jpeg',
  },
  {
    name: 'Luiz Alberto',
    role: 'Sócio na AgroAlberto Produtos Naturais',
    comment: 'Nossa presença digital melhorou 200%! Obrigado pela dedicação.',
    image: '/images/LuizAlberto.jpeg',
  },
  {
    name: 'Camila Rocha',
    role: 'Coach na Equilíbrio & Sucesso',
    comment: 'Conseguiram traduzir minha ideia em um site perfeito.',
    image: '/images/CamilaRocha.jpeg',
  },
];

const Testimonials = () => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,          // Habilita o autoplay
  autoplaySpeed: 4000,     // Tempo em milissegundos entre os slides (3 segundos)
  pauseOnHover: true,      // Pausa ao passar o mouse
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

  return (
  <section className="testimonials-section">
    <h2>Depoimentos</h2>
    <Slider {...settings}>
      {testimonials.map(({ name, role, comment, image }) => (
        <div key={name} className="testimonial-card">
          <img src={image} alt={`Foto de ${name}`} className="testimonial-image" />
          <p className="testimonial-comment">"{comment}"</p>
          <h5 className="testimonial-name">- {name}</h5>
          <p className="testimonial-role">{role}</p>
        </div>
      ))}
    </Slider>
  </section>
);
};

export default Testimonials;
