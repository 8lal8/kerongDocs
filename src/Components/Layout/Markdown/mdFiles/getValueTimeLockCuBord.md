# Значение времени подачи тока на замок для CU
Получить значение времени открытия замков на конкретной плате KR-CU (в мс). [API
v1.0.9: метод работает только для плат CU16 и CU48]:
```
GET /kerong-api/get-unlocking-time?kr-bu-id={uuid}&kr-cu-id={krCuId}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|kr-bu-id|String|Уникальный идентификатор BU платы|
|kr-cu-id|Number|Уникальный идентификатор CU платы (выставляется на самойплате)|

## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|200|```{"krCuId": 0,"unlockingTime": 0}```|Успешная операция. Тело ответа -UnlockingTimeInfo|
|500|```{"timestamp": 1426615606, "status": 500,"error": "Internal Server Error","path": "/universe-lockers","message":"Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/get-unlocking-time?kr-bu-id=ad0e006b-845d-48e4-a172-277020791536&kr-cu-id=0
```
curl:
```
curl -X 'GET' \
'http://localhost:9876/kerong-api/get-unlocking-time?kr-bu-id=ad0e006b-845d-48e4-a172-277020791536&kr-cu-id=0' \
-H 'accept: application/json'
```