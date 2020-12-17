const { Pool } = require("pg");

const PG_URI =
  "postgres://jkqamorg:lwy1qsjnTwgW35AX5PhtD9Qd3COIvxPz@lallah.db.elephantsql.com:5432/jkqamorg";

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
