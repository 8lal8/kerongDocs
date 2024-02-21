# Удаление BU платы
Удаление BU платы интеграции:
```
DELETE /kerong-api/delete-kr-bu?kr-bu-uuid={uuid}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|kr-bu-uuid|String|Уникальный идентификатор BU платы|

## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|204||Успешная операция|
|500|```{"timestamp": 1426615606, "status": 500,"error": "Internal Server Error","path": "/universe-lockers","message":"Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/delete-kr-bu?kr-bu-uuid=52c27e93-76e7-4ff8-94f6-63d62d45125e
```
curl:
```
curl -X 'DELETE' \
'http://localhost:9876/kerong-api/delete-kr-bu?kr-bu-uuid=52c27e93
-76e7-4ff8-94f6-63d62d45125e' \
-H 'accept: application/json'
```