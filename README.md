# Вёрстка мессенджера на Bootstrap

[![hexlet-check](https://github.com/kicha3007-boop/layout-designer-bootstrap-project-59/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kicha3007-boop/layout-designer-bootstrap-project-59/actions)
[![ci](https://github.com/kicha3007-boop/layout-designer-bootstrap-project-59/actions/workflows/ci.yml/badge.svg)](https://github.com/kicha3007-boop/layout-designer-bootstrap-project-59/actions/workflows/ci.yml)

Hexlet Chat — адаптивная вёрстка онлайн-чата: контакты, список диалогов, профиль и сам диалог.
Две страницы (`index.html` и `chat.html`) и пять экранов, десктопная и мобильная версии.
Свои компоненты и утилиты собраны на миксинах, переменных и Utilities API Bootstrap.

- Учебный проект Хекслета: https://ru.hexlet.io/programs/layout-designer-bootstrap
- Как это должно работать: https://files.hexlet.app/a/vklcz0
- Опубликованная версия (Surge): _ссылка появится после `make deploy`_

## Стек

- Pug — шаблоны страниц, данные (контакты, чаты, сообщения) лежат в `app/pug/includes/_data.pug`
- SCSS + Bootstrap 5.1 (подключён исходниками, переменные переопределены до фреймворка)
- Gulp — сборка в `build/` и локальный сервер с автообновлением (browser-sync)
- Линтеры: HTMLHint (собранный HTML) и Stylelint с `stylelint-config-standard-scss`

## Структура

```
app/
  pug/
    index.pug, chat.pug      — страницы
    layouts/_layout.pug      — общий каркас
    includes/                — меню, панели, приветствие, данные и миксины (диалог, поиск, иконки)
  scss/
    app.scss                 — точка входа
    _variables.scss          — цвета ($theme-colors), точка перелома xxl, скругления, тени
    _mixins.scss             — hide-scrollbar
    components/              — avatar, contact, message, app-nav, chat-form, icon, scroll-area
    utilities/_utilities.scss — radius-* и адаптивные border-* через Utilities API
  images/                    — аватары и иконки
build/                       — собранный проект (его выкладываем на Surge и его проверяют тесты)
```

## Как запустить локально

Нужен Node.js 18+.

```bash
git clone https://github.com/kicha3007-boop/layout-designer-bootstrap-project-59.git
cd layout-designer-bootstrap-project-59
make install   # npm ci
make start     # сборка + сервер с автообновлением: http://localhost:3000
```

Только собрать проект в `build/` без сервера:

```bash
make build
```

Правки вносятся в `app/`, а `build/` пересобирается и коммитится вместе с исходниками.

## Линтеры

```bash
make lint      # htmlhint build/*.html + stylelint app/scss
```

Сборка и линтеры запускаются в GitHub Actions (`.github/workflows/ci.yml`) на каждый push.

## Публикация на Surge

```bash
make deploy    # пересобирает проект и выполняет npx surge ./build
```

После публикации впишите полученный адрес в раздел выше.

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

Проверка открывает `build/index.html` и `build/chat.html` при ширине 1440px и 414px, переключает
вкладки `#chats-tab`, `#profile-tab`, `#current-chat-tab` и сравнивает скриншоты с эталонными.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
