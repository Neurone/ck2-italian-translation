# Traduzione italiana di Crusader Kings II

Questo mod abilita la selezione della lingua italiana tra le lingue disponibili all'interno del gioco.

Questa traduzione è ricavata dai testi redatti diligentemente dal team [Battle of Paradox Italia](http://www.bopitalia.org) - **Grande lavoro!** - ed ha come base la versione **3.1.0 (KKAD)** del gioco originale.

## Installazione mod da release

Trovate le release già pronte del mod nell'apposita sezione [releases](https://github.com/Neurone/ck2-italian-translation/releases). Scaricate la release che vi interessa e unzippatela all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente.

## Installazione dal sorgente

Clonare il repository:

    git clone https://github.com/Neurone/ck2-italian-translation.git

Installare le dipendenze:

    cd ck2-italian-translation
    npm install

Creare il mod:

    npx grunt

L'output sarà il seguente:

    ~\ck2-italian-translation> npx grunt
    npx: installed 1 in 3.945s
    Path must be a string. Received undefined
    ~\ck2-italian-translation\node_modules\grunt\bin\grunt
    Running "clean:folder" (clean) task
    >> 0 paths cleaned.

    Running "compress:main" (compress) task
    >> Compressed 5 files.

    Running "copy:main" (copy) task
    Copied 1 file

    Done.

Verrà creata la cartella `build` e all'interno verranno generati i seguenti file:

    ck2-italian-translation.zip
    ck2-italian-translation.mod

Per installare il mod, copiate questi due file all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente.