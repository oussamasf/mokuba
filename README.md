# Installation

```bash
$ npm install
```

# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Bash scripts

## Git Branch and Checkout Script

The script `./bash/staging.sh` automates the process of checking and pulling from the "staging" branch in a Git repository. It also allows creating and checking out a new branch.

### Usage

Execute the script `make checkout` using the following command

## Git commit with right format

The script `./bash/commit.sh` set the format of the commit message into targated branch in a Git repository.

### Usage

Execute the script `make commit` using the following command , don't forget to add file into staging area of git
