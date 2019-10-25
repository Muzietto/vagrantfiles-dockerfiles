# docker run -p 8080:8080 --name liferay-portal \
# -v /home/developer/workspace/vagrantfiles-dockerfiles/liferay/legacy/7.1.3-ga4/react-portlet/build:/opt/liferay/deploy liferay-portal
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
