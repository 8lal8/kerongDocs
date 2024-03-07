# Открыть замок
Указывается ID зоны и номер замка, согласно назначенной зоне нумерации.
```
POST /zones/open-lock
```
## Описание тела параметра запроса
| Наименование |   Тип   |  Описание   |
|:------------:|:-------:|:-----------:|
|  lockNumber  | Integer | Номер замка |
|    zoneId    | Integer  |   Id зоны   |




## Ответ от сервера
| Код | Тело ответа                                                                                                                                                   |                  Описание                   |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"CONTINUE"}```                                                                                                                                            |     Успешная операция по открытию замка     |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                       |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}``` | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/zones/open-lock
```
curl:
```
curl -X 'POST' \
  'http://localhost:9778/api/v1/zones/open-lock' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJ******bsW9e0HU' \
  -H 'Content-Type: application/json' \
  -d '{
  "lockNumber": 1,
  "zoneId": 1
}'
```