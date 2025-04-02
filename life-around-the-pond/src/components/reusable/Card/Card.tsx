import "./card.css";

type CardProps = {
  title: string;
  artUrl: string;
  description: string;
};

export default function Card({ title, artUrl, description }: CardProps) {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <div>
        <img src={{ uri: artUrl }} className='artImg' />
        <h2>{description}</h2>
      </div>
    </div>
  );
}
