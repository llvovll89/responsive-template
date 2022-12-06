import React from 'react';
import './Blog.css';
import { Title } from '../../common/Title';
import { blog } from '../../data/dummy';

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="blog-container container">
          <Title title="Blog" />
          <div className="blog-content grid3">
            {blog.map((item) => (
              <div className="blog-box">
                <div className="blog-img">
                  <img src={item.cover} alt=",,," />
                </div>
                <div className="blog-desc">
                  <h3>{item.title}</h3>
                  <label>
                    By {item.author} {item.date}
                  </label>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
