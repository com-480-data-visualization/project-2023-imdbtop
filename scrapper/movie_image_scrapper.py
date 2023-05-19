import csv
import requests
from bs4 import BeautifulSoup

# URL of the webpage you want to scrape
url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250"

# Set the request headers to specify English content
headers = {
    "Accept-Language": "en-US,en;q=0.9"
}

# Send a GET request to the URL with the specified headers
response = requests.get(url, headers=headers)

# Create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(response.content, "html.parser")

# Find all <img> tags
img_tags = soup.find_all("img")

# Initialize empty lists to store movie names and image URLs
movie_names = []
image_urls = []

# Extract movie names and image URLs from <img> tags
for img_tag in img_tags:
    # Extract the movie name from the 'alt' attribute
    movie_name = img_tag.get("alt", "")
    movie_names.append(movie_name)
    
    # Extract the image URL from the 'src' attribute
    image_url = img_tag.get("src", "")
    image_urls.append(image_url)

# Create and open a CSV file in write mode
with open("movie_images.csv", "w", newline="") as csvfile:
    # Create a CSV writer object
    writer = csv.writer(csvfile)
    # Write the header row
    writer.writerow(["movie_name", "image_url"])
    
    # Write the movie names and image URLs as rows in the CSV file
    for movie_name, image_url in zip(movie_names, image_urls):
        writer.writerow([movie_name, image_url])