//test the CRUD methods
const { expect } = require("chai");
const ShoppingListService = require("../src/shopping-list-service");
const knex = require("knex");

describe(`Shopping list service object`, function () {
  let db;
  let testItems = [
    {
      id: 1,
      name: "Oven chips",
      price: "3.99",
      date_added: new Date("2029-01-22T16:28:32.615Z"),
      checked: false,
      category: "Main",
    },
    {
      id: 2,
      name: "Crisps",
      price: "1.50",
      date_added: new Date("2100-05-22T16:28:32.615Z"),
      checked: true,
      category: "Snack",
    },
    {
      id: 3,
      name: "Cereal",
      price: "2.99",
      date_added: new Date("1919-12-22T16:28:32.615Z"),
      checked: false,
      category: "Breakfast",
    },
  ];
  before(() => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL,
    });
  });
  before(() => db("shopping_list").truncate());

  afterEach(() => db("shopping_list").truncate());

  after(() => db.destroy());

  context(`Given 'shopping_list' table has data`, () => {
    beforeEach(() => {
      return db.into("shopping_list").insert(testItems);
    });
    it(`getAllItems() resolves all items from 'shopping_list' table`, () => {
      //test that ShoppingListService.getAllItems gets data from table
      return ShoppingListService.getAllItems(db).then((actual) => {
        expect(actual).to.eql(testItems);
      });
    });
    it(`getById() resolves an item by id from 'shopping_list' table`, () => {
      const thirdId = 3;
      const thirdTestItem = testItems[thirdId - 1];
      return ShoppingListService.getById(db, thirdId).then((actual) => {
        expect(actual).to.eql({
          id: thirdId,
          name: thirdTestItem.name,
          price: thirdTestItem.price,
          date_added: thirdTestItem.date_added,
          checked: thirdTestItem.checked,
          category: thirdTestItem.category,
        });
      });
    });
    it(`deleteItem() removes an item by id from 'shopping_list' table`, () => {
      const itemId = 3;
      return ShoppingListService.deleteItem(db, itemId)
        .then(() => ShoppingListService.getAllItems(db))
        .then((allItems) => {
          const expected = testItems.filter((item) => item.id !== itemId);
          expect(allItems).to.eql(expected);
        });
    });
    it(`updateItem() updates an article from the 'shopping_list' table`, () => {
      const idOfItemToUpdate = 3;
      const newItemData = {
        name: "Hummus",
        price: "2.99",
        date_added: new Date("1919-12-22T16:28:32.615Z"),
        checked: false,
        category: "Snack",
      };
      return ShoppingListService.updateItem(db, idOfItemToUpdate, newItemData)
        .then(() => ShoppingListService.getById(db, idOfItemToUpdate))
        .then((item) => {
          expect(item).to.eql({
            id: idOfItemToUpdate,
            ...newItemData,
          });
        });
    });
  });

  context(`Given 'shopping_list' has no data`, () => {
    it(`getAllItems() resolves an empty array`, () => {
      return ShoppingListService.getAllItems(db).then((actual) => {
        expect(actual).to.eql([]);
      });
    });
    it(`insertItem() inserts a new item and resolves the new item with an 'id'`, () => {
      const newItem = {
        name: "Burrito",
        price: "6.99",
        date_added: new Date("1919-12-22T18:28:32.615Z"),
        checked: true,
        category: "Main",
      };
      return ShoppingListService.insertItem(db, newItem);
      expect(actual).to.eql({
        id: 1,
        name: newItem.name,
        price: newItem.price,
        date_added: newItem.date_added,
        checked: newItem.checked,
        category: newItem.category,
      });
    });
  });
});
