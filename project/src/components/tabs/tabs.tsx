import {useState} from 'react';

type tabsProps =
{
  [key: string]: JSX.Element;
}

export default function Tabs(props: tabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('');

  function setClassName(tab:string): string {
    let classname = 'film-nav__item';

    if (tab === activeTab){
      classname += ' film-nav__item--active';
    }

    return classname;
  }

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {Object.keys(props).map((key) => (
          <li className={setClassName(key)} onClick={() => {
            setActiveTab(key);
          }}>
            <a href="#" className="film-nav__link">{props[key]}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
