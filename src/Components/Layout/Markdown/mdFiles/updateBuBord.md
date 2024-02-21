# Обновить данные BU платы
Обновление данных BU платы интеграции:
```
PUT /kerong-api/update-kr-bu
{
"address": "localhost",
"name": "Мужская раздевалка",
"port": 15444,
"description": "Группа шкафчиков 1-12",
"slavesBoardsType": "SCU",
"timeout": 9000,
"enabled": true,
"uuid": "ad0e006b-845d-48e4-a172-277020791536"
}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|address|String|Адрес платы интеграции для TCP соединения (можно использовать доменное имя)|
|name|String|Имя платы|
|port|Number|Порт платы для TCP соединения|
|description|String|Описание для платы интеграции|
|slavesBoardsType|String (Enum:CU_16,CU_48, SCU)|Тип платы интеграции|
|timeout|Number|Таймаут опроса платы интеграции|
|enabled|Boolean|Статус платы|
|uuid|String|Уникальный идентификатор платы|
## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|204||Успешная операция|
|500|```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/universe-lockers","message": Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/update-kr-bu
```
curl:
```
curl -X 'PUT' \
'http://localhost:9876/kerong-api/update-kr-bu' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
"address": "localhost",
"name": "Мужская раздевалка",
"port": 15444,
"description": "Группа шкафчиков 1-12",
"slavesBoardsType": "SCU",
"timeout": 9000,
"enabled": true,
"uuid": "ad0e006b-845d-48e4-a172-277020791536"
}'
```