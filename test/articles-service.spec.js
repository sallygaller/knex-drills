require("dotenv").config();
const { expect } = require("chai");
const ArticlesService = require("../src/articles-service");
const knex = require("knex");

//Check that tests are running:
// describe("Articles service object", function () {
//   it(`should run all tests`, () => {
//     expect(true).to.eql(false);
//   });
// });

// describe("Articles service object", function () {
//   let db;
//   let testArticles = [
//     {
//       id: 1,
//       date_published: new Date("2029-01-22T16:28:32.615Z"),
//       title: "First test post!",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
//     },
//     {
//       id: 2,
//       date_published: new Date("2100-05-22T16:28:32.615Z"),
//       title: "Second test post!",
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.",
//     },
//     {
//       id: 3,
//       date_published: new Date("1919-12-22T16:28:32.615Z"),
//       title: "Third test post!",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.",
//     },
//   ];

//   before(() => {
//     db = knex({
//       client: "pg",
//       connection: process.env.TEST_DB_URL,
//     });
//   });

//   //clear the table with the truncate method
//   before(() => db("blogful_articles").truncate());

//   //avoid test leaks (tests affecting other tests) by using truncate to clean-up after each test
//   afterEach(() => db("blogful_articles").truncate());

//   //disconnect from the database at the end of tall tests
//   //knexInstance.destroy can be shortened to destroy
//   after(() => db.destroy());

//   //insert the test articles into the test database before the tests
//   //knexInstance.insert() returns a promise, so we can utilize the features of mocha
//   //by returning that promise from the before callback function.
//   //Mocha will wait for the SQL insert to complete before executing the tests

//   //context function synonym for describe - helps with semantics and reading the code

//   context(`Given 'blogful_articles' has data`, () => {
//     //insert data before each test
//     beforeEach(() => {
//       return db.into("blogful_articles").insert(testArticles);
//     });
//     it(`getAllArticles() resolves all articles from 'blogful_articles' table`, () => {
//       return ArticlesService.getAllArticles(db).then((actual) => {
//         expect(actual).to.eql(testArticles);
//       });
//     });
//     it(`getById() resolves an article by id from 'blogful_articles' table`, () => {
//       const thirdId = 3;
//       const thirdTestArticle = testArticles[thirdId - 1];
//       return ArticlesService.getById(db, thirdId).then((actual) => {
//         expect(actual).to.eql({
//           id: thirdId,
//           title: thirdTestArticle.title,
//           content: thirdTestArticle.content,
//           date_published: thirdTestArticle.date_published,
//         });
//       });
//     });
//     it(`deleteArticle() removes an article by id from 'blogful_articles' table`, () => {
//       const articleId = 3;
//       return ArticlesService.deleteArticle(db, articleId)
//         .then(() => ArticlesService.getAllArticles(db))
//         .then((allArticles) => {
//           //copy the test articles array without the 'deleted article
//           const expected = testArticles.filter(
//             (article) => article.id !== articleId
//           );
//           expect(allArticles).to.eql(expected);
//         });
//     });
//     it(`updateArticle() updates an article from the 'blogful_articles' table`, () => {
//       const idOfArticleToUpdate = 3;
//       const newArticleData = {
//         title: "updated title",
//         content: "updated content",
//         date_published: new Date(),
//       };
//       return ArticlesService.updateArticle(
//         db,
//         idOfArticleToUpdate,
//         newArticleData
//       )
//         .then(() => ArticlesService.getById(db, idOfArticleToUpdate))
//         .then((article) => {
//           expect(article).to.eql({
//             id: idOfArticleToUpdate,
//             ...newArticleData,
//           });
//         });
//     });
//   });

//   context(`Given 'blogful_articles' has no data`, () => {
//     it(`getAllArticles() resolves an empty array`, () => {
//       return ArticlesService.getAllArticles(db).then((actual) => {
//         expect(actual).to.eql([]);
//       });
//     });
//     //test that it creates a new article with a date we specify
//     it(`insertArticle() inserts a new article and resolves the new article with an 'id'`, () => {
//       //make a new object that represents the new article we'll insert
//       const newArticle = {
//         title: "Test new title",
//         content: "Test new content",
//         date_published: new Date("2020-01-01T00:00:00.000Z"),
//       };
//       //attempt to insert the new article, injecting the Knex instance and passing
//       //the new article object
//       return ArticlesService.insertArticle(db, newArticle).then((actual) => {
//         expect(actual).to.eql({
//           //expect the id to be 1 as the table is empty
//           id: 1,
//           title: newArticle.title,
//           content: newArticle.content,
//           date_published: newArticle.date_published,
//         });
//       });
//     });
//   });
// });
