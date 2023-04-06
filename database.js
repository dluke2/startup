const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('login').collection('user'); //user
const expenseCollection = client.db('data').collection('expense'); //expense

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function createExpense(expense_num, paid_by, amount, date, description) {
  const expense = {
    expense_num: expense_num,
    paid_by: paid_by,
    amount: amount,
    date: date,
    description: description,
  };
  await expenseCollection.insertOne(expense)

  return expense;
}

function addExpense(expense) {
  expenseCollection.insertOne(expense);
}

function getExpense() {
  const cursor = expenseCollection.find();
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addExpense,
  getExpense,
};
