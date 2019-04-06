# Traduzione italiana di Crusader Kings II

Questo mod, **compatibile** con l'**Ironmode** e gli **achievement di Steam**, aggiunge la possibilità di selezionare la lingua italiana tra le lingue disponibili all'interno del gioco.

Questa traduzione è ricavata dai testi redatti diligentemente dal team [Battle of Paradox Italia](http://www.bopitalia.org) - **Grande lavoro!** - ed ha come base la versione **3.1.0 (KKAD)** del gioco originale.

## Installazione mod da release

Trovate le release già pronte del mod nell'apposita sezione [releases](https://github.com/Neurone/ck2-italian-translation/releases). Scaricate la release che vi interessa e unzippatela all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente.

## Creazione mod da codice sorgente

Clonare il repository:

    git clone https://github.com/Neurone/ck2-italian-translation.git

Installare le dipendenze:

    cd ck2-italian-translation
    npm install

### Versione release

Creare il mod:

    npx grunt

L'output sarà simile al seguente:

    ~\ck2-italian-translation> npx grunt
    npx: installed 1 in 2.252s
    Path must be a string. Received undefined
    ~\ck2-italian-translation\node_modules\grunt\bin\grunt
    Running "clean:folder" (clean) task
    >> 91 paths cleaned.

    Running "copy:standalone" (copy) task
    Created 1 directory, copied 86 files

    Running "compress:main" (compress) task
    >> Compressed 87 files.

    Running "copy:complete" (copy) task
    Copied 1 file

    Done.

Verrà creato il file `ck2-italian-translation-x.x.x.zip` all'interno della cartella `build\dist`, dove `x.x.x` sarà la verione corrente del mod (es. `1.0.0`).

Per installare il mod, scompattare il file all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente. La struttura finale dei file sarà la seguente:

    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod\ck2-italian-translation.zip
    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod\ck2-italian-translation.mod

### Versione sviluppo

La versione sviluppo del mod è utile per fare modifiche, test o per effettuare l'upload sullo Steam Workshop. La versione release **non permette** di fare l'upload sullo Steam Workshop.

Creare il mod in versione sviluppo:

    npx grunt dev

L'output sarà simile al seguente:

    ~\ck2-italian-translation> npx grunt dev
    npx: installed 1 in 2.625s
    Path must be a string. Received undefined
    ~\ck2-italian-translation\node_modules\grunt\bin\grunt
    Running "clean:folder" (clean) task
    >> 0 paths cleaned.

    Running "copy:dev" (copy) task


    Done.

Verrà creata la cartella `build\dist` e all'interno troverete un file ed una cartella:

    ck2-italian-translation\*
    ck2-italian-translation.mod

Per installare il mod, copiate tutto **il contenuto** della cartella `build\dist` all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente. La struttura finale dei file sarà la seguente:

    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod\ck2-italian-translation\...
    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod\ck2-italian-translation.mod