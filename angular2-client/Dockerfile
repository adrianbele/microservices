FROM haskell:7.8

RUN cabal update

ADD static-server/static.cabal /build/static.cabal
RUN cd /build && cabal install --only-dependencies -j4
ADD static-server /build
RUN cd /build && cabal install
ENV PATH /root/.cabal/bin:$PATH
WORKDIR /www
EXPOSE 3000
CMD static
COPY dep/busybox /usr/bin/busybox
COPY entrypoint /
ENTRYPOINT ["/entrypoint"]
COPY dist/dev /www
