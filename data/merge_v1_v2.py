import pandas as pd

# Read the CSV files
file1 = pd.read_csv('imdb250_merge_v1.0.csv')
file2 = pd.read_csv('movie_images.csv')

# Merge the two files based on 'movie_name' column
merged = pd.merge(file1, file2[['movie_name', 'image_url']], on='movie_name', how='left')

# Fill missing values in 'image:url' column with 'N/A'
merged['image_url'].fillna('N/A', inplace=True)

# Save the merged file with the added 'image_url' column
merged.to_csv('imdb250_merge_v2.csv', index=False)