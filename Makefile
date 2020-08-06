.PHONY: build
build: ## builds the app
	npx ncc build src/index.js -o dist
