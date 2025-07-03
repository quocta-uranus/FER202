import React from "react";
import "../App.css";

const newsList = [
  {
    id: 1,
    title:
      "Woman bakes expletive-laden pies to 'get a rise' out of her grandmother in annual tradition",
    description:
      "What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition",
    images:
      "https://www.sait.ca/assets/image/programs/credit-programs-600x400/pr-cook-600x400.jpg",
  },
  {
    id: 2,
    title:
      "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans",
    description:
      "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.",
    images:
      "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9733.jpg",
  },
  {
    id: 3,
    title: "Burger King is testing a new breakfast sandwich",
    description:
      "What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition",
    images:
      "https://qtxasset.com/quartz/qcloud1/media/image/hotelmanagement/1515166502/garnish.jpg?VersionId=hS4LkdtaL.f5Xp3Im8bJHJl4UAGSqWf_",
  },
  {
    id: 4,
    title: "Popeyes permanently adds chicken wings to its menu",
    description:
      "What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfs3wmwxrUdt2bxt0_w3dXRFR8-hRR__YSLrm0JswhLyox_0XccVeVeUF6ygkmXDytcY&usqp=CAU",
  },
  {
    id: 6,
    title:
      "Woman bakes expletive-laden pies to 'get a rise' out of her grandmother in annual tradition",
    description:
      "What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition",
    images:
      "https://www.bestchoiceschools.com/wp-content/uploads/2021/09/shutterstock_1758966962-scaled.jpg",
  },
  {
    id: 5,
    title:
      "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans",
    description:
      "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.",
    images:
      "https://www.greycoatlumleys.co.uk/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNnorTnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2e21d8562866fabb3b49a8f903d9bf2ed1d210eb/shutterstock_299406014.jpg",
  },
  {
    id: 8,
    title: "Burger King is testing a new breakfast sandwich",
    description:
      "What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8lDgPSpsSMOm2m3B53Rw_XZ1UYrTgTWtwQ&s",
  },
  {
    id: 7,
    title: "Popeyes permanently adds chicken wings to its menu",
    description:
      "What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0NRNwDkK6YccS9G32zxKT8CbHTfhcdTT4Q&s",
  },
];

const News = () => (
  <div className="p-4">
    <h2 className="text-red-600">News Category</h2>
    <div className="row">
      {newsList.map((news) => (
        <div className="col-md-3 mb-3" key={news.id}>
          <div className="card news-card">
            <div className="img-container">
              <img
                src={news.images}
                className="card-img-top"
                alt={news.title}
              />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-truncate" title={news.title}>
                {news.title}
              </h5>
              <p className="card-text flex-grow-1">{news.description}</p>
              <a href="#" className="card-text text-primary mt-auto">
                Đọc thêm
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default News;
