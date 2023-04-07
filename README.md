# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Jiayi Sun | 366961 |
|Jiantian Lei |351564 |
|Zhentao Liu |335350 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 

### Dataset

####  1. Top250Movies

Benefits: This dataset has some basic information about IMDB Top 250 movies, including year, rating, directors, casts, box office, etc.

Drawbacks: 1) This dataset does not have movie id. If we want to get more information by web scrapper, we need movie_id. 2) Have some dirty data and requires data-preprocessing.

#### 2, IMDB Movies in different categories

Benefits: 1) A large number of movies. 2) In different categories. 3) Have movie_id, director_id, star_id

Drawbacks: Some movies in the Top 250 are not in this dataset, especially some non-English-speaking movies.

#### 3. Integrated Dataset

To overcome the drawbacks of the two datasets above, we merge a new dataset imdb250_merge_v1.0.csv. The integration methods are: 1) Use the script data_integration.py to join the two tables by movie_name, movie_year, and movie_rating. (220/250) movies are joined successfully. 2) Manually fill in the movie_id that is not joined successfully by script.

#### 4. We may use web scrapper to get more information in the future

As we got all the movie_ids of the top 250 movies using machine-based methods and manual methods, we may use web scraper to get more detailed information on moviews, like the movie country, director country, movie star country, etc.

### Problematic

#### 1. Overview:

Since the 1960s and 1970s, when many Hollywood films began to flourish, cinema has become one of the world's most popular entertainment genres, an integral part of business and life. In this project, we wanted to make a visualized movie search system and to be able to make relevant recommendations from the movies retrieved.

#### 2. Motivation & Target audience:

Nowadays, there are more and more commercial films and more and more platforms than ever before. In this modern age of information explosion, many people who are interested in films or just want to find a film to watch to pass the time can find it difficult to choose from the wide range of films on offer. Our goal is to provide an easy, intuitive movie search site paired with a recommendation system that gives people who want to see quality movies but struggle to choose a movie based on more than just an overview of the movie or other users' ratings.

As everyone's favorite films have different directions, our search system will give users a large degree of freedom to search. For example, search by country of directors or actors, search by genre, search by IMDB rating score, search by box office or profitability of a film, etc.

### Exploratory Data Analysis

Our Exploratory Data Analysis is shown in eda.ipynb and eda-2.ipynb, the structure of our EDA is as follows:
(To see more detailed figures, please view them in eda.ipynb and eda-2.ipynb)

#### Analysis of Genres

>- Movie numbers of different genres
>- Average ratings of different genres
>- The total box office of different genres
>- The average box office of different genres

#### Analysis of Released Years

>- Average ratings in different released years
>- Movie numbers in different released years
>- Total box office in different released years
>-  Average box office in different released years

#### Analysis of the Relationship between Rating and Box Office

>- Correlation between rating & box office of a specific movie
>- Correlation between rating & average box office of movies with this rating
>- The average box office of different ratings
>- The total box office of different ratings

#### Analysis of the Relationship between Budget and Box Office

>- Correlation between budget & box office
>- Correlation between budget & profit
>- Correlation between profit & box office

#### Analysis of Directors
> - Top 20 Directors with the largest movies number in IMDB TOP 250
> - Top 20 Directors with the largest box office in IMDB TOP 250
> - Top 20 Directors with the largest average rating in IMDB TOP 250
#### Analysis of Actors
> - Top 20 Actors with the largest movies number in IMDB TOP 250
> - Top 20 Actors with the largest box office in IMDB TOP 250
> - Top 20 Actors with the largest average rating in IMDB TOP 250
#### Analysis of Writers
> - Top 20 Writers with the largest movies number in IMDB TOP 250
> - Top 20 Writers with the largest box office in IMDB TOP 250
> - Top 20 Writers with the largest average rating in IMDB TOP 250

### Related work

There has been a lot of data analysis and visualization done on IMDB datasets. The work includes:
* [Recommendation System](https://www.kaggle.com/code/anmolbajpai/imdb-movies-analysis-eda-recommendations#RECOMMENDATION-SYSTEM): This project explains content-based filtering, and uses TF-IDF (Term Frequency-Inverse Document Frequency) with cosine similarity to recommend movies.
* [Rating visualization](https://krisrs1128.github.io/stat679_notes/2022/06/01/week2-3.html): This project uses Shiny to explore the IMDB movie dataset. They use filters to show the rating score by different genres, MPAA ratings, and periods.

Also, some visualizations from other fields inspired us to try to improve our website:
* [Interactive maps](https://maphub.net/hyperknot/custom-markers-berlin-zoo): We think we can make an interactive world map with directors and actors/actresses from all over the world. 
* [Word Cloud](https://earthlinginteractive.com/blog/book-and-movie-word-clouds/): This is a book word cloud, which is a very good way to visualize different categories. In our project, we want to create an interactive word cloud with genres of movies, and you can click your favorite genre to check what are the best movies in this genre with synopses of these movies.
* [Visualized recommendation network](https://www.researchgate.net/publication/221514932_Integrating_statistics_and_visualization_Case_studies_of_gaining_clarity_during_exploratory_data_analysis): This thesis introduces the notion of visualizing the suggestion process using a recommendation network. That is a better method to illustrate the connection between the movies that were recommended and the ones you searched for.

We found a website called [Suggest Me Movie](https://www.suggestmemovie.com/) which is a very convenient website that can recommend you some movies with the filters you choose to apply. However, we found the interface for selecting filters on this site to be very pale and uninteresting (check some movie categories or select a movie language and rating). IMDB also has a recommendation system, but it is simply a list of movies that may interest users. Our idea is to visualize the process of adding filters to the search. For example, we can use an iteractive map that gives people the freedom to choose actors and directors for films in different countries or regions. Also we can use a word cloud to show the percentage of films in the IMDB top 250 by genres, and you can select the terms (film categories) to be used as filters in the search. For the recommandation part, we wanted to present the recommended films in a more visual way using a network of relationships.


## Milestone 2 (7th May, 5pm)

**10% of the final grade**


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

