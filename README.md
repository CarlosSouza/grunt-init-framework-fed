# Framework FED

> Cria novo projeto utilizando o [Framework FED][framework-fed], além de um arquivo básico Gruntfile [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding
[framework-fed]: https://github.com/CarlosSouza/framework-fed
[bower]: http://bower.io/

## Instalação
Deve-se instalar primeiramente o [grunt-init][].

Depois de instalado, coloque este template no caminho `~/.grunt-init/`. É recomendado que se use git para clonar esta template no seu diretório:

```
$ git clone https://github.com/CarlosSouza/grunt-init-framework-fed.git ~/.grunt-init/framework-fed
```

_(Usuários de Windows, vejam [a documentação][grunt-init] para o caminho correto)_

## Uso

Na linha de comando, entre na pasta vazia (para utilizar no projeto), escreva o comando abaixo.

```
$ grunt-init framework-fed
```

_Este template sobresceverá os arquivos atuais, por isso se quiser mantê-los, por favor salve-os em outra pasta._

Após a criação do projeto com o template, você pode instalar todos os plugins de forma automática com o comando:

```
$ npm install
```

## Extras

_Para utilizar o [Bower][bower[, ferramenta já presente neste template, deve-se instalá-lo para que seja possível utilizá-lo em seu projeto. Só precisa fazer este processo uma vez:

```
$ npm install -g bower
```

Após instalar o Bower e criar o projeto com este template, deve-se gerar o arquivo json de configuração *dentro do projeto*:

```
$ bower init
```

Depois de criado arquivo json, pode-se instalar os pacotes desejados, por exemplo:

```
bower install jquery --save
```

Por fim, deve-se executar a task para que o Bower seja implementado no projeto efetivamente:

```
grunt bowerInstall
```