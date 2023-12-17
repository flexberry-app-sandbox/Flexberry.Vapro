docker build --no-cache -f SQL\Dockerfile.PostgreSql -t logistika123-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t logistika123-java/app ../../..
