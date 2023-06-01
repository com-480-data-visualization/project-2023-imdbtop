import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.neighbors import NearestNeighbors
import json

# Load the movie dataset into a pandas DataFrame
data = pd.read_csv('imdb250_merge_v2.csv')
data['combined_features'] = data['genre_x'] + ', ' + data['directors'] + ', ' + data['genre_x'] + ', ' + data['writers'] + ', ' + data['genre_x'] + ', ' + data['casts']

# Create a count vectorizer to convert the genre into a matrix of token counts
vectorizer = CountVectorizer(tokenizer=lambda x: x.split(','))
genre_matrix = vectorizer.fit_transform(data['combined_features'])
print(genre_matrix)
# Compute the cosine similarity between movies based on their genre
cosine_sim = cosine_similarity(genre_matrix)

# Initialize the nearest neighbors algorithm with cosine similarity
knn = NearestNeighbors(metric='cosine')
knn.fit(genre_matrix)

# Function to find the top 5 closest movies for a given movie index
def find_closest_movies(movie_index):
    distances, indices = knn.kneighbors(genre_matrix[movie_index], n_neighbors=6)
     # if we want to keep the score: closest_movies = [(data['movie_name'][i], distances[0][j]) for j, i in enumerate(indices[0]) if i != movie_index]
    closest_movies = [data['movie_name'][i] for j, i in enumerate(indices[0]) if i != movie_index]   
    
    return closest_movies[:5]


# load additional information


results = []
for i in range(len(data)):
    closest_movies = find_closest_movies(i)
    image_url = data['image_url'][i]
    image_url_items = image_url.split(".")
    image_url_items = image_url_items[:-2]
    advanced_image_url = ".".join(image_url_items)
    advanced_image_url = advanced_image_url + ".jpg"
    result = {
        'id': data['movie_name'][i],
        'rank': str(data['rank'][i]),
        'neighbors': closest_movies,
        'year': str(data['year'][i]),
        'rating': data['rating_x'][i],
        'genre': data['genre_x'][i],
        'tagline': data['tagline'][i],
        'casts': data['casts'][i],
        'directors': data['directors'][i],
        'writers': data['writers'][i],
        'image_url': advanced_image_url,
    }
    results.append(result)

#print(results)
# Convert the results to JSON
json_data = json.dumps(results)

# Print the JSON data
#print(json_data)

# Save the JSON data to a file
with open('movies_relation.json', 'w') as json_file:
    json.dump(results, json_file)



"""
# Create a DataFrame to store the result
result_df = pd.DataFrame({'movie': [movie for movie, _ in closest_movies],
                          'Distance': [distance for _, distance in closest_movies]})

result_df.to_csv('closest_movies.csv', index=False)
"""