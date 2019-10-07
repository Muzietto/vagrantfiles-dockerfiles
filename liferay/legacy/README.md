docker build -t liferay-portal .

docker run -p 8080:8080 liferay-portal

docker run -p 8080:8080 --name liferay-portal -v /home/developer/workspace/vagrantfiles-dockerfiles/liferay/legacy/7.1.3-ga4/react-portlet:/opt/liferay/react-portlet liferay-portal
