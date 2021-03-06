# Лабораторная работа 11
Настройка и проверка *NAPT*

## Цели
* Настроить преобразование адресов портов (*NAPT* или *PAT*) для преобразования внутренних *IP*-адресов, как правило, частных, во внешние публичные адреса. 
* Проверить соединение.
* Проверить статистику *NAPT*.

![](http://res.cloudinary.com/dzsjwgjii/image/upload/v1494845131/networks-11-1.png)

## Последовательность выполнения работы
1. Реализовать схему сети аналогичную приведенной на рисунке. 
2. Присвоить имена маршрутизаторам и хостам.
1. Подсоединение устройств.
2. Настройка основной конфигурации маршрутизатора 2.
3. Настройка маршрутизатора, используемого в качестве шлюза.
4. Настройка правильного *IP*-адреса, маски подсети и шлюза по умолчанию для узлов.
5. Проверка работоспособности сети.
6. Создание маршрута по умолчанию.
7. Создание статического маршрута.
8. Определение пула используемых публичных *IP*-адресов.
9. Определение списка доступа, соответствующего внутренним частным *IP*-адресам.
10. Определение *NAT* из списка внутренних адресов в пул внешних адресов.
11. Назначение интерфейсов.
12. Генерация трафика с маршрутизатора `Gateway` к маршрутизатору `ISP`.
13. Проверьте работоспособность *NAPT*.

## Вариант
* `net` ~ `10.162.140.0/24`
* `Gateway` ~ `176.141.0.1/30`
* `ISP` ~ `176.141.0.2/30`
* `loopback` ~ `172.16.1.18/32`


### Выполнение
* [`report.md`](https://github.com/drapegnik/bsu/tree/master/networks/lab11/report.md) - отчёт
* [`src/`](https://github.com/drapegnik/bsu/tree/master/networks/lab11/src) - `.pkt` сценарии для ***Packet Tracer'a***
