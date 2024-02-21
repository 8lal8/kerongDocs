# Значение времени подачи тока для всех CU в цепи
Получить значение времени открытия замков всех CU в цепи(в мс). [API v1.0.9: метод
работает только для плат CU16 и CU48]:
```
GET /kerong-api/get-unlocking-time-of-all?kr-bu-id={uuid}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|kr-bu-id|String|Уникальный идентификатор BU платы|

## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|200|```[{"krCuId": 0,"unlockingTime": 0}]```|Успешная операция. Тело ответа -[UnlockingTimeInfo]|
|500|```{"timestamp": 1426615606, "status": 500,"error": "Internal Server Error","path": "/universe-lockers","message":"Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/get-unlocking-time-of-all?kr-bu-id=ad0e006b-845d-48e4-a172-277020791536
```
curl:
```
curl -X 'GET' \
'http://localhost:9876/kerong-api/get-unlocking-time-of-all?kr-buid=ad0e006b-845d-48e4-a172-277020791536' \
-H 'accept: application/json'
```