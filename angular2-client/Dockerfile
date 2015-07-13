FROM snoyberg/warp
COPY dep/busybox /usr/bin/busybox
COPY entrypoint /
ENTRYPOINT ["/entrypoint"]
COPY dist/dev /var/www/html