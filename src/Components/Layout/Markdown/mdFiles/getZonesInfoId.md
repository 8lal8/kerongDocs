# Получить детальную информацию по id зоны
Получение детальной информации по id зоны
```
GET /zones/zone-info/{id}
```
## Описание переменной параметра запроса
| Наименование  |   Тип    | Описание |
|:-------------:|:--------:|:--------:|
|      id       | Integer  | ID зоны  |


## Ответ от сервера
| Код | Тело ответа                                                                                                                                                                                                                                                                                                                                                  |                  Описание                   |
|:---:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"zone": {"id": 0,"name": "СПА","description": "Зона СПА Бани","active": true,"startLocksNumberIndex": 1,"locksCount": 16,"locksSetList": [{"id": 1,"name": "Набор замков 1","realLocksNumbers": "0;1;2","virtualLocksNumbers": "1;2;3","cuBoard": {"id": 0,"chainNumber": 0,"name": "cu 0 1-16","description": "Плата Cu 0 замки 1-16","boardType": "CU_16","buBoard": {"uuid": "d0c1a14d-8bbe-402b-abb5-9e11f04c05a7","name": "Зона_1","description": "Плата_1 мужская раздевалка","ip": "192.168.1.34","port": 0,"boardType": "CU-16","active": true,"model": "модель","kerongApiBuBoardUuid": "string"}}}],"accessMode": "PUBLIC"},"lockStateList": [{"lock": {"lockId": 0,"cuBoardId": 0,"status": "LOCK","detectionStatus": "EMPTY"},"virtualNumber": 0,"isFree": true}]}```  | Успешная операция по получению информации о зоне |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                                                                                                                                                                                                                      |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}```                                                                                                                                                                                                | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/zones/zone-info/6
```
curl:
```
curl -X 'GET' \
  'http://localhost:9778/api/v1/zones/zone-info/6' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJI****xyH2wF4'
```

