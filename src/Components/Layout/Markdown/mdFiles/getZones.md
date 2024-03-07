# Получить список зон
Список добавленных зон. Есть возможность указать параметры сортировки (фильтрации) для детального отображения данных.
```
GET /zones
```
## Описание параметра запроса
| Наименование |   Тип   |                    Описание                     |
|:------------:|:-------:|:-----------------------------------------------:|
|    sortBy    | String  | Название поля, по которому требуется сортировка |
|  sortOrder   | String  |                    asc, desc                    |
|     page     | Integer |                    Страница                     |
|   pageSize   | Integer |        Количество элементов на странице         |
|  searchText  | String  |                 Значение поиска                 |
|  accessMode   | String  |                   Тип доступа                   |


## Ответ от сервера
| Код | Тело ответа                                                                                                                                                                                     |                  Описание                   |
|:---:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"zoneList": [{"id": 6,"name": "СПА","description": "Зона Бани","active": true,"startLocksNumberIndex": 1,"locksCount": 6,"locksSetList": [{"id": 5,"name": "Группа 1","realLocksNumbers": "0;1;2","virtualLocksNumbers": "1;2;3","cuBoard": {"id": 1,"chainNumber": 0,"name": "cu 0 1-16","description": "Плата Cu 0 замки 1-16","boardType": "CU_16","buBoard": {"uuid": "cc322fd3-575b-441a-a07e-35e87b3d4947","name": "Зона_1","description": "Плата_1 мужская раздевалка","ip": "192.168.1.34","port": 0,"boardType": "CU_16","active": true,"model": "модель","kerongApiBuBoardUuid": null}}},{"id": 7,"name": "Группа 2","realLocksNumbers": "3;4;5","virtualLocksNumbers": "4;5;6","cuBoard": {"id": 1,"chainNumber": 0,"name": "cu 0 1-16","description": "Плата Cu 0 замки 1-16","boardType": "CU_16","buBoard": {"uuid": "cc322fd3-575b-441a-a07e-35e87b3d4947","name": "Зона_1","description": "Плата_1 мужская раздевалка","ip": "192.168.1.34","port": 0,"boardType": "CU_16","active": true,"model": "модель","kerongApiBuBoardUuid": null}}}],"accessMode": "PUBLIC"}],"totalCount": 1}```    |    Успешная операция по отображению зон     |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                                                         |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}```                                   | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/zones
```
curl:
```
curl -X 'GET' \
  'http://localhost:9778/api/v1/zones' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciO*********oBgGVTrd7ckM'
```