FROM muzietto/redis_base
MAINTAINER Marco Faustinelli "contacts@faustinelli.net"
ENV REFRESHED_AT 2016-06-01

ENTRYPOINT [ "redis-server", "--logfile /var/log/redis/redis-replica.log", "--slaveof redis-primary 6379"]
