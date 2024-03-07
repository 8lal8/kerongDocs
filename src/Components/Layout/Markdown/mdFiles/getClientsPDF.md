# Выгрузка клиентов в PDF
Выгрузка клиентов в PDF с возможностью применить фильтрацию.
```
GET /clients/pdf
```
## Описание параметра запроса
|    Наименование    |   Тип   |                    Описание                     |
|:------------------:|:-------:|:-----------------------------------------------:|
|       sortBy       | String  | Название поля, по которому требуется сортировка |
|     sortOrder      | String  |                    asc, desc                    |
| startBirthdayDate  | String  |          Дата рождения, начало периода          |
|  endBirthdayDate   | String  |          Дата рождения, конец периода           |
|     searchText     | String  |                 Значение поиска                 |
|        sex         | String  |                      Пол                        |
|        page        | Integer |                    Страница                     |
|      pageSize      | Integer |        Количество элементов на странице         |

## Ответ от сервера
| Код | Тело ответа                                                                                                                                                   |                  Описание                   |
|:---:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------:|
| 200 |                                                                                                                                                        |     Успешная операция по выгрузке PDF       |
| 400 | ```{"message": "400 Bad Request","date": "2023-12-18T15:49:42.493Z"}```                                                                                       |             Неправильный запрос             |
| 500 | ```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/api-v1","message": "Required String parameter 'name' is not present"}``` | Непредусмотренная внутренняя ошибка сервера |
## Пример запроса
Request URL:
```
http://localhost:9778/api/v1/clients/pdf?page=2&pageSize=2
```
curl:
```
curl -X 'GET' \
  'http://localhost:9778/api/v1/clients/pdf?page=2&pageSize=2' \
  -H 'accept: application/pdf' \
  -H 'Authorization: Bearer eyJhbGciO*********oBgGVTrd7ckM'
```