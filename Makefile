.PHONY: all main worker

ROLLUP=./node_modules/.bin/rollup

all: main worker

main:
	BABEL_ENV=development $(ROLLUP) -c rollup.config.js -o main.js src/main.js

worker:
	BABEL_ENV=development $(ROLLUP) -c rollup.config.js -o worker.js src/worker.js