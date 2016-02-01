#Vulcan Scaffolding

Yeoman based MeteorJS scaffolding tool. 

#Getting Started

`git clone https://github.com/qtheninja/vulcanscaffold.git`

in the directory

`npm install`

`npm link`

`yo vulcan`


##Yo Vulcan
Will setup file structure as
.meteor
	.finished-upgraders
	.gitignore
	.id
	packages
	platforms
	release
	versions
client
	compatibility
	views
		includes
			accessDenied.html
			footer.html
			nav.html
			notFound.html
		layouts
			masterLayout.html
		static
			about.html
			home.html
			landingPage.html
			login.html
			privacyPolicy.html
			register.html
			tos.html
			privacyPolicy.html
		main.html
		main.js
lib
	collections
		posts.js
	controllers
		PostsControllers.js
	methods.js
	routes.js
public
	fonts
	img
	js
server
	accounts.js
	methods.js
	publish.js


###Packages in the original app
The idea behind the generator was to make a simple out of the box concept. 
The following are packages that will be present in out of the box:
accounts-password
aldeed:autoform
aldeed:collection2
cooperm:side-comments
fortawesome:fontawesome
iron:router
twbs:bootstrap
useraccounts:bootstrap
useraccounts:core
dsyko:hopscotch
aldeed:delete-button
accounts-google
service-configuration
standard-minifiers
meteor-base
mobile-experience
mongo
blaze-html-templates
session
jquery
tracker
logging
reload
random
ejson
spacebars
check
yogiben:admin
dburles:collection-helpers
alanning:roles
fortawesome:fontawesome
## yo vulcan:forge
The forge subgenerator is designed to createa  CRUD setup using Aldeed's simple schema and autoforms combined with iron router. 
You'll have to agree to overwrite the publish.js and routes.js as both contain a string hook to have information written inside of it. 

You'll be prompted for a specific name of your schema. Write the schema as you would into your database. So for example wanting a Cats schema. 

Cat. The generator alters the Cat to cat at a few locations and also appends an S to it. So when using yo vulcan:forge make sure to use the right information. 

You will almost immediatly have to update

1. Collections
2. Routes
3. createObject.html
4. editObject.html
5. listObject.html

As these are cookie cutter statements.  

yo vulcan:forge

What is the name of your schema? Car

Generators the following 

lib
	routes.js
	collections
		Cars.js
	controllers
		carsController.js
client
	views
		cars
			create
				createCar.html
				createCar.css
				createCar.js
			edit
				editCar.html
				editCar.js
			listCar.js
			listCar.html

The URL structure can be found in Routes but it follows this.

`/cars`
	Lists all of the cars using a simple table.
`/cars/create`
	a insert form
`/cars/:_id/edit`
	Edit ability on a specific item


##Notes:
A nice article about yeoman writing generators
http://paulfreeman.me.uk/development/process/how-i-came-to-love-yeoman-by-writing-my-own-generators