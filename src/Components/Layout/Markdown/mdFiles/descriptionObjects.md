# Описание объектов
## SlavesBoardsType
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|type|String (Enum: [CU_16,CU_48, SCU])|Тип CU-плат, с которыми можно взаимодействовать с помощью API|

## LockStatus
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|status|String (Enum: [LOCK,OPEN, INACTIVE])|Статус замка: ОТКРЫТ,ЗАКРЫТ, неактивен|
## DetectionStatus
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|status|String (Enum: [LOCK,OPEN, INACTIVE])|Статус датчика обнаружения объектов:ПУСТО, ЗАНЯТО,неактивен|
## Lock
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|lockId|Number|Идентификатор замка (Его номер)|
|cuBoardId|Number|Номер CU-платы (выставляется на самой плате)|
|status|LockStatus|Статус замка|
|detectionStatus|DetectionStatus|Статус датчика обнаружения объектов|
## BuBoardInfo
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|address|String|Адрес платы интеграции для TCP соединения (можно использовать доменное имя)|
|name|String|Имя платы|
|port|Number|Порт платы для TCP соединения|
|description|String|Описание для платы интеграции|
|slavesBoardsType|SlavesBoardsType|Тип плат, подключенных последовательно к BU плате|
|timeout|Number|Таймаут опроса платы интеграции|
|enabled|Boolean|Статус платы|
## BuBoardShortInfo
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|name|String|Имя платы|
|slavesBoardsType|SlavesBoardsType|Тип плат, подключенных последовательно к BU плате|
|uuid|String|Уникальный идентификатор платы|
|enabled|Boolean|Статус платы|
## UnlockingTimeInfo
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|krCuId|Number|Идентификатор CU платы (выставляется на самой плате)|
|unlockingTime|Number|Время подачи тока на замок (0 - 24000 мс)|
## Board
|Наименование|Тип|Описание|
|:-:|:-:|:-:|
|number|Number|Идентификатор CU платы (выставляется на самой плате)|
|locks|[Lock]|Список замков|