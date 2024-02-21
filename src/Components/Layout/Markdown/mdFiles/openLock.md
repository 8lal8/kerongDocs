# Открыть замок
Отправить команду на открытие замка
```
POST /kerong-api/open-lock
{
"cuBoardId": 0,
"lockNumber": 0,
"buBoardUuid": "ad0e006b-845d-48e4-a172-277020791536"
}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|buBoardUuid|String|Уникальный идентификатор BU платы|
|cuBoardId|Number|Уникальный идентификатор CU платы (выставляется на самой плате)|
|lockNumber|Number|Номер замка|

## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|201||Успешная операция.|
|500|```{"timestamp": 1426615606, "status": 500,"error": "Internal Server Error","path": "/universe-lockers","message":"Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/open-lock
```
curl:
```
curl -X 'POST' \
'http://localhost:9876/kerong-api/open-lock' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
"cuBoardId": 0,
"lockNumber": 0,
"buBoardUuid": "ad0e006b-845d-48e4-a172-277020791536"
}'
```