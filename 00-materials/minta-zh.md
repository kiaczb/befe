# BEFE - Minta ZH

> [!CAUTION]
> **FIGYELEM!** A minta ZH egy **lehetséges** kérdéssort és gyakorlati feladatot tartalmaz, a tényleges ZH konkrét feladatai ettől **eltérhetnek**. A cél az, hogy a hallgató az órán bemutatott ismereteket mind elméleti, mind gyakorlati oldalról megfelelően elsajátítsa. A repóban található **gyakorló házi** feladatok megoldásával a hallgató megszerezheti azt a gyakorlati rutint, amely szükséges ahhoz, hogy a ZH-n szereplő feladatokat önállóan meg tudja oldani. Ezek megoldása tehát több és teljesebb, mint pusztán a jelenlegi minta ZH-t megnézni!

Gyakorló házi feladatok:

- [1. házi](../02-angular/homework.md)
- [2. házi](../03-angular/homework.md)
- [3. házi](../04-angular/homework.md)
- [4. házi](../05-angular/homework.md)

## ELMÉLET

**Az alábbi kérdésekre adjon részletes de lényegretörő választ.**

1. Mutassa be, hogy mi a **TypeScript** és a **JavaScript** közötti összefüggés!
2. Mutassa be a **content projection** technika lényegét!
3. Mutassa be, mik azok a **direktívák**, és írjon 2 db konkrét példát és use-case-t!
4. Mutassa be, mire való az **async pipe**, és mit old meg a háttérben!
5. Mutassa be az **AJAX** és az **SPA** fogalmak közötti kapcsolatot!

## GYAKORLAT

**Az alábbi feladatot készítse el a tanult eszközöket és módszereket felhasználva.**

Készítsen egy Angular alkalmazást `NEPTUNKOD` néven *(a saját neptun kódot megadva, végig nagybetűs formában)*, `standalone=false` kapcsolóval!

Készítsen egy `intro` komponenst, amelynek HTML részében egy tetszőleges főoldalt alakítson ki.

Készítsen egy `list` komponenst, amelynek feladata, hogy az API végpontról megkapott elemeket megjelenítse. Ebben a komponensben egy `data-card` nevű komponenst használjon fel, amibe content projection segítségével tegye bele az adatokat.

A szükséges routing beállításokat végezze el, figyelve arra, hogy az üres vagy a bármilyen más route is legyen lekezelve.

Készítse el a végpontról érkező típusnak megfelelő interfészt vagy osztályt `animal` néven, a következő tulajdonságokkal: id, name, age, owner name.

Készítsen egy `data` nevű szolgáltatást, amelyet a komponens DI-vel kapjon meg.

A `data` szolgáltatásban a végpontot observable-ként adja vissza, majd annak kibontását a `list` komponensben végezze el async pipe-ot felhasználva.

Az API végpontot környezeti változóban kezelje az Angular projekten belül! A végpont: https://demo.hu/api/animals

Leadáskor a `node_modules` mappa kivételével, minden mást 1 db .zip állományba tömörítsen be, és az ismertetett leadó felületen a határidőn belül tölse fel!
