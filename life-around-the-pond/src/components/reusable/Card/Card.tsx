import "./card.css";

type CardProps = {
  title: string;
  artUrl: string;
  description: string;
};

export default function Card({ title, artUrl, description }: CardProps) {
  return (
    <div id='card'>
      <div className='containerBox'>
        <h2 className='title'>{title}</h2>
        <div id='imgbox'>
          <img src={artUrl} id='artImg' />
          <p className='title'>{description}</p>
        </div>
      </div>
    </div>
  );
}
