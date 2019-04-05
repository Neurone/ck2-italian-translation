# Traduzione italiana di Crusader Kings II

Questa traduzione è ricavata dai testi redatti diligentemente dal team [Battle of Paradox Italia](http://www.bopitalia.org). **Grande lavoro!**

La traduzione ha come base la versione **3.1.0 (KKAD)**

## Installazione mod da release

Trovate le release già pronte del mod nell'apposita sezione [releases](https://github.com/Neurone/ck2-traduzione-italiana/releases). Scaricate la release che vi interessa e unzippatela all'interno della cartella:

    <%USERPROFILE%>\Documents\Paradox Interactive\Crusader Kings II\mod

Nel caso non fosse presente la cartella `mod` potete crearla voi normalmente.

## Installazione dal sorgente

Clonare il repository:

    git clone https://github.com/Neurone/ck2-italian-translation.git

Installare le dipendenze:

    cd ck2-traduzione-italiana
    npm install

Creare il mod:

    npx grunt

L'output sarà il seguente:

    ~\ck2-traduzione-italiana> npx grunt
    npx: installed 1 in 3.945s
    Path must be a string. Received undefined
    ~\ck2-traduzione-italiana\node_modules\grunt\bin\grunt
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