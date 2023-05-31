import SmallFilmCard from '../small-film-card/small-film-card';

function addSmallFilmCard(count:number): JSX.Element[]
{
  const result: JSX.Element[] = [];
  for(let i = 0; i < count; i++)
  {
    result.push(<SmallFilmCard />);

  }
  return result;
}

export default function FilmsList(): JSX.Element {
  return (
    <div className="catalog__films-list">
      {addSmallFilmCard(20)}
    </div>
  );
}
