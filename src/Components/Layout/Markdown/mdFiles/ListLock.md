# Список замков
Получить список замков
```
GET /kerong-api/locks-list?kr-bu-uuid={uuid}&kr-cu-id={krCuId}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|kr-bu-uuid|String|Уникальный идентификатор BU платы|
|kr-cu-id|Number|Уникальный идентификатор CU платы (выставляется на самой плате)|

## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|200|```[{"lockId": 2,"cuBoardId": 2,"status": "OPEN","detectionStatus": "OCCUPIED"}]```|Успешная операция. Тело ответа:[Lock]|
|500|```{"timestamp": 1426615606, "status": 500,"error": "Internal Server Error","path": "/universe-lockers","message":"Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/locks-list?kr-bu-uuid=ad0e006b-845d-48e4-a172-277020791536&kr-cu-id=0
```
curl:
```
curl -X 'GET' \
'http://localhost:9876/kerong-api/locks-list?kr-bu-uuid=ad0e006b-845d-48e4-a172-277020791536&kr-cu-id=0' \
-H 'accept: application/json'
```