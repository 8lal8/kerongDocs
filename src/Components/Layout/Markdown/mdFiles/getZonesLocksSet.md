# Получить наборы замков привязанные к зонам
Получение наборов замков привязанных к зонам. Возможность установить фильтрацию
```
GET /zones/locks-set
```
## Описание переменной параметра запроса
| Наименование |   Тип   |    Описание    |
|:------------:|:-------:|:--------------:|
|     page     | Integer |    Страница    |
|   pageSize   | Integer | Размер страницы |
| searchText   | String  |  Поиск текста  |


## Ответ от сервера
| Код | Тело ответа                                                                                                                                                                                                                                                                                                                                                  |                  Описание                   |
|:---:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"locksSetAndZoneDtoList": [{"zoneId": 6,"zoneName": "СПА","locksSet": {"id": 5,"name": "Группа 1","realLocksNumbers": "0;1;2","virtualLocksNumbers": "1;2;3","cuBoard": {"id": 1,"chainNumber": 0,"name": "cu 0 1-16","description": "Плата Cu 0 замки 1-16","boardType": "CU_16","buBoard": {"uuid": "cc322fd3-575b-441a-a07e-35e87b3d4947","name": "Зона_1","description": "Плата_1 мужская раздевалка","ip": "192.168.1.34","port": 0,"boardType": "CU_16","active": true,"model": "модель","kerongApiBuBoardUuid": null}}}}],"totalCount": 1}```  | Успешная операция по получению наборов замков |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                                                                                                                                                                                                                      |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}```                                                                                                                                                                                                | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/zones/locks-set
```
curl:
```
curl -X 'GET' \
  'http://localhost:9778/api/v1/zones/locks-set' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJI****xyH2wF4'
```

