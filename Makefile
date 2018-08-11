build:
	npm install

deploy:
	rm -rf main.*.js
	npx webpack -c webpack.config.js
	git add main.*.js

fmt:
	npx prettier --single-quote --trailing-comma es5 --ignore-path main.js --write "**/*.js" "**/*.css" 
	npx stylelint --config .stylelintrc.json --fix "**/*.(s)css"

lint:
	npx stylelint --config .stylelintrc.json "**/*.(s)css"
	npx eslint -c .eslintrc.json --ignore-pattern .gitignore "**/*.js"

run:
	npx webpack-dev-server -c webpack.config.js

 .PHONY: build fmt lint run