## HOW TO BUILD AND RUN THE LIFERAY CONTAINER

docker build -t liferay-portal .

docker run -p 8080:8080 liferay-portal

docker run -p 8080:8080 --name liferay-portal -v /home/developer/workspace/vagrantfiles-dockerfiles/liferay/legacy/7.1.3-ga4/react-portlet:/opt/liferay/react-portlet liferay-portal

docker exec -it liferay-portal /bin/bash

## OPERATIONS ON localhost:8080

- Sign in as test@liferay.com/test
- ControlPanel -> Apps -> Purchased
- Sign in (create account if necessary) and allow access
- Purchase Liferay CS Portlet Extender (it's free of charge)
- from the command line: `docker restart liferay-portal`

## COMPILE SAMPLE PROJECT (from command line)

git clone git@github.com:bryceosterhaus/liferay-react-demo.git

cd liferay-react-demo/portlets

npm i

npm run build

from inside the container: cp react-portlet/liferay-react-demo/portlet/build/*.jar /opt/liferay/deploy

## LAST OPERATIONS ON LOCALHOST:8080

- verify in ControlPanel -> Apps -> AppManager that module `react-portlet` is present

- add widget react-portlet to any AppManager

### run semplice

docker run -p 8080:8080 liferay-portal

## run con volume locale

docker run -p 8080:8080 -p 11311:11311 -v /home/developer/Workspace/easywelfare/vagrantfiles-dockerfiles/liferay/legacy/7.1.3-ga4/react-portlet/build:/opt/liferay/deploy liferay-portal
