FROM liferay/portal:7.1.3-ga4

<<<<<<< HEAD
USER liferay

EXPOSE 8080 11311
=======
USER root

RUN set -x && \
    apk update && \
    apk upgrade && \
    apk add --update mc && \
    apk add --update nodejs npm

USER liferay

COPY --chown=liferay:liferay liferay-extensions/* /opt/liferay/osgi/marketplace

EXPOSE 8080
>>>>>>> 019b1017a0db8bc0417b8c3a7ff9d5b3522ba283
