import "./card.css";

type CardProps = {
  title: string;
  artUrl: string;
  description: string;
};

export default function Card({ title, artUrl, description }: CardProps) {
  return (
    <div id='card'>
      <h2 id='title'>{title}</h2>
      <div id='imgbox'>
        <img src={artUrl} id='artImg' />
        <h2>{description}</h2>
      </div>
    </div>
  );
}
