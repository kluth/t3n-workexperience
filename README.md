# Hey du 👋

Schön, dass du da bist! Um dir den Start mit deiner Aufgabe so smooth wie möglich zu machen, haben wir hier ein kleines Starter-Projekt für dich aufgesetzt, das dir einen **GraphQL**-Server und ein **Next.JS**-Frontend bereit stellt. Im Frontend ist bereits unsere [t3n-Komponenten Library](https://github.com/t3n/react-packages) installiert, die du gerne verwenden kannst. Ansonsten findest du aber alle weiteren Infos in den nächsten Schritten:

# Installation

Um die Dependencies aller Packages zu installieren, musst du im Hauptverzeichnis nur `npm install` ausführen. **Lerna** installiert dann automatisch in allen Packages die benötigten Dependencies.

# Development

Die Development-Server kannst du bequem vom Hauptverzeichnis aus starten. Mit `npm run dev:service` startest du den **GraphQL**-Server, und mit `npm run dev:frontend` startest du den Development Server von **Next.JS**.

# Ressourcen

## Service

Der Service stellt einen minimalen [GraphQL](https://www.apollographql.com/docs/)-Server mit einer einfachen Query und einer einfachen Mutation bereit, die es dir einfacher machen sollen, mit dem Entwickeln loszulegen. Wenn du die URL des Servers im Browser öffnest, wird der der GraphQL-Playground dargestellt, mit dem du deine Queries und Mutations jederzeit testen kannst. Einen guten Einstieg zu GraphQL, zusammen mit den Beispielen hier im Projekt, findest du hier: [Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started)

## Frontend

Im Frontend nutzen wir [Next.JS](https://nextjs.org/docs/getting-started) gemeinsam mit unserer eigenen Komponenten-Library `@t3n/components`. Die Komponenten-Library ist Open-Source, du kannst also jeder Zeit bei Github in das [Repository](https://github.com/t3n/react-packages) schauen, wenn du mal einen Blick hinter die Kulissen brauchst. Ausserdem haben wir ein [Storybook](https://storybook.t3n.de/), in dem alle unsere Komponenten dokumentiert sind. Dort kannst du also jederzeit nachschauen, welche Komponenten dir zur Verfügung stehen, und mit welchen Props du diese deinen Bedüfnissen anpassen kannst. Für das Styling unserer Komponenten nutzen wir [Styled Components](https://styled-components.com/docs) und [Styled System](https://github.com/styled-system/styled-system). Du musst diese nicht nutzen, aber falls du sie benötigst, sind sie bereits vorhanden! Ausserdem lohnt es sich, zumindest kurz einen Blick auf die [Box-Komponente](https://styled-system.com/guides/build-a-box#style-props) zu werfen, die es über Layout-Props direkt über die Komponente einfacher macht, Abstände und Größen zu setzen. Auch viele andere unserer Komponenten nutzen diese API's. Ansonsten kannst du aber natürlich auch jederzeit die guten alten HTML-Elemente verwenden und selber stylen.

**Viel Spaß! 🚀**