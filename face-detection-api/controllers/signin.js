
const handleSignin = (req,res, db, bcrypt)=> {
	const {email, name, password} = req.body;
	if (!email || !password) {
		return res.status(400).json('incorrect form submission');  // if we dont use return here, then the function keeps running till the end of the code. if even use still can register with empty creditentials, you gotta check frontend register.js 
	}	
	db.select('email', 'hash').from('login')
	.where('email', '=', req.body.email)
		.then(data => {
			const isValid = bcrypt.compareSync(req.body.password, data[0].hash); // true
			if (isValid) {
				return db.select('*').from('users')
					.where('email', '=', req.body.email)
					.then(user => {
						res.json(user[0])
					})
					.catch(err => res.status(400).json('unable to get users'))
			} else {
				res.status(400).json('wrong credentials')
			}			
		})
		.catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
	handleSignin: handleSignin
}