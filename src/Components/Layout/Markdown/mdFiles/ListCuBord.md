# Список CU плат
Получение списка последовательно подключенных CU-плат по заданному uuid
BU-платы. [API v1.0.9: метод работает только для плат CU16 и CU48]:
```
GET kerong-api/kr-cu-boards-list?kr-bu-uuid={uuid}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|kr-bu-uuid|String|Уникальный идентификатор BU платы|

## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|200|```[{"number": 2,"locks": [{"lockId": 2,"cuBoardId": 2,"status": "OPEN","detectionStatus": "OCCUPIED"}]}]```|Успешная операция|
|500|```{"timestamp": 1426615606, "status": 500,"error": "Internal Server Error","path": "/universe-lockers","message":"Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/kr-cu-boards-list?kr-bu-uuid=ad0e006b-845d-48e4-a172-277020791536
```
curl:
```
curl -X 'GET' \
'http://localhost:9876/kerong-api/kr-cu-boards-list?kr-bu-uuid=ad0e006b-845d-48e4-a172-277020791536' \
-H 'accept: application/json'
```