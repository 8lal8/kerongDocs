# Привязать набор замков
Набор замков - это объект LocksSet, в котором указывается плата CU и какие разъемы из этой платы входят в набор.
Есть возможность привязать несколько наборов к зоне. 
```
GET /zones/add-locks-set/{id}
```
## Описание переменной параметра запроса
| Наименование  |   Тип    |          Описание           |
|:-------------:|:--------:|:---------------------------:|
|      id       | Integer  |          ID платы           |
| locks-set-id  | Integer  | Id набора LocksSet (набора) |

## Ответ от сервера
| Код | Тело ответа                                                                                                                                                                                                                                                                                                                                                  |                  Описание                   |
|:---:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"id": 6,"name": "СПА","description": "Зона Бани","active": true,"startLocksNumberIndex": 1,"locksCount": 6,"locksSetList": [{"id": 5,"name": "Группа 1","realLocksNumbers": "0;1;2","virtualLocksNumbers": "1;2;3","cuBoard": {"id": 1,"chainNumber": 0,"name": "cu 0 1-16","description": "Плата Cu 0 замки 1-16","boardType": "CU_16","buBoard": {"uuid": "cc322fd3-575b-441a-a07e-35e87b3d4947","name": "Зона_1","description": "Плата_1 мужская раздевалка","ip": "192.168.1.34","port": 0,"boardType": "CU_16","active": true,"model": "модель","kerongApiBuBoardUuid": null}}},{"id": 7,"name": "Группа 2","realLocksNumbers": "3;4;5","virtualLocksNumbers": "4;5;6","cuBoard": {"id": 1,"chainNumber": 0,"name": "cu 0 1-16","description": "Плата Cu 0 замки 1-16","boardType": "CU_16","buBoard": {"uuid": "cc322fd3-575b-441a-a07e-35e87b3d4947","name": "Зона_1","description": "Плата_1 мужская раздевалка","ip": "192.168.1.34","port": 0,"boardType": "CU_16","active": true,"model": "модель","kerongApiBuBoardUuid": null}}}],"accessMode": "PUBLIC"}```  | Успешная операция по привязки набора к зоне |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                                                                                                                                                                                                                      |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}```                                                                                                                                                                                                | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/zones/add-locks-set/6?locks-set-id=7
```
curl:
```
curl -X 'POST' \
  'http://localhost:9778/api/v1/zones/add-locks-set/6?locks-set-id=7' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbG*******6SLXuAnI' \
  -d ''
```