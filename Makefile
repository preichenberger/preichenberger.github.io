build:
	npm install

deploy:
	npx webpack -c webpack.config.js

fmt:
	npx prettier --single-quote --trailing-comma es5 --ignore-path main.js --write "**/*.js" "**/*.css" 
	npx stylelint --config .stylelintrc.json --fix "**/*.(s)css"

lint:
	npx stylelint --config .stylelintrc.json "**/*.(s)css"
	npx eslint -c .eslintrc.json --ignore-pattern .gitignore "**/*.js"

run:
	npx webpack-dev-server -c webpack.config.js

 .PHONY: build fmt lint run