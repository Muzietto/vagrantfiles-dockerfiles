FROM liferay/portal:7.1.3-ga4

USER root

RUN set -ex && \
    apk update && \
    apk upgrade && \

    # https://gist.github.com/mniehe/25b45e8397e189f4b95cce31a192d2a4
    apk add --virtual build-dependencies \
            build-base \
            gcc && \

    # https://github.com/sgerrand/alpine-pkg-glibc#installing
    # apk --no-cache add ca-certificates wget && \
    # wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
    # wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.30-r0/glibc-2.30-r0.apk && \
    # apk add glibc-2.30-r0.apk && \

    # https://stackoverflow.com/questions/36279253/go-compiled-binary-wont-run-in-an-alpine-docker-container-on-ubuntu-host/50861580#50861580
    apk add --no-cache libc6-compat && \
    ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2 && \

    # https://stackoverflow.com/questions/11471722/libstdc-so-6-cannot-open-shared-object-file-no-such-file-or-directory
    # apk add lib32stdc++6 && \

    apk add --no-cache sudo && \

    curl -sL https://github.com/jpm4j/jpm4j.installers/raw/master/dist/biz.aQute.jpm.run.jar > tmp.jar && \
    export JPM_BIN_DIR=`java -jar tmp.jar -g init | grep -e "Bin[ \t]*dir" | awk '{print $3}'` && \
    rm -f tmp.jar && \
    ${JPM_BIN_DIR}/jpm install -f https://releases.liferay.com/tools/blade-cli/2.3.1.201711201552/blade.jar && \
    echo "blade installed successfully into ${JPM_BIN_DIR}/blade"

USER liferay

COPY --chown=liferay:liferay files /opt/liferay

EXPOSE 8080 11311
