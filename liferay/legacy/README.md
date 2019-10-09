## HOW TO BUILD AND RUN THE LIFERAY CONTAINER

docker build -t liferay-portal .

### simple run
docker run -p 8080:8080 liferay-portal

### run with automatic deploy
docker run -p 8080:8080 --name liferay-portal -v /home/developer/workspace/vagrantfiles-dockerfiles/liferay/legacy/7.1.3-ga4/react-portlet/build:/opt/liferay/deploy liferay-portal

docker exec -it liferay-portal /bin/bash

## OPERATIONS ON localhost:8080

- Sign in as test@liferay.com/test
- ControlPanel -> Apps -> Purchased
- Sign in (create account if necessary) and allow access
- Verify that Liferay CS Portlet Extender is installed

### what if Liferay CS Portlet Extender is not installed
- Purchase Liferay CS Portlet Extender from the Marketplace (it's free of charge)
- from the command line: `docker restart liferay-portal`

## COMPILE SAMPLE PROJECT (from command line)

git clone git@github.com:bryceosterhaus/liferay-react-demo.git

cd liferay-react-demo/portlets

npm i

npm run build

## LAST OPERATIONS ON LOCALHOST:8080

- verify in ControlPanel -> Apps -> AppManager that module `react-portlet` is present

- add widget react-portlet to any portal page
