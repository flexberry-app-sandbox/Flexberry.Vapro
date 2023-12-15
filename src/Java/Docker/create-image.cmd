docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vapro-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t vapro-java/app ../../..
