docker build -t liferay-portal .

## run semplice

docker run -p 8080:8080 liferay-portal

## run con volume locale

docker run -p 8080:8080 -p 11311:11311 -v /home/developer/Workspace/easywelfare/vagrantfiles-dockerfiles/liferay/legacy/7.1.3-ga4/react-portlet/build:/opt/liferay/deploy liferay-portal

# the gold mine
https://github.com/izaera/liferay-js-toolkit-showcase

## How to reload the portlet after any code change (avoid browser cache)
- run `npm run build` from the command line
  + if the code has just had major changes, it is safe to remove beforehand all the content of directory build
- in the browser page:
  + remove the portlet
  + reload the page
  + re-insert the portlet
  + reload the page
