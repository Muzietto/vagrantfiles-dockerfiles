FROM liferay/portal:7.1.3-ga4

USER root

RUN set -x && \
    apk update && \
    apk upgrade && \
    apk add --update mc && \
    apk add --update nodejs npm

USER liferay

COPY --chown=liferay:liferay liferay-extensions/* /opt/liferay/osgi/marketplace

EXPOSE 8080
