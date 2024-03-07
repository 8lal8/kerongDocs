# Добавить нового клиента
Добавление нового клиента.
```
POST /clients
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
| Код | Тело ответа                                                                                                                                                   |                  Описание                   |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"id": 7,"firstName": "Bukarev","lastName": "Daniil","middleName": "Maksimovich","sex": "MAN","birthday": "2024-03-01T14:22:07.002+00:00","phoneNumber": "87778886655","active": true,"identifiers": [{"id": 1,"value": "123,14325","identifiersType": {"id": 1,"value": "Карта"}}]}```                  |   Успешная операция по добавлению клиента   |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                       |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}``` | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/clients
```
curl:
```
curl -X 'POST' \
  'http://localhost:9778/api/v1/clients' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciO********VTrd7ckM' \
  -H 'Content-Type: application/json' \
  -d '{
  "firstName": "Bukarev",
  "lastName": "Daniil",
  "middleName": "Maksimovich",
  "sex": "MAN",
  "phoneNumber": "87778886655",
  "birthday": "2024-03-01T14:22:07.002Z",
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
}'
```