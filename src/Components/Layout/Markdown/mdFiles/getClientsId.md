# Получить клиента по его Id
Получить клиента по его Id.
```
GET /clients/{id}
```
## Описание переменной параметра запроса
| Наименование |   Тип   |       Описание        |
|:------------:|:-------:|:---------------------:|
|      id      | Integer | Уникальный id клиента |

## Ответ от сервера
| Код | Тело ответа                                                                                                                                                   |                  Описание                   |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 | ```{"id": 3,"firstName": "Bukarev1","lastName": "Daniil1","middleName": "Maksimovich1","sex": "MAN","birthday": "2024-02-26T14:00:12.012+00:00","phoneNumber": "87778886655","active": true,"identifiers": [{"id": 2,"value": "333,333333","identifiersType": {"id": 1,"value": "Карта"}}]}```                | Успешная операция по получению клиента по его Id |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                       |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}``` | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/clients/3
```
curl:
```
curl -X 'GET' \
  'http://localhost:9778/api/v1/clients/3' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciO********VTrd7ckM'
```