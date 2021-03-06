## Film app

## Архитектура приложения

Приложение разработано с помощью фреймворка *React Native и Expo CLI*. Для управления состоянием приложения был выбран *Redux* и библиотека middlewares - *Redux-Thunk*. В качестве библиотеки для UI была выбрана *React Native Paper*. Для навигации быда выбрана библиотека React Navigation

Приложение состоит из пяти директорий: *api, assets, components, pages, store*. Так же приложение имеет App.js, app.json, babel.config.js, package.json.

В директории assets хранится favicon.ico, splashscreen и иконка приложения.

В директории ***api*** находится файл index.js со всей настройкой библиотеки axios. Настроены get и post запросы. Настроены headers. Все изолировано и в одном месте, что дает возможность быстрой настройки или нахождению бага в случае его возникновения.

В директерии ***store*** находится все состояние приложения. Это единственное место где находится истинное значения стейта. В этой директории есть свои поддиректории: ***actions*** с экшенами системы, ***reducer*** с редьюсерами, ***middlewares*** с мидлвеар для асинхронных запросов к апи. Так же есть файл index.js с инициализацией стора приложения и комбайн редьюсером и файл types со всеми типами.

В директории ***pages*** находятся две страницы: **Details** и **Films**
#### Films
На этой странице отображаются все фильмы, которые есть в базе. Если же фильмов нет - то отображается соответсвующий компонент. Пока товары грузятся - отображается спиннер загрузки. Так же вверху находится Appbar с названием страницы и поле поиска.
#### Details
На этой странице отображаются детали о фильме. При инициализации компонента берется id из стейта роута. Если такой товар есть, то он отображается, если нет, то выводится соответствующий компонент. 

В директории ***components*** находятся компоненты системы: AddModal, AppBar, Film, NoDetails, NoFilms, Search, SomethingWrong, Spinner, UploadFile.
#### Film
Компонент отвечает за отображение карточки фильма с его названием, датой выпуска, форматом выпуска и звездами в этом фильме. Так же есть возможность удалять эту карточку и смотреть информацию о фильме.
#### FilmDetails
Компонент отвечает за отображение карточки фильма с деталями о нем. Так же есть кнопка для удаления этого фильмаб после чего идет возращение на главный экран.
#### NoFilms 
Компонент отвечает за отображение для юзера того, что нет фильмов.
#### Searchbar
Компонент поиска. При вводе отправляется ключ на сервер и там проводится поиск. Так же здесь был добавлен дебоунс для сокращения запросов которые могли бы отправляться на сервер. Дебоунс ждет 1500мс. Если юзер за это время не вводит ничего, то отправляется запрос, но если нет то таймер сбивается и снова ждет 1500 мс.
#### Spinner
Компонент спиннера. Отображает процесс загрузки.
#### AddModal
Модальное окно добавления товара. В нем находится форма с валидацией на пустое поле, которое хендлится кастомным хуком. Если все поля заполенны, то выполняется отправка данных и при успешном выпополнении список обновляется. Список сортируется на бекенде по алфавиту.

В App.js находится весь роутинг системы, инициализация UI библиотеки и подключение Redux Store.

В app.json находятся настройки приложения: Название, версия, путь к иконке и Splashscreen и т.д.

В babel.config.js находится настройка пресета экспо и UI библиотеки react-native-paper.

В package.json находятся все зависимости и пакеты проекта.

# Установка приложения локально
1. Требуется локально установленный nodejs последней версии. Скачать можно по ссылке. (https://nodejs.org/uk/ "Ссылка на загрузку Node.js");
2. Установить git и зарегистрироватся в github.
3. Клонировать проект: в удобном месте прописать команду *git clone https://github.com/vladossuper/film-app.git*
4. Установить глобально expo cli *npm install -g expo-cli*
5. После клонирования зайти в папку с приложением: *cd film-app*
6. В терминале ввести *npm install*
7. После завершения установки ввести в терминале *npm run start*
8. После открытия в окне браузера страницы с QR кодом скачать на мобильное устройство (IOS or Android) Expo client.
9. Сосканировать QR код приложением камера, если это IOS или зайти в приложение Expo Client и сосканировать экран оттуда.
## Важно! 
Компьютер/ноутбук и мобильное устройство должны находится в одной сети. Только так запуститься приложение после считывания кода. 

## Ссылка на .apk файл
(https://drive.google.com/file/d/1-ovvUGRhX2n0RjRcyoLcU-8ttd9lpnQ6/view?usp=sharing)

