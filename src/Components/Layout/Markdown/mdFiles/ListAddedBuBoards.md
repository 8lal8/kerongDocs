# Список добавленных BU плат
Получение списка всех плат интеграции KR-BU, зарегистрированных в базе данных:
```
GET /kerong/kr-bu-boards-list
```
## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|200|```[{"uuid": "e2f96107-5c40-49fc-b35c-28adf7f062c0","name": "Мужская раздевалка","slavesBoardsType": "CU_48","enabled": true},{"uuid": "ad0e006b-845d-48e4-a172-277020791536","name": "Мужская раздевалка","slavesBoardsType": "SCU","enabled": true}]```|Успешная операция|
|500|```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/universe-lockers","message": Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/kr-bu-boards-list
```
curl:
```
curl -X 'GET' \
'http://localhost:9876/kerong-api/kr-bu-boards-list' \
-H 'accept: application/json'
```