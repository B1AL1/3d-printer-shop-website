/*!
 * Start Bootstrap - Shop Item v5.0.1 (https://startbootstrap.com/template/shop-item)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

//LABORATORIUM 7. BUDOWA PROSTEJ APLIKACJI TYPU SPA Z WYKORZYSTANIEM FUNKCJI JAVASCRIPT.
function pokaz(id) {
    //Funkcja podmieniająca tekst na stronie w zależności od wybranego przycisku
    var tresc = "";
    switch (id) {
        case 2:
            tresc += pokazSLA();
            break;
        case 3:
            tresc += pokazSLS();
            break;
        default:
            tresc += pokazFDMFFF();
    }
    document.getElementById('blok').innerHTML = tresc;
}

function pokazFDMFFF() {
    //Funkcja zawierająca 1 tekst
    var tresc = '<h4 class="fw-bolder">FDM/FFF</h4>';
    tresc += '<p class="lead">Najbardziej rozpowszechnioną technologią drukowania 3D jest tak zwany FDM (Fused Depositon Modeling), ale ponieważ Stratasys zarejestrował znak towarowy dla tego oznaczenia, stał się znany (nie tylko) do celów komercyjnych oznaczenia FFF (Fused Filament Fabrication). W obu przypadkach jest to jedna i ta sama zasada działania drukarki 3D, a mówiąc o stacjonarnych drukarkach 3D , zdecydowana większość z nich korzysta z tej technologii do modelowania. Technologia drukowania FDM / FFF działa na zasadzie stopionego materiału, który jest najczęściej dostarczany do drukarki w rozgrzanego filamentu. Jest on umieszczony w pojemniku drukarki 3D na taśmociągu, z którego drukarka stopniowo rozwija materiał. Głowica drukująca drukarki 3D następnie drukuje warstwa po warstwie drukowanego modelu 3D. Zasadniczo ta technologia drukowania 3D jest bardzo podobna do technologii drukowania atramentowego. Podobnie, jak głowica drukująca wstrzykuje bardzo małą ilość atramentu na papier, głowica drukarki 3D umieszcza płynny materiał na warstwie podkładowej warstwa po warstwie, tworząc model fizyczny. Technologia drukowania 3D FDM / FFF jest najtańszą technologią drukowania 3D, co jest głównym powodem, dla którego jest tak rozpowszechniona. FDM / FFF drukarka 3D do użytku domowego można kupić do pro použití v domácnosti pořídíte do 1700 pln. Minuesem tej technologii jest długi czas drukowania, szeroka zmienność jakości druku, która zależy od modelu drukarki i użytego materiału, oraz różne ograniczenia projektowe (na przykład stopiony materiał musi się najpierw utwardzić, w przypadku bardziej złożonych modeli należy liczyć z podporami drukowania).</p><div align="center"><iframe src="https://www.youtube.com/embed/m_QhY1aABsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    return tresc;
}

function pokazSLA() {
    //Funkcja zawierająca 2 tekst
    var tresc = '<h4 class="fw-bolder">SLA</h4>';
    tresc += '<p class="lead">SLA to technologia addytywna, która polega na utwardzaniu płynnej żywicy za pomocą wiązki lasera odbitej przez lustro. Trójwymiarowy model jest pocięty na pionowe warstwy budowane na platformie roboczej. Przewagą SLA w porównaniu z opisywaną przez nas wcześniej w Platformie Przemysłu Przyszłości metodą FDM jest większa precyzja. Dodatkowo w stereolitografii możemy drukować większe elementy z mniejszym ryzykiem odkształceń. Ale oczywiście SLA ma też wadę – proces druku trwa znacznie dłużej z powodu konieczności obrysowania każdej warstwy i przeprowadzenia większej liczby działań. Laser utwardza pożądany kształt obiektu w materiał w postaci stałego prochu, który jest umieszczany na płycie drukarskiej. Po utwardzeniu jednej warstwy urządzenie nakłada kolejną cienką warstwę pyłu i ponownie utwardza laser. Po zakończeniu musisz dosłownie wykopać wydruk i dokładnie go wyczyścić. Rezultatem są bardzo dokładne i trwałe wydruki. Laserowe drukarki spiekalnicze to profesjonalne maszyny używane w produkcji przemysłowej i prototypowej do testowania funkcjonalnego.</p><div align="center"><iframe src="https://www.youtube.com/embed/h7tyeh1aZJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    return tresc + '</div>';
}

function pokazSLS() {
    //Funkcja zawierająca 3 tekst
    var tresc = '<h4 class="fw-bolder">SLS</h4>';
    tresc += '<p class="lead">Selective laser sintering (SLS), znane również jako selektywne spiekanie laserowe, czasami określane jako spiekanie laserowe, to technologia drukowania 3D, w której obiekt powstaje przez stopienie sproszkowanego materiału i spiekanie go warstwami za pomocą lasera. Laser utwardza pożądany kształt obiektu w materiał w postaci stałego prochu, który jest umieszczany na płycie drukarskiej. Po utwardzeniu jednej warstwy urządzenie nakłada kolejną cienką warstwę pyłu i ponownie utwardza laser. Po zakończeniu musisz dosłownie wykopać wydruk i dokładnie go wyczyścić. Rezultatem są bardzo dokładne i trwałe wydruki. Laserowe drukarki spiekalnicze to profesjonalne maszyny używane w produkcji przemysłowej i prototypowej do testowania funkcjonalnego. Wykorzystywany w metodzie laser spieka cząsteczki sproszkowanego termoplastycznego polimeru, łącząc go następnie w kolejne warstwy. Technologia SLS znajduje szerokie zastosowanie, zarówno w prototypowaniu, jak i również w małoseryjnej produkcji funkcjonalnych części z tworzyw sztucznych o dobrych właściwościach mechanicznych. Obecnie spośród wszystkich dostępnych technologii druku 3D jest najczęściej wykorzystywaną z metod w małoseryjnej produkcji części finalnych maszyn i urządzeń technicznych. Duża swoboda projektowania, wysoka dokładność wykonanych elementów oraz produkcja części o dobrych właściwościach mechanicznych sprawiają, iż technologia SLS zyskuje na coraz większym znaczeniu ze strony przemysłu.</p><div align="center"><iframe src="https://www.youtube.com/embed/NMTWaILSdd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    return tresc;
}

//LABORATORIUM 8. OBSŁUGA I WALIDACJA FORMULARZY PO STRONIE KLIENTA ZA POMOCĄ JAVASCRIPT.

function sprawdzPole(pole_id, obiektRegex) {
    //Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
    //pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
    //Parametry funkcji:
    //pole_id - id sprawdzanego pola tekstowego
    //obiektRegex - wyrażenie regularne
    var obiektPole = document.getElementById(pole_id);
    if (!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}

//w tym zadaniu nie potrzebujemy funkcji do sprawdzania checkboxów oraz radio buttonów ponieważ domyślnie pirwsza z opcji jest wybrana

function sprawdz() { //Funkcja realizujaca sprawdzanie całego fomularza
    //wykorzystując funkcje pomocnicze
    //--------------------------------
    var ok = true; //zmienna informująca o poprawnym wypełnieniu formularza
    //Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
    //poprawności danych wprowadzonych do pól tekstowych
    obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska i imienia
    obiektemail =
        /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/; //wyrażenie regularne dla e-maila
    obiektWiek = /^[1-9][0-9]{1,2}$/; //wyrażenie regularne dla wieku

    //Sprawdzanie kolejnych pól formularza.
    //w przypadku błędu - pojawia się odpowiedni komunikat
    //sprawdzenie pola imienia, przy parametrach pole_id = "imie" oraz obiektRegex = obiektNazw
    if (!sprawdzPole("imie", obiektNazw)) { //jeżeli funkcja sprawdzPole zwróci fałsz, gdzie fałsz oznacza wpisanie różnych znaków specjalnych
        ok = false; //zablokowanie wysłania formularza do momentu poprawnego wypełnienia pola
        document.getElementById("imie_error").innerHTML =
            "Wpisz poprawnie imie!"; //wyświetlenie informacji o błędnym wpisaniu danych obok pola z wpisywanymi danymi 
    } else document.getElementById("imie_error").innerHTML = ""; //wyczyszczenie informacji o błędzie, jeśli funkcja sprawdzPole zwróci prawdę

    //sprawdzenie pola nazwiska, przy parametrach pole_id = "nazw" oraz obiektRegex = obiektNazw
    if (!sprawdzPole("nazw", obiektNazw)) { //jeżeli funkcja sprawdzPole zwróci fałsz, gdzie fałsz oznacza wpisanie różnych znaków specjalnych
        ok = false; //zablokowanie wysłania formularza do momentu poprawnego wypełnienia pola
        document.getElementById("nazw_error").innerHTML =
            "Wpisz poprawnie nazwisko!"; //wyświetlenie informacji o błędnym wpisaniu danych obok pola z wpisywanymi danymi 
    } else document.getElementById("nazw_error").innerHTML = ""; //wyczyszczenie informacji o błędzie, jeśli funkcja sprawdzPole zwróci prawdę

    //sprawdzenie pola wieku, przy parametrach pole_id = "wiek" oraz obiektRegex = obiektWiek
    if (!sprawdzPole("wiek", obiektWiek)) { //jeżeli funkcja sprawdzPole zwróci fałsz, gdzie fałsz oznacza jakikolwiek inny znak niż cyfra
        ok = false; //zablokowanie wysłania formularza do momentu poprawnego wypełnienia pola
        document.getElementById("wiek_error").innerHTML =
            "Wpisz poprawnie wiek!"; //wyświetlenie informacji o błędnym wpisaniu danych obok pola z wpisywanymi danymi 
    } else document.getElementById("wiek_error").innerHTML = ""; //wyczyszczenie informacji o błędzie, jeśli funkcja sprawdzPole zwróci prawdę

    //sprawdzenie pola emaila, przy parametrach pole_id = "email" oraz obiektRegex = obiektemail
    if (!sprawdzPole("email", obiektemail)) { //jeżeli funkcja sprawdzPole zwróci fałsz, gdzie fałsz oznacza brak znaku @ oraz końcówki np.: .com
        ok = false; //zablokowanie wysłania formularza do momentu poprawnego wypełnienia pola
        document.getElementById("email_error").innerHTML =
            "Wpisz poprawnie e-mail!"; //wyświetlenie informacji o błędnym wpisaniu danych obok pola z wpisywanymi danymi 
    } else document.getElementById("email_error").innerHTML = ""; //wyczyszczenie informacji o błędzie, jeśli funkcja sprawdzPole zwróci prawdę

    //sprawdzenie pola opisu, czy nie jest pusty
    if (document.getElementById("opis").value == "") { //jeśli pole opisu jest puste
        ok = false; //zablokowanie wysłania formularza do momentu poprawnego wypełnienia pola
        document.getElementById("opis_error").innerHTML =
            "Wprowadź opis!"; //wyświetlenie informacji o błędnym wpisaniu danych obok pola z wpisywanymi danymi 
    } else document.getElementById("opis_error").innerHTML = ""; //wyczyszczenie informacji o błędzie, jeśli funkcja sprawdzPole zwróci prawdę

    var dane = "Następujące dane zostaną wysłane:\n"; //zmienna zawierająca tekst, który zostanie wyswietlony w wyskakującym okienku
    dane += "Imie: " + document.getElementById('imie').value + "\n" + //dopisanie wartości z listy imie
        "Nazwisko: " + document.getElementById('nazw').value + "\n" + //dopisanie wartości z pola nazw
        "Wiek: " + document.getElementById('wiek').value + "\n" + //dopisanie wartości z pola wiek
        "E-mail: " + document.getElementById('email').value + "\n" + //dopisanie wartości pola email
        "Opis problemu:" + document.getElementById('opis').value; //konkatenacja (łączanie) ciągów znaków z wpisanymi informacjami
    dane += "\n" + "Sposób płatności:";
    tab = document.getElementsByName('zaplata'); //zapisanie w tablicy wszystkich elementów, które mają nazwę zaplata
    for (let i = 0; i < tab.length; i++) { //przeszukanie tablicy
        if (tab[i].checked) //sprawdzenie, czy opcja jest zaznaczona
            dane += " " + tab[i].value; //dopisanie zaznaczonych opcji
    }

    if (ok) { //jeżeli wszystkie dane są poprawnie wpisane
        window.confirm(dane); //wyświetlenie okienka z zawartością wpisanych/wybranych danych
    }

    return ok;
}

//LABORATORIUM 11. CZĘŚĆ 1. BUDOWA APLIKACJI WYKORZYSTUJĄCEJ LOKALNE MAGAZYNY DANYCH
function dodajProdukt(a, b, c) {
    //Funkcja obsługująca dodawanie przedmiotów do koszyka
    var item = {}; //tablica
    item.nazwa = a; //nazwa
    item.cena = b; //cena
    item.liczba = c; //liczba
    var lista = JSON.parse(localStorage.getItem('lista')); //Stworzenie listy i przypisanie do niej lokalnego magazynu danych
    if (lista === null) lista = []; //jeśli ta lista jest pusta wtedy otrzymuje puste wypełnienie 
    lista.push(item); //dodanie przedmiotu do listy
    localStorage.setItem('lista', JSON.stringify(lista)); //dodanie przedmiotu do lokalnego magazynu danych
    liczbaProduktow(); //aktualizacja liczby przedmiotów w koszyku
}

function wyswietlKoszyk() {
    var lista = JSON.parse(localStorage.getItem('lista')); //Stworzenie listy i przypisanie do niej lokalnego magazynu danych
    var el = document.getElementById('koszyk'); //przypisanie do zmiennej zawartości diva koszyk
    var str = "<h3 class='mt-3'>Twój koszyk:</h3><br>"; //przypisanie do zmiennej ciągu znaków
    if (lista == 0) { //Jeśli lista pusta
        str += "<h6>Koszyk jest pusty.</h6>"; //dopisanie do zmiennej tej linii
    } else { //Jeśli lista nie jest pusta
        str += "<table class='table table-responsive input-group justify-content-center'><tbody><tr><td>Nazwa</td><td>Cena</td><td>Liczba sztuk</td></tr>"; //kolejna konkatenacja
        for (i = 0; i < lista.length; i++) { //pętla dodająca kolejne produkty do zmiennej
            str += "<tr><td>" + lista[i].nazwa + "</td><td>" + lista[i].cena + "</td><td>" + lista[i].liczba + "</td>";
            str += "<td><button class='usun btn btn-outline-dark' onclick='usunProdukt(" + i + ")' >X</button></td>"; //przycisk usuwania z koszyka danego produktu
            str += "<td><button class='edycja btn btn-outline-dark' onclick='edytujProdukt(" + i + ")' >Edytuj</button></td></tr>"; //przycisk edytowania ilości sztuk danego produktu
        }
        str += "</tbody></table>";
    }
    el.innerHTML = str; //wyświetlenie zawartości na stronie
}

function usunKoszyk() {
    localStorage.clear(); //usunięcie całej zawartości koszyka
    var lista = JSON.parse(localStorage.getItem('lista')); //Stworzenie listy i przypisanie do niej lokalnego magazynu danych
    if (lista === null) lista = []; //jeśli ta lista jest pusta wtedy otrzymuje puste wypełnienie 
    localStorage.setItem('lista', JSON.stringify(lista)); //dodanie przedmiotu do lokalnego magazynu danych
    wyswietlKoszyk(); //wyświetlenie koszyka
    liczbaProduktow(); //aktualizacja liczby przedmiotów w koszyku
}

function usunProdukt(i) {
    var lista = JSON.parse(localStorage.getItem('lista')); //Stworzenie listy i przypisanie do niej lokalnego magazynu danych
    if (confirm("Usunąć produkt?")) lista.splice(i, 1); //potwierdzenie usunięcia przedmiotu z koszyka
    localStorage.setItem('lista', JSON.stringify(lista)); //zapisa danych do magazynu danych
    wyswietlKoszyk(); //wyświetlenie koszyka
    liczbaProduktow(); //aktualizacja liczby przedmiotów w koszyku
}

function edytujProdukt(i) {
    var lista = JSON.parse(localStorage.getItem('lista')); //Stworzenie listy i przypisanie do niej lokalnego magazynu danych
    var lista2 = JSON.parse(localStorage.getItem('lista')); //Stworzenie listy i przypisanie do niej lokalnego magazynu danych
    lista[i].liczba = prompt("Podaj nową liczbę sztuk:", lista2[i].liczba); //podanie nowej liczby sztuk przedmiotu
    if (lista[i].liczba === null || lista[i].liczba === "") lista[i].liczba = lista2[i].liczba; //podmiana nanych
    localStorage.setItem('lista', JSON.stringify(lista)); //zapisanie danych
    wyswietlKoszyk(); //wyświetlenie koszyka
}

function wyszukajProdukt() {
    var lista = JSON.parse(localStorage.getItem('lista')); //Stworzenie listy i przypisanie do niej lokalnego magazynu danych
    if (lista == 0) alert("Koszyk jest pusty!"); //jeśli koszyk jest pusty wyświetli się alert o tym
    else {
        const wyszukanie = prompt("Wyszukiwany produkt:"); //jesli nie, wpisujemy wyszukiwany produkt do okna
        for (i = 0; i < lista.length; i++) { //wypisanie produktów w alertach
            if (wyszukanie === lista[i].nazwa) alert("Znaleziono podany produkt: " + lista[i].nazwa + "\ncena: " + lista[i].cena + "\nliczba: " + lista[i].liczba);
        }
    }

}

function liczbaProduktow() {
    var licz = JSON.parse(localStorage.getItem('lista')).length; //Stworzenie listy i przypisanie do liczby przedmiotów lokalnego magazynu danych
    document.getElementById("liczba_koszyk").innerHTML = licz; //aktualizacja liczby przedmiotów w koszyku
}

//LABORATORIUM 11. CZĘŚĆ 2. BUDOWA APLIKACJI WYKORZYSTUJĄCEJ GEOLOKALIZACJĘ.
var wspolrzedne = new google.maps.LatLng(53.419, 14.581);
var opcjeMapy = {
    zoom: 10,
    center: wspolrzedne,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var mapa = new
google.maps.Map(document.getElementById("mapka"),
    opcjeMapy);

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var output = document.getElementById("geo");
    output.innerHTML = "<p>Szerokość geograficzna: " + latitude + "</p>" + "<p>Wysokość geograficzna: " + longitude + "</p>";
}

function errorHandler(error) {
    var output = document.getElementById("geo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "Użytkownik nie udostępnił danych.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Dane lokalizacyjne niedostępne.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "Przekroczono czas żądania.";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "Wystąpił nieznany błąd.";
            break;
    }
}

function getLocation() {
    if (navigator.geolocation) {
        var options = { timeout: 60000 };
        navigator.geolocation.getCurrentPosition(
            showLocation,
            errorHandler,
            options);
    } else { alert("Twoja przeglądarka nie wspiera geolokalizacji!"); }
}