# Инструкция к проекту


## 1. Склонируйте проет репозитория или скачайте с репозитории 

    $ git clone https://github.com/mightymadik/phonebook

## 2. Перейдите в папку проекта

    $ cd phonebook

Установите зависимости

    $ npm install/npm i

## 3. Build проекта для web

    $ ionic build

## 3.1 Запустить проект

    $ ionic serve

    после можно переходить в локалхост обычно это (http://localhost:4200/)

## 4. Запустить проект в эмуляторе Android Studio

    ionic cap run android --external
    
    * если выдает ошибку соединения сервера:
    
    ionic cap run android --external host=<Your IP address>
   
## 4.1  Oткрыть проект android в Android Studion
 
	ionic cap open android

#  5. Как пользоваться приложением

При загрузке приложения появится страница авторизации

    username : username
    password : 12345

После авторизации появляется главная страница

Так же появится уведомление с просьбой дать доступ к списку контактов 

Кликнув на карточку контакта, происходит переход на details page, где по запросу отображены более полные данные по контракту

** Выход из режима камеры реализорван через кнопку в header "Back to Contacts"
