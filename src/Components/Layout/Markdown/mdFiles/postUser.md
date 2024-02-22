# Создать нового пользователя
Создание нового пользователя для настройки и управления Kerong-LCS.
```
POST /users
```
## Описание тела запроса
| Наименование |   Тип   |         Описание         |
|:------------:|:-------:|:------------------------:|
|    roles     |  Array  |       Массив ролей       |
|      id      | Integer |         id роли          |
|   roleName   | String  |    Наименование роли     |
|   username   | String  | Имя пользователя (логин) |
|   password   | String  |   Пароль пользователя    |
|  firstName   | String  |  Имя пользвателя (Имя)   |
|   lastName   | String  |   Фамилия пользователя   |
|    active    | Boolean |        Активность        |

## Ответ от сервера
| Код | Тело ответа                                                                                                                                                   |                  Описание                   |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"roles": [{"id": 1,"roleName": "ADMIN"}],"username": "admin","firstName": "Mikhail","lastName": "Smirnovskiy","id": 0,"active": true}```                  |   Успешная операция создания пользователя   |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                       |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}``` | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/users
```
curl:
```
curl -X 'POST' \
  'http://localhost:9778/api/v1/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "roles": [
    {
      "id": 1,
      "roleName": "ADMIN"
    }
  ],
  "username": "admin",
  "password": "password",
  "firstName": "Mikhail",
  "lastName": "Smirnovskiy",
  "active": true
}'
```