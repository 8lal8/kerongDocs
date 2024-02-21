# Регистрация BU платы
Метод для регистрации BU платы в базе данных.
```
POST /kerong-api/create-kr-bu

{
"address": "192.168.2.1",
"name": "Мужская раздевалка",
"port": 23,
"description": "Группа шкафчиков 1-12",
"slavesBoardsType": "CU_16",
"timeout": 500,
"enabled": true
}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|address|String|Адрес платы интеграции для TCP соединения (можно использовать доменное имя)|
|name|String|Имя платы|
|port|Number|Порт платы для TCP соединения|
|description|String|Описание для платы интеграции|
|slavesBoardsType|SlavesBoardsType|Тип платы интеграции|
|timeout|Number|Таймаут опроса платы интеграции|
|enabled|Boolean|Статус платы|
## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|201||Успешная операция|
|500|```{"timestamp": 1426615606, "status": 500,"error": "Internal Server Error","path": "/universe-lockers","message":"Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/create-kr-bu
```
curl:
```
curl -X 'POST' \
'http://localhost:9876/kerong-api/create-kr-bu' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
"address": "192.168.2.1",
"name": "Мужская раздевалка",
"port": 22,
"description": "Группа шкафчиков 1-12",
"slavesBoardsType": "CU_16",
"timeout": 100,
"enabled": true
}'
```