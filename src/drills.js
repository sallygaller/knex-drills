require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL,
});

// 1. Get all items that contain text
function searchByItemName(searchTerm) {
  knexInstance
    .select("id", "name", "price", "checked", "category")
    .from("shopping_list")
    .where("name", "ILIKE", `%${searchTerm}%`)
    .then((result) => {
      console.log(result);
    });
}
// searchByItemName("ham");

// 2. Get all items paginated
function paginateItems(page) {
  const itemsPerPage = 6;
  const offset = itemsPerPage * (page = 1);
  knexInstance
    .select("id", "name", "price", "checked", "category")
    .from("shopping_list")
    .limit(itemsPerPage)
    .offset(offset)
    .then((result) => {
      console.log(result);
    });
}

paginateItems(2);

// 3. Get all items added after date
function itemsAdded(daysAgo) {
  knexInstance
    .select("id", "name", "price", "checked", "date_added", "category")
    .from("shopping_list")
    .where(
      "date_added",
      ">",
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .then((result) => {
      console.log(result);
    });
}

itemsAdded(3);

// 4. Get the total cost for each category
function totalCostPerCategory() {
  knexInstance
    .select("category")
    .sum("price AS total")
    .from("shopping_list")
    .groupBy("category")
    .then((result) => {
      console.log(result);
    });
}

totalCostPerCategory();
