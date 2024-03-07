# Добавить несколько новых клиентов
Добавление несколько новых клиентов.
```
POST /clients/as-array
```
## Описание тела параметра запроса
|  Наименование   |   Тип   |           Описание           |
|:---------------:|:-------:|:----------------------------:|
|   firstName     | String  |             Имя              |
|    lastName     | String  |           Фамилия            |
|   middleName    | String  |           Отчество           |
|       sex       | String  |             Пол              |
|   phoneNumber   | String  |           Телефон            |
|    birthday     | String  |        Дата рождения         |
|     active      | Boolean |          Активность          |
|   identifiers   |         |                              |
|       id        | integer |      Id идентификатора       |
|      value      | String  |   Значение идентификатора    |
| identifiersType |         |                              |
|       id        | integer |   Id типа идентификатора     |
|      value      | String  | Значение типа идентификатора |


## Ответ от сервера
| Код | Тело ответа                                                                                                                                                   |                         Описание                          |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------:|
| 200 | ```"OK"```                                                                                                                                                    | Успешная операция по добавлению нескольких новых клиентов |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                       |                    Неправильный запрос                    |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}``` |        Непредусмотренная внутренняя ошибка сервера        |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/clients
```
curl:
```
curl -X 'POST' \
  'http://localhost:9778/api/v1/clients/as-array' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbInN0cmluZyJdLCJleHAiOjE3MDkzODk1NDgsImlhdCI6MTcwOTMwMjkwOH0.18dncCzfnHOHgIZesIuJUVEgzwjq5lFoBgGVTrd7ckM' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "firstName": "Bukarev",
    "lastName": "Daniil",
    "middleName": "Maksimovich",
    "sex": "MAN",
    "phoneNumber": "87778886655",
    "birthday": "2024-03-01T14:28:18.175Z",
    "active": true,
    "identifiers": [
      {
        "id": 1,
        "value": "123,14325",
        "identifiersType": {
          "id": 1,
          "value": "Карта"
        }
      }
    ]
  },
{
    "firstName": "Ivanov",
    "lastName": "Ivan",
    "middleName": "Ivanovich",
    "sex": "MAN",
    "phoneNumber": "87779994433",
    "birthday": "2024-01-01T14:28:18.175Z",
    "active": true,
    "identifiers": [
      {
        "id": 1,
        "value": "123,14325",
        "identifiersType": {
          "id": 1,
          "value": "Карта"
        }
      }
    ]
  }
]'
```