module.exports = {
	mongoOptions: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
      autoIndex: false,
      useFindAndModify: false
	},
	sessionOptions: {
      secret: "keyboard cat",
      name: "stats",
		resave: false,
		saveUninitialized: true,
		cookie: {
			expires: 1000 * 60 * 60 * 24,
			maxAge: 60000
		}
	},
	// additional global configs
};
