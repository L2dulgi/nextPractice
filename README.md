# 포켓약국 웹 어플리케이션

**pocket pharm**

---

## Contents

- [Installation](#installation)
- [Documentation](#Documentation)

---

## Installation

### Prerequistes

- Node.js 12.x LTS Erbium
- Yarn

### 1. Clone

```shell
$ git clone https://github.com/zeebraa00/pocket_pharm
```

### 2. Install Packages

```bash
$ yarn
```

### 3-1. Start development server

```shell
$ yarn dev
```

서버 시작 후,
[`http://localhost:3000`](http://localhost:3000) 에 접속

### 3-2. Start production server

```shell
$ yarn build & yarn start
```

서버 시작 후, nginx 에서 proxy 설정할 것

---

## Documentation

### 개발 언어

- Node.js

### Backend

- [`Express`](https://expressjs.com/ko/)
- [`Sequelize`](https://sequelize.org/v4/)
- Database: Mysql

### FrontEnd

- [`Next.js`](https://nextjs.org/)
