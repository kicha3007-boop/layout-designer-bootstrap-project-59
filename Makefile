install:
	npm ci

start:
	npm start

build:
	npm run build

lint:
	npm run lint

deploy: build
	npm run deploy

.PHONY: install start build lint deploy
