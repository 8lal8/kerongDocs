# Создать новую роль
Создание новой роли.
```
POST /users/roles
```
## Описание тела запроса
| Наименование |  Тип   |      Описание      |
|:------------:|:------:|:------------------:|
|   roleName   | String | Наименование роли  |

## Ответ от сервера
| Код | Тело ответа                                                                                                                                                    |                  Описание                   |
|:---:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"roleName": "ADMIN","id": 1}```                                                                                                                            |     Успешная операция по созданию роли      |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                        |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}```  | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/users/roles
```
curl:
```
curl -X 'POST' \
  'http://localhost:9778/api/v1/users/roles' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJ*********E9s' \
  -H 'Content-Type: application/json' \
  -d '{
  "roleName": "string"
}'
```