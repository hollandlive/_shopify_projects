# Sokole — handoff (13 Nov 2026)

## Где что
| | |
|---|---|
| Рабочий магазин (клиента) | `af0btt-11.myshopify.com`, домен **sokole.eu** (+ www), владелец sokolefragrance@gmail.com, менеджер Aspasia |
| Доступ Артёма | collaborator через Dev Dashboard: https://dev.shopify.com/dashboard/221195233/stores/110145438030 → Log in |
| Тема | «Sokole» #209645240654 (опубликована) |
| Старый магазин | `sokole-sqcoggyz.myshopify.com` — dev store, домен с него снят; резервная копия, не удалять |

## Что перенесено
- Тема целиком (`migration/theme-live/`, zip `migration/sokole-theme.zip`)
- 15 товаров с фото (`migration/products-for-new-store.csv`) + подарочная карта €100 (создана вручную)
- 5 коллекций по Product type: Perfume for Her / for Him, Body Mist Fragrance, Premium Boxes, Exclusive Gift (= боксы)
- Языки: EN по умолчанию, EL опубликован; перевод `migration/sokole-el-import-new-store.csv` (100 строк импортировано), скрипт `migration/map_translations.py`
- Меню: Main (Home, Catalog, Contact), Footer (Search), Customer account (Orders, Profile)
- Страницы: contact, sokole-guide (+ памятки `?view=launch` RU / `?view=launch-el` EL)
- Рынки и доставка: Greece — Standard €5 (free ≥€50, 3–5 дн), Express €13 (1–2 дн); EU — EU Delivery €10, free ≥€50, 5–8 дн (один тариф вместо двух)

## Осталось на стороне клиента
1. Тариф (Settings → Plan → Basic)
2. Shopify Payments (+ PayPal по желанию)
3. Тестовый заказ + refund
4. Снять пароль (Online Store → Preferences → Private mode off)
5. Позже: Viva.com Smart Checkout только для IRIS
6. Не сделано и не обязательно: греческое название подарочной карты; политики (`policies-drafts.md`); реальные соцсети в теме

## Как делать в следующий раз
Пошагово: [`../CLIENT-STORE-PLAYBOOK.md`](../CLIENT-STORE-PLAYBOOK.md). Коротко: магазин для клиента создавать как **Client transfer store** в Dev Dashboard (не Development store), язык по умолчанию сразу English, имя/фамилия в аккаунте и verify identity — заранее.

## Грабли
- Collaborator не пускало в админку, пока в Shopify-аккаунте не были заполнены имя и фамилия (тост «Account missing first and last name»).
- CLI: `shopify theme push --store af0btt-11.myshopify.com ...`
- Страница пароля — стандартная, это не «чужая тема».

## Обновление 15 Nov 2026
- Всё по передаче закоммичено (`b296cb0`); `migration/sokole-theme.zip` в `.gitignore` (дубль `theme-live/`, лежит только локально). Запушено на GitHub (это только бэкап кода — в магазин клиента git push ничего не выкатывает, тема туда идёт только через `shopify theme push`).
- С нашей стороны работ нет: тариф, платежи, тестовый заказ, снятие пароля — клиент делает сам по памятке.
- Бриф по бренду (ассортимент, цены, тон, аудитория, статус соцсетей) отправлен сессии LC_FF_SMM для SMM. Реальных соцсетей у бренда пока нет — в теме заглушки.
