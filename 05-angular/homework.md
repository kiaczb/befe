## Angular gyakorló házi feladat – WatchList alkalmazás

A feladat egy **WatchList alkalmazás** elkészítése Angular keretrendszer használatával, amelyben a felhasználók nyilvántarthatják a később megnézni kívánt filmeket.

Az alkalmazás egy ASP.NET Core backendhez kapcsolódjon, az adatok lekérését és kezelését Angular szolgáltatásokon keresztül valósítsa meg.

### Backend elkészítése

AI segítségével generáljon egy egyszerű **ASP.NET Core Web API** alkalmazást, amely képes a filmek kezelésére.

A backend biztosítsa az alábbi funkciókat:

- GET: az összes felvett film lekérdezése.
- POST: új film hozzáadása a listához.

Minden film legalább egy egyedi azonosítóval, címmel és megjelenési évvel rendelkezzen. Az adatok tárolása történhet memóriában is, adatbázis használata nem kötelező.

### Környezeti változók és Angular szolgáltatás

- Az API alap URL-jét Angular környezeti változóban (`environment`) tárolja.
- Hozzon létre egy Angular szolgáltatást (`MovieService`), amely központilag kezeli a backenddel történő kommunikációt.
- A szolgáltatás a HTTP-kérésekhez az Angular `HttpClient` osztályát használja.
- Az API-hívások `Observable` típusú visszatérési értékekkel rendelkezzenek.

### Filmek listázása

Hozzon létre egy Angular komponenst, amely megjeleníti a backendről lekért filmeket, valamint lehetőséget biztosít új film felvételére (lásd lentebb).

A komponensben alkalmazza a megfelelő **Angular életciklus-hookokat**:

- `ngOnInit()`: a komponens inicializálásakor kérje le a filmek listáját a szolgáltatáson keresztül.
- `ngOnDestroy()`: a komponens megsemmisülésekor szüntesse meg az esetlegesen aktív feliratkozásokat az `unsubscribe()` metódus használatával.

Az új film felvétele HTTP POST-kéréssel történjen. Sikeres mentés után a lista frissüljön.

### Interceptor

Készítsen egy Angular HTTP interceptort, amely automatikusan naplózza az alkalmazásból indított HTTP-kéréseket és azok eredményét.

Minden API-hívás esetén jelenítse meg a böngésző konzolján:

- A HTTP-metódust (`GET`, `POST` stb.).
- A meghívott API-végpont URL-jét.
- A HTTP-válasz státuszkódját (például `200`, `201`, `404`, `500`).
- A kérés eredményét (sikeres vagy sikertelen).

A naplózás sikeres és sikertelen HTTP-kérések esetén egyaránt működjön.

### Film létrehozás

Az új filmek felvételéhez hozzon létre egy külön `MovieCreateComponent` komponenst, amely a film adatainak szerkesztéséért felelős.

A megvalósítás során alkalmazza az Angular komponensek közötti kommunikációs lehetőségeit:

- `@Input()`: a szülőkomponens adjon át egy filmobjektumot a gyermekkomponensnek, amelynek tulajdonságai a felületen szerkeszthetők legyenek.
- `@Output()` és `EventEmitter`: a gyermekkomponens a mentés gomb megnyomásakor bocsásson ki egy eseményt, amely tartalmazza a létrehozandó film adatait.
- Szülőkomponens: fogadja a gyermekkomponens által kibocsátott eseményt, majd a `MovieService` segítségével küldje el az új filmet a backend számára HTTP POST-kéréssel.

A gyermekkomponens **ne végezzen közvetlen API-hívást**, kizárólag a film adatainak szerkesztéséért és a mentési esemény továbbításáért feleljen.

Sikeres mentés után a szülőkomponens frissítse a filmek listáját.
