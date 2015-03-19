# Framework FED

> Cria novo projeto utilizando o [Framework FED][framework-fed], além de um arquivo básico Gruntfile [grunt-init][].

[commandlinetools]: http://railsapps.github.io/xcode-command-line-tools.html
[nodejs]: http://nodejs.org/
[grunt-cli]: http://gruntjs.com/getting-started
[grunt-init]: http://gruntjs.com/project-scaffolding
[framework-fed]: https://github.com/CarlosSouza/framework-fed
[sass]: http://sass-lang.com/install/
[browsersync]: http://browsersync.io/
[bower]: http://bower.io/

## Requisitos

Os recursos obrigatórios para que o Framework FED funcione no grunt são os seguintes:

* Para Mac: [Command Line Tools][commandlinetools]
* [Node.Js][nodejs]
* [grunt-cli][]
* [grunt-init][]
* [SASS][sass]
* [BrowserSync][browsersync]
* [Bower][bower]

## Processo Único

Veja abaixo os passos a serem executados apenas na primeira vez que for utilizar o grunt, para que tenha as ferramentas necessárias instaladas em sua máquina (levando em conta que esteja utilizando Mac):

### Instalação

Após a instalação do [Node.Js][nodejs] (via download de pacote no próprio site), você pode executar os seguintes comandos para instalar as outras ferramentas listadas acima:

```
$ npm install -g grunt-cli
$ npm install -g grunt-init
$ gem install sass
$ npm install -g browser-sync
$ npm install -g bower
```

_Pode ser que você tenha de usar "sudo" (sem as aspas), no início de cada linha, para não ter problemas com permissão nas instalações acima_

### Cópia do template base em sua máguina

Depois da instalação dos recursos básicos, coloque o grunt-framework-fed na pasta `~/.grunt-init/`. Podemos fazer isso através do git:

```
$ git clone https://github.com/CarlosSouza/grunt-init-framework-fed.git ~/.grunt-init/framework-fed
```

_(Usuários de Windows, vejam [a documentação][grunt-init] para o caminho correto)_

## Processos a serem executados a cada novo projeto

Na linha de comando, entre na pasta do projeto (que deve estar vazia) e escreva o comando abaixo:

```
$ grunt-init framework-fed
```

_Este template sobresceverá os arquivos atuais, por isso se quiser mantê-los, por favor salve-os em outra pasta._

Após a criação do projeto com o template, você pode instalar todos os plugins de forma automática com o comando:

```
$ npm install
```

### Bower

Após criar o projeto com este template, execute o comando abaixo para gerar o arquivo json de configuração *dentro do projeto*:

```
$ bower init
```

Depois de criado arquivo json, pode-se instalar os pacotes desejados, por exemplo:

```
$ bower install jquery --save-dev
```

Caso não saiba o nome do plugin desejado, é possível realizar uma busca:

```
$ bower search jquery
```

#### Importante: este framework assume que o localhost está utilizando a porta 8888 (MAMP). Caso esteja diferente disso, é só procurar a linha abaixo dentro do arquivo Gruntfile.js e fazer a modificação desejada:

```
proxy: "localhost:8888"
```