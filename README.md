# Kildekoden til ekkeramik.dk

Hej Mor. Sådan gør du når du vil opdatere indholdet på din hjemmeside.

## Sådan retter du tekst på siden

Gå ind i mappen [_sections](https://github.com/cmkobel/ekkeramik/tree/master/_sections) og vælg den sektion du vil ændre. Tryk på blyanten oppe i højre hjørne (du skal være logget ind på Github) og lav de ændringer du vil. Når du er færdig, trykker du på den grønne "Commit changes..." knap. Bare brug standardindstillingerne og tryk på den grønne knap igen. Så går der ca 2 minutter, og de nye ændringer er tilgængelige på world-wide web. :)

## Sådan tilføjer/fjerner du butikker og markeder

Alle dine butikker, markeder og tidligere udstillinger står samlet i én fil: [`_data/venues.yml`](https://github.com/cmkobel/ekkeramik/blob/master/_data/venues.yml).

Hver post har et flag der hedder `active`:

- `active: true` → vises under **Udstilling og salg** (i "Butikker" eller "Markeder", afhængigt af `type`)
- `active: false` → flytter automatisk ned under **Tidligere udstillinger**

### Når et marked eller en butik slutter

Find posten i filen og skift `active: true` ud med `active: false`. Det er det hele — den flytter sig selv ned til "Tidligere udstillinger" næste gang siden bygges.

Listen "Tidligere udstillinger" vises i samme rækkefølge som i filen — øverst i filen = øverst på siden. Vil du have den nyligt afsluttede aktivitet til at stå øverst, så flyt selve posten op til toppen af *Tidligere*-blokken (under linjen `# === Tidligere ===`).

Hvis et marked vender tilbage hvert år, så ret bare i den eksisterende post (skift datoen og sæt `active: true`) i stedet for at lave en ny. Så undgår du dubletter.

### Når du vil tilføje et nyt marked eller en ny butik

Kopiér en af de eksisterende poster og ret felterne. En butik ser sådan ud:

```yaml
- name: Navnet på butikken
  type: shop
  active: true
  url: https://link-til-butikken.dk/
  description: En kort beskrivelse
  address: Adresse, postnummer by
```

Og et marked ser sådan ud:

```yaml
- name: Navnet på markedet
  type: market
  active: true
  url: https://link-til-markedet.dk/
  address: Adresse, postnummer by
  date: Søndag d. 3. maj 2026 kl. 10–16
```

Husk at bindestregen (`-`) foran `name:` skal med — den markerer en ny post. Mellemrum/indrykning er vigtig: alle felterne under en post skal have to mellemrum foran sig.

## Billeder og større ændringer

Du kan også godt flytte lidt rundt på billeder, men hvis du vil lave større strukturelle ændringer, så sig til.

Og sig til hvis noget driller.

KH
