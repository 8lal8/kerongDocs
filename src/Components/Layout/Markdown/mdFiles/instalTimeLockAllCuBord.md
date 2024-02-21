# Установить время подачи тока на замок для всех CU в цепи
Установить время открытия замка для всех KR-CU в цепи. Время открытия вводится в миллисекундах в диапазоне 0 - 24000 (в мс). [API v1.0.9: метод работает только для плат CU16 и CU48]:
```
POST
/kerong-api/set-unlocking-time-of-all?kr-bu-id={uuid}&unlocking-time-value={unlocking-time-value}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|kr-bu-id|String|Уникальный идентификатор BU платы|
|unlocking-time-value|Number|Время подачи тока на замок (0 - 24000 мс)|

## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|201||Успешная операция|
|500|```{"timestamp": 1426615606, "status": 500,"error": "Internal Server Error","path": "/universe-lockers","message":"Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/set-unlocking-time-of-all?kr-bu-id=d0561954-2ae5-47d4-8b52-df4b69384489&unlocking-time-value=500
```
curl:
```
curl -X 'POST' \
'http://localhost:9876/kerong-api/set-unlocking-time-of-all?kr-buid=d0561954-2ae5-47d4-8b52-df4b69384489&unlocking-time-value=500'
\
-H 'accept: application/json' \
-d ''
```