import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {groupList} from '../../const';
import {changeGroup} from '../../store/actions';
import {getActiveGroupName} from '../../store/contacts/selectors';

function Tabs(props) {
  const activeGroupName = useSelector(getActiveGroupName);
  const dispatch = useDispatch();

  const handleTabClick = (evt) => {
    evt.preventDefault();
    dispatch(changeGroup(evt.currentTarget.dataset.city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {groupList.map((group) => (
            <li className="locations__item" key={group}>
              <Link
                data-city={group}
                className={`locations__item-link tabs__item ${ group === activeGroupName && 'tabs__item--active' }`}
                to="#"
                onClick={handleTabClick}
              >
                <span>{group}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
