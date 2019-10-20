 __Estructura GDD :__ 
 
<p align="center">
  <img src="Arte/31B9A9B0-C7EA-449F-A336-57E720E593D2.png" width="200">
</p>

* Twitter: https://twitter.com/Boops_Games
* Instagram: https://www.instagram.com/boopsgamesstudio/
* Itch.io: https://itch.io/profile/boops-games-studio
* Youtube:https://www.youtube.com/channel/UCdlggk1-f6dqdhcsiB29jWA

___

# 1.- Índice

+ __[2.- Introducción](#intro)__
	+ __[2.1 Concepto del juego](#game_concept)__
	+ __[2.2 Características principales](#main_features)__
	+ __[2.3 Género](#genre)__
	+ __[2.4 Propósito y público objetivo](#target)__
	+ __[2.5 Jugabilidad (idea básica)](#basic_gameplay)__
	+ __[2.6 Estilo visual](#visual_style)__
	+ __[2.7 Alcance](#reach)__
	
+ __[3.- Mecánicas de juego](#mechanics)__
	+ __[3.1 Jugabilidad (en profundidad)](#gameplay)__
	+ __[3.2 Flujo de juego](#game_flow)__
	+ __[3.3 Personajes](#characters)__
	+ __[3.4 Movimiento](#movement)__
	
+ __[4.- Interfaz](#interface)__

+ __[5. Arte](#art)__

+ __[6. Sistema de monetización](#money)__

+ __[7. El futuro del proyecto](#future)__

+ __[8. Historial de versiones](#changelog)__

+ __[9. Boops Games Studio](#credits)__

# <a name="intro"></a>2.- Introducción

Este es el documento de diseño de **_Punch'em Up!_**, un videojuego de navegador desarrolado por _Boops Games Studio_.
	
+ ## <a name="game_concept"></a> 2.1 Concepto del juego	

En un puente dos rivales se encuentran y tú quieres evitarlo... Juega como dos puños de madera gigantes e intenta tirar a todo aquel que se atreva a pasar por el puente. ¿Conseguirás la máxima puntuación?
	
+ ## <a name="main_features"></a>2.2 Características principales		
	
**Partidas Rápidas e Intensas**: Partidas que duran poco pero de gran intensidad para que el jugador pueda jugar en periodos cortos y pasárselo bien

**Fácil aprendizaje**: Los controles son sencillos, con un botón activas un puño y con otro botón el otro puño. ¡Ya está!

**Variedad**: En cada dificultad habrá más enemigos con distintas habilidades, nunca sabrás lo que te puedes encontrar.

**Divertidos Personajes**: ¡Los dos bandos que luchan entre sí pueden cambiar! Elige los que más te gusten (No disponible por el momento, idea de monetización)
	
+ ## 2.3 <a name="genre"></a>Género	
	
Se trata de un juego Arcade.
	
+ ## <a name="target"></a>2.4 Propósito y público objetivo
	
El propósito general del juego es entretener durante un breve periodo de tiempo para no requerir una dedicación a los jugadores 
y poder abarcar un mayor número de audiencia.

Para todos los públicos, pero enfocado al público joven

+ ## <a name="basic_gameplay"></a>2.5 Jugabilidad(idea básica)
	
**Puños Gigantes**: El jugador podrá manejarlos, la idea es que cuando algún personaje pase por delante, lo tires.

**Multiples clases**: A medida que se juegue, aparecerán nuevas clases de personajes con habilidades exclusivas.

**Varios niveles**: En cada nivel se introducirán nuevos personajes y la dificultad aumentará.
	
+ ## <a name="visual_style"></a>2.6 Estilo visual	
	
Animado y Cartoon. El juego va sobre tirar a gente de un puente, así que hemos optado por un estilo más amigable y menos realista que le reste seriedad y añada humor al asunto.
	
+ ## <a name="reach"></a>2.7 Alcance
	
Se trata de un divertido juego para navegadores con un sistema de monetización para el apartado visual.

# <a name="mechanics"></a>3.- Mecánicas de juego

+ ## <a name="gameplay"></a>3.1 Jugabilidad (en profundidad)	
	
Varios personajes atravesarán el puente. Tu manejas a dos puños gigantes.

Al pasar por delante de los puños, se pueden activar para tirar a los personajes fuera 	del puente.


![Error al cargar la imagen](Arte/mecanicas.png)


El objetivo del juego es evitar que los personajes crucen el puente. Cuantos más personajes sean tirados, mayor será la 		puntuación.
El juego acaba tras dejar cruzar el puente a demasiados personajes.

El juego auméntara la dificultad según avance el tiempo, siendo más rápidas las oleadas de personajes cruzando y con distintos tipos de personajes. 
También se abrirá el otro lado del puente, pudiendo los personajes cruzar de izquierda a derecha y viciversa. 
	
+ ## <a name="game_flow"></a>3.2 Flujo de juego	
	
El jugador seleccionará una de las dificultades a elegir en el juego, clasificadas por niveles:

* **Nivel 1**: Aparecerán _Unidades Normales_ y _Unidades a Caballo_. 
* **Nivel 2**: Todo lo anterior y aparecerán _Caballeros Gigantes_ .
* **Nivel 3**: Todo lo anterior y aparecerán _Hechiceros_.

Además, durante la partida la velocidad de los personajes que van por el puente irá aumentando con el tiempo.

Tras elegir el nivel a jugar, se procederá a la partida hasta que el jugador se quede sin vida y vaya a la pantalla de Game Over.
En ella podrá elegir si quiere volver a jugar y mirar si ha superdado la máxima puntuación.

+ ## <a name="characters"></a>3.3 Personajes		
	
Por defecto:

* **Unidad Normal**: Unidad estándar, sin habilidades especiales.
	
* **Unidad a Caballo**: Se mueven más rápido que una unidad estándar.

Exclusivas de _Caballeros_:

* **Caballero Gigante**: Necesita más golpes que una unidad estándar para ser tirado.
	
Exclusivas de _Magos_:

* **Hechicero**: Se teletransporta a la mitad del mapa, esquivando uno de los puños automáticamente.

+ ## <a name="movement"></a>3.4 Movimiento
	
Los personajes se moverán de un lado al otro del puente. Los puños solo se mueven hacia el jugador para tirar a los personajes.

# <a name="interface"></a>4.- Interfaz

+ ## 4.a Diagrama de flujo (Idea inicial)	

![Error al cargar la imagen](flujo.png)

+ ## 4.b Menú principal

<p align="center">
  <img src="Arte/captura1.png" width="750">
</p>

+ ## 4.c Créditos	

<p align="center">
  <img src="Arte/captura4.png" width="750">
</p>


+ ## 4.d Redes sociales

<p align="center">
  <img src="Arte/captura2.png" width="750">
</p>

+ ## 4.e Tienda	

<p align="center">
  <img src="Arte/captura3.png" width="750">
</p>

+ ## 4.f Ajustes	

<p align="center">
  <img src="Arte/captura5.png" width="750">
</p>

+ ## 4.g Selección de nivel	

<p align="center">
  <img src="Arte/captura6.png" width="750">
</p>

+ ## 4.h Rankings	

<p align="center">
  <img src="Arte/captura8.png" width="750">
</p>

+ ## 4.i Información de los personajes	

<p align="center">
  <img src="Arte/captura7.png" width="750">
</p>

+ ## 4.j Juego	

<p align="center">
  <img src="Arte/captura9.png" width="750">
</p>

+ ## 4.k Pausa	

<p align="center">
  <img src="Arte/captura11.png" width="750">
</p>


+ ## 4.l Fin del nivel

<p align="center">
  <img src="Arte/captura10.png" width="750">
</p>



# <a name="art"></a>5.- Arte 

_Concept Magos y Caballeros 1_

<p align="center">
  <img src="Arte/F81EAE07-0D7A-4873-8E18-173F6B509C55.jpeg" width="750">
</p>

_Concept Magos y Caballeros 2_

<p align="center">
<img src="Arte/Magos_Caballeros_Art.png" width="500">
</p>

_Concept Magos y Caballeros 3_

<p align="center">
<img src="Arte/Magos_Caballeros_Art2.png" width="750">
</p>

_Concept Magos y Caballeros, Diseño "Final"_

<p align="center">
<img src="Arte/Magos_Caballeros_Art3.png" width="750">
</p>

_Sketch de la animación_

![Error al cargar la imagen](https://raw.githubusercontent.com/BoopsGamesStudio/Punchem-Out/master/Arte/animacion%20andando.gif)

_Sketch de la animación del Hechicero_

![Error al cargar la imagen](https://raw.githubusercontent.com/BoopsGamesStudio/Punchem-Out/master/Arte/Hechicero2.gif)

_Sketch de la animación del Caballero Gigante_

![Error al cargar la imagen](https://raw.githubusercontent.com/BoopsGamesStudio/Punchem-Out/master/docs/assets/sprites/fuerte2.gif)

_Sketch de la animación delos jinetes_

![Error al cargar la imagen](https://raw.githubusercontent.com/BoopsGamesStudio/Punchem-Out/master/jinete.gif)

_Concept Escenario_

<p align="center">
<img src="Arte/894AB0BA-BA12-4771-9A2A-821255FCE754.jpeg" width="750">
</p>


# <a name="money"></a>6.- Sistema de monetización

Haremos uso de un sistema *freemium*. En la tienda, podremos:

+ **Comprar paquete de niveles**: *2.99€* Con ello, el jugador podrá desbloquear niveles sin necesidad de jugar y conseguir los puntos necesarios.
+ **Comprar una vida:** *0.50€* Con ello el jugador podrá revivir un puño que haya perdido una vez por partida. Con ello, el jugador podrá seguir jugando durante más tiempo.

*Todos los precios aquí puestos son orientativos*

# <a name="future"></a>7.- El futuro del proyecto

El plan del juego de aquí a dos años el el siguiente:

+ **Seguir actualizando el juego con más niveles:** Se seguirá actualizando el juego añadiendo nuevos niveles, lo que implica nuevos escenarios, enemigos y mecánicas. Los niveles se actualizarán en paquetes de niveles, cada uno reuniendo un número variante de niveles a desbloquear.

  * Nueva estética: Los nuevos niveles tendrán distintas estéticas, siempre con dos bandos enfrentándose. Un ejemplo podría ser Aliens vs Humanos, jugando en una estación espacial o un planeta.
  * Nuevos enemigos: Cada nivel temático tendría sus propios enemigos. Algunos con mecánicas exclusivas. Un ejemplo podría ser un alien que necesita tres golpes, pero que va más lento con cada golpe que le des.
  * Nuevas mecánicas: Mientras la mecánica principal sería la misma, cada nivel puede añadir un nuevo giro de tuerca para hacer el juego más interesante. Un ejemplo de ello puede ser jugar la posibilidad de mover los puños por un rail, pudiendo cambiar su posición, permitiendo abatir nuevos tipos de enemigos.
  
+ **Nuevos Power-ups**: Actualmente el juego tiene un solo power-up. La idea es ampliar el catálogo de power-ups que puede usar el usuario. Un ejemplo de esto sería un power-up que permitiese al jugador ampliar el tamaño de los puños, para aumentar su alcance. 

+ **Más opciones de compra**: Se podrán comprar los paquetes de niveles para desbloquearlos antes de tiempo. Aparte de eso, la idea es que se puedan comprar Power-ups que se vayan diseñando

+ **Seguir actualizando las RRSS:** Para ayudar a la interacción con la comunidad se seguirán actualizando periódicamente las redes sociales, publicando actualizaciones y resolviendo dudas.

+ **Resolver dudas y ayudar al usuario**: Tras la salida del juego, se resolverán las dudas y problemas de los usuarios a través del correo del grupo.

# <a name="changelog"></a>8.- Historial de versiones

+ (24/09/2019) Estructura básica del documento.
+ (28/09/2019) Añadidas muchas mejoras:

  * Añadido icono nuevo.
  * Cambiado el "pitch" del juego.
  * Añadidas imágenes para explicar mejor el juego.
  * Añadido Diagrama de Flujo
  * Desarrolladas las secciones de Flujo del Juego y Estilo Visual
  * Mejorada explicación de Jugabilidad, Personajes y Características.
  * Créditos al final del documento y RRSS.
  * Pequeñas mejoras.
  
+  (08/10/2019) Añadidas animaciones al GDD
+  (19/10/2019) Actualizado el GDD para la entrega del proyecto:

   * Añadida sección para explicar la monetización del juego.
   * Añadida sección explicando el futuro del proyecto.
   * Pequeñas mejoras por el documento
  
+ (20/10/19) Añadidas imágenes que faltaban: Listo para entregar

# <a name="credits"></a>9.- Boops Games Studio

+ Alejandro Hernández Pérez -Programador
+ Mario Marquez Balduque - Programador
+ Diego Sagredo de Miguel - Programador
+ Gabriel Muñoz Borchers - Artista/Sonido
+ Carlos Ventura Padina González - Artista/Diseñador
