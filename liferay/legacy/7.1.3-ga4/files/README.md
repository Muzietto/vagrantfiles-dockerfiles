questa cartella contiene una copia del repository https://github.com/bryceosterhaus/liferay-react-demo

il capitolo DEPLOYING PORTLET deve essere eseguito dall'interno del container

- eseguire tutte le modifiche indicate nel README del repo
  + aggiunta dell'istruzione `javascript.single.page.application.enabled=false` deve essere fatta all'interno di `/opt/liferay/tomcat/webapps/ROOT/WEB-INF/class/portal-developer.properties` e non dove dice il repo
- DA INDAGARE valore di `portletElementId` da passare a `portlet/src/index.js`
