.PHONY: build
build: ## builds the app
	npx rollup index.js --file dist/index.js --format iife
