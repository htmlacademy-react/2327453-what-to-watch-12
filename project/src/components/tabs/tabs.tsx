import {useEffect, useState} from 'react';

type dictionary =
{
  [key: string]: JSX.Element;
}
type tabsProps =
{
  items: dictionary;
}

export default function Tabs(props: tabsProps): JSX.Element {
  const {items} = props;
  const [activeTab, setActiveTab] = useState<string>('');

  function setClassName(tab:string): string {
    let classname = 'film-nav__item';

    if (tab === activeTab){
      classname += ' film-nav__item--active';
    }

    return classname;
  }

  const firstKey = Object.keys(items)[0];
  useEffect(() => setActiveTab(firstKey),[firstKey]);
  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.keys(items).map((key) => (
            <li className={setClassName(key)} key={key} onClick={() => {
              setActiveTab(key);
            }}
            >
              <a className="film-nav__link">{key}</a>
            </li>
          ))}
        </ul>
      </nav>
      {items[activeTab]}
    </>
  );
}
