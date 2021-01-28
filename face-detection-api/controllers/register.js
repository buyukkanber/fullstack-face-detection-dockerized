
const handleRegister = (req, res, db, bcrypt) => {
	const {email, name, password} = req.body;
	if (!email || !name || !password) {
		return res.status(400).json('incorrect form submission');  // if we dont use return here, then the function keeps running till the end of the code. if even use still can register with empty creditentials, you gotta check frontend register.js 
	}
	const hash = bcrypt.hashSync(password);
		db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
				return trx('users')
					.returning('*')
					.insert({
						email: loginEmail[0],
						name: name,
						joined: new Date()
					})
					.then(user => {
						res.json(user[0]);
					})	
			})
			.then(trx.commit)
			.catch(trx.rollback)
		})
		.catch(err => res.status(400).json('unable to register'))
}

module.exports = {
	handleRegister: handleRegister
}