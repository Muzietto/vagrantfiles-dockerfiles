FROM liferay/portal:7.1.3-ga4

USER root

RUN set -ex && \
    apk update && \
    apk upgrade

# https://github.com/jeanblanchard/docker-alpine-glibc/blob/master/Dockerfile
ENV GLIBC_VERSION 2.30-r0

# Download and install glibc
RUN apk add --update curl && \
  curl -Lo /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
  curl -Lo glibc.apk "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-${GLIBC_VERSION}.apk" && \
  curl -Lo glibc-bin.apk "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-bin-${GLIBC_VERSION}.apk" && \
  apk add glibc-bin.apk glibc.apk && \
  /usr/glibc-compat/sbin/ldconfig /lib /usr/glibc-compat/lib && \
  echo 'hosts: files mdns4_minimal [NOTFOUND=return] dns mdns4' >> /etc/nsswitch.conf && \
  rm -rf glibc.apk glibc-bin.apk /var/cache/apk/*

RUN curl -sL https://github.com/jpm4j/jpm4j.installers/raw/master/dist/biz.aQute.jpm.run.jar > tmp.jar && \
    export JPM_BIN_DIR=`java -jar tmp.jar -g init | grep -e "Bin[ \t]*dir" | awk '{print $3}'` && \
    rm -f tmp.jar && \
    ${JPM_BIN_DIR}/jpm install -f https://releases.liferay.com/tools/blade-cli/2.3.1.201711201552/blade.jar && \
    echo "blade installed successfully into ${JPM_BIN_DIR}/blade"

USER liferay

COPY --chown=liferay:liferay files /opt/liferay

EXPOSE 8080 11311
