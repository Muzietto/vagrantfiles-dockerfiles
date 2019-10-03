FROM liferay/portal:7.2.0-ga1

USER root

RUN set -x && \
    apk update && \
    apk upgrade && \
    apk add --update nodejs npm && \
    curl -sL https://github.com/jpm4j/jpm4j.installers/raw/master/dist/biz.aQute.jpm.run.jar > tmp.jar && \
    export JPM_BIN_DIR=`java -jar tmp.jar -g init | grep -e "Bin[ \t]*dir" | awk '{print $3}'` && \
    rm -f tmp.jar && \
    ${JPM_BIN_DIR}/jpm install -f https://releases.liferay.com/tools/blade-cli/2.3.1.201711201552/blade.jar && \
    echo "blade installed successfully into ${JPM_BIN_DIR}/blade"

USER liferay

COPY --chown=liferay:liferay files /opt/liferay

EXPOSE 8080 11311
