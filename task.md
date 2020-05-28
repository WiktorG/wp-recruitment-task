# WP Recruitment Task

“Koszyk” zakupowy Star Wars

Proszę o przygotowanie aplikacji, dzięki której użytkownik będzie mógł skompletować zamówienie na modele statków kosmicznych z filmu Star Wars.

Do wykonania aplikacji konieczne będzie pobranie danych z API: https://swapi.apis.guru/

Aplikacja powinna składać się z jednego widoku, na którym użytkownik widzi listę modeli statków oraz ikonkę koszyka z liczbą aktualnie dodanych do niego produktów.

Komponent prezentujący model statku powinien zawierać:

- nazwę (pole name)

- producentów (pole manufacturers)

- cenę (pole costInCredits) - jeżeli statek nie ma ceny, traktujemy go jako produkt niedostępny

- pole na wpisanie liczby modeli wraz z przyciskiem zatwierdzającym dodanie do koszyka

W momencie gdy użytkownik doda model do koszyka, liczba przy ikonie koszyka powinna zostać automatycznie zwiększona.