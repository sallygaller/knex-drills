//implementation can use the Knex instance to query the blogful_articles table

const ArticlesService = {
  getAllArticles(knex) {
    return knex.select("*").from("blogful_articles");
  },
  //insert method also supports selecting the newly inserted item
  //by using the returning() method where we can specify which columns we want to select
  insertArticle(knex, newArticle) {
    return (
      knex
        .insert(newArticle)
        .into("blogful_articles")
        .returning("*")
        //pull the object out of the array (want to return the object only)
        .then((rows) => {
          return rows[0];
        })
    );
  },
  getById(knex, id) {
    return knex.from("blogful_articles").select("*").where("id", id).first();
  },
  deleteArticle(knex, id) {
    return knex("blogful_articles").where({ id }).delete();
  },
  updateArticle(knex, id, newArticleFields) {
    return knex("blogful_articles").where({ id }).update(newArticleFields);
  },
};

module.exports = ArticlesService;
