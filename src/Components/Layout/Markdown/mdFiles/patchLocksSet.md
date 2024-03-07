# Изменить данные набора
Изменение набора замков.
```
PATCH /locks-set
```
## Описание тела параметра запроса
|    Наименование     |   Тип   |                Описание                |
|:-------------------:|:-------:|:--------------------------------------:|
|         id          | Integer |               id набора                |
|  realLocksNumbers   |  Array  | Фактическая нумерация замков на плате  |
| virtualLocksNumbers |  Array  | Виртуальная нкумерация замков на плате |
|      cuBoardId      | Integer |              id CU платы               |
|        name         | String  |            Название набора             |




## Ответ от сервера
| Код | Тело ответа                                                                                                                                                   |                  Описание                   |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"id": 1,"realLocksNumbers": [0,1,2],"virtualLocksNumbers": [6,7,8],"cuBoardId": 1,"name": "Раздевалка"}```                                                |    Успешная операция по изменению набора    |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                       |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}``` | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/locks-set
```
curl:
```
curl -X 'PATCH' \
  'http://localhost:9778/api/v1/locks-set' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJ*******UV1Ad2QpfRpo' \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 1,
    "realLocksNumbers": [
      0,
      1,
      2
    ],
    "virtualLocksNumbers": [
      6,
      7,
      8
    ],
    "cuBoardId": 1,
    "name": "Раздевалка"
  }'
```