# JavaScript Custom select-plugin

Кастомный select написанный на чистом JS

Для запуска использовался сборщик [ParcelJS](https://parceljs.org/getting_started.html)

Для установки [ParcelJS](https://parceljs.org/getting_started.html) через NPM необходимо:

1. Выполнить установку [NodeJS](https://nodejs.org/ru/) если она еще не установлена на ваш ПК
2. Открыть терминал и выполнить команду **npm install -g parcel-bundler**. Если используете PowerShell и получаете ошибку _"Невозможно загрузить файл ..., так как выполнение сценариев отключено в этой системе"_ - откройте PowerShell с правми администратора, выполните команду **Set-ExecutionPolicy RemoteSigned**, на вопрос отвечаем **Да**
3. После установки ParcelJS скопируйте себе папку с проектом, наберите в консоли команду **git clone https://github.com/mogilevtsevdmitry/js-select.git**
4. Запустите сбор проекта через ParcelJS командой **parcel index.html**
5. Запустится локальный сервер с проектом, скопилированные файлы будут лежать в папке **dist**

## Реализованные свойства

- **placeholder** - задает значение в поле inputm если свойство не задано - задается стандартное "Выберите"
- **selectItem** - true/false позволяет выделять в списке выбранный элемент
- **selectedID** - сразу показывает выбранный элемент
- **onSelect(item)** - выводит в консоль информацию о выбранном элементе
- **data** - набор данных для выпадающего списка в виде массива, можно подключить какую-либо БД и передавать в него данные

![](https://github.com/mogilevtsevdmitry/js-select/blob/master/gif.gif)
