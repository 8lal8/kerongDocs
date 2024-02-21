# Информация о BU плате
Получение расширенной информации о BU плате:
```
GET /kerong-api/kr-bu/{uuid}
```
## Описание тела запроса
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|uuid|String|Уникальный идентификатор BU платы|
## Ответ от сервера
|Код|Тело ответа|Описание|
|:-:|:-|:-:|
|200|```{"address": "localhost","name": "Мужская раздевалка","port": 15444,"description": "Группа шкафчиков 1-12","slavesBoardsType": "SCU","timeout": 5000,"enabled": true,"uuid": "ad0e006b-845d-48e4-a172-277020791536"}```|Успешная операция.Тело ответа -BuBoardInfo|
|500|```{"timestamp": 1426615606,"status": 500,"error": "Internal Server Error","path": "/universe-lockers","message": "Required String parameter 'name' is not present"}```|Непредусмотренна я внутренняя ошибка сервера|
|550|```{"status": "FAILED","httpStatus": "INTERNAL_SERVER_ERROR","httpStatusCode": 500,"info": {"message": "Не удалось подключиться к выбранной плате","detailMessage": "Out of Memory..."}}```|Внутренняя ошибка сервера|
## Пример запроса
Request URL:
```
http://localhost:9876/kerong-api/kr-bu/ad0e006b-845d-48e4-a172-277020791536
```
curl:
```
curl -X 'GET' \
'http://localhost:9876/kerong-api/kr-bu/ad0e006b-845d-48e4-a172-277020791536' \
-H 'accept: application/json'
```