# Добавить новую зону
Добавление новой зоны.
```
POST /zones
```
## Описание тела параметра запроса
|       Наименование       |   Тип   |         Описание          |
|:------------------------:|:-------:|:-------------------------:|
|           name           | String  |       Название зоны       |
|       description        | String  |       Описание зоны       |
|  startLocksNumberIndex   | Integer |  Начало нумерации замков  |
|        locksCount        | Integer |       Кол-во замков       |
|        accessMode        | String  |        Тип доступа        |
| minimalBookingTimePeriod | Integer |  Минимально время аренды  |
|    tariffTimeInterval    | Integer |     Временой интервал     |
|       tariffCost         | Double  | Значение времени (мунуты) |




## Ответ от сервера
| Код | Тело ответа                                                                                                                                                        |                  Описание                   |
|:---:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"id": 0,"name": "СПА","description": "Зона СПА Бани","active": true,"startLocksNumberIndex": 1,"locksCount": 16,"locksSetList": [{"id": 0,"name": "string","realLocksNumbers": "string","virtualLocksNumbers": "string","cuBoard": {"id": 0,"chainNumber": 0,"name": "cu 0 1-16","description": "Плата Cu 0 замки 1-16","boardType": "CU_16","buBoard": {"uuid": "d0c1a14d-8bbe-402b-abb5-9e11f04c05a7","name": "Зона_1","description": "Плата_1 мужская раздевалка","ip": "192.168.1.34","port": 0,"boardType": "CU-16","active": true,"model": "модель","kerongApiBuBoardUuid": "string"}}}],"accessMode": "PUBLIC"}```    |    Успешная операция по добавлению зоны     |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                            |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}```      | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/zones
```
curl:
```
curl -X 'POST' \
  'http://localhost:9778/api/v1/zones' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGci********Eq9asOs' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "СПА",
  "description": "Зона Бани",
  "startLocksNumberIndex": 1,
  "locksCount": 16,
  "accessMode": "PUBLIC"
}'
```