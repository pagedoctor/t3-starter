# Willkommen bei der Pagedoctor Starter Erweiterung für das TYPO3 CMS

Die Pagedoctor Starter Erweiterung erleichtert es Internetseiten mittels Pagedoctor im TYPO3 CMS zu entwickeln.
Die Erweiterung wird mit einem Standardlayout und einer TailwindCSS Grundkonfiguration ausgeliefert.

## Inhaltsverzeichnis

- [Einführung](#einfhrung)
- [Installation](#installation)
- [Mitwirken](#mitwirken)
- [Lizenz](#lizenz)
- [Markenrichtlinie](#markenrichtlinie)

## Einführung

Pagedoctor ist ein Code Generator für das TYPO3 CMS. Mittels Pagedoctor ist es ganz einfach Felder
für Inhaltstypen zu erstellen und den dafür benötigten Steuercode zu generieren und bereitzustellen.

Die Pagedoctor Starter Erweiterung ist eine sogn. "Provider Extension". Eine Provider Extension
ist eine für TYPO3 benötigte Erweiterung in der alle Informationen zur Konfiguration der Seitenbestandteile
der Website definiert sind. Das sind: Navigation, Stylesheets, HTML-Designvorlagen, JavaScripte.

Die Starter Erweiterung ist so konzipiert, dass diese einfach ohne weitere Anpassungen sofort mit
den Pagedoctor Inhaltselement harmoniert. Sie stellt den fehlenden Code bereit der für jeden Anfang
einer TYPO3 CMS Website erforderlich ist.

Die Erweiterung besteht aus folgenden Verzeichnissen:

### Classes

Dieses Verzeichnis enthält derzeit keine Dateien kann aber eventuelle ViewHelper oder Hooks beherbergen
die immer mal in der Entwicklung von TYPO3 Seiten benötigt werden.

### Configuration

Dieses Verzeichnis enthält hauptsächlich den gesamten TypoScript-Code der die Ausgabe einer Website steuert.
Ein paar Bestandteile sind schon vorkonfiguriert: Body-Tag, Head-Tag, JavaScript-Modules, Navigation, TailwindCSS-Ausgabe

### Resources

Dieses Verzeichnis enthält HTML-Vorlagen für das Seitenlayout. Ausserdem zwei TailwindCSS-Konfiguration.
Die unter dem Verzeichnis Private/Css/Content ist für verwendetes CSS das in Pagedoctor Vorlagen benötigt wird.
Die unter dem Verzeichnis Private/Css/Preview für die Ausgabe der HTML-Vorlagen der Voransicht im Backend.

## Installation

Gehen Sie auf die [offizielle Dokumentation](https://www.pagedoctor.de/the-starter-extension) um alle Installationsschritte einzusehen.

## Mitwirken

Wir freuen uns über Beisteuerung von Bugfixes oder Anregungen. Nutzen Sie bitte dafür den Bereich [Issues](https://github.com/pagedoctor/t3-starter/issues).

## Lizenz 

Die Pagedoctor Starter Erweiterung wird unter der [MIT Lizenz](MIT-LICENSE) veröffentlicht.

## Markenrichtlinie

Bitte lesen Sie unsere [Markenrichtlinie](https://www.pagedoctor.de/trademark-policy) um fälschliche Namensverwendung zu vermeiden.

Copyright 2024, Pagedoctor ist eine Marke von Colin Atkins.
