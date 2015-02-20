# Framework FED

## Estruturação

*(?) - opcional*

<pre>
/css
  fonts (?)
estrutura.txt
humans.txt
imagens
index.html
js
  libs
    jquery-1.10.2.js
    modernizr-custom.js
  main.js
  plugins.js
scss
  _elementos.scss
  _fontes.scss
  _reset.scss
  _medium.scss
  _large.scss
  _templates.scss
  geral.scss
  impressao.scss
</pre>

## Features

  * Simples. Ao contrário da grande variedade de *frameworks* presentes no mercado, o **Framework FED** preza pela simplicidade e flexibilidade uso, sem engessar a forma como os layouts são montados;
  * Todo construído com base no pré-processador SASS, separando o código de desenvolvimento daquele gerado para produção;
  * Em conjunto com SASS, a ferramenta Autoprefixer para automatizar o uso dos prefixos em propriedades do CSS3, de acordo com o banco de dados do [Can I Use](http://caniuse.com/);
  * *Mobile First + Responsive Web Design*: framework desenvolvido com lógica para melhor performance e escabilidade de acordo com as diferentes resoluções de tela. As regras gerais são usadas por todas as telas e, a medida que for necessário, novas regras são adicionadas para incrementar o layout. Os *breakpoints* são definidos através de variáveis, facilitando futuros ajustes durante o andamento do projeto;
  * *Schema ready*: tag *body* utilizando padrão *Schema* para classificação das páginas. Verificar documentação completa em [schema.org](http://schema.org/).

### Plugins recomendados

  * [Adaptive Images](http://adaptive-images.com/): serve imagens de diferentes resoluções dependendo do dispositivo utilizado;
  * [Swiper](https://github.com/nolimits4web/Swiper): carrossel de imagens e conteúdo preparado para *touchscreen*;
  * [GreenStock JS](https://github.com/greensock/GreenSock-JS): biblioteca de animação em JS, com performance superior a jQuery e ao próprio CSS3;
  * [Magnific Popup](https://github.com/dimsemenov/Magnific-Popup): plugin para criação de lightboxes em geral;
  * [Packery](https://github.com/metafizzy/packery): gera layouts flexíveis baseados em conteúdo modular (ex: Pinterest).
  * [ScrollMagic](http://janpaepke.github.io/ScrollMagic): para layouts com efeitos no scroll da página.

### Precisa de suporte para IE8 e inferiores?

Recursos para que este framework se adeque a navegadores rudimentares:

  * **Conditional Comments**: item importante é o uso de classes na tag HTML para distinguir as diferentes versões do Internet Explorer. Sendo assim, ao desenvolver para versões antigas, recomenda-se o uso do seguinte código no cabeçado lhos HTMLs:
  
```html
  <!DOCTYPE html>
  <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
  <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
  <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
  <!--[if gt IE 8]><!--> <html class="no-js" lang="pt-br"> <!--<![endif]-->
```
  * [css3-mediaqueries-js](https://github.com/livingston/css3-mediaqueries-js): Possibilita o uso de Media Queries em IE5+. Dicas de uso [neste artigo](http://coding.smashingmagazine.com/2011/08/10/techniques-for-gracefully-degrading-media-queries/);
  * [box-sizing polyfill](https://github.com/Schepp/box-sizing-polyfill): Permite uso do box-sizing no Internet Explorer 6 e 7.