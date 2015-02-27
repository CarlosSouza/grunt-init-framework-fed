# Framework FED

> Cria novo projeto utilizando o [Framework FED][framework-fed], além de um arquivo básico Gruntfile [grunt-init][].

[nodejs]: http://nodejs.org/
[grunt-init]: http://gruntjs.com/project-scaffolding
[framework-fed]: https://github.com/CarlosSouza/framework-fed
[sass]: http://sass-lang.com/install/
[browsersync]: http://browsersync.io/
[bower]: http://bower.io/

## Instalação

Para o Grunt funcionar, deve-se ter o [Node.Js][nodejs] instalado, o qual já possibilita o uso do NPM em sua máquina. Somente após isso será possível instalar o [grunt-init][].

Depois de instalado, coloque este template no caminho `~/.grunt-init/`. É recomendado que se use git para clonar esta template no seu diretório:

```
$ git clone https://github.com/CarlosSouza/grunt-init-framework-fed.git ~/.grunt-init/framework-fed
```

_(Usuários de Windows, vejam [a documentação][grunt-init] para o caminho correto)_

## Uso

Na linha de comando, entre na pasta do projeto (que deve estar vazia) e escreva o comando abaixo:

```
$ grunt-init framework-fed
```

_Este template sobresceverá os arquivos atuais, por isso se quiser mantê-los, por favor salve-os em outra pasta._

Após a criação do projeto com o template, você pode instalar todos os plugins de forma automática com o comando:

```
$ npm install
```

## Ferramentas adicionais

Este plugin utiliza [SASS][sass] como pré-processador de CSS e [BrowserSync][browsersync] para refresh automático do navegador. Ambos devem ser instalados antes de iniciar seu primeiro projeto com este framework. Só precisa fazer esta instalação uma vez:

```
$ gem install sass
$ npm install -g browser-sync
```


## Bower

Além do SASS e BrowserSync, utilizamos o [Bower][bower] para gerenciamento de plugins JS. Sendo assim, deve-se instalá-lo para que seja possível sua utilização nos projetos.

Assim como no caso do SASS e BrowserSync, só precisa fazer este processo uma vez:

```
$ npm install -g bower
```

Após instalar o Bower e criar o projeto com este template, execute o comando abaixo para gerar o arquivo json de configuração *dentro do projeto*:

```
$ bower init
```

Depois de criado arquivo json, pode-se instalar os pacotes desejados, por exemplo:

```
$ bower install jquery --save-dev
```