# Hospitals Nearb-AI Me :hospital: :syringe:

Optimización de traslados a clínicas de emergencia.

## About :books:

Las emergencias son situaciones donde ocurren circunstancias que incluso llegan a poner en riesgo la vida. Aún así estas situaciones son muy comunes en la cotidianidad, registrándose en los primeros tres meses del año actual en México más de 500 mil llamadas médicas. Ante esto, se vuelve necesario encontrar métodos que nos ayuden a mitigar esta problemática. Por otro lado, los métodos de Machine Learning nos han mostrado soluciones óptimas en variedad de situaciones, por lo que en este trabajo se usan los métodos “Unsupervised Nearest Neighbors Clustering” y “Bayesian Ridge Regression” para encontrar los hospitales ideales para el usuario con base en la distancia y el tiempo de traslado, los consultorios y cantidad de médicos en estos. Además, se desarrolló una aplicación web con Django para la interfaz del usuario con el objetivo de que la aplicación fuera más personalizada y que pudiera ser consultada en un teléfono móvil. 

### Prerequisites (Model) 

* Pandas (Versión 0.25.1)
* Numpy (Versión 1.16.5)
* Matplotlib (Versión 3.2.1)
* Scikit-Learn (Versión 0.21)
* Bingmaps (Versión 0.3.7)

```
pip install pandas (Dependencies for testing with Jupyter Notebooks)
```

### Prerequisites (App)

* Django (Versión 3.0.3)
* Django-Pandas (Versión 0.6.2)
* Leaflet (Versión 1.6.0)
* Bootstrap (Versión 4)
* Jquery (Versión 3.5.1)
* Leaflet-Routing-Machine (Versión 3.2.12)



```
Can be installed by using CDN (included)
```

### Installing

You can start by accesing to Hospitals Nearb-AI-Me-APP.

Run an Enviroment with Python 3.8.3

```
$ pip install -r requirements.txt
```

Model your dataset according to the features of your data.

```
python manage.py migrate
```

Configure and match the main view´s algorithm (ML model) with your model(Database).
Add your Bing-Maps key.

```
bing = pybingmaps.Bing('Your key')

```
(Front-end) Confirm your coordinate obtainers or set the values in the buttons.

Ready!

```
python manage.py runserver
```

## Data

The algorithm works with a main dataset "Master_Dataset_AI_Saturday.xlsx" found in "2-. Dataset MASTER" which is composed of:

* Hospital section of DENUE´S INEGI dataset. Found in "7-. Dataset Hospitales en la ZMG".
* Health resources from Jalisco data. Found in "3-. Recursos de salud2018".



## Deployment

You can follow the Deployment tutorial for python by consulting [here](https://www.heroku.com/python).

## Demo (Auto coordinate obtainer and tracking, only in Guadalajara)

You can run the application (With manual coords due dataset limitations) by clicking [here](https://movilizate.herokuapp.com/).

### Index

![Index](https://github.com/luischitala/Hospitals-Nearb-AI-Me/blob/master/Model%20%26%20Data%20Saturdays%20AI%20-%20Equipo%202/Image-UI/Demo/index.PNG)


## License

This project is licensed under GNU GENERAL PUBLIC LICENSE.



## Mentor

* **Inés Zetter** - [ineszetter](https://github.com/ineszetter)

### Authors

* **Zaira Martínez** - [zcmartinez](https://github.com/zcmartinez)
* **Jorge Farfán** -  [JFarfanPerdomo](https://github.com/JFarfanPerdomo)
* **Luis Chitala** -  [luischitala](https://github.com/luischitala)


