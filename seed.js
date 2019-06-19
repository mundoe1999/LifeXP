const {db} = require('./server/database/database')
const {User} = require('./server/database/index')

const seed = async () => {
  try {
    //await db.sync({force: true})
    await User.create({
      fname: 'Law',
      lname: 'Cas',
      username: 'LawCas',
      email: 'cody@email.com',
      password: '12345',
    })
    console.log(`
      Seed success!
    `)
    //db.close()
  } catch (err) {
    console.error(`
      Seed failed!
    `)
    console.error(err.stack)
    db.close()
  }
}

seed()
