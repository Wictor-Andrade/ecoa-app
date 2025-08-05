# ECOA

//TODO: put logo link here

# Steps to run:


### Install deps
```sh
npm run start
```

### Envs
needs to create an .env inside every app as needed.
```sh
cp .env.example .env
```

### Install and run containers
needs to create redis, postgres, minio...
```sh
docker compose up -d
```

### Database migrations
needs to migrate database.
```sh
$ cd apps/api
$ prisma migrate dev
```

### Run the apps

```sh
npm run start
```