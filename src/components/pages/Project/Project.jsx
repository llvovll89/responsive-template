import React, { useEffect } from 'react';
import './Project.css';
import { useState } from 'react';
import { projects } from '../../data/dummy';
import { Visibility } from '@mui/icons-material';
import { Title } from '../../common/Title';
import { v4 as uuid } from 'uuid';

const allCategory = ['all', ...new Set(projects.map((item) => item.category))];

export const Project = () => {
  const [listItem, setListItem] = useState(projects);
  const [category, setCategory] = useState(allCategory);

  console.log(setCategory);

  const filterItems = (category) => {
    const newItem = projects.filter((item) => item.category === category);
    setListItem(newItem);

    if (category === 'all') {
      setListItem(projects);
    }
  };

  return (
    <>
      <article className="project">
        <div className="project-container container">
          <Title title="project" />
          <div className="project-category">
            {category.map((category) => (
              <button
                key={uuid()}
                className="project-btn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-content grid3">
            {listItem.map((items) => (
              <div className="project-box" key={uuid()} data-aos="flip-up">
                <div className="project-img">
                  <img src={items.cover} alt="img.." />
                </div>
                <div className="overlay">
                  <h3>{items.title}</h3>
                  <span>{items.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
