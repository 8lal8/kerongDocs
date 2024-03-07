# Создать аренду
Создать аренду.
```
POST /booking
```
## Описание тела параметра запроса
|     Наименование      |   Тип   |        Описание         |
|:---------------------:|:-------:|:-----------------------:|
|       startDate       | String  |      Начало аренды      |
|        endDate        | String  |      Конец аренды       |
|      lockNumber       | Integer |       Номер замка       |
|        zoneId         | Integer |         Id зоны         |
|   identifiersIdList   |  Array  |     Идентификаторы      |
|      accessMode       | String  |       Тип аренды        |
| publicIdentifierValue | String  | Публичный идентификатор |
|   bookingPassword     | String  |    (не используется)    |




## Ответ от сервера
| Код | Тело ответа                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                  Описание                   |
|:---:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"uuid": "459cc262-1cde-4f09-85d8-6ff75b25d590","startDate": "2024-03-05T16:10:29.361+00:00","endDate": "2024-03-06T16:10:29.362+00:00","isPasswordAccess": false,"bookingPassword": "","lockNumber": 4,"active": true,"accessMode": "PUBLIC","publicIdentifierValue": "","zone": {"id": 1,"name": "Мужская раздевалка","description": "","active": true,"startLocksNumberIndex": 1,"locksCount": 10,"locksSetList": [],"accessMode": "PUBLIC","minimalBookingTimePeriod": 0,"tariffTimeInterval": 0,"tariffCost": 0},"identifiersList": [{"id": 1,"value": "123,1321321","identifiersType": {"id": 1,"value": "Браслет"}}]}```     |   Успешная операция по добавлению аренды    |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}```                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/booking
```
curl:
```
curl -X 'POST' \
  'http://localhost:9777/api/v1/booking' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImV4cCI6MTcwOTc0MTYyNywiaWF0IjoxNzA5NjU0OTg3fQ.wRYATUWySfiz6u1DL-8lnw3G2DNOiA2MRj8IGN8Gbks' \
  -H 'Content-Type: application/json' \
  -d '{
  "startDate": "2024-03-05T16:10:29.361Z",
  "endDate": "2024-03-06T16:10:29.362Z",
  "lockNumber": 4,
  "zoneId": 1,
  "identifiersIdList": [
    1
  ],
  "accessMode": "PUBLIC",
  "publicIdentifierValue": "",
  "bookingPassword": ""
}'
```