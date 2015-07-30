####
# sudo docker build -t microservices/angular-service .
# sudo docker run  -p 80:3000 -t -i microservices/angular-service http://localhost:8080
####
FROM snoyberg/warp
COPY dep/busybox /usr/bin/busybox
COPY entrypoint /
ENTRYPOINT ["/entrypoint"]
COPY dist/dev /var/www/html