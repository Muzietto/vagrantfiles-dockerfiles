docker build -t liferay-portal .

## run semplice

docker run -p 8080:8080 liferay-portal

## run con volume locale

docker run -p 8080:8080 -p 11311:11311 -v /home/developer/Workspace/easywelfare/vagrantfiles-dockerfiles/liferay/legacy/7.1.3-ga4/react-portlet/build:/opt/liferay/deploy liferay-portal