import Image from "next/image";
import Eyes from "../public/eyes.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6">
      <h1 className="text-3xl font-bold text-center mb-4">FELIZ ANIVERSÁRIOO!!!!</h1>

      <div className="w-full flex flex-col justify-center items-end mb-4">
        <p>Hoje é um dia muito especial para mim, pois é o aniversário de uma pessoa muito especial que esteve comigo desde quando eu era um menininho pequenino que gostava de funk. Nossa amizade foi instantânea e forte, como se estivéssemos destinados a nos encontrar e caminhar juntos. Você, com sua luz e energia, entrou na minha vida e logo também se tornou uma &quot;retardadinha&quot; que gostava de funk junto comigo.</p>
      </div>

      <div className="w-full">
        <iframe  className="w-full" width="560" height="280" src="https://www.youtube.com/embed/HvYgke2fBeg?si=U38LIGqdpJj-IrWZ&amp;controls=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
   

      <div className="w-full flex flex-col mt-4 gap-4">
            <div className="w-full flex flex-col justify-center items-end mb-4">
              <p>Ainda lembro de vários momentos incríveis que passamos juntos, das risadas, das músicas e das nossas idiotices de quando eramos menores. O tempo foi passando e o menininho foi crescendo, e até teve um momento em que se distanciamos um pouco.</p>
              <p>Mas mesmo com o passar dos anos e a distância, nossa amizade nunca acabou. Ela ficou guardada com esse menininho, até nossos caminhos se juntarem novamente e voltar mais forte que antes!</p>
            </div>

            <div className="w-full h-48 flex justify-center items-center rounded-md shadow-lg md:w-48 overflow-hidden">
              <Image className="w-full object-center -rotate-90 scale-75 md:rotate-0" width="100" height="100" src="/Friends.jpeg" alt="Eyes"></Image>
            </div>
      </div>

      <div className="w-full flex flex-col mt-4 gap-4">
            <div className="w-full flex flex-col justify-center items-end mb-4">
              <p>E voltou! Hoje, aquele menininho cresceu, e a amizade que tivemos cresceu junto com ele. E agora, depois de tanto tempo, voltamos a nos falar, e é maravilhoso ver que nossa amizade voltou ainda mais forte. E sim, ainda continuamos sendo dois retardados, e ainda continuo sendo aquele menininho que gosta de funk ksksksks.</p>
            </div>

            <div className="w-full h-48 flex justify-center items-center rounded-md shadow-lg md:w-48 overflow-hidden">           
            <video className="w-full" width="320" height="240" controls preload="none">
              <source src="/Vid.mp4" type="/video.mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
            </div>
            <p>Espero que essa amizade dure longos e longos anos, pois você é uma parte essencial da minha vida.</p>
      </div>

      <div className="w-full flex flex-col mt-6 gap-4">
            <div className="w-full flex justify-center items-center rounded-md shadow-lg md:w-48 overflow-hidden">
              <Image className="w-full object-center md:rotate-0" width="100" height="100" src="/caipiras.jpeg" alt="Eyes"></Image>
            </div>

            <div className="w-full flex flex-col justify-center items-end mb-4">
              <p>Quero te desejar um feliz aniversário. Que Deus te abençoe e que você consiga conquistar tudo o que deseja. Você é uma pessoa incrível e merece tudo de bom na vida. Ultimamente, não estamos nos falando tanto por conta do trabalho e minha mente anda uma bagunça, amiga, kkkk. Mas pode ter certeza de que esse menininho nunca vai deixar essa amizade acabar. Onde quer que eu esteja, estarei sempre torcendo por você.</p>
            </div>
      </div>

      <div className="w-full flex flex-col mt-6 gap-4">
            <div className="w-full flex justify-center items-center rounded-md shadow-lg md:w-48 overflow-hidden">
              <Image className="w-full object-center md:rotate-0" width="100" height="100" src="/pow.jpeg" alt="Eyes"></Image>
            </div>

            <div className="w-full flex flex-col justify-center items-end mb-4">
              <p>Sempre estarei ao seu lado, te apoiando nas suas escolhas, te aconselhando e te até te julgando kkkkkk. Continue sendo essa pessoa maravilhosa que você é. Você ainda vai muito longe na sua vida, e tenho certeza disso. E quando atingir suas metas, ainda estarei lá, torcendo por você e enchendo seu saco :)
                <br/>
                Te amo, amiga. Desejo tudo de bom para você. Feliz aniversário!</p>              
            </div>
      </div>


      <div className="w-full flex mt-6">
        <div className="w-full flex flex-col justify-between gap-2">
            <div className="rounded-md shadow-lg w-full h-72 overflow-hidden">
              <Image className="w-full h-full object-cover" width="100" height="100" src="/Eyes.jpg" alt="Eyes"></Image>
            </div>
            
            <p className="w-96">Se Van Gogh tivesse visto o brilho do seu olhar, ele teria abandonado as estrelas noturnas, pois entenderia que nenhuma luz no céu poderia competir com a intensidade e a magia que seu olhar espalha ao seu redor.</p>
          </div>
      </div>
     
   
      <p className="mt-12">eu demorei um pouco para fazer isso, mas não esqueci seu aniversário n, desculpa mandar só agora, dia foi meio corrido :((( epero que goste, foi simples, mas fiz de coração :)</p>
    </main>
  );
}
