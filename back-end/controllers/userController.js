// getUser function finds users from the model
exports.getUser = function(req, res) {
	User.find(function(err, users) {
		if (err) return res.json({' message: User cannot be found'})
	})
}

// update user
exports.updateUser = function(req, res) {
	User.updateUser = function(err, users) {
		User.findOne =({_id: req.params.id}, function(err, users) {
			user.email = req.body.email
			user.password = req.body.password
			user.username = req.body.username

			user.save(function(error, user){
				if (error) {
					return res.json({message: 'error'})
				}
				res.json(user)
			})
		})
	}
}

// create delete user 
exports.deleteUser = function(req, res) {
	console.log(req.params._id)
	User.findByIdAndRemove(req.params.id, function(error, user) {
		if (error) {
			return res.json({ message: 'error'})
		}
		return res.json ({ message: 'user deleted'})
	})
}

exports.createUser = function(req, res) {
	console.log(req.body)
	var user = new User ({
		email: req.body.email,
		password: req.body.password
	})
	user.save(function(error, savedUser){
		if(error) {
			return res.json({ message: 'error'})
		}

		res.json(savedUser)
	})
}






























// app.get('/user', function(req,res) {
// 	res.json({ user: 'created user'})
// })

// app.post('/user', function(req,res) {
// 	res.json({ user: 'created user'})
// })

// app.put('/user', function(req,res) {
// 	res.json({ user: 'created user'})
// })

// app.delete('/user', function(req,res) {
// 	res.json({ user: 'created user'})
// })